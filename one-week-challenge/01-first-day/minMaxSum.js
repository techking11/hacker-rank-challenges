"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  let minNum = Math.min(...arr);
  let maxNum = Math.max(...arr);

  let minWork = false;
  let maxWork = false;

  let min = 0;
  let max = 0;

  for (const num of arr) {
    if (maxNum != num || minWork) {
      min += num;
    } else {
      minWork = true;
    }

    if (minNum != num || maxWork) {
      max += num;
    } else {
      maxWork = true;
    }
  }
  process.stdout.write(min + " " + max);
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
