let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let P = document.querySelector("#scoreP");
let C = document.querySelector("#scoreC");
let pan = document.querySelector(".panel");

let user = 0;
let comp = 0;

const randomGen = () => {
    const genNum = Math.floor(Math.random() * 3);
    const A = ["rock", "paper", "scissor"];
    return A[genNum];
};

const same = () => {
    msg.innerText = "It's a draw, play again!";
};

const different = (tracker, userChoice, compChoice) => {
    if (tracker) {
        msg.innerText = `You Won, ${userChoice} beats ${compChoice}`;
        user++;
        P.innerText = user;
        pan.style.backgroundColor = "green";
    } else {
        msg.innerText = `You lose, ${compChoice} beats ${userChoice}`;
        comp++;
        C.innerText = comp;
        pan.style.backgroundColor = "red";
    }
};

const isEqual = (userChoice) => {
    let tracker = true;
    let compChoice = randomGen();
    if (userChoice === compChoice) {
        same();
    }
    else{
    if (userChoice === "rock") {
        tracker = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
        tracker = compChoice === "scissor" ? false : true;
    } else if (userChoice === "scissor") {
        tracker = compChoice === "rock" ? false : true;
    }
    different(tracker, userChoice, compChoice);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        isEqual(userChoice);
        console.log(userChoice);
    });
});
