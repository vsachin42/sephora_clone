signupForm=document.querySelector(".signup-bottom>form");
let url="https://6395eda290ac47c68077fa1c.mockapi.io/users/";
signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;
    let phone = document.querySelector(".phone").value;
    console.log(name,email,password,phone);
    addUsers(name,email,password,phone);
})
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
            window.location.href = "login.html";
        }
    } 
    
    catch (error) {
        alert("Something went wrong.")    
    }
}