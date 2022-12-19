signinForm=document.querySelector(".signinform");
let url="https://6395eda290ac47c68077fa1c.mockapi.io/users/";
signinForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;
    console.log(email,password);
    checkUsers(email,password,url);
})
async function checkUsers(email,password,url) {
    const user_response = await fetch(url);
    const user_data = await user_response.json();
    // console.log(user_data,email,password)
    let sdata = user_data.filter(ele => {
        return (ele.email.toLowerCase().includes(email.toLowerCase()) && ele.password.includes(password));
      })
    // renderTableCust(cust_data);
    let mail=sdata[0].email;
    let pass=sdata[0].password;
    if(sdata.length=0){
        alert("Wrong Credintials")
    }
    else if(mail=="admin@mail.com" && pass=="admin"){
        alert("Admin Sign In Successful");
        window.open("./admin.html","_self");
    }
    else{
        alert("Sign In Successful");
        window.open("./index.html","_self");
    }
  }
async function addUsers(name,email,password,phone){
    try {
        
        let userObj = {
        name: name,
        email:email  ,
        password :password ,
        phone :phone 
      
        }
        let post_request = await fetch(url,{
            method : "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(userObj)
        })
        if(post_request.ok){
            alert("Successfully signed up");
        }
    } 
    
    catch (error) {
        alert("Something went wrong.")    
    }
}


let canabtn = document.querySelector(".cana");
canabtn.addEventListener("click",()=>{
    window.location.href = "signup.html";
});