'use strict';

let secretNumber = Math.trunc(Math.random() * 50) + 1;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = (Number(document.querySelector('.guess').value));

    if(!guess){
        document.querySelector('.message').textContent = '🚫 No Number written';
    } else if(guess === secretNumber){
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('.message').textContent = '🎉 Correct Number';

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
            document.querySelector('.message').textContent = '📈 Too High';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else if(score > 1)
        {
            document.querySelector('.message').textContent = '📈 High But You are Close 😬';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else
        {
            document.querySelector('.message').textContent = '😭 You Lost The Game';
            document.querySelector('.score').textContent = Number(0);
        }
    }
    else if(guess > secretNumber){
        if(score > 1 & guess > secretNumber+3)
        {
            document.querySelector('.message').textContent = '📈 Too High';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else if(score > 1)
        {
            document.querySelector('.message').textContent = '📈 High But You are Close 😬';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else
        {
            document.querySelector('.message').textContent = '😭 You Lost The Game';
            document.querySelector('.score').textContent = Number(0);
        }
    }
    else if(guess < secretNumber){
        if(score > 1 & guess < secretNumber-3)
        {
            document.querySelector('.message').textContent = '📉 Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else if(score > 1)
        {
            document.querySelector('.message').textContent = '📈 Low But You are Close 😬';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else
        {
            document.querySelector('.message').textContent = '😭 You Lost The Game';
            document.querySelector('.score').textContent = Number(0);
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;

    document.querySelector('.score').textContent = score;

    document.querySelector('.message').textContent = 'Start Guessing...';

    document.querySelector('body').style.backgroundColor = '#000000';

    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = '';

    secretNumber = Math.trunc(Math.random() * 50) + 1;

})