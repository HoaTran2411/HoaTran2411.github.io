//truy cập các thành phần trong game
const wordEl = document.querySelector('#word')
const timeEl = document.querySelector('#time')
const inputEl = document.querySelector('#text')
const scoreEl = document.querySelector('#score')
//khai báo biến:
const words = [
    'write',
    'begin',
    'sea',
    'color',
    'grandfather',
    'blue',
    'flower',
    'funny',
    'workout',
    'homework',
    'green',
    'foody'
]
let time;
let interval;
let word;
let score =0;

//xử lý gõ phím
inputEl.addEventListener('input',function(e){
    //người dùng gõ tới đâu sẽ kiểm tra tới đấy
    let value = e.target.value;
    let characters = document.querySelectorAll('#word span')
    if (!word.startsWith(value)) {
        wordEl.style.backgroundColor = 'red'; //bắt buộc có dấu chấm phẩy trước mảng duỗi [...x] thì máy mới hiểu đây là duỗi mảng
        [...characters].map((ele) => (ele.style.color = 'white'))
    } else {
        wordEl.style.backgroundColor = 'transparent'     //transparent để đồng bộ với màu nền
        for (let i=0; i< [...value].length; i++) {
            characters[i].style.color = 'green'
        }
    }
    if (value == word) {
        //cập nhật điểm
        updateScore()
        //random ra từ mới
        addWordToDom()
        e.target.value = ''
        inputEl.focus()
    }
})

//cập nhật điểm
function updateScore() {
    score++
    scoreEl.innerHTML = score;
}


//bắt đầu vào game
function randomWord() {
    let index = Math.floor(Math.random()*words.length)
    return words[index]
}

function addWordToDom() {
    word = randomWord();
    //wordEl.innerHTML = word;
    wordEl.innerHTML = [...word].map(char => `<span>${char}</span>`).join('')  //duỗi chuỗi thành các từ đơn
    //để phục vụ cho việc gõ đúng ký tự nào thì highlight ký tự đó
}

function updateTime() {
    time--
    timeEl.innerText = `${time} s`
    if(time < 5 ) {
       timeEl.style.color = 'red'
    } else {
        timeEl.style.color = 'white'
    }
    if (time == 0) {
        clearInterval(interval)
        playGameEle.style.display = 'none';
        endGameEle.style.display = 'flex';
        resultScoreEle.innerText = score;
    }
}


//phần 1: xử lý màn 1

//truy cập các thành phần trong màn 1
let levelEle = document.querySelector('#level')
let btnStartGameEle = document.querySelector('#btn-start-game')
let startGameEle = document.querySelector('#start-game')
let playGameEle = document.querySelector('.container')
let endGameEle = document.querySelector('#end-game-container')
let resultScoreEle = document.querySelector('.score')
let btnReloadGame = document.querySelector('#btn-reload-game')

//Ấn start game thì chuyển sang màn 2
btnStartGameEle.addEventListener('click', function() {
startGameEle.style.display = 'none';
playGameEle.style.display = 'flex'
addWordToDom()
let value = levelEle.value;
if (value == 'easy') {
    time = 20
}
if (value == 'medium') {
    time = 15
}
if (value == 'hard') {
    time = 10
}
timeEl.innerText = `${time} s`
interval = setInterval(updateTime,1000)
inputEl.focus()

})

//màn 2: khi thời gian bằng 0 thì chuyển sang màn 3 (xử lý khi time =0)
//màn 3: bấm chơi lại thì reload lại trang web
btnReloadGame.addEventListener('click', function(){
    window.location.reload()
})