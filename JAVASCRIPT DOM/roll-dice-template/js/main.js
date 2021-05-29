//truy cập phần tử html
let scorePlayer1 = document.querySelector('#score-0')
let scorePlayer2 = document.querySelector('#score-1')

let currentScorePlayer1 = document.querySelector('#current-0')
let currentScorePlayer2 = document.querySelector('#current-1')

let namePlayer1 = document.querySelector('#name-0')
let namePlayer2 = document.querySelector('#name-1')

let dice1Ele = document.querySelector('#dice-1')
let dice2Ele = document.querySelector('#dice-2')

let player1Ele = document.querySelector('.player-0-panel')
let player2Ele = document.querySelector('.player-1-panel')

let btnNewEle = document.querySelector('.btn-new')
let btnRollEle = document.querySelector('.btn-roll')
let btnHoldEle = document.querySelector('.btn-hold')

let inputFinalScoreEle = document.querySelector('.final-score')


//tạo biến
let activePlayer = 0;
let totalScore = 0;
let currentScore = 0;

//game mới, reload lại giao diện ban đầu
btnNewEle.addEventListener('click', function () {
    location.reload();
})

//bước 2: set up đầu game
function init() {
    scorePlayer1.innerText = 0;
    scorePlayer2.innerText = 0;
    currentScorePlayer1.innerText = 0;
    currentScorePlayer2.innerText = 0;
    namePlayer1.innerText = 'Player 1';
    namePlayer2.innerText = 'Player 2';
    dice1Ele.style.display = 'none';
    dice2Ele.style.display = 'none';
    player1Ele.classList.add('active');
    player2Ele.classList.remove('active')
}

//function random 2 số nguyên từ 1 tới 6
function randomNum() {
    return Math.floor(Math.random() * 6 + 1)
}

//bước 3: xử lý khi lắc xúc xắc
btnRollEle.addEventListener('click', function () {
    let number1 = randomNum();
    let number2 = randomNum();

    dice1Ele.style.display = 'block';
    dice2Ele.style.display = 'block';
    dice1Ele.src = `./img/dice-${number1}.png`
    dice2Ele.src = `./img/dice-${number2}.png`

    scoreEle = document.getElementById(`score-${activePlayer}`);
    currentEle = document.getElementById(`current-${activePlayer}`);

    if (number1 != 1 && number2 != 1) {
        currentScore += number1 + number2;
        currentEle.innerText = currentScore;
    }
    else {
        exchangePlayer()
    }
})

//function đổi lượt chơi
function exchangePlayer() {
    if (activePlayer == 1) {
        activePlayer = 0;
    } else {
        activePlayer = 1;
    }
    dice1Ele.style.display = 'none';
    dice2Ele.style.display = 'none';

    currentScore = 0
    currentEle.innerText = currentScore;

    player1Ele.classList.toggle('active')
    player2Ele.classList.toggle('active')
}

//part 5: sự kiện nút lưu điểm: Lưu trữ điểm người chơi và kiểm tra người thắng cuộc
btnHoldEle.addEventListener('click', function () {
    //Bước 1:lưu điểm người chơi
    totalScore = scoreEle.innerText;
    scoreEle.innerText = Number(totalScore) + currentScore;

    //Bước 2: kiểm tra winner
    let value = inputFinalScoreEle.value
    if (value == '') {
        checkWinner(50)
    } else {
        checkWinner(Number(value))
    }
})

//function kiểm tra winner
function checkWinner(number) {
    if (Number(scoreEle.innerText) >= number) {
        displayWinner()
    } else {
        exchangePlayer()
    }
}

//màn hình hiển thị winner
function displayWinner() {
    let namePlayerEle = document.getElementById(`name-${activePlayer}`);
    let playerPanelEle = document.querySelector(`.player-${activePlayer}-panel`);
    currentEle.innerText = 0;
    namePlayerEle.innerText = 'Winner';
    playerPanelEle.classList.add('winner');

    dice1Ele.style.display = 'none';
    dice2Ele.style.display = 'none';
    btnRollEle.style.display = 'none';
}


window.onload = init
