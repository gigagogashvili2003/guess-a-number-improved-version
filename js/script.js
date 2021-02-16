
const secretNumber = Math.trunc(Math.random() * 100 + 1);

let score = 10;

let highScore = document.querySelector('.currentHighScore').textContent = 0;



document.querySelector('.currentScore').textContent = score;

document.querySelector('.question-sign').textContent = secretNumber;

document.querySelector('.check-number').addEventListener('click', function () {
    
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess, guess);
    if(!guess){

        document.querySelector('.lets-start').textContent = 'Please write a number!😏'
        document.querySelector('.lets-start').style.color = 'lightblue';

    }else if(guess === secretNumber){
        document.querySelector('.lets-start').textContent = 'OMG 😱 a number is correct!✅'
        document.querySelector('.lets-start').style.color = 'lightgreen';
        document.querySelector('.currentHighScore').textContent = score;
        document.querySelector('.container').style.backgroundColor = 'green';
        if(score > highScore){
            document.querySelector('.currentHighScore').textContent = score;
        }

    }else if (guess > secretNumber) {
        if(score > 1){
            document.querySelector('.lets-start').textContent = 'Oops too High😑'
            document.querySelector('.lets-start').style.color = 'red';
            score--;
            document.querySelector('.currentScore').textContent = score;
        }else {
            document.querySelector('.lets-start').textContent = 'Oops You lost the game!😑'
            document.querySelector('.lets-start').style.color = 'yellow';
            document.querySelector('.currentScore').textContent = 0;
        }
    }else if (guess < secretNumber) {
        if(score > 1){
            document.querySelector('.lets-start').textContent = 'Oops too High😑'
            document.querySelector('.lets-start').style.color = 'red';
            score--;
            document.querySelector('.currentScore').textContent = score;
        }else {
            document.querySelector('.lets-start').textContent = 'Oops You lost the game!😑'
            document.querySelector('.lets-start').style.color = 'yellow';
            document.querySelector('.currentScore').textContent = 0;
        }
    }

})
