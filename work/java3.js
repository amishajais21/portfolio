var h1= document.querySelector("h1");
var description= document.querySelectorAll(".img__description");
var img = document.querySelectorAll(".one");
var social = document.querySelectorAll("footer .social i")
document.body.style.backgroundImage = "url('back.jpg')";
h1.style.fontFamily="'Freckle Face', cursive";
h1.style.fontSize="50px";

for(var i=0; i< img.length; i++){
 img[i].onmouseover=  function(){
    for(var i=0; i< img.length; i++){

    description[i].style.visibility = "visible";
    
    }
 }
 img[i].onmouseout=  function(){
   for(var i=0; i< img.length; i++){

   description[i].style.visibility = "hidden";
   
   }
}
    };



for(var i=0; i< social.length; i++){
      social[i].addEventListener('mouseover', function(){
          this.style.color="cornflowerblue";   
      
      });
      social[i].addEventListener('mouseout', function(){
        this.style.color="white";   
      
 });
}