const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = record => {
  let result;
  return record.find(element => {
    return element.result === "W";
  })
}
