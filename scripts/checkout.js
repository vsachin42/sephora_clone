let logo = document.querySelector('#logo');
let login = document.querySelector('#login');
let continueBtn = document.querySelector("#continueBtn");
let submit = document.querySelector('#submit');
let otp = document.querySelector('#otp').value;

logo.addEventListener('click',()=>{
    window.location.href = 'index.html';
})

login.addEventListener('click',()=>{
    window.location.href = 'signup.html';
})

submit.addEventListener('click',()=>{
alert('Order Placed Successfully');
window.location.href = 'index.html';
// console.log(otp);
})
