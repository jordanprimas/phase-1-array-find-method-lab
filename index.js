// code your solution here
function superbowlWin(array) {
   let wins = array.find(record=> record.result === "W")
return !!wins ? wins.year : undefined
  }