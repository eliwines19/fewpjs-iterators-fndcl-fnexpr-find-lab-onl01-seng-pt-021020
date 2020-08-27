const testVar = {}

function testFunc() {
  return "hi"
}

const records = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function superbowlWin(teamRecord) {
  let win = teamRecord.find(value => {return value.result === "W";});
  if (win) {
    return win.year
  }
  else {
    undefined
  }
};