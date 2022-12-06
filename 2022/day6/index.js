const fs = require('fs');
const _ = require('lodash');

const data = fs.readFileSync(`data.txt`).toString().split("");

const markerLenght = 4
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

  if (index === markerLenght) return true
})

console.log("Part 1:", firstMarker + 1)

const messageLenght = 14
let messageTest = []
let messageIndex = 0

const firstMessages = data.findIndex((letter, i) => {
  const position = messageTest.indexOf(letter)

  if (position === -1) {
    messageIndex++
  } else {
    messageTest.splice(0, position + 1)
    messageIndex = messageIndex - position
  }

  messageTest.push(letter)

  if (messageIndex === messageLenght) return true
})

console.log("Part 2:", firstMessages + 1)