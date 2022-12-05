const fs = require('fs');
const _ = require('lodash');

const data = fs.readFileSync(`data.txt`).toString().split("\n");

//Part 1
const errors = data.map((raw, index) => {
  const half = raw.length / 2
  const total = raw.length

  const backpack = {
    first: raw.slice(0, half).split(""),
    second: raw.slice(half, total).split(""),
  }

  return _.intersection(backpack.first, backpack.second)[0]
})

const findValueFromChar = (value) => {
  const charCode = value.charCodeAt(0)

  switch (true) {
    case charCode >= 97 && charCode <= 122:
      return charCode - 96
    case charCode >= 65 && charCode <= 90:
      return charCode - 38
  }

  return 0
}

const total1 = errors.reduce((prev, current) => {

  const charValue = findValueFromChar(current)

  return prev + charValue

}, 0)

console.log('total1', total1)

//Part 2
const groups = _.chunk(data, 3)
const total2 = groups.reduce((prev, group) => {
  const first = group[0].split("")
  const second = group[1].split("")
  const third = group[2].split("")
  const common = _.intersection(first, second, third)[0]

  const charValue = findValueFromChar(common)

  return prev + charValue
}, 0)

console.log('total2', total2)