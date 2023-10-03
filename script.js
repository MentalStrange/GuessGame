const checkBtn = document.querySelector(".tail .left button");
let showSecretNum = document.querySelector(".hr p");
const again = document.querySelector("header button");

// the secret number that will be used...
const secretNumber = Math.floor(Math.random() * 20);
let score = 20;

// function to check the value of the user
const checkNumber = () => {
  const value = +document.querySelector(".tail .left input").value;
  const guessing = document.querySelector(".tail .right h1");
  if (value > secretNumber) {
    guessing.textContent = "It's too big";
    score--;
    document.querySelector(".right :nth-child(2)").textContent = score;

    if (Number(score) === 0) {
      checkBtn.textContent = "You Lose!";
      document.body.style.backgroundColor = "red";
    }
  } else if (value < secretNumber) {
    guessing.textContent = "It's too small";
    score--;
    document.querySelector(".right :nth-child(2)").textContent = score;
  } else if (value === secretNumber) {
    guessing.textContent = "It's right";
    showSecretNum.textContent = secretNumber;
    checkBtn.textContent = "You Win!";
    document.body.style.backgroundColor = "green";
  }
};

// function to repeat the game with prevent default...
const repeatGame = () => {
  guessing.textContent = "Start Guessing...";
  showSecretNum = showSecretNum.textContent;
  document.body.style.background = "black";
  checkBtn.textContent = checkBtn.textContent;
};
checkBtn.addEventListener("click", checkNumber);
again.addEventListener("click", repeatGame);
