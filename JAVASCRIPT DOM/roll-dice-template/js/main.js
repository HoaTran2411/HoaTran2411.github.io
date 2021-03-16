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

//game mới, reload lại giao diện ban đầu
btnNewEle.addEventListener('click', function () {
    location.reload();
})

//tạo biến
let activePlayer = 0;

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

    let scoreEle = document.getElementById(`score-${activePlayer}`);
    let currentEle = document.getElementById(`current-${activePlayer}`);

    if (number1 != 1 && number2 != 1) {
        scoreEle.innerText = number1 + number2
        currentEle.innerText = Number(currentEle.innerText)+ number1 + number2
    }
    else {
        currentEle.innerText = 0;
        scoreEle.innerText = 0;   
        exchangePlayer()
    }
})

//function đổi lượt chơi
function exchangePlayer() {
    dice1Ele.style.display = 'none';
    dice2Ele.style.display = 'none';
    
    player1Ele.classList.toggle('active')
    player2Ele.classList.toggle('active')
    
    if (player1Ele.classList.contains('active')) {
        activePlayer = 0
    } else {
        activePlayer = 1;
    }
}

//part 5: Lưu trữ điểm người chơi và kiểm tra người thắng cuộc
btnHoldEle.addEventListener('click', function () {
    let value = Number(inputFinalScoreEle.value)
    
    if (value == '') {
        checkWinner(20)

    } else {
        checkWinner(value)
    }
})

function checkWinner(number) {
    if (Number(currentScorePlayer1.innerText) >= number) {
        activePlayer = 0;
        displayWinner()

    } else if (Number(currentScorePlayer2.innerText) >= number) {
        activePlayer = 1;
        displayWinner()

    } else {
        exchangePlayer()
    }
}

function displayWinner() {
    let namePlayerEle = document.getElementById(`name-${activePlayer}`);
    let playerPanelEle = document.querySelector(`.player-${activePlayer}-panel`);

    namePlayerEle.innerText = 'Winner';
    playerPanelEle.classList.add('winner');
    
    dice1Ele.style.display = 'none';
    dice2Ele.style.display = 'none';
    btnRollEle.style.display = 'none';
}


window.onload = init

