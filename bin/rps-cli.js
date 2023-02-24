#!/usr/bin/env node
import { rps } from "./lib/rpsls.js";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));

if (args.h || args.help) {
  printhlp();
  process.exit(0);
}

if (args.r || args.rules) {
  printrl();
  process.exit(0);
}

function printhlp() {
  console.log(`Usage: node-rps [SHOT]
  Play Rock Paper Scissors (RPS)
  
    -h, --help      display this help message and exit
    -r, --rules     display the rules and exit
  
  Examples:
    node-rps        Return JSON with single player RPS result.
                    e.g. {"player":"rock"}
    node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"scissors","result":"win"}`);
}
function printrl() {
  console.log(`Rules for Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock CRUSHES Scissors`);
}

var len = args._length;

switch (len) {
  case len == 0:
    console.log(JSON.stringify(rps("none")));
    process.exit(0);
  case len == 1:
    var player = args._[0].toString().toLowerCase();
    if (player == "rock" || player == "paper" || player == "scissors") {
      console.log(JSON.stringify(rps(player)));
      process.exit(0);
    } else {
      console.log("Invalid input");
      printhlp();
      printrl();
      process.exit(0);
    }
  default:
    console.log("[ARGUMENT] is out of range.");
    printhlp();
    printrl();
    process.exit(0);
}
