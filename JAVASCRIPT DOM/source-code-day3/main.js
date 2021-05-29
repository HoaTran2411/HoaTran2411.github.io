// Truy cập
let primary = document.getElementById('primary-number');
let secondary = document.getElementById('secondary-number');
let guessEle = document.getElementById('guess');
let operatorEl = document.getElementById('operator');

let timeEle = document.querySelector('.time');
let scoreEle = document.querySelector('.score');
let highScoreEle = document.querySelector('.high-score');

let listPlayerEle = document.querySelector('.list-player');

// Định nghĩa biến
let firstNumber;
let secondNumber;
let total;

let operator;
let operators = ['+', '-', '*'];

let score;
let highScore = 0;
let time;
let interval;

let ranking = [
    {
        name: 'Bùi Văn Hiên',
        avatar: 'https://techmaster.vn/media/static/crop/brp4jgc51co0c1746n90',
        score: 9,
    },
    {
        name: 'Tào Thúy Quỳnh',
        avatar: 'https://techmaster.vn/media/static/crop/brp4jgc51co0c1746n90',
        score: 10,
    },
    {
        name: 'Nguyễn Hàn Duy',
        avatar: 'https://techmaster.vn/media/static/crop/brp4jgc51co0c1746n90',
        score: 16,
    },
    {
        name: 'Trương Minh Thúy',
        avatar: 'https://techmaster.vn/media/static/crop/brp4jgc51co0c1746n90',
        score: 5,
    },
];

// Random số và hiển thị
function randomNumber() {
    firstNumber = Math.floor(Math.random() * 10);
    secondNumber = Math.floor(Math.random() * 10);
    operator = operators[Math.floor(Math.random() * operators.length)];  //lấy phép tính random, chỉ số từ 0 tới độ dài dãy -1

    total = eval(`${firstNumber} ${operator} ${secondNumber}`);          //dùng eval để biểu thức trong ngoặc được thực thi

    primary.innerText = firstNumber;
    secondary.innerText = secondNumber;
    operatorEl.innerText = operator;
}

// Khởi tạo game
function init() {
    score = 0;
    time = 10;

    timeEle.innerText = `${time}s`;
    scoreEle.innerText = score;
    highScoreEle.innerText = highScore;

    guess.innerText = '';
    randomNumber();
    renderRanking(ranking);

    interval = setInterval(countDown, 1000); //tự động đếm ngược thời gian
}

function countDown() {
    time--;
    if (time < 10) {
        timeEle.innerText = `0${time}s`;
    } else {
        timeEle.innerText = `${time}s`;
    }
    if (time == 0) {
        clearInterval(interval);
        // Cập nhật điểm cao nhất
        updateHighScore();
        // Thêm thông tin người chơi vào ranking
        addPlayerToRanking();
        // Sau 3s thì chơi lại game
        setTimeout(init, 3000);
        localStorage.setItem('ranking',JSON.stringify(ranking))
    }
}

// Cập nhật điểm người chơi
function updateScore() {
    score++;
    scoreEle.innerText = score;
}

// Cập nhật điểm cao nhất người chơi
function updateHighScore() {
    highScore = Math.max(score, highScore);
    highScoreEle.innerText = highScore;
}

// Xử lý khi người chơi kiểm tra kết quả
guessEle.addEventListener('keydown', function (e) {
    if (time == 0) {
        return;
    }
    if (e.keyCode == 13) {                      //keyCode 13 là phím enter
        let value = Number(this.value);
        if (value == total) {
            updateScore();
            randomNumber();
            this.value = '';
        } else {
            this.value = '';
            return;
        }
    }
});

function addPlayerToRanking() {
    let user = {
        name: 'Nguyễn Văn A',
        avatar: 'https://techmaster.vn/media/static/crop/brp4jgc51co0c1746n90',
        score: score,
    };
    ranking.push(user);
    renderRanking(ranking);
    
}


// Hiển thị danh sách ranking ra ngoài giao diện
function renderRanking(arr) {
    // Sắp xếp điểm người chơi giảm dần
    let sortArr = arr.sort(function (a, b) {
        return b.score - a.score;
    });

    listPlayerEle.innerHTML = '';

    for (let i = 0; i < sortArr.length; i++) {
        const p = sortArr[i];
        listPlayerEle.innerHTML += `
            <div class="list-item">
                <div class="list-rank">${i + 1}</div>
                <div class="list-info">
                    <img src="${p.avatar}" alt="${p.name}">
                    <div class="info">
                        <span class="name">${p.name}</span>
                    </div>
                </div>
                <div class="list-score">
                    <span class="top-item-icon"><i class="fa fa-star" aria-hidden="true"></i></span>
                    <span class="top-item-point">${p.score}</span>
                </div>
            </div>
        `;
    }
}
//bài 6: chia thành 3 màn
let buttonStartGameEle = document.querySelector('#btn-start-game')
let gameEle = document.querySelector('#game')
let startGameEle = document.querySelector('#start-game')
let endGameEle = document.querySelector('#end-game')
let userNameEle = document.querySelector('#user-name')
let userAvatarEle = document.querySelector('#user-avatar')

//phải nhập tên với avatar mới được chơi game
//bấm start game, giao diện chuyển sang màn chơi game
buttonStartGameEle.addEventListener('click',function() {
    if (userNameEle.value == '' || userAvatarEle.value == '') {
        alert('Vui lòng nhập đầy đủ thông tin trước khi chơi game')
    }
    else {
        gameEle.classList.toggle('hidden')
        startGameEle.classList.toggle('hidden')
        init()
    }
})



//window.onload = init;          //mỗi khi reload trang, function init sẽ tự động thực hiện random số, thời gian...
