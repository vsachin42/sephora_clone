

let subTotal = document.querySelector('#subTotal');
let discount = document.querySelector('#discount').innerText;
let GST = document.querySelector('#GST').innerText;
let deliveryCharge = document.querySelector('#deliveryCharge').innerText;
let totalPrice = document.querySelector('#totalPrice').innerText;
let checkout = document.querySelector("#checkoutBtn");
let shopMore = document.querySelector("#shopMoreBtn");
let productIdURL = 'https://6395eda290ac47c68077fa1c.mockapi.io/products/';
let productId = JSON.parse(localStorage.getItem('productId'))||[];
let container = document.querySelector('#productDetails');
let productPrice = JSON.parse(localStorage.getItem('productPrice'));






checkout.addEventListener('click',()=>{
    console.log('Hello');
    alert(`Redirecting to the payment page`);
    window.location.href = 'checkout.html';

})

shopMore.addEventListener('click',()=>{
    alert('Go to shop more page');
    window.location.href = 'product.html'
})
let total = 0;
productId.forEach((item,index)=>{
    async function renderData(){
        let res = await fetch(productIdURL+item);
        let data = await res.json();
        // console.log(data);

    let card = document.createElement('div');
     let image = document.createElement('img');
     image.setAttribute('src',data.product_img)
     
     let name = document.createElement("p");
     name.innerText = data.product_name;

     let title = document.createElement("p");
     title.innerText = data.product_name2;
     
     let price = document.createElement("p");
     price.innerText = 'Rs '+data.product_price;
     total +=  data.product_price;
    //  console.log(data.product_price);
     console.log(total);

     document.querySelector('#subTotal').innerText = 'Rs ' + total;
     document.querySelector('#totalPrice').innerText = 'Rs '+ total;
     
     let removeButton = document.createElement('button');
     removeButton.innerText = 'Remove';
     removeButton.addEventListener('click',()=>{
         alert('Product removed from cart page');
         deleteData(productId,index);
         location.reload();
         total = 0;
        })
        
        card.append(image,name,title,price,removeButton);
        container.append(card);
    }
    renderData();
})

function deleteData(data,index){
    data.splice(index,1);
    localStorage.setItem('productId',JSON.stringify(data));
}




