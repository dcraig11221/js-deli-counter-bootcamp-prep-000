var katzDeli = []

function takeANumber(array, person) {
  array.push(person)
  return `Welcome, ${person}. You are number ${array.length} in line.`
}

function nowServing(array) {
  if (array.length > 0) {
    let person = array.shift()
    return `Currently serving ${person}.`
  } else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(line) {
  if (line.length < 1) {
    return `The line is currently empty.`
  } else {
    let newLine = []
    for (let i = 0; i < line.length; i++) {
      newLine.push(` ${i+1}. ${line[i]}`)
    }
    return `The line is currently:${newLine}`
  }
}

// function currentLine(line) {
//   if (line.length < 1) {
//     return `The line is currently empty.`
//   } else {
//     let newLine = []
//     for (let i = 0; i < line.length; i++) {
//       newLine.push(` ${i+1}. ${line[i]}`)
//     }
//     return `The line is currently:${newLine}`
//   }
// }
