$(document).ready(function(){

var tracker = {
  value : 0,
  changer : "Unchanged"
};

var trackedUser = Object.create(tracker);
var userInfo = document.getElementById("Info");
userInfo.innerHTML = "Rupees Collected: " + trackedUser.value;

function mouseAdd(){
  trackedUser.value++;
  trackedUser.changer = "Changed";

  userInfo.innerHTML = "Rupees Collected: " + trackedUser.value;
  console.log(trackedUser.value);

  if(trackedUser.value == 5){
    alert ("You found all the treasure!");
  }
}

//There's probably an easier way to write this code then to make a bunch of different functions to handle
//different images, things to be swapped, etc. but I couldn't figure out a way to do it without passing the functions
//variables in the event listeners and that makes the functions run as soon as they are called in the event listener...
function swapGreen(){
  var rupeeSwap = document.getElementById("SwapRupee");
  var rupeeGif = document.createElement("img");
  rupeeGif.setAttribute("src", "Images/green_small.gif");

  rupeeSwap.replaceChild(rupeeGif, onceUpon);
  mouseAdd();
}

function swapRed(){
  var rupeeSwapP = document.getElementById("SwapPara");
  var rupeeGif = document.createElement("img");
  rupeeGif.setAttribute("src", "Images/red_small.gif");

  rupeeSwapP.replaceChild(rupeeGif, hero);
  mouseAdd();
}

//Closure by Ted Hopp on Stack Overflow, makes it so function only runs a maximum of once
// I knew the idea of what I wanted to do (set a boolean that would turn from false to true on execution)
// but didn't know the exact implementation. https://stackoverflow.com/questions/12713564/function-in-javascript-that-can-be-called-only-once
var something = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            // do something
        }
    };
})();

var RGBspin = (function beforeRGBspin(){
  var beforeStop = false;
  return function beforeRGBspin(){
    if(!beforeStop){
      beforeStop = true;

      var rupeeSwapP = document.getElementById("SwapPara");
      var rupeeGif = document.createElement("img");
      rupeeGif.setAttribute("src", "Images/rgbSpin_small.gif");

      rupeeSwapP.insertBefore(rupeeGif, treasure);
      mouseAdd();
    }
  }
})();

var treasureShower = ( function appendTreasure(){
  var appendStop = false;
  return function appendTreasure(){
  if(!appendStop){
  appendStop = true;

  var legend = document.getElementById("Legend");
  var showerGif = document.createElement("img");
  showerGif.setAttribute("src", "Images/shower.gif");

  legend.appendChild(showerGif, chest);
  mouseAdd();
}
}
})();

function swapChest(){
  var foot = document.getElementById("Footer");
  var openGif = document.createElement("img");
  openGif.setAttribute("src", "Images/kick.gif");

  foot.replaceChild(openGif, open);
  mouseAdd();
}

 var onceUpon = document.getElementById("Once");
onceUpon.addEventListener("mouseover", swapGreen);

var hero = document.getElementById("Clothes");
hero.addEventListener("mouseover", swapRed);

var treasure = document.getElementById("Treasures");
treasure.addEventListener("mouseover", RGBspin);


var chest = document.getElementById("Strike");
chest.addEventListener("mouseover", treasureShower);

var open = document.getElementById("Open");
open.addEventListener("mouseover", swapChest);



});
