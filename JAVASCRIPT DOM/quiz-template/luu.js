//mockup câu hỏi
let questions = [
    {
        title: "Đố biết 1 + 1 = ?",
        answer: '2',
        option: ['1','2','3','4']
    },
    {
        title: "Đố biết 1 - 1 = ?",
        answer: '0',
        option: ['0','2','4','6']
    },
    {
        title: "Đố biết 5 * 2 = ?",
        answer: '10',
        option: ['10','20','30','40']
    }
]
//truy cập các phần tử html
let titleEle = document.querySelector('.quiz-question p');
let answerEle = document.querySelector('.quiz-answer')
let progressEl = document.querySelector('.quiz-progress-bar')
let nextBtn = document.querySelector('.next-btn')
let prevBtn = document.querySelector('.prev-btn')
let submitEle = document.querySelector('.finish-btn')


//gọi biến:
let currentQuestion = 0;
let answers = []

//render câu hỏi ra ngoài giao diện
function showQuestion(index) {
    let question = questions[index];
    titleEle.innerText = `Câu ${index+1}: ${question.title}`;
    answerEle.innerHTML = '';
    for (let i = 0; i < question.option.length; i++) {
    //nếu ô input và label cùng id, khi kích vào label sẽ chọn dc tích ô input
    //các ô input mà có name giống nhau thì chỉ chọn dc 1 đáp án duy nhất
    const a = question.option[i];
    answerEle.innerHTML += `
    <div class="quiz-item">
    <input type="radio" id="answer-${i+1}" name="question-${index+1}"
    ${answers[currentQuestion]== a ? 'checked' : ''}>
    <label for="answer-${i+1}">
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

    //ẩn hiện nút next
    if (index == questions.length - 1) {
        nextBtn.classList.add('disable')
    } else {
        nextBtn.classList.remove('disable')
    }
    //khi trả lời câu hỏi xong mới ấn dc nút next sang câu hỏi kế tiếp
    if(answers[currentQuestion]) {
        nextBtn.classList.remove('disable')
    } else {
        nextBtn.classList.add('disable')
    }

    //lắng nghe sự kiện ở các ô input
    let optionsEl = document.querySelectorAll('.quiz-item input')
    for (let i = 0; i < optionsEl.length; i++) {
        optionsEl[i].addEventListener("change",function(){
            let value = optionsEl[i].nextElementSibling.querySelector('p').innerText;
            answers[currentQuestion] = value;
            nextBtn.classList.remove('disable')
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
nextBtn.addEventListener('click',function(){
    currentQuestion++;
    if(currentQuestion > questions.length - 1) {
     currentQuestion = questions.length -1
    }
    showQuestion(currentQuestion)
})

//sự kiện nút previous
prevBtn.addEventListener('click',function(){
    currentQuestion--;
    if(currentQuestion < 0) {
    currentQuestion = 0;
    }
    showQuestion(currentQuestion)
})

//khi người chơi trả lời tới câu hỏi cuối cùng, sẽ hiện ra nút submit



window.onload = showQuestion(currentQuestion)

















