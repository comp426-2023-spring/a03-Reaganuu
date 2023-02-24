#!/usr/bin/env node
import { rpsls } from "../lib/rpsls.js";
import minimist from "minimist";

// const args = minimist(process.argv.slice(2));

// if (args.h || args.help) {
//   printhlp();
//   process.exit(0);
// }

// if (args.r || args.rules) {
//   printrl();
//   process.exit(0);
// }

// function printhlp() {
//   console.log(`Usage: node-rpsls [SHOT]
//   Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!

//     -h, --help        display this help message and exit
//     -r, --rules       display the rules and exit

//   Examples:
//     node-rpsls        Return JSON with single player RPSLS result.
//                       e.g. {"player":"rock"}
//     node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
//                       e.g {"player":"rock","opponent":"Spock","result":"lose"}`);
// }
// function printrl() {
//   console.log(`Rules for the Lizard-Spock Espansion of Rock Paper Scissors:

//   - Scissors CUTS Paper
//   - Paper COVERS Rock
//   - Rock SMOOSHES Lizard
//   - Lizard POISONS Spock
//   - Spock SMASHES Scissors
//   - Scissors DECAPITATES Lizard
//   - Lizard EATS Paper
//   - Paper DISPROVES Spock
//   - Spock VAPORIZES Rock
//   - Rock CRUSHES Scissors`);
// }

// var len = args._length;

// switch (len) {
//   case len == 0:
//     console.log(JSON.stringify(rpsls("none")));
//     process.exit(0);
//   case len == 1:
//     var player = args._[0].toString().toLowerCase();
//     if (
//       player == "rock" ||
//       player == "paper" ||
//       player == "scissors" ||
//       player == "lizard" ||
//       player == "spock"
//     ) {
//       console.log(JSON.stringify(rpsls(player)));
//       process.exit(0);
//     } else {
//       console.log("Invalid input");
//       printhlp();
//       printrl();
//       process.exit(0);
//     }
//   default:
//     console.log("[ARGUMENT] is out of range.");
//     printhlp();
//     printrl();
//     process.exit(0);
// }

const args = minimist(process.argv.slice(2));
const helpp = `Usage: node-rpsls [SHOT]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
  -h, --help        display this help message and exit
  -r, --rules       display the rules and exit
Examples:
  node-rpsls        Return JSON with single player RPSLS result.
                    e.g. {"player":"rock"}
  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}`;
const rulz = `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
- Scissors CUTS Paper
- Paper COVERS Rock
- Rock SMOOSHES Lizard
- Lizard POISONS Spock
- Spock SMASHES Scissors
- Scissors DECAPITATES Lizard
- Lizard EATS Paper
- Paper DISPROVES Spock
- Spock VAPORIZES Rock
- Rock CRUSHES Scissors`;

if (args.help || args.h) {
  hlp();
  process.exit(0);
}
if (args.r || args.rules) {
  rlz();
  process.exit(0);
}
function hlp() {
  console.log(helpp);
}
function rlz() {
  console.log(rulz);
}

var locz = args._length;

switch (locz) {
  case locz == 0:
    console.log(JSON.stringify(rpsls("none")));
    process.exit(0);
  case locz == 1:
    var player = args._[0].toString().toLowerCase();
    if (
      player == "rock" ||
      player == "paper" ||
      player == "scissors" ||
      player == "lizard" ||
      player == "spock"
    ) {
      console.log(JSON.stringify(rpsls(player)));
      process.exit(0);
    } else {
      console.log("unknown input");
      hlp();
      rlz();
      process.exit(0);
    }
  default:
    console.log("out of range");
    hlp();
    rlz();
    process.exit(0);
}
