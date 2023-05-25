var block=document.getElementById("block");
var hole = document.getElementById("hole");
var charcter = document.getElementById("character");
var jumping = 0;
var counter=0;

hole.addEventListener('animationiteration',() => {
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
});
setInterval(function(){
    var charcterTop =parseInt( window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping==0) {
        charcter.style.top = (charcterTop+3)+"px";
    }

    var blockLeft = parseInt( window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt( window.getComputedStyle(hole).getPropertyValue("top"));
    var charcterTop =parseInt( window.getComputedStyle(character).getPropertyValue("top"));
    var cTop = -((500-charcterTop));
    if ((charcterTop>400)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+100)))){
       alert("GAME OVER.SCORE:"+counter)      
                charcter.style.top = 100+"px";
                counter=0;
       
        
    }
},10)


function jump(){
 jumping = 1;
 jumpCount = 0;
 var jumpInterval = setInterval(function(){
    var charcterTop =parseInt( window.getComputedStyle(character).getPropertyValue("top"));
   if ((charcterTop>6)&&(counter<15)) {
    charcter.style.top = (charcterTop-5)+"px";
   }
    
    if(jumpCount>20){
        clearInterval(jumpInterval);
        jumping = 0;
        jumpCount = 0;
    }
    jumpCount++;
    console.log(counter);
 },10)

}

