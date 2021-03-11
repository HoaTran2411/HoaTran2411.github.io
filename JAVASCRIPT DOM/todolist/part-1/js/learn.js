//mockup mảng công việc (todos)
//mỗi công việc bao gồm 3 thuộc tính: id, title, status => id lấy ngẫu nhiên (tạo function random),
// tạo title: nội dung công việc, status: thuộc tính xem đã hoàn thành hay chưa, id để phân biệt cv này vs cv khác
//từ todos => render ra ngoài giao diện
//todo item => status = true => thêm class "active-todo", input - checked

//truy cập vào các phần tử:
let todoListEle = document.querySelector('.todo-list')
let todoInputEle = document.querySelector('#todo-input')
let BtnAddWorkEle = document.querySelector('#btn-add')
let inputCheckEle = document.querySelectorAll('.todo-item-title input')

//tạo biến:
let idCheck = null;      //biến này để lưu id của cv cần sửa
let isAmend = false;         //tạo biến này để kiểm tra đang ở trạng thái thêm cv hay sửa cv, false là thêm, true là sửa cv


//1: mockup mảng công việc
function randomId() {
    return Math.floor(Math.random() * 100000)
}
let todos = [
    {
        id: randomId(),
        title: "Đi học lớp lập trình",
        status: false
    },
    {
        id: randomId(),
        title: "Làm bài tập về nhà JS",
        status: true
    },
    {
        id: randomId(),
        title: "Mua dầu gội đầu",
        status: false
    }
]
console.log(todos)
//gọi nút all, chưa hoàn thành và hoàn thành ra
let options = document.querySelectorAll('.todo-option-item input')
console.log(options)

//2: render ra ngoài giao diện
//nếu không có công việc nào, tức arr k có phần tử nào thì ghi nội dung "k có nào trong danh sách"
//nếu có thì render ra các công việc: nếu status bằng true thì tự động gạch ngang cv, và có dấu tích (active-todo),checked
//mục all-chưa hoàn thành - hoàn thành, phân biệt bằng value 1-2-3
//lấy ra value của ô đang ở trạng thái checked (được tích chọn): 1-2-3
//chia 4 trường hợp tương ứng 4 trạng thái ô input đang ở value 1-2-3-defalt
//lắng nghe sự kiện khi thay đổi value từ 1-2-3, 4 case dc chạy
function renderTodosList(arr) {
    let valueOption = getValueOption(options)
    //dùng switch case để xét 4 TH của biến valueOption, khi ấy sẽ làm thay đổi list danh sách todos, tức là thay đổi arr
    let newArr = []
    switch(valueOption) {
        case 1: newArr = [...arr]
            break;
        case 2: newArr = arr.filter(option => option.status == false)
            break;
        case 3: newArr = arr.filter(option => option.status == true)
            break;
        default: newArr = [...arr]
    }
    //khi đó arr được đổi thành newArr, sẽ render cho newArr
    //đã xét xong 4 TH dựa theo value của từng option, bây giờ cần lắng nghe sự kiện khi kích vào từng option, viết function ra ngoài
    todoListEle.innerHTML = ''
    if (newArr.length == 0) {           //không thể so sánh arr với [], phải dùng arr.length == 0
        todoListEle.innerHTML = "<p class = 'todos-empty'>Không có công việc nào trong danh sách</p>"
    } else {
        for (let i=0; i< arr.length; i++) {
            let a = newArr[i]
            todoListEle.innerHTML += `
            <div class="todo-item ${a.status ? 'active-todo' : ""}">
            <div class="todo-item-title">
                <input type="checkbox" ${a.status ? 'checked' : ''} onclick = toggleStatus(${a.id})>
                <p>${a.title}</p>
            </div>
            <div class="option">
                <button class="btn btn-update">
                    <img src="./img/pencil.svg" alt="icon" onclick = reviseTodo(${a.id})>
                </button>
                <button class="btn btn-delete" onclick = removeTodo(${a.id})>
                    <img src="./img/remove.svg" alt="icon">
                </button>
            </div>
            </div>
        `
        }
    }  
}
//lấy ra value của từng option all - hoàn thành - chưa hoàn thành, cái này được checked, lấy ra value cái đó
function getValueOption(arr) {
    for (let i = 0; i < arr.length; i++ ) {
    if (arr[i].checked == true) {
        return Number(arr[i].value)      //chuyển về dạng number để so sánh dc khi dùng switch case ===
    }
    }
}
console.log(getValueOption(options))    //hiện tại đang là all, sẽ trả về value 1

//lắng nghe sự kiện từng option để lọc ra dữ liệu công việc hoàn thành, chưa hoàn thành và tất cả
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', function(){
        renderTodosList(todos)
    })
}

//click vào dấu x đỏ thì remove công việc, tìm công việc có id nhập trùng vs id trong object của array thì remove đi
function removeTodo(id) {
for (let i=0; i<todos.length; i++) {
    if (todos[i].id == id) {         //nếu trùng id thì remove phần tử đó khỏi array, dùng splice
    todos.splice(i,1)
    }
}
renderTodosList(todos)
}

//click vào ô vuông, nếu dấu tích thì chữ bị gạch đã hoàn thành, còn nếu dấu tích tắt đi thì dấu gạch chữ bị biến mất
function toggleStatus(id) {
    for (let i =0; i<todos.length;i++) {
        if (todos[i].id == id) {
            todos[i].status =! todos[i].status      //thuộc tính status của công việc bằng ngược lại của chính nó
            //tức là khi nó đang là true, tích vào sẽ bằng ngược lại là false.
        }
    }
renderTodosList(todos)
}

//click vào hình bút chì thì sửa đổi được công việc
//ý tưởng: khi click vào bút chì, thì nội dung cv truyền vào ô input, và nút thêm thành sửa
//sửa nội dung trong ô input, kích vào nút sửa thì title mà có id là id khi được click vào được cập nhật, 
//đồng thời nút sửa trở về nút thêm
//tức là 1 nút sẽ có 2 chức năng
//sẽ có biến id 
function reviseTodo(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todoInputEle.value = todos[i].title
            BtnAddWorkEle.innerHTML = "Sửa"
        }
    }
    idCheck = id;
    isAmend = true;
}


//nhập công việc, ấn thêm sẽ được push vào array todos
BtnAddWorkEle.addEventListener('click', function() {
    if (todoInputEle.value == '') {
        alert('Bạn chưa nhập công việc')
    } 
    if (isAmend) {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id == idCheck) {
                todos[i].title = todoInputEle.value
            }
        }
        //Sau khi update array todos (sửa title), thì cần update renderTodosList thì title mới dc update ra ngoài màn hình
        renderTodosList(todos)
        todoInputEle.value = ''
        isAmend = false;
        idCheck = null;
        BtnAddWorkEle.innerHTML = "THÊM"
        todoInputEle.focus()
    }
    else {
        let newItem = {
        id: randomId(),
        title: todoInputEle.value,
        status: false,
        }
        todos.push(newItem)
        renderTodosList(todos)
        todoInputEle.value = ''
        todoInputEle.focus()
    }
})


window.onload = renderTodosList(todos)