//mockup mảng công việc (todos)
//mỗi công việc bao gồm 3 thuộc tính: id, title, status => id lấy ngẫu nhiên (tạo function random)
//từ todos => render ra ngoài giao diện
//todo item => status = true => thêm class "active-todo", input - checked

//truy cập vào các phần tử:
let todoListEle = document.querySelector('.todo-list')
let todoInputEle = document.querySelector('#todo-input')
let BtnAddWorkEle = document.querySelector('#btn-add')
let inputCheckEle = document.querySelectorAll('.todo-item-title input')


//1: mockup mảng công việc
function randomId() {
    return Math.floor(Math.random() * 100000)
}
let todos = [
    {
        id: randomId(),
        title: "đi chơi",
        status: false
    },
    {
        id: randomId(),
        title: "làm bài tập",
        status: true
    },
    {
        id: randomId(),
        title: "đá bóng",
        status: false
    }
]
console.log(todos)

//2: render ra ngoài giao diện
function renderTodosList(arr) {
    todoListEle.innerHTML = ''
    for (let i=0; i< arr.length; i++) {
        let arr[i] = a
        todoListEle.innerHTML += `
        <div class="todo-item active-todo">
        <div class="todo-item-title">
            <input type="checkbox">
            <p>${a.title}</p>
        </div>
        <div class="option">
            <button class="btn btn-update">
                <img src="./img/pencil.svg" alt="icon">
            </button>
            <button class="btn btn-delete">
                <img src="./img/remove.svg" alt="icon">
            </button>
        </div>
        </div>
    `
    }
}
renderTodosList(todos)
//nhập công việc, ấn thêm sẽ được push vào array todos
BtnAddWorkEle.addEventListener('click', function() {
    if (todoInputEle.value == '') {
        alert('Bạn chưa nhập công việc')
    } else {
        let newItem = {
        id: randomId(),
        title: todoInputEle.value,
        status: false,
        }
        console.log(newItem)
        todos.push(newItem)
        renderTodosList(todos)
    }
})

//nếu người dùng tích vào ô công việc thì công việc sẽ bị gạch bỏ thể hiện đã hoàn thành: 
