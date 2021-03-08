var btn=document.getElementById("btn");
var social = document.querySelectorAll("footer .social i");
// var map=document.querySelector("iframe");

document.onLoad = setInterval(colorChange, 1000);
function colorChange() {
    var x = document.getElementById('h1');
if (x.style.color== "white")
x.style.color = "red";
else if (x.style.color== "red")
x.style.color = "green";
else if (x.style.color== "green")
x.style.color = "yellow";
else
x.style.color ="white";
};
for(var i=0; i< social.length; i++){
    social[i].addEventListener('mouseover', function(){
        this.style.color="cornflowerblue";   
    
    });
    social[i].addEventListener('mouseout', function(){
      this.style.color="white";   
    
});
}
// document.onload = setInterval(getBorder, 1000);

//     function getBorder() {
// if(map.style.border=="none")

// map.style.border="5px solid black";
// else
// map.style.border="none";
// };
btn.addEventListener('mouseover', function(){
    this.style.color ="black";
    this.style.backgroundColor = "#6495ED"
    
});
 btn.onmouseout = function(){
        this.style.color ="";
        this.style.backgroundColor ="";
};