let monthEle = document.querySelector('.month')
let yearEle = document.querySelector('.year')
let btnNext = document.querySelector('.btn-next')
let btnPrev = document.querySelector('.btn-prev')
let dataEle = document.querySelector('.date-container')



let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear()

function displayInfo() {
    //Hiển thị tên tháng
    let currentMonthName = new Date(currentYear,currentMonth).toLocaleString("en-us", { month: "long" });
    monthEle.innerText = currentMonthName
    //Hiển thị năm
    yearEle.innerText = currentYear

    //Hiển thị ngày trong tháng
    renderDate();

    //Hiển thị ngày bắt đầu của tháng

    //Active ngày hiện tại

}

//lấy số ngày của 1 tháng
function getDaysInMonth() {
    return new Date(currentYear, currentMonth +1, 0).getDate()     //get date là lấy ngày trong tháng 1-31
}
//lấy ngày bắt đầu của tháng
function getStartDayInMonth() {
    return new Date(currentYear, currentMonth,1).getDay()   //get day là lấy ngày trong tuần từ 0 đến 6
}

//active current day
function activeCurrentDay(day) {
    let day1 = new Date().toDateString();       //day1 là ngày tháng hiện tại
    let day2 = new Date(currentYear,currentMonth,day).toDateString()   //day2 là ngày tháng khởi tạo
    return day1 == day2 ? "active" : ""  //trả về chữ active hoặc rỗng
}
 
//Render ngày lên UI
function renderDate() {
    let daysInMonth = getDaysInMonth()
    let startDay = getStartDayInMonth()
    dataEle.innerHTML = ''
// dùng 2 vòng lặp for, lặp cho startday trước
    for (let i=0; i< startDay;i++) {
        dataEle.innerHTML += `
        <div class = "day "></div>            
        `
    }
    for (let i=0; i< daysInMonth;i++) {
        dataEle.innerHTML += `
        <div class = "day ${activeCurrentDay(i+1)}"> ${i+1} </div>       
        `
        //trả về class active: tự động bôi đậm
    }
}

btnNext.addEventListener('click', function(){
    monthEle.innerText = new Date(currentYear,currentMonth++)
    .toLocaleString("en-us", { month: "long" });//bước này có thể rút ngắn bằng gọi function displayInfor()
    
    if (monthEle.innerText == "December") {
        yearEle.innerText = currentYear++
    }
    else {
        yearEle.innerText = currentYear
    }
    displayInfo()
})

btnPrev.addEventListener('click', function(){
    monthEle.innerText = new Date(currentYear,currentMonth--).toLocaleString("en-us", { month: "long" });
    if (monthEle.innerText == "January") {
        yearEle.innerText = currentYear--
    }
    else {
        yearEle.innerText = currentYear
    }
    displayInfo()
})

window.onload = displayInfo         //khi reload trình duyệt, function sẽ được thực thi