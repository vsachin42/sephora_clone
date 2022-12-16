let display = document.querySelector(".display-main");
let bag = [];
let url = "https://6395eda290ac47c68077fa1c.mockapi.io/products/"
let side_prod = document.querySelector(".nav-links li:nth-child(1)");
let side_add = document.querySelector(".nav-links li:nth-child(2)");
let side_cust = document.querySelector(".nav-links li:nth-child(3)");
let side_ord = document.querySelector(".nav-links li:nth-child(4)");
let search = document.querySelector(".search");



//----------------All addEventListeners-----------------//


window.addEventListener("load", () => {
  fetchProducts(url);
});
side_prod.addEventListener("click", (e) => {
  e.preventDefault();
  fetchProducts(url);
})
side_add.addEventListener("click", (e) => {
  e.preventDefault();
  addForm();
})
search.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    event.preventDefault();
    // console.log(serach.value);
    let x = search.value;
    console.log(bag);
    let sdata = bag.filter(ele => {
      console.log(ele.product_name2);
      return ele.product_name2.toLowerCase().includes(x.toLowerCase());
    })
    console.log(sdata);
    if (sdata.length == 0) {
      document.querySelector(".display-main").innerHTML = "Can't Find Anything";
    }
    else {
      renderTable(sdata);
    }
    return;
  }
});

//--------------Functions for fetching products and rendiring to table-------------//


async function fetchProducts(url) {
  const response = await fetch(url);
  const data = await response.json();
  bag = data;
  renderTable(data);
}


function renderTable(data) {
  display.innerHTML = `<table>
  
    ${data.map((item, index) => {
    let name = item.product_name2;
    let price = item.product_price;
    let img = item.product_img;
    let id = item.id;
    return getasTd(img, name, price, id, index);
  }).join(" ")}
  </table>`


  let buttons = document.querySelectorAll(".display-main button")
  console.log(buttons);
  for (let btn of buttons) {
    btn.addEventListener("click", (event) => {
      let data_id = btn.id;
      DeleteBtn(data_id);
    });
  }
}

async function DeleteBtn(id) {
  try {
    let delete_request = await fetch(`https://6395eda290ac47c68077fa1c.mockapi.io/products/${id}`, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
      }
    });
    if (delete_request.ok) {
      fetchProducts(url);
    }

  }

  catch (error) {
    alert("Failed to delete")
  }
}

function getasTd(img, name, price, id, index) {
  // console.log(img,name,price,id)
  if (index == 0) {
    return `
    <tr><td><b>No.</b></td>
        <td><b>Product Name</b></td>
        <td><b>Product Price(Rs)</b></td>
        <td><b>Remove Product</b></td>
    </tr>
    <tr><td>${index + 1}</td>
        <td><img src=${img}> ${name}</td>
        <td>${price}</td>
        <td><button id=${id}>delete</button></td>
    </tr>
    `
  }
  else {
    return `
  <tr><tr>
      <td>${index + 1}</td>
      <td><img src=${img}> ${name}</td>
      <td>${price}</td>
      <td><button id=${id}>delete</button></td>
  </tr>
  `}

}

// Functions to add products

function addForm() {
  display.innerHTML = `
  <div class="form-style-5">
<form>
<fieldset>
<legend><span class="number">+</span> Fill in the details</legend>
<input type="text" name="field1" placeholder="Product Title *">
<input type="text" name="field2" placeholder="Product Name *">
<input type="url" name="field3" placeholder="Image Link *">
<input type="text" name="field4" placeholder="Product Price*">
<input type="text" name="field5" placeholder="Product Details*">
<input type="text" name="field5" placeholder="Additional Info*">  
</fieldset>
<input type="submit" value="Add" />
</form>
</div>
  `
}

