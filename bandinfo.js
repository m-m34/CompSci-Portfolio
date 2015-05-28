var monkeys = document.getElementById("monkeys");
var direction = document.getElementById("direction");
var the = document.getElementById("the");
var sos = document.getElementById("sos");
var bname = document.getElementById("bname");
var album = document.getElementById( "album");
var members = document.getElementById("members");
var blocation = document.getElementById("blocation");
var singer = document.getElementById("singer");


// .addEventListener("click", functionName)
// .innerHTML = " hello"

monkeys.addEventListener("click", changeInfo);



function changeInfo(){
  switch(this.id){
    case "monkeys":
      bname.innerHTML = "Arctic Monkeys";
      album.innerHTML = "Beneath the Boardwalk";
      members.innerHTML = " Alex Turner, Matt Helders, Jamie Cook, Nick O'Malley, Glyn Jones, Andy Nicholson";
      blocation.innerHTML = " Sheffield, United Kingdom";
      singer.innerHTML = "Alex Turner";
    
      
direction.addEventListener("click", changeInfo);
    
    break;
    case "direction":
      bname.innerHTML = "One Direction";
      album.innerHTML = "Up All Night";
      members.innerHTML = "Harry Styles, Zayn Malik, Louis Tomlinson, Niall Horan, Liam Payne";
      blocation.innerHTML = "London, United Kingdom and Mullingar, Republic of Ireland";
      singer.innerHTML = "All";
      
      
the.addEventListener("click", changeInfo);
    break;
    case "the":
      bname.innerHTML = "The 1975";
      album.innerHTML = "The 1975";
      members.innerHTML = "Matthew Healy, Adam Hann, Ross MacDonald, George Daniel";
      blocation.innerHTML ="Wilmslow, Cheshire, United Kingdom";
      singer.innerHTML = "Matt Healy";
      
sos.addEventListener("click", changeInfo);
    break;

    case "sos":
      bname.innerHTML = "Five Seconds of Summer";
      album.innerHTML = "Five Seconds of Summer";
      members.innerHTML = "Luke Hemmings, Calum Hood, Ashton Irwin, Michael Clifford";
      blocation.innerHTML = "Sydney, New South Wales,";
      singer.innerHTML = "Luke Hemmings";
      break;
      
    default:
    
    
  }
}