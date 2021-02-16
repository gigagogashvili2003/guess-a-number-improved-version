
let secretNumber = Math.trunc(Math.random() * 100 + 1);

let score = 10;

let highScore = document.querySelector('.currentHighScore').textContent = 0;



document.querySelector('.currentScore').textContent = score;

document.querySelector('.question-sign').textContent = secretNumber;

document.querySelector('.check-number').addEventListener('click', function () {
    
    var guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    if(!guess){
        
        document.querySelector('.lets-start').textContent = 'Please write a number!😏'
        document.querySelector('.lets-start').style.color = 'lightblue';

    }else if(guess === secretNumber){
        document.querySelector('.lets-start').textContent = 'OMG 😱 a number is correct!✅'
        document.querySelector('.lets-start').style.color = 'lightgreen';
        document.querySelector('.currentHighScore').textContent = score;
        document.querySelector('.container').style.backgroundColor = 'green';
        if(score >= highScore){
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
            document.querySelector('.lets-start').textContent = 'Oops too Low'
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

document.querySelector('.play-again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 100 + 1);
    document.querySelector('.question-sign').textContent = secretNumber;
    score = 10;
    highScore = document.querySelector('.currentScore').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.container').style.backgroundColor = 'black';
    document.querySelector('.start-guessing').innerHTML = '<h3 class="lets-start">Lets start guessing...</h3>';
})


let data = document.querySelector('.geo').addEventListener('click', function () {
        document.querySelector('.geo').textContent = 'დააჭირე და გადაიყვანე ენა ქართულზე';
        document.querySelector('.choose-number').textContent = 'აირჩიე რიცხვი 1-დან 100-მდე'
        document.querySelector('.Guess-number-title').textContent = 'გამოიცანი რიცხვი'
        document.querySelector('.creator1').textContent = 'შემქმნელი:'
        document.querySelector('.address').textContent = 'გიგა გოგაშვილი'
        document.querySelector('.guess').placeholder = 'ჩაწერე რიცხვი';
        document.querySelector('.play-again').textContent = 'ხელახლა';
        document.querySelector('.check-number').textContent = 'შემოწმება';
        document.querySelector('.check-number').style.fontSize = '15px';
        document.querySelector('.start-guessing').textContent = 'დაიწყე გამოცნობა';
        document.querySelector('.score').innerHTML =
        '<div class="lets-start score"><h3>სიცოცხლე:</h3><h3 class="score-margin currentScore">10</h3><i class="fas fa-heart"></i></div>';
        document.querySelector('.highscore').innerHTML ='<h3 class="lets-start highscore">რეკორდი: <span class="score-margin currentHighScore">0</span><i class="fas fa-star"></i></span></h3>';

})


