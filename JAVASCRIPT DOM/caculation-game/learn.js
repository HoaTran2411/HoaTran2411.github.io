/* mục tiêu: tạo ra 3 màn: màn đăng nhập, màn chơi game và màn end game

bước 1: nhập tên vs avatar là link ảnh url, ấn vào start game, nhảy ra màn 2 là chơi game
- lấy dữ liệu trên local storage về

bước 2: random các phép tính cộng trừ, nhân, chia, số random
- thời gian đếm ngược
- mục điểm: mỗi phép tính đúng thì điểm cộng thêm 1
- điểm cao là điểm cao nhất của người chơi đó khi chơi game
- phần bảng xếp hạng: hiện avatar, tên đăng nhập và điểm update
- khi hết time, lưu lại điểm người chơi và thoát màn 2, sang màn 3, đồng thời update dữ liệu này lên local storage

bước 3: 
- in ra kết quả điểm người chơi
- nút chơi lại, quay lại màn 2
- nút thoát game, reload lại trang web, về màn 1 */

//phần 1: Truy cập vào các thẻ html
let primaryNumEle = document.querySelector('#primary-number')
let secondaryNumEle = document.querySelector('#secondary-number')
let operatorEle = document.querySelector('#operator')
let guessEle = document.querySelector('#guess')
let scoreEle = document.querySelector('.score')
let timeEle = document.querySelector('.time')
let highScoreEle = document.querySelector('.high-score')
let listPlayerEle = document.querySelector('.list-player')

//phần 2: đặt biến mới
let firstNumber;
let secondNumber;
let operators = ['+', '-', '*'];
let operator;
let total;
let time;
let interval;
let score;
let ranking = [];
let nameUser;
let avatarUser;

//truy cập các màn chơi game
let btnStartGameEle = document.querySelector('#btn-start-game')
let usersNameEle = document.querySelector('#user-name')
let usersAvatarEle = document.querySelector('#user-avatar')
let gameEle = document.querySelector('#game')
let startGameEle = document.querySelector('#start-game')
let endGameEle = document.querySelector('#end-game')
let messageEle = document.querySelector('.message')
let btnPlayAgain = document.querySelector('.btn-play-again')
let btnExistGameEle = document.querySelector('.btn-exit-game')


//phần 3: tính toán

//màn 1: đăng nhập game: yc nhập đủ thông tin avatar và name để ấn start game hoạt động, chuyển sang màn 2
btnStartGameEle.addEventListener('click',function(){
    nameUser = usersNameEle.value
    avatarUser = usersAvatarEle.value
    if (nameUser == '' || avatarUser == '') {
        alert('vui lòng nhập thông tin')
    }
    else {
        gameEle.style.display = 'flex';
        startGameEle.style.display = 'none'
        init()

    }
})

//lấy data từ local storage để render --> lấy ra dữ liệu cũ, đặt vào khi khởi tạo game, function init
function getDataFromLocalStorage() {
let getDataLocalStorage = localStorage.getItem("ranking")
if (getDataLocalStorage == null) {
    ranking = []
}
else {
    ranking = JSON.parse(getDataLocalStorage)
}
renderRanking(ranking)
}
//set data local storage--> update dữ liệu người chơi mới vào kho lưu trữ, khi thực hiện add Player to ranking
function setDataToLocalStorage(arr) {
    localStorage.setItem("ranking",JSON.stringify(arr))
    renderRanking(arr)
}

//random số và phép tính
function randomNumber() {
    firstNumber = Math.floor(Math.random() * 10)
    secondNumber = Math.floor(Math.random() * 10)
    operator = operators[Math.floor(Math.random() * (operators.length))]
    total = eval(`${firstNumber} ${operator} ${secondNumber}`)
    primaryNumEle.innerText = firstNumber
    secondaryNumEle.innerText = secondNumber
    operatorEle.innerText = operator
}


//khởi tạo game
function init() {
    time = 12;
    score = 0;
    scoreEle.innerText = score;
    randomNumber()
    interval = setInterval(countDown, 1000)
    getDataFromLocalStorage()
}


/* khi người dùng nhập kết quả phép tính, ấn vào phím enter để kiểm tra kết quả,
th1: nếu kết quả đúng thì điểm tăng thêm 1; đồng thời function randomNumber được thực hiện
th2: nếu kết quả sai thì k có điều gì xảy ra cho tới khi người dùng tính đúng */

//người dùng bắt đầu chơi game
guessEle.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
        let value = Number(this.value);
        if (value == total) {
            randomNumber();
            this.value = '';
            scoreEle.innerHTML++
        } else {
            this.value = '';
            return;
        }
    }
});

//thời gian đếm ngược 20s
function countDown() {
    time--
    timeEle.innerText = time;
    if (time == 0) {
        clearInterval(interval);
        addPlayerToRanking()
        endGameEle.style.display = 'flex';
        gameEle.style.display = 'none'
        messageEle.innerHTML = `Điểm của bạn là: ${scoreEle.innerHTML}`

    }
}
//add dữ liệu người chơi vào bảng xếp hạng, tạo ra 1 object hứng dữ liệu, add các phần tử của object vào trong html
function addPlayerToRanking() {
    let user = {
        name: nameUser,
        avatar: avatarUser,
        score: scoreEle.innerHTML,
    }
    ranking.push(user)
    setDataToLocalStorage(ranking)
    
}
//hiển thị danh sách ranking ra ngoài giao diện
function renderRanking(arr) {
    //bước 1: sắp xếp các phần tử trong arr theo thứ tự điểm cao tới điểm thấp
    let sortArr = arr.sort(function(a,b){return b.score-a.score});
    listPlayerEle.innerHTML = ''
    //bước 2: push các phần tử trong arr vào thẻ html
    
    for (let i=0; i<sortArr.length;i++) {
        const p = sortArr[i];
        listPlayerEle.innerHTML += `
        <div class="list-item">
            <div class="list-rank">${i+1}</div>
            <div class="list-info">
                <img src="${p.avatar}" alt = "${p.name}">
                <div class="info">
                    <span class="name">${p.name}</span>
                </div>
            </div>
            <div class="list-score">
                <span class="top-item-icon"><i class="fa fa-star" aria-hidden="true"></i></span>
                <span class="top-item-point">${p.score}</span>
            </div>
        </div> `
    }
    
}

//kích vào nút chơi lại, quay trở lại màn 2, khởi động init
btnPlayAgain.addEventListener('click', function(){
    endGameEle.style.display = 'none';
    gameEle.style.display = 'flex'
    init()
})


//kích vào nút thoát game, quay trở lại màn hình đăng nhập
btnExistGameEle.addEventListener('click',function(){
    window.location.reload()
})





