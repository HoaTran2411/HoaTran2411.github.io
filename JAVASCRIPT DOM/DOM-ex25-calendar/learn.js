//truy cập thẻ html
let btnPrevEle = document.querySelector('.btn-prev')
let btnNextEle = document.querySelector('.btn-next')
let monthEle = document.querySelector('.month')
let yearEle = document.querySelector('.year')
let dayEle = document.querySelector('.day-name')
let dateEle = document.querySelector('.day')
let dateContainerEle = document.querySelector('.date-container')

/* mục tiêu: 
1. ấn nút btn next và prev thì sang tháng liền kề, năm auto, day và date tự động thay đổi
2. dùng active css cho ngày hiện tại
*/

//ngày tháng năm hiện tại
//new Date() sẽ cho ra thứ, ngày tháng năm giờ, múi giờ hiện tại

let currentMonth = new Date().getMonth()
let currentYear = new Date().getFullYear()

function displayInfor() {
    //mục 1: hiển thị tên tháng
    //convert tháng từ dạng số sang dạng chữ, new Date(year, month, hours, minutes, seconds)
    //phải ghi đúng thứ tự tham số trong function new Date()
    let currentMonthName = new Date(currentYear, currentMonth).toLocaleString("en-us", { month: "long" })
    monthEle.innerText = currentMonthName

    //mục 2: hiển thị tên năm
    yearEle.innerText = currentYear

    //mục 3: hiển thị ngày trong tháng
    //hiển thị ngày bắt đầu của tháng
    //active ngày hiện tại
    renderDate()
}
displayInfor()

//tính số ngày của 1 tháng
function getDaysInMonth() {
    return new Date(currentYear, currentMonth + 1, 0).getDate()
    //tức là ngày 0 của tháng liền kề tháng hiện tại, tương đương ngày cuối tháng của tháng hiện tại
    //ví dụ tháng hiện tại là tháng 2 thì ngày cuối cùng của tháng 2 là ngày thứ 28 --> getDate = 28
}
console.log(getDaysInMonth())

//lấy ngày bắt đầu của tháng
function getStartDayInMonth() {
    return new Date(currentYear, currentMonth, 1).getDay()   //get day là lấy ngày trong tuần từ 0 đến 6
}
console.log(getStartDayInMonth())
//active current day
function activeCurrentDay(day) {
    let day1 = new Date().toDateString()  //todateString để chỉ lấy dữ liệu tới thứ ngày tháng năm, bỏ qua thời gian giờ phút giây
    let day2 = new Date(currentYear, currentMonth, day).toDateString()
    return day1 == day2 ? "active" : ""
}

//render ngày lên lịch
function renderDate() {
    let dayInMonth = getDaysInMonth()
    let startDay = getStartDayInMonth()
    dateContainerEle.innerText = ""
    //vòng lặp 1: những ngày trước start day, sẽ để trống thông tin
    for (let i = 0; i < startDay; i++) {
        dateContainerEle.innerHTML += `<div class="day"></div>`
    }
    //vòng lặp 2: những ngày từ start day tới hết dayinmonth sẽ được điền số từ 1 tới hết tháng, class active cho ngày hiện tại
    for (let i = 1; i < dayInMonth + 1; i++) {
        dateContainerEle.innerHTML += `<div class="day ${activeCurrentDay(i)}">${i}</div>`

    }
}



//bước 1: ấn nút btn next và prev
btnNextEle.addEventListener('click', function () {
    if (currentMonth != 11) {
        currentMonth += 1
    } else {
        currentMonth = 0
        currentYear += 1
    }
    displayInfor()
})

btnPrevEle.addEventListener('click', function () {
    if (currentMonth != 0) {
        currentMonth -= 1
    } else {
        currentMonth = 11
        currentYear -= 1
    }
    displayInfor()
})



//1 số công thức bổ sung (k liên quan bài toán)
//cách kiểm tra xem năm đó có phải năm nhuận không
function isLeapYear(year) {
    return new Date(year, 2, 0).getDate() > 28;  //số 2 chỉ tháng 3 kết hợp số 0 ở mục date thành ngày 0 tháng 3
    //tức là ngày cuối cùng của tháng 2 --> 28,29 hoăc 30.., nếu mà ngày ấy lớn hơn 28 --> năm nhuận
}
console.log(isLeapYear(2021))