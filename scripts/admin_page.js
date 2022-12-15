let table=document.querySelector(".display-main");
let url="https://6395eda290ac47c68077fa1c.mockapi.io/products/"

// // tableHead.innerHTML="Hee"// document.querySelector(".logout span").style.color="red";;

async function fetchProducts(url){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    let headers=["Product Name","Price","Remove Product"];
    // clear the table
    // tableHead.innerHTML=`<tr></tr>`;
    // tableBody.innerHTML="";
    // appending headers
    // for(let head of headers){
    //     let header=document.createElement("th");
    //     header.textContent=head;
    //     tableHead.querySelector("tr").appendChild(header);

    // }
    renderTable(data,headers)
}


function renderTable(data,headers){
    table.innerHTML=`<table>
    <tr>
      <th>${headers[0]}</th>
      <th>${headers[1]}</th>
      <th>${headers[2]}</th>
    </tr>
    <tr>
      ${data.map((item) =>{
        let prod_name=item.name2;
        let price=item.price;
        let prod_img=item.img;
        let 

      })}
    </tr>
    // <tr>
    //     <td><img src="https://cdn15.nnnow.com/web-images/large/styles/YP6Z5HFY3JW/1518073456701/1.jpg"> Smoothing Cleanse</td>
    //     <td>100</td>
    //     <td><button>Delete</button></td>
    // </tr>
  </table>`
}
fetchProducts(url);