let userScore=0;
let computerScore=0;

let Stone = "image/Stone.png";
let Paper = "image/Paper.png"; 
let Scissor = "image/Scissor.png";
let imgbase = "image/";


//localStorage.clear()
// Function to update the score and save it to local storage
function updateScore(userScore, computerScore) {
    // Retrieve current score from local storage
    const currentScore = getScore();
    
    // Update the score values
    currentScore.userScore += userScore;
    currentScore.computerScore += computerScore;

    // Save the updated score to local storage
    localStorage.setItem('userScore', currentScore.userScore);
    localStorage.setItem('computerScore', currentScore.computerScore);
}


// Function to retrieve the score from local storage
function getScore() {
    const userScore = localStorage.getItem('userScore') || 0;
    const computerScore = localStorage.getItem('computerScore') || 0 ;
    return { userScore: parseInt(userScore), computerScore: parseInt(computerScore) };
}

// Function to display the score on the web page
function displayScore() {
    let score = getScore();
  
    document.getElementById("Score1").textContent = score.computerScore;
    document.getElementById("Score2").textContent = score.userScore;
}

// Call displayScore function to display the score when the page loads
document.addEventListener("DOMContentLoaded", function() {
    displayScore();
});


// Your playGame function remains the same
function playGame(userChoice) {
    const choices = ["Stone", "Paper", "Scissor"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if ((userChoice === choices[0] && computerChoice === choices[0]) || (userChoice === choices[1] && computerChoice === choices[1]) || (userChoice === choices[2] && computerChoice === choices[2]))
        tie(userChoice,computerChoice)
    else if ((userChoice === choices[0] && computerChoice === choices[2]) || (userChoice === choices[1] && computerChoice === choices[0]) || (userChoice === choices[2] && computerChoice === choices[1]))
        win(userChoice,computerChoice)
    else if((userChoice === choices[0] && computerChoice === choices[1]) || (userChoice === choices[1] && computerChoice === choices[2]) || (userChoice===choices[3] && computerChoice === choices[0]))
        lose(userChoice,computerChoice)
}

// Call updateAndRedirect function instead of directly changing the score and navigating 
// tiecomputerChoiceimg
// tieuserChoiceimg
function win(param1, param2) {
    userScore++;
    console.log("user won");

    //testing purpose
    localStorage.setItem('userchoice', param1);
    localStorage.setItem('computerchoice' , param2);
    
    //storing images choosen by user and computer to display these images dynamically
    localStorage.setItem('winuserchoice', `${imgbase}${param1}.png`);
    localStorage.setItem('wincomputerchoice' , `${imgbase}${param2}.png`);
    updateScore(userScore,computerScore);
    window.location.href = 'win.html';  
}

function lose(param1, param2) {
    computerScore++;
    console.log("computer won");

    //testing purpose
    localStorage.setItem('userchoice', param1);
    localStorage.setItem('computerchoice' , param2);

    //storing images choosen by user and computer to display these images dynamically
    localStorage.setItem('loseuserchoice', `${imgbase}${param1}.png`);
    localStorage.setItem('losecomputerchoice' , `${imgbase}${param2}.png`);

    updateScore(userScore,computerScore);
    window.location.href = 'lost.html';
}

function tie(param1, param2) {
    userScore++;
    computerScore++;
    console.log("Tie");

    //testing purpose
    localStorage.setItem('userchoice', param1);
    localStorage.setItem('computerchoice' , param2);

    //storing images choosen by user and computer to display these images dynamically
    localStorage.setItem('tieuserchoice', `${imgbase}${param1}.png`);
    localStorage.setItem('tiecomputerchoice' , `${imgbase}${param2}.png`);

    updateScore(userScore,computerScore);
    window.location.href = 'tie.html';
}





function toggleRules() {
    var rulesBox = document.getElementById("rules-box");
    if (rulesBox.style.display === "none") {
        rulesBox.style.display = "block";
    } else {
        rulesBox.style.display = "none";
    }
}

function closeRules() {
    var rulesBox = document.getElementById("rules-box");
    rulesBox.style.display = "none";
}






