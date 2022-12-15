let logo = document.querySelector("#logo");
let login = document.querySelector("#login");
let subTotal = document.querySelector('#subTotal').innerText;
let discount = document.querySelector('#discount').innerText;
let GST = document.querySelector('#GST').innerText;
let deliveryCharge = document.querySelector('#deliveryCharge').innerText;
let totalPrice = document.querySelector('#totalPrice').innerText;
let checkout = document.querySelector("#checkoutBtn");
let shopMore = document.querySelector("#shopMoreBtn");

logo.addEventListener('click',()=>{
    alert('Redirecting to the landing page');
    window.location.href = 'index.html';
})

login.addEventListener('click',()=>{
    console.log("Login Page");
    alert('Login Page');
    window.location.href = 'admin_page.html';

    console.log(discount[6]);
    console.log((+discount[6])+10);
})

checkout.addEventListener('click',()=>{
    console.log('Hello');
    alert("Hi! Let's go to checkout page");
    window.location.href = 'checkout.html';

})

shopMore.addEventListener('click',()=>{
    alert('Go to shop more page');
})


