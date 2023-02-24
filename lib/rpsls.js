function randInt(r) {
  const rnd = Math.floor(Math.random() * r + 1);
  return rnd;
}

export function rps(s) {
  //regular rock paper scissors function
  var opp = "null";
  const rand = randInt(3);

  switch (rand) {
    case 1:
      var opp = "rock";
      break;
    case 2:
      var opp = "paper";
      break;
    case 3:
      var opp = "scissors";
      break;
    default:
      console.log("Unexpected input!");
      console.log(rand);
      return 0;
  }
  if (s == "none") {
    var val = { player: opp };
    return val;
  }

  let lcHand = s.toLowerCase();
  var res = check(lcHand, opp);
  var val = { player: lcHand, opponent: opp, result: res };
  return val;
}

export function rpsls(s) {
  var opp = "null";
  const rand = randInt(5);
  switch (rand) {
    case 1:
      var opp = "rock";
      break;
    case 2:
      var opp = "paper";
      break;
    case 3:
      var opp = "scissors";
      break;
    case 4:
      var opp = "lizard";
      break;
    case 5:
      var opp = "spock";
      break;
    default:
      console.log("Unexpected input!");
      console.log(rand);
      return 0;
  }

  if (s == "none") {
    var val = { player: opp };
    return val;
  }

  let lcHand = s.toLowerCase();
  var res = check(lcHand, opp);
  var val = { player: lcHand, opponent: opp, result: res };
  return val;
}

function check(player, opp) {
  if (player == opponent) var res = "tie";

  if (player == "rock" && opp == "scissors") var res = "win";
  if (player == "rock" && opp == "paper") var res = "lose";
  if (player == "rock" && opp == "lizard") var res = "win";
  if (player == "rock" && opp == "spock") var res = "los";

  if (player == "scissors" && opp == "rock") var res = "lose";
  if (player == "scissors" && opp == "paper") var res = "win";
  if (player == "scissors" && opp == "lizard") var res = "win";
  if (player == "scissors" && opp == "spock") var res = "lose";

  if (player == "paper" && opp == "scissors") var res = "lose";
  if (player == "paper" && opp == "rock") var res = "win";
  if (player == "paper" && opp == "lizard") var res = "lose";
  if (player == "paper" && opp == "spock") var res = "win";

  if (player == "lizard" && opp == "rock") var res = "lose";
  if (player == "lizard" && opp == "scissors") var res = "lose";
  if (player == "lizard" && opp == "paper") var res = "win";
  if (player == "lizard" && opp == "spock") var res = "win";

  if (player == "spock" && opp == "rock") var res = "win";
  if (player == "spock" && opp == "paper") var res = "lose";
  if (player == "spock" && opp == "scissors") var res = "win";
  if (player == "spock" && opp == "lizard") var res = "lose";

  return res;
}
