/**
* Created with Concert.
* User: m-m38
* Date: 2015-03-03
* Time: 06:08 PM
* To change this template use Tools | Templates.
*/

var crowd = document.getElementById("crowd")


function concertMotion(){
    
    moveAudience();
    window.requestAnimationFrame(concertMotion);
}
concertMotion();



var isAudMoveUp = true;
function moveAudience(){
    if(isAudMoveUp){
        // change the style.top using the current style.top and parsing the int out of it, increaseing it, then setting it to the new value
        // save the current style.top to a temp variable
        var temptop = parseInt(crowd.style.top);
        
        // increase the int value
         temptop = temptop +5
         
        
        
        // add "px" to the end to make it a string with px
        
        //set the style.top to the new value
    
    
    
    }
    else{
        
        
        
    }
    
}