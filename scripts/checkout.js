let logo = document.querySelector('#logo');
let login = document.querySelector('#login');
let continueBtn = document.querySelector("#continueBtn");

logo.addEventListener('click',()=>{
    window.location.href = 'index.html';
})

login.addEventListener('click',()=>{
    window.location.href = 'admin_page.html';
})

continueBtn.addEventListener('click',()=>{
    // window.location.href = "payment.html";
})