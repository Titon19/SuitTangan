const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
let score = JSON.parse(localStorage.getItem("gameScore")) || {
  win: 0,
  lose: 0,
  draw: 0,
};
scoreElement.textContent = `Menang: ${score.win}, Kalah: ${score.lose}, Seri: ${score.draw}`;
function playGame(playerChoice) {
  //   // 0 = Batu
  //   // 1 = Gunting
  //   // 2 = Kertas
  const options = ["✊", "✌️", "🖐️"];
  const computerChoiceIndex = Math.floor((Math.random() * 4) % 3);
  const computerChoice = options[computerChoiceIndex];
  let result;
  if (playerChoice === 0) {
    options[playerChoice] = "✊";
  } else if (playerChoice === 1) {
    options[playerChoice] = "✌️";
  } else if (playerChoice === 2) {
    options[playerChoice] = "🖐️";
  }
  if (playerChoice === computerChoiceIndex) {
    result = `Seri! Kamu dan komputer memilih ${computerChoice}.`;
    score.draw++;
  } else if (
    (playerChoice === 0 && computerChoiceIndex === 1) ||
    (playerChoice === 1 && computerChoiceIndex === 2) ||
    (playerChoice === 2 && computerChoiceIndex === 0)
  ) {
    result = `Menang! Kamu ${options[playerChoice]} dan komputer ${computerChoice}.`;
    score.win++;
  } else {
    result = `Kalah! Kamu ${options[playerChoice]} dan komputer ${computerChoice}.`;
    score.lose++;
  }

  localStorage.setItem("gameScore", JSON.stringify(score));
  resultElement.textContent = result;
  scoreElement.textContent = `Menang: ${score.win}, Kalah: ${score.lose}, Seri: ${score.draw}`;
  console.log(playerChoice, computerChoice);
}
