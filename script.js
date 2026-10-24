let userScore = 0;
let computerScore = 0;

function play(userChoice) {
    let choices = ["Rock", "Paper", "Scissors"];

    let computerChoice =
        choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a Draw!";
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "You Win!";
        userScore++;
    } else {
        result = "Computer Wins!";
        computerScore++;
    }

    document.getElementById("result").innerText =
        "You chose " + userChoice +
        " | Computer chose " + computerChoice +
        " | " + result;

    document.getElementById("score").innerText =
        "You: " + userScore +
        " | Computer: " + computerScore;
}

function resetGame() {
    userScore = 0;
    computerScore = 0;

    document.getElementById("result").innerText =
        "Let's Play!";

    document.getElementById("score").innerText =
        "You: 0 | Computer: 0";
}