// const testVar = {}
//
// function testFunc() {
//   return "hi"
// }

const superbowlWin = record => {
  let result = record.find(element => element.result === "W")
  return !!result ? result.year : result;
}
