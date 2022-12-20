let iddddd = localStorage.getItem("singleproductid");
let dataURL = `https://6395eda290ac47c68077fa1c.mockapi.io/products/${+iddddd}`
// console.log(dataURL);
let productId = JSON.parse(localStorage.getItem('productId')) || [];


async function data(dataURL) {
    try {
        let res = await fetch(dataURL)
        let data = await res.json();
        // console.log(data);
        cardssssss(data.product_img, data.product_name2, data.product_price, data.product_name)




        let carddddd = document.querySelector('.addtocart');

        carddddd.addEventListener('click', () => {

            // let logintext = document.querySelector("#hhhhhhhh").innerText
            
                productId.push(iddddd);
                // console.log(productId);
                localStorage.setItem('productId', JSON.stringify(productId));
                alert('Product added to the cart');
            
            // console.log(document.querySelector('.cards'));
        })
    }
    catch (e) { }


}
data(dataURL)











function cardssssss(img, name, price, title) {
    document.querySelector(".singlepage-2").innerHTML = `
    
    <div class="singlepage-2-1">
        <img src="${img}" alt="">
      </div>


      <div class="singlepage-2-2">
        <div class="singlepage-2-2-1">
          <div class="singlepage-2-2-1-1">
            <img
              src="${img}"
              alt="">
            
          </div>
          <p class="clinique">${title}</p>
          <p class="cleansingbalm">${name}</p>
          <p class="star"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
              class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
          <p class="paise">Rs.${price}</p>
        </div>


        <div class="singlepage-2-2-2">
          <p class="singlepage-2-2-2-1">SIZE :</p>
          <div class="singlepage-2-2-2-2">
            <p>30ML</p>
          </div>
          <div class="singlepage-2-2-2-3">
            <div class="singlepage-2-2-2-3-1">
              <i class="fa-solid fa-circle-exclamation"></i>
            </div>
            <div class="singlepage-2-2-2-3-2">
              <p>IMPORTANT</p>
              <p>
                All products that will be shipped will have a shelf-life more than 8 months to 3 years.
              </p>
            </div>
          </div>
          <p class="nocolor"><b>COLOR :</b> No Colour</p>
          <div>
            <img src="${img}" alt="">
          </div>
        </div>


        <div class="singlepage-2-2-3 addtocart">
          ADD TO BAG
        </div>


        <div class="singlepage-2-2-4">
          <div class="singlepage-2-2-4-1">
            <div class="singlepage-2-2-4-1-1"><i class="fa-regular fa-heart"></i></div>
            <p>FAVOURITE</p>
          </div>
          <div>
            <div class="singlepage-2-2-4-1-1"><i class="fa-solid fa-share-nodes"></i></div>
            <p>SHARE</p>
          </div>
        </div>


        <div class="singlepage-2-2-5">
          <div class="singlepage-2-2-5-1">
            <img src="https://static.nnnow.com/client/assets/images/pdp/pdp_non_returnable_logo.png" alt="">
          </div>
          <div class="singlepage-2-2-5-2">
            <p class="singlepage-2-2-5-2-p">RETURN POLICY ON THIS ITEM</p>
            <p>This item is non-returnable.</p>
          </div>
        </div>


        <div class="singlepage-2-2-6">
          <img src="https://static.nnnow.com/client/assets/images/pdp/pdp_desktop_1.jpg" alt="">
          <p>DELIVERY/STORE OPTION :</p>
          <p>Enter your pincode to view delivery & store options</p>
        </div>


        <div class="singlepage-2-2-7">
          <input type="text">
          <button>CHECK</button>
        </div>


      </div>
    `
}