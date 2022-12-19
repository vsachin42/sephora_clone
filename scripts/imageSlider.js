



// ************************************ code for image slider  ******************************************************

var image2 = document.getElementsByClassName("image");

var imageno =1;
displayimg(imageno);

let imgintervel =  setInterval(function(){

    
    if(imageno===image2.length+1){
        imageno=1;
    }
 
   
    console.log(imageno);
    displayimg(imageno);
    imageno++;
 },2000)

function nextimg(n){
    displayimg(imageno += n)
    clearInterval(imgintervel);
}

function currentSlide(n){
    displayimg(imageno = n)
    clearInterval(imgintervel);
}

function displayimg(n){
    var i;
    var image = document.getElementsByClassName("image");
    var dots = document.getElementsByClassName("dot");

    if(n > image.length){
        imageno = 1;
    }

    if(n < 1){
        imageno = image.length;
    }

    for(i=0; i < image.length; i++){
        image[i].style.display = "none";
    }

    for(i=0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
    }

    image[imageno - 1].style.display ="block";
    dots[imageno - 1].className += " active";
   

}


// *********************************************************************************************************************

// Go cart page functionality

