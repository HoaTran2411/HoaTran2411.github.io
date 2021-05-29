//truy cập các phần tử html
//render danh sách ra ngoài màn hình
//bố cục 1 phần tử: ảnh, tiêu đề, mô tả, giá, số lượng
//để phân biệt giữa các phần tử thì thêm id vào

//function random để lấy ID
function randomId() {
    return Math.floor(Math.random() * 100000)
}

//mockup danh sách sản phẩm
let products = [
    {
        id: randomId(),
        name: 'Váy babydoll cổ vuông',
        description: 'Đơn giản như 1 chiếc váy babydoll xoè đã đủ khiến chúng mình thật lung linh',
        price: 250000,
        count: 1,
        image: 'https://storage.googleapis.com/cdn.nhanh.vn/store2/78054/ps/20210225/vkz21d_101_018____9.jpg',
    },
    {
        id: randomId(),
        name: 'Váy hoa nhí nhún ngực',
        description: 'Chất vải nhẹ mát, hoạ tiết bông trẻ trung đang gây sốt chị em nha',
        price: 350000,
        count: 5,
        image: 'https://storage.googleapis.com/cdn.nhanh.vn/store2/78054/ps/20210224/vkz21a_101_014.jpg',
    },]

console.log(products)

//truy cập phần tử
let productsEle = document.querySelector('.products')
let totalEle = document.querySelector('.count')
let subtotalEle = document.querySelector('.subtotal span')
let vatEle = document.querySelector('.vat span')
let totalMoneyEle = document.querySelector('.total span')

//sau khi đã mockup danh sách sản phẩm thì render ra ngoài giao diện
function renderProducts(arr) {
    updateTotalProduct(arr)
    updateTotalMoney(arr)
    productsEle.innerText = '';
    for (let i=0; i < arr.length; i++) {
        let a = arr[i];
        productsEle.innerHTML += `
    <li class="row">
        <div class="col left">
            <div class="thumbnail">
                <a href="#">
                    <img src="${a.image}" alt="${a.name}" />
                </a>
            </div>
            <div class="detail">
                <div class="name"><a href="#">${a.name}</a></div>
                <div class="description">
                ${a.description}
                </div>
                <div class="price">${a.price}</div>
            </div>
        </div>

        <div class="col right">
            <div class="quantity">
                <input type="number" class="quantity" step="1" value="${a.count}" />
            </div>

            <div class="remove">
                <span class="close"><i class="fa fa-times" onclick = "removeProduct(${a.id})" aria-hidden="true"></i></span>
            </div>
        </div>
    </li>   
        `
    }
}

//cập nhật tổng số lượng sản phẩm
function updateTotalProduct(arr) {
    let totalProduct = 0
    for (let i=0; i< arr.length; i++) {
    totalProduct += arr[i].count
    }
    totalEle.innerText = `${totalProduct} items in the bag`
}

//cập nhập tính tiền
//gọi ra subtotal, vat, total
function updateTotalMoney(arr) {
    let totalMoney = 0;
    for (let i = 0; i< arr.length; i++) {
    totalMoney += arr[i].price*arr[i].count
    }
    subtotalEle.innerText = totalMoney;
    vatEle.innerText = totalMoney*0.1;
    totalMoneyEle.innerText = Math.round(totalMoney * 1.1);
}

//ấn nút x thì xóa sản phẩm đi
function removeProduct(id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products.splice(i,1)
        }
    }
    renderProducts(products)
}











window.onload = renderProducts(products)