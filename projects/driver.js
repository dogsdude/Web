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
}

//There's probably an easier way to write this code then to make a bunch of different functions to handle
//different images, things to be swapped, etc. but I couldn't figure out a way to do it without passing the functions
//variables in the event listeners and that makes the functions run as soon as they are called in the event listener...
function swapGreen(){
  var rupeeSwap = document.getElementById("SwapRupee");
  var rupeeGif = document.createElement("img");
  rupeeGif.setAttribute("src", "Images/green_small.gif");

  rupeeSwap.replaceChild(rupeeGif, onceUpon);
}

function swapRed(){
  var rupeeSwapP = document.getElementById("SwapPara");
  var rupeeGif = document.createElement("img");
  rupeeGif.setAttribute("src", "Images/red_small.gif");

  rupeeSwapP.replaceChild(rupeeGif, hero);
}

function beforeRGBspin(){
  var rupeeSwapP = document.getElementById("SwapPara");
  var rupeeGif = document.createElement("img");
  rupeeGif.setAttribute("src", "Images/rgbSpin_small.gif");

  rupeeSwapP.insertBefore(rupeeGif, treasure);
}

function appendTreasure(){
  var legend = document.getElementById("Legend");
  var showerGif = document.createElement("img");
  showerGif.setAttribute("src", "Images/shower.gif");

  legend.appendChild(showerGif, chest);
}

function swapChest(){
  var foot = document.getElementById("Footer");
  var openGif = document.createElement("img");
  openGif.setAttribute("src", "Images/kick.gif");

  foot.replaceChild(openGif, open);
}

 var onceUpon = document.getElementById("Once");
onceUpon.addEventListener("mouseover", mouseAdd);
onceUpon.addEventListener("mouseover", swapGreen);

var hero = document.getElementById("Clothes");
hero.addEventListener("mouseover", mouseAdd);
hero.addEventListener("mouseover", swapRed);

var treasure = document.getElementById("Treasures");
treasure.addEventListener("mouseover", mouseAdd);
treasure.addEventListener("mouseover", beforeRGBspin);

var chest = document.getElementById("Strike");
chest.addEventListener("mouseover", mouseAdd);
chest.addEventListener("mouseover", appendTreasure);

var open = document.getElementById("Open");
open.addEventListener("mouseover", mouseAdd);
open.addEventListener("mouseover", swapChest);



});
