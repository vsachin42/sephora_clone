let renderCards = document.querySelector(".cleanser-right-2")
let dataURL = "https://6395eda290ac47c68077fa1c.mockapi.io/products/"
let sortButton = document.querySelector(".sorT");
let productId = JSON.parse(localStorage.getItem('productId')) || [];

async function data() {
    try {
        let res = await fetch(dataURL)
        let data = await res.json();
        // console.log(data)
        let mappedData = data.map((item) => {
            let obj = { ...item };
            obj.image = item.product_img;
            obj.name = item.product_name;
            obj.title = item.product_name2;
            obj.price = item.product_price;
            return obj;
        })


        cardsRender(mappedData)
        sortButton.addEventListener("change", async function (e) {
            let value = sortButton.value;

            if (value === "lowtohigh") {
                let finaldata = mappedData.sort((a, b) =>
                    a.price - b.price
                )
                cardsRender(finaldata)
            }
            else if (value === "hightolow") {
                let finaldata = mappedData.sort((a, b) =>
                    b.price - a.price
                )
                cardsRender(finaldata)
            }
            else {
                cardsRender(mappedData)
            }
        });



    }
    catch (e) { }
}
data()




function cardsRender(data) {
    // console.log(data)
    renderCards.innerHTML = data.map((item) => {
        return cards(item.image, item.name, item.title, item.price, item.id)
    }).join(' ');
    console.log(data);


    let card = document.querySelectorAll('.addtocart');
    for (let item of card) {
        item.addEventListener('click', () => {

            let logintext = document.querySelector("#hhhhhhhh").innerText
            if (logintext === "Login") {
                alert("Please login first!")
            }
            else {
                productId.push(+(item.id));
                console.log(productId);
                localStorage.setItem('productId', JSON.stringify(productId));
                alert('Product added to the cart');
            }
            console.log(document.querySelector('.cards'));
        })
    }

}




function cards(img, name, title, price, id) {
    return `
    <div class="cards" data-id="${id}">
        <img class="imggg" src=${img} alt="">
        <p>${name}</p>
        <p>${title}</p>
        <p>Rs. ${price}</p>
        <div class="hovershopper">
            <div id='${id}' class="addtocart">
            <i class="fa-solid fa-bag-shopping"></i>
            <h3>Add to Cart</h3>
            </div>
            <div class="favourite">
            <i class="fa-regular fa-heart"></i>
            <h3>FAVOURITE</h3>
            </div>
        </div>
    </div>
    `

}



// document.querySelectorlet cartPage = document.querySelector('.fa-shopping-bag');
document.querySelector("#login").addEventListener('click', () => {
    window.location.href = "login.html";
})

document.querySelector("#carrrrrttttttt").addEventListener('click', () => {
    window.location.href = "addtocart.html";
})





