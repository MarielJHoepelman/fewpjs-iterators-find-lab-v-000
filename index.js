const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = record => {

  return record.find(element => {
    return element.result === "W";
  }).year;
}
