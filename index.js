var katzDeliLine = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  if (katzDeliLine.length >= 1) {
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
 }
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length >= 1){
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  var line = 'The line is currently: '
  for (let n = 0; n > katzDeliLine.length; n++) {
    if (katzDeliLine.length) {
    line + `${n+1}. ${katzDeliLine[n]}`
  } else {
    return 'The line is currently empty.'
  }
  return line
}

}
