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

function check(player, opponent) {
  if (player == opponent) var res = "tie";

  if (player == "rock" && opponent == "scissors") var res = "win";
  if (player == "rock" && opponent == "paper") var res = "lose";
  if (player == "rock" && opponent == "lizard") var res = "win";
  if (player == "rock" && opponent == "spock") var res = "los";

  if (player == "scissors" && opponent == "rock") var res = "lose";
  if (player == "scissors" && opponent == "paper") var res = "win";
  if (player == "scissors" && opponent == "lizard") var res = "win";
  if (player == "scissors" && opponent == "spock") var res = "lose";

  if (player == "paper" && opponent == "scissors") var res = "lose";
  if (player == "paper" && opponent == "rock") var res = "win";
  if (player == "paper" && opponent == "lizard") var res = "lose";
  if (player == "paper" && opponent == "spock") var res = "win";

  if (player == "lizard" && opponent == "rock") var res = "lose";
  if (player == "lizard" && opponent == "scissors") var res = "lose";
  if (player == "lizard" && opponent == "paper") var res = "win";
  if (player == "lizard" && opponent == "spock") var res = "win";

  if (player == "spock" && opponent == "rock") var res = "win";
  if (player == "spock" && opponent == "paper") var res = "lose";
  if (player == "spock" && opponent == "scissors") var res = "win";
  if (player == "spock" && opponent == "lizard") var res = "lose";

  return res;
}
