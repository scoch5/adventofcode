const fs = require('fs');
const _ = require('lodash');

const data = fs.readFileSync(`data.txt`).toString().split("\n");
const spearatorIndex = data.findIndex((value) => value === "")
const stackNumberRow = data[spearatorIndex - 1].split("")
const stacks = {}
const rearrangements = data.splice(spearatorIndex + 1).map((value) => {
  const array = _.pull(value.split(" "), "move", "from", "to")

  return {
    move: Number(array[0]),
    from: array[1],
    to: array[2],
  }
})

//Create stacks
stackNumberRow.forEach((value, index) => {
  if (value === " ") return

  stacks[value] = { index, crates: [] }
})

for (let index = 0; (index + 1) < spearatorIndex; index++) {
  const row = data[index];
  Object.keys(stacks).forEach((key) => {
    const current = row[stacks[key].index]
    if (current && current !== " ") stacks[key].crates.unshift(current)
  })
}

const stacks1 = _.cloneDeep(stacks)
const stacks2 = _.cloneDeep(stacks)

//Parte 1
rearrangements.forEach(({ move, from, to }) => {
  for (let index = 0; index < move; index++) {
    const crateToMove = _.last(stacks1[from].crates)
    stacks1[from].crates.pop()
    stacks1[to].crates.push(crateToMove)
  }
})

const result1 = Object.keys(stacks1).map((key) => {
  return _.last(stacks1[key].crates)
}).join("")

console.log("Part 1:", result1)

//Parte 2
rearrangements.forEach(({ move, from, to }) => {
  const crateToMove = _.takeRight(stacks2[from].crates, move)

  for (let index = 0; index < move; index++) {
    stacks2[from].crates.pop()
  }

  crateToMove.forEach((value) => {
    stacks2[to].crates.push(value)
  })
})

const result2 = Object.keys(stacks2).map((key) => {
  return _.last(stacks2[key].crates)
}).join("")

console.log("Part 2:", result2)