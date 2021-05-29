//mockup câu hỏi
let questions = [
    {
        title: "Nằm giữa Thái Bình Dương là gì?",
        answer: 'Bình',
        option: ['Nước', 'Cá', 'Bình', 'Ai biết']
    },
    {
        title: "1 ông tiên có cái bàn không méo và 1 con mèo, bà tiên hàng xóm muốn mua con mèo đó, hỏi ông có bán không?",
        answer: 'Không bán',
        option: ['Không bán', 'Tùy hứng', 'Bán luôn', 'Không quan tâm']
    },
    {
        title: "1 người đi vào rạp chiếu phim gặp 1 con hổ chết, hỏi tại sao người đó quay về?",
        answer: 'Hết chỗ',
        option: ['Sợ hãi khi nhìn thấy xác con hổ', 'Mất vé', 'Quên đồ ở nhà', 'Hết chỗ']
    },
    {
        title: "1 giọt nước cộng 1 giọt nước bằng mấy giọt nước?",
        answer: '1',
        option: ['4', '2', '0', '1']
    }
]
//truy cập các phần tử html
let titleEle = document.querySelector('.quiz-question p');
let answerEle = document.querySelector('.quiz-answer')
let progressEl = document.querySelector('.quiz-progress-bar')
let nextBtn = document.querySelector('.next-btn')
let prevBtn = document.querySelector('.prev-btn')
let submitEle = document.querySelector('.finish-btn')
let questionDisplayEl = document.querySelector('.quiz-bottom')
let resultDisplayEl = document.querySelector('.quiz-results')
let btnPlayAgain = document.querySelector('.back-btn')
let resultContentEle = document.querySelector('.quiz-results-score')

//gọi biến:
let currentQuestion = 0;
let answers = [] //để hứng các lựa chọn của người chơi
let result = 0;


//render câu hỏi ra ngoài giao diện
function showQuestion(index) {
    let question = questions[index];
    titleEle.innerText = `Câu ${index + 1}: ${question.title}`;
    answerEle.innerHTML = '';
    for (let i = 0; i < question.option.length; i++) {
        //nếu ô input và label cùng id, khi kích vào label sẽ chọn dc tích ô input
        //các ô input mà có name giống nhau thì chỉ chọn dc 1 đáp án duy nhất
        const a = question.option[i];
        answerEle.innerHTML += `
    <div class="quiz-item">
    <input type="radio" id="answer-${i + 1}" name="question-${index + 1}"
    ${answers[currentQuestion] == a ? 'checked' : ''}>
    <label for="answer-${i + 1}">
        <span></span>
        <p>${a}</p>
    </label>
    </div>
    `
    }
    //ẩn hiện nút previous
    if (index == 0) {
        prevBtn.classList.add('disable')
    } else {
        prevBtn.classList.remove('disable')
    }

    //ẩn hiện nút next, submit
    if (index == questions.length - 1) {
        nextBtn.classList.add('disable');
        submitEle.classList.remove('disable');
        submitEle.style.display = 'block';
        nextBtn.style.display = 'none';

    } else {
        nextBtn.classList.remove('disable');
        submitEle.classList.add('disable');
        submitEle.style.display = 'none';
        nextBtn.style.display = 'block';
    }

    //khi trả lời câu hỏi xong mới ấn dc nút next sang câu hỏi kế tiếp
    if (answers[currentQuestion]) {
        nextBtn.classList.remove('disable');
        submitEle.classList.remove('disable');

    } else {
        nextBtn.classList.add('disable');
        submitEle.classList.add('disable')
    }

    //lắng nghe sự kiện ở các ô input
    let optionsEl = document.querySelectorAll('.quiz-item input')
    for (let i = 0; i < optionsEl.length; i++) {
        optionsEl[i].addEventListener("change", function () {
            let value = optionsEl[i].nextElementSibling.querySelector('p').innerText;
            answers[currentQuestion] = value;

            nextBtn.classList.remove('disable');
            submitEle.classList.remove('disable');
        });
    }
    updateProgressBar()
}

//cập nhật thanh tiến trình theo tiến độ trả lời câu hỏi: quiz-progress-bar
function updateProgressBar() {
    let value = (currentQuestion + 1) / (questions.length) * 100;
    progressEl.style.width = `${value}%`
}

//sự kiện nút next
nextBtn.addEventListener('click', function () {
    currentQuestion++;
    if (currentQuestion > questions.length - 1) {
        currentQuestion = questions.length - 1;
    }
    showQuestion(currentQuestion)
})

//sự kiện nút previous
prevBtn.addEventListener('click', function () {
    currentQuestion--;
    if (currentQuestion < 0) {
        currentQuestion = 0;
    }
    showQuestion(currentQuestion)
})

//sự kiện nút submit, kiểm tra và in ra kết quả
submitEle.addEventListener('click', function () {
    progressEl.style.display = "none"
    questionDisplayEl.style.display = "none"
    resultDisplayEl.style.display = "flex"
    showQuestion(currentQuestion)

    //so sánh câu trả lời với đáp án
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] == questions[i].answer) {
            result += 1;
        }
    }
    //in ra màn hình số câu trả lời đúng
    if (result > questions.length / 2) {
        resultContentEle.innerText = `Chúc mừng, bạn đã trả lời đúng ${result} / ${questions.length} câu hỏi!`
    } else if (result == 0) {
        resultContentEle.innerText = `Rất tiếc, bạn đã không trả lời đúng câu hỏi nào!`
    }
    else {
        resultContentEle.innerText = `Bạn chỉ trả lời đúng ${result} / ${questions.length} câu hỏi, xin chia buồn!`
    }
})


//sự kiện nút play again
btnPlayAgain.addEventListener('click', function () {
    window.location.reload();
})


window.onload = showQuestion(currentQuestion)



