const fs = require('fs');


const lines = fs.readFileSync(`./data.txt`).toString().split("\n");


const emplyLineIndexesStart = [0]
const emplyLineIndexesEnd = []
lines.forEach((line, index) => {
  if (line === "") emplyLineIndexesEnd.push(index)
})
emplyLineIndexesEnd.push(lines.length)

lines.forEach((line, index) => {
  if (line === "") emplyLineIndexesStart.push(index + 1)
})

const buckets = []

emplyLineIndexesEnd.forEach((line, index) => {
  const end = emplyLineIndexesEnd[index] || lines.length
  const total = lines.slice(emplyLineIndexesStart[index], end)

  buckets.push(total)
})

const bucketsTotal = buckets.map((array, index) => {
  return array.reduce((prevValue, currentValue) => Number(prevValue) + Number(currentValue), 0)
}).sort().reverse()


console.log('Response 1:', bucketsTotal[0])
console.log('Response 2:', bucketsTotal[0] + bucketsTotal[1] + bucketsTotal[2])