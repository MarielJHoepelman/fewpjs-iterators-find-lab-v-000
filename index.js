const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = record => {
  let year;
  return record.find(element => {
    return element.result === "W";
  })
}
