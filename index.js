const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = record => record.find(element => {
  if (element.result === "W") {
    return element.year
  }
});
