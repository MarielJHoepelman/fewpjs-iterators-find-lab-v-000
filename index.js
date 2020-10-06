const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = record => {

record.find(element => {
  if (element.result === "W") {
    console.log(element.year)
    return element.year
  }
});
}
