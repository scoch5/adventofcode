const fs = require('fs');
const _ = require('lodash');

const data = fs.readFileSync(`data.txt`).toString().split("\n");

const couples = data.map((value) => {
  const a = value.split(",")
  const first = a[0].split("-")
  const second = a[1].split("-")
  return {
    first: {
      min: Number(first[0]),
      max: Number(first[1]),
    },
    second: {
      min: Number(second[0]),
      max: Number(second[1]),
    }
  }
})

const total1 = couples.filter(({ first, second }) => {
  if (first.min >= second.min && first.max <= second.max) return true
  if (second.min >= first.min && second.max <= first.max) return true
})
console.log('Part 1:', total1.length)

const total2 = couples.filter(({ first, second }) => {
  if (first.min <= second.min && first.max >= second.min) return true
  if (second.min <= first.min && second.max >= first.min) return true

  if (first.min <= second.max && first.max >= second.max) return true
  if (second.min <= first.max && second.max >= first.max) return true
})
console.log('Part 2:', total2.length)