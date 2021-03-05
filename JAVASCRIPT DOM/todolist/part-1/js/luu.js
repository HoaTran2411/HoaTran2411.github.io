//mới vào sẽ gọi dữ liệu trong local storage lên
//mỗi khi tác động vào dữ liệu, sẽ tải lên local storage

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
// truy cập vào các phần tử
const todo_list = document.querySelector('.todo-list')
const todo_input = document.querySelector('#todo-input')
const btn_add = document.querySelector('#btn-add');
const btn_update = document.querySelector('.btn-update')
const options = document.querySelectorAll('.todo-option-item input')

//tạo biến:
let idUpdate = null;
let isUpdate = false;

//thêm công việc
btn_add.addEventListener('click', function () {
    let title = todo_input.value
    //kiểm tra dữ liệu
    if (title == '') {
        alert('bạn chưa nhập công việc')
        return
    }
    if (isUpdate) {                           //thực hiện tính năng nút sửa
        //tiến hành sửa nội dung công việc
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id == idUpdate) {
                todos[i].title = title
            }
        }
        idUpdate = null;                //sau khi sửa xong, reset về trạng thái ban đầu, nút sửa thành nút thêm
        isUpdate = false;
        btn_add.innerText = "Thêm"
    }
    else {                                    //thực hiện tính năng nút thêm
        //thêm todo mới vào mảng todos
        let newTodo = {
            id: randomId(),
            title: title,
            status: false
        }
        todos.push(newTodo)
    }
    //lấy dữ liệu trong ô input

    //render lại giao diện
    renderUI(todos)
    todo_input.value = ''
})


//render ra ngoài giao diện
function renderUI(arr) {
    //lọc dữ liệu
    let optionValue = getOptionSelected();
    let newTodos = []
    switch (optionValue) {
        case 1:
            newTodos = [...arr]
            break;
        case 2:
            newTodos = arr.filter(todo => todo.status == false)
            break;
        case 3:
            newTodos = arr.filter(todo => todo.status == true)
            break;
        default:
            newTodos = [...arr]
            break;
    }
    todo_list.innerHTML = ''
    //kiểm tra danh sách todos có rỗng hay không
    if (newTodos.length == 0) {
        todo_list.innerHTML = `<p class = "todos-empty">Không có công việc nào trong danh sách!</p>`
        return
    }
    for (let i = 0; i < newTodos.length; i++) {
        const t = newTodos[i]
        todo_list.innerHTML += `
                <div class="todo-item ${t.status ? "active-todo" : ""}">
                    <div class="todo-item-title">
                        <input type="checkbox" ${t.status ? "checked" : ""} onclick = toggleStatus(${t.id})>
                        <p>${t.title}</p>
                    </div>
                    <div class="option">
                        <button class="btn btn-update" onclick = updateTodo(${t.id}) >
                            <img src="./img/pencil.svg" alt="icon">
                        </button>
                        <button class="btn btn-delete" onclick = deleteTodo(${t.id})>  
                            <img src="./img/remove.svg" alt="icon">
                        </button>
                    </div>
                </div>
        `
    }
}
//xóa công việc, cần biết ID ứng với công việc
function deleteTodo(id) {
    //lặp qua mảng todos
    //tìm công việc nào có id = id truyền vào
    //xóa công việc đó ra khỏi mảng todos
    //gọi lại renderUI
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos.splice(i, 1)
        }

    }
    renderUI(todos)
}
function toggleStatus(id) {
    for (let i = 0; i < todos.length; i++) {
        // if (todos[i].id == id && todos[i].status == true) {
        //     todos[i].status = false
        // }
        // else if (todos[i].id == id && todos[i].status == false) {
        //     todos[i].status = true
        // }
        // else {
        //     todos = todos
        // }
        if (todos[i].id == id) {
            todos[i].status = !todos[i].status //cách viết ngắn gọn, trong trường hợp status là true thì đổi thành false và ngược lại
        }
    }
    renderUI(todos)
}

//sửa đổi nội dung công việc
function updateTodo(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todo_input.value = todos[i].title
        }
    }
    btn_add.innerText = "Sửa"
    todo_input.focus()
    idUpdate = id;
    isUpdate = true;
}
//lọc công việc
options.forEach(option => {
    option.addEventListener('change', function () {
        renderUI(todos)
    })
})
function getOptionSelected() {
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked == true) {                   //kiểm tra trạng thái checked của ô input
            return Number(options[i].value)
        }
    }
}


window.onload = renderUI(todos)


