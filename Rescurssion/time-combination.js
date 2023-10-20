/*
Question:

Given a time (in 24-hour format) with missing digits marked as '?', we want to replace all of the question marks with digits (0-9) in such a way as to obtain a valid time. The earliest possible time is 00:00 and the latest valid time is 23:59.
Write a function:
class Solution { public int solution(String T); }
that, given a string T in the format "HH:MM", returns an integer denoting the number of valid times that can be obtained by replacing the question marks.
Examples:
Given T = "2?:45", the function should return 4. We can obtain four valid times: "20:45", "21:45", "22:45" and "23:45".
Given T = "?9:32", the function should return 2. Valid times are: "09:32" and "19:32".
Given T = "0?:?0", the function should return 60.
Given T = "?4:0?", the function should return 20.
Given T = "29:01", the function should return 0.
Assume that: T consists of exactly five characters; the third one is ':'; the others are digits (0-9) or '?'.

*/

function solution(T) {
  let count = 0;

  // Helper function to determine valid digits for a given position
  function getPossibleDigits(pos, prevChar = "") {
    switch (pos) {
      case 0:
        return ["0", "1", "2"];
      case 1:
        if (prevChar === "2") return ["0", "1", "2", "3"];
        return ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      case 3:
        return ["0", "1", "2", "3", "4", "5"];
      case 4:
        return ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      default:
        return [];
    }
  }

  for (let i = 0; i < 5; i++) {
    if (T[i] === "?") {
      let validDigits = getPossibleDigits(i, i > 0 ? T[i - 1] : "");
      let tempCount = 0;

      for (let digit of validDigits) {
        let newTime = T.substring(0, i) + digit + T.substring(i + 1);
        if (newTime[i] === digit) tempCount += solution(newTime);
      }

      return tempCount;
    }
  }

  // Check if the generated time is valid
  let [hour, minute] = T.split(":");
  if (parseInt(hour, 10) < 24 && parseInt(minute, 10) < 60) {
    return 1;
  } else {
    return 0;
  }
}

console.log(solution("2?:45")); // Expected: 4
console.log(solution("?9:32")); // Expected: 2
console.log(solution("0?:?0")); // Expected: 60
console.log(solution("?4:0?")); // Expected: 20
console.log(solution("29:01")); // Expected: 0
