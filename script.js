//global varibales
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const roundResult = document.querySelector('.round-result');
const gameResult = document.querySelector('.game-result');

gameResult.textContent = '';

let computerPoint = 0;
let playerPoint = 0;
let playerName = prompt('What is your name? ');

//variable for buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', game);
});


//function that returns computer choice
    function computerPlayer() {
        let choices = ['rock', 'paper', 'scissors'];
        
        return choices[Math.floor(Math.random() * choices.length)];

};
   

//Ability to play a round
    function playRound(playerSelection, computerSelection = computerPlayer()) {

            if (playerSelection === 'rock' && computerSelection ==='scissors' || 
                playerSelection === 'paper' && computerSelection === 'rock' ||
                playerSelection === 'scissors' && computerSelection === 'paper')
                {
                    playerPoint++;
                    roundResult.textContent = 'You win, ' + playerSelection + ' beats ' + computerSelection + '!';
                }

                else if (playerSelection === 'scissors' && computerSelection === 'rock' ||
                         playerSelection === 'rock' && computerSelection === 'paper' ||
                         playerSelection === 'paper' && computerSelection === 'scissors')                
                {
                    computerPoint++;
                    roundResult.textContent = 'You lose, ' + computerSelection + ' beats ' + playerSelection + '!';
                } 
                else if (playerSelection === computerSelection)
                {
                    roundResult.textContent = 'Tie!';

                }
                else {
                    roundResult.textContent = 'Something went wrong. Please refresh the game.';
                };

        };

//Will update the score.

function updateScore() {
    playerScore.textContent = playerName + '\'s Score: ' + playerPoint;
    computerScore.textContent = 'Computer\'s Score: ' + computerPoint;
    if (playerPoint === 5) 
    {
        gameResult.textContent = playerName + ' wins!';
    } else if(computerPoint === 5) 
    {
        gameResult.textContent = 'The Computer wins!';
    };
};

//Play the game.

function game(play) {
    let playerSelection = play.target.id;
    if (playerSelection === 'reset') 
    {
        resetGame();
    } else if (gameResult.textContent != '') 
    {
        return;
    } else {
        playRound(playerSelection);
        updateScore();
    };
};

function resetGame() {
    playerPoint = 0;
    computerPoint = 0;
    roundResult.textContent = '';
    gameResult.textContent = '';
    playerName = prompt('Please enter your first name: ');
    updateScore();    
};