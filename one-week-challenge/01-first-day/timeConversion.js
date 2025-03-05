"use strict";

const fs = require("fs");

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  let hours = parseInt(s.slice(0, 2));
  let minutes = s.slice(3, 5);
  let seconds = s.slice(6, 8);
  let period = s.slice(-2);

  if (period === "AM" && hours === 12) {
    hours = 0;
  } else if (period === "PM" && hours !== 12) {
    hours += 12;
  }

  let formattedHours = hours.toString().padStart(2, "0");
  return `${formattedHours}:${minutes}:${seconds}`;
}

function main() {
  const ws = fs.createWriteStream("output.txt");

  const s = readLine();

  const result = timeConversion(s);
  console.log(result);

  ws.write(result + "\n");

  ws.end();
}
