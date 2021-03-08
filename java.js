var h1=document.querySelector(".intro h1");
var btn=document.getElementById("btn");
var social = document.querySelectorAll("footer .social i");
// var greet = document.querySelector("h1 span");
h1.style.color = "white";
h1.style.fontSize = "60px";
h1.style.fontFamily = "'Gurajada', serif";
h1.style.fontWeight = "bold";
document.body.style.backgroundImage = "url('back.jpg')";

btn.addEventListener('click', function(){
alert("Redirecting you to the Contact page");
location.href = "contact/contact.html";
})
btn.addEventListener('mouseover', function(){
this.style.color ="black";
this.style.backgroundColor = "#6495ED"

});
btn.onmouseout = function(){
    this.style.color ="";
    this.style.backgroundColor ="";
};
document.querySelector(".picture img").animate([
   { transform: 'rotate(7deg)' }, 
  { transform: 'rotate(-7deg)' }

  ], { 
    duration: 3000,
    direction: "alternate-reverse",
    iterations: Infinity
  });
  
  document.onLoad = setInterval(colorChange, 1000);


function colorChange() {
    var x = document.querySelectorAll(".bold");
    for(var i=0; i< x.length; i++){
if (x[i].style.color== "cornflowerblue")
x[i].style.color = "white";
else
x[i].style.color ="cornflowerblue";
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

// var fonts = ['times', 'verdana', 'arial'];
  // var currentFont = 0
  
  // function changeFont() {
  //   greet.style.fontFamily = fonts[currentFont++ % fonts.length]
  // }
  
  // document.onload=setInterval(changeFont, 1000);
  