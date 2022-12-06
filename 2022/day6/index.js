const fs = require('fs');
const _ = require('lodash');

const data = fs.readFileSync(`data.txt`).toString().split("");

const findFirstMarker = (markerLength) => {
  let test = []
  let index = 0

  const firstMarker = data.findIndex((letter, i) => {
    const position = test.indexOf(letter)

    if (position === -1) {
      index++
    } else {
      test.splice(0, position + 1)
      index = index - position
    }

    test.push(letter)

    if (index === markerLength) return true
  })

  return firstMarker + 1
}

console.log("Part 1:", findFirstMarker(4))
console.log("Part 2:", findFirstMarker(14))