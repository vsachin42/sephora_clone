let renderCards = document.querySelector(".cleanser-right-2")
let dataURL = "https://6395eda290ac47c68077fa1c.mockapi.io/products/"
let sortButton = document.querySelector(".sorT")

async function data() {
    try {
        let res = await fetch(dataURL)
        let data = await res.json();
        // console.log(data)
        let mappedData = data.map((item) => {
            let obj = {...item};
            obj.image = item.product_img;
            obj.name = item.product_name;
            obj.title = item.product_name2;
            obj.price = item.product_price;
            return obj;
        })
        
        
        cardsRender(mappedData)     
        sortButton.addEventListener("change",async function(e){
            let value = sortButton.value;
            
            if(value==="lowtohigh"){
                let finaldata = mappedData.sort((a,b)=>
                    a.price-b.price
                )
                cardsRender(finaldata)
            }
            else if(value==="hightolow"){
                let finaldata = mappedData.sort((a,b)=>
                    b.price-a.price
                )
                cardsRender(finaldata)
            }
            else{
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
        return cards(item.image, item.name, item.title, item.price,item.id)
    }).join(' ');
    console.log(data);
}




function cards(img, name, title, price,id) {
    return `
    <div class="cards" data-id="${id}">
        <img src=${img} alt="">
        <p>${name}</p>
        <p>${title}</p>
        <p>Rs. ${price}</p>
        <div class="hovershopper">
            <div class="addtocart">
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



/**sort funtionality */

/*
/*
id
: 
"1"
product-size
: 
"50ml"
product_color
: 
"Green Tea"
product_desc
: 
"Water, Glycerin, Glyceryl Stearate, Hydrated Silica, Cetyl Alcohol, Dicaprylyl Carbonate, Stearic Acid, Caprylic/Capric Triglyceride, Palmitic Acid, Arachidyl Alcohol, Sodium Polyacrylate, Phenoxyethanol, Caprylyl/Capryl Glucoside, Polysorbate 20, PEG-100 Stearate, Behenyl Alcohol, Potassium Cetyl Phosphate, Microcrystalline Cellulose, Methyl Methacrylate Crosspolymer, Luffa Cylindrica Fruit Powder, Fragrance, Arachidyl Glucoside, Capryloyl Glycine, Diethylhexyl Syringylidenemalonate, Cellulose Gum, Xanthan Gum, Sodium Hydroxide, Limonene, Camellia Sinensis Leaf Extract, CI 77288 (Chromium Oxide Greens), CI 19140 (Yellow 5), Tocopherol, Citric Acid, Potassium Sorbate, CI 42090 (Blue 1)."
product_details
: 
"Mattifying and anti-blemish, effectively cleanse and remove makeup from the face while providing the benefits of each formula. A texture containing exfoliating micro-beads to gently unclog pores, eliminate dead cells and refine the skin texture."
product_img
: 
"https://cdn15.nnnow.com/web-images/large/styles/YP6Z5HFY3JW/1518073456701/1.jpg"
product_name
: 
"SEPHORA COLLECTION"
product_name2
: 
"Exfoliating Cleansing Cream"
product_price
: 
720*/




