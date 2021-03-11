//truy cập các thành phần trong game
const wordEl = document.querySelector('#word')
const timeEl = document.querySelector('#time')
const inputEl = document.querySelector('#text')
const scoreEl = document.querySelector('#score')
//khai báo biến:
const words = [
    'write',
    'began',
    'sea',
    'color',
    'grandfather',
    'sea dog'
]
let time = 10;
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
    }
}
interval = setInterval(updateTime,1000)

window.onload = addWordToDom;