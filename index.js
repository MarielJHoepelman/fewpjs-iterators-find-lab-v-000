const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = record => {
  let result ={}
  result = record.find(element => {
    return element.result === "W";
  })
  return result.year
}
