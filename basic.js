'use strict';

let secretNumber = Math.trunc(Math.random() * 50) + 1;

let score = 20;
let highScore = 0;

let displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = (Number(document.querySelector('.guess').value));

    if(!guess){
        displayMessage('🚫 No Number Written');
    } 
    else if(guess === secretNumber){
        document.querySelector('.number').textContent = secretNumber;

        displayMessage('🎉 Correct Number');

        document.querySelector('body').style.backgroundColor = '#228B22';

        document.querySelector('.number').style.width = '25rem';

        if(score>highScore)
        {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }

    else if(guess > secretNumber){
        if(score > 1 & guess > secretNumber+3)
        {
            displayMessage('📈 Too High');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else if(score > 1)
        {
            displayMessage('📈 High But You are Close 😬');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else
        {
            displayMessage('😭 You Lost The Game');
            document.querySelector('.score').textContent = Number(0);
        }
    }
    else if(guess < secretNumber){
        if(score > 1 & guess < secretNumber-3)
        {
            displayMessage('📉 Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else if(score > 1)
        {
            displayMessage('📈 Low But You are Close 😬');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else
        {
            displayMessage('😭 You Lost The Game');
            document.querySelector('.score').textContent = Number(0);
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    displayMessage('Start Guessing...');
    document.querySelector('body').style.backgroundColor = '#000000';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    secretNumber = Math.trunc(Math.random() * 50) + 1;
})
