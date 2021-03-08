var social = document.querySelectorAll("footer .social i");


for(var i=0; i< social.length; i++){
    social[i].addEventListener('mouseover', function(){
        this.style.color="cornflowerblue";   
    
    });
    social[i].addEventListener('mouseout', function(){
      this.style.color="white";   
    
});
}