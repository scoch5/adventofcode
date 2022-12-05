const fs = require('fs');

const data = fs.readFileSync(`data.txt`).toString().split("\n");

const signPointsMap = {
  "☄️": 1,
  "🧻": 2,
  "✂️": 3,
}

const convertSign = (sign) => {
  switch (sign) {
    case "A":
    case "X":
      return "☄️"
    case "B":
    case "Y":
      return "🧻"
    case "C":
    case "Z":
      return "✂️"
  }
}

//Part 1

let pointsFirstPart = 0
data.forEach((value) => {
  const valueToArray = value.split(" ")
  const opponentsSign = convertSign(valueToArray[0])
  const mySign = convertSign(valueToArray[1])

  pointsFirstPart = pointsFirstPart + signPointsMap[mySign]
  console.log(`${opponentsSign} ${mySign}`)
  switch (`${opponentsSign} ${mySign}`) {
    case "☄️ ☄️":
    case "🧻 🧻":
    case "✂️ ✂️":
      pointsFirstPart = pointsFirstPart + 3
      break;
    case "☄️ 🧻":
    case "✂️ ☄️":
    case "🧻 ✂️":
      pointsFirstPart = pointsFirstPart + 6
      break;
  }
})
console.log('Part 1:', pointsFirstPart)

//Part 2

let pointsSeconsPart = 0

const getMySign = (aspectedResults, opponentsSign) => {
  switch (`${opponentsSign} ${aspectedResults}`) {
    case "☄️ X":
    case "✂️ Y":
    case "🧻 Z":
      return "✂️"

    case "🧻 X":
    case "☄️ Y":
    case "✂️ Z":
      return "☄️"

    case "✂️ X":
    case "🧻 Y":
    case "☄️ Z":
      return "🧻"
  }
}

data.forEach((value) => {
  const valueToArray = value.split(" ")
  const opponentsSign = convertSign(valueToArray[0])
  const aspectedResults = valueToArray[1] //X=lost Y=tie Z=win
  const mySign = getMySign(aspectedResults, opponentsSign)

  switch (aspectedResults) {
    case "Y":
      pointsSeconsPart = pointsSeconsPart + 3
      break;
    case "Z":
      pointsSeconsPart = pointsSeconsPart + 6
      break;
  }

  pointsSeconsPart = pointsSeconsPart + signPointsMap[mySign]
})
console.log('Part 2:', pointsSeconsPart)