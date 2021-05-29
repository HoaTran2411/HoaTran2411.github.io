//function random để lấy ID
function randomId() {
    return Math.floor(Math.random() * 100000)
}
//convert số sang VND (thêm chữ vnd và dấu phẩy)
function convertMoney(num) {
    return num.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
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
        count: 2,
        image: 'https://storage.googleapis.com/cdn.nhanh.vn/store2/78054/ps/20210224/vkz21a_101_014.jpg',
    },
    {
        id: randomId(),
        name: 'Blazer 5 khuy cộc tay',
        description: 'Dễ mix quần áo',
        price: 200000,
        count: 3,
        image: 'https://storage.googleapis.com/cdn.nhanh.vn/store2/78054/ps/20210311/kbl21o_102_004.jpg',
    },

]

//danh sách mã giảm giá
let promotionCode = {
    A: 10,
    B: 20,
    C: 30,
    D: 40,
}


//truy cập vào các thành phần
let productsEl = document.querySelector('.products')
let countEl = document.querySelector('.count')
let subtotalEl = document.querySelector('.subtotal span')
let vatEl = document.querySelector('.vat span')
let totalEl = document.querySelector('.total span')
let inputPromoCode = document.querySelector('#promo-code')
let discount = document.querySelector('.discount')
let discountEl = document.querySelector('.discount span')


//hiển thị sản phẩm ra ngoài giao diện
function renderProducts(arr) {
    productsEl.innerHTML = ''
    //cập nhật số lượng sản phẩm
    countEl.innerText = `${updateTotalProduct(arr)} items in the bag`;
    //cập nhật tổng số tiền
    updateTotalMoney(arr)

    //kiểm tra sản phẩm có hay không
    if(arr.length == 0 ) {
        document.querySelector('.option-container').classList.add('hide');
        productsEl.insertAdjacentHTML('afterbegin','<li>Không có sản phẩm nào trong giỏ hàng</li>')
        return //để kết thúc hàm, hàm này sẽ không chạy xuống bên dưới
    }

    //hiển thị sản phẩm
    for (let i = 0; i < arr.length; i++) {
        const p = arr[i];
        productsEl.innerHTML += `
    <li class="row">
        <div class="col left">
            <div class="thumbnail">
                <a href="#">
                    <img src="${p.image}" alt="${p.name}" />
                </a>
            </div>
            <div class="detail">
                <div class="name"><a href="#">${p.name}</a></div>
                <div class="description">
                ${p.description}
                </div>
                <div class="price">${convertMoney(p.price)}</div>
            </div>
        </div>

        <div class="col right">
            <div class="quantity">
                <input type="number" class="quantity" step="1" value="${p.count}" 
                onchange ="updateCountProduct(${p.id}, event)"/>
            </div>

            <div class="remove" onclick = "deleteProduct(${p.id})">
                <span class="close"><i class="fa fa-times" aria-hidden="true"></i></span>
            </div>
        </div>
    </li>
        `
    }
}

//cập nhật số lượng sản phẩm
function updateTotalProduct(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].count
    }
    return sum
}
//cập nhật tổng số tiền
function updateTotalMoney(arr){
    let subtotal = 0;
    let discountMoney = 0;
    //tổng tiền đơn hàng
    for (let i = 0; i < arr.length; i++) {
        subtotal += (arr[i].count * arr[i].price)
    }
    //tính toán tiền giảm giá
    let data = checkPromotionCode()
    if(data.status) {
       discountMoney = subtotal * data.value / 100;
       discount.classList.remove('hide')
    } else {
        discount.classList.add('hide');
    }

    //hiển thị lên giao diện
    subtotalEl.innerText = convertMoney(subtotal);
    vatEl.innerText = convertMoney(subtotal * 0.1);
    discountEl.innerText = convertMoney(discountMoney)
    totalEl.innerText = convertMoney(Math.round(subtotal * 1.1 - discountMoney))
}

//xóa sản phẩm
function deleteProduct(id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products.splice(i,1)
        }
    }
    renderProducts(products)
}
//cập nhật số lượng sản phẩm
function updateCountProduct(id, e) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products[i].count = Number(e.target.value)
        }
    }
    renderProducts(products)
    //console.log(id, Number(e.target.value))  //sự kiện on change, update số lượng, kích chuột ra ngoài ô đó thì function mới thực hiện
//value của ô input lấy ra đang là dạng string, phải chuyển thành số để tính toán
}
//Kiểm tra mã giảm giá có hợp lệ hay không
function checkPromotionCode() {
let code = inputPromoCode.value;
if (promotionCode[code]) {       //lấy ra ra được giá trị == true, nếu false, có 5 TH: false, NaN,null, undefined, '',
return {status: true, value: promotionCode[code]}
} else {
    return {status: false, value: 0}
}
}
document.querySelector('.promotion button').addEventListener('click',function(){
    updateTotalMoney(products)

})

window.onload = renderProducts(products)













