/**
* Created with Question Game.
* User: Josielikesbarca
* Date: 2015-02-26
* Time: 06:58 PM
* To change this template use Tools | Templates.
*/
       "JavaScript">

           
 var display_text  = "Its a good thing were all gonna die in a billion years "
+ "so we wont need insect, or foodishes!  " + "And How much wood would a woodchuck chuck if a woodchuck could chuck wood?"

var display_text; var place; var meter;
var out = " "; var place = 50;
function scroll_text(){
for (meter = 0; meter < place; meter++){
out += " "
}
if (place >= 0)
out += display_text
else out = display_text.substring(-place,display_text.length)
document.scroll_form.field.value = out
out = " "
place--
if (place < -(display_text.length)){
place = 50
}
setTimeout('scroll_text()',100)
}
