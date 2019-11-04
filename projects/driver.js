$(document).ready(function(){

var tracker = {
  value : 0,
  changer : "Unchanged"
};

var trackedUser = Object.create(tracker);
var userInfo = document.getElementById("Info");
userInfo.innerHTML = "Rupees: " + trackedUser.value;

function mouseAdd(){
  trackedUser.value++;
  trackedUser.changer = "Changed";

  userInfo.innerHTML = "Rupees: " + trackedUser.value;
  console.log(trackedUser.value);
}

function swap(){
  var rupeeSwap = document.getElementById("SwapRupee");
  //var onceUpon = document.getElementById("Once");
  var rupeeGif = document.createElement("img");
  rupeeGif.setAttribute("src", "Images/green_gif.gif");

  rupeeSwap.replaceChild(rupeeGif, onceUpon);
}

userInfo.addEventListener("click", mouseAdd);
//console.log(trackedUser.value);

// var rupeeSwap = document.getElementById("SwapRupee");
 var onceUpon = document.getElementById("Once");
// var rupeeGif = document.createElement("img");
// rupeeGif.setAttribute("src", "Images/music.jpg");

onceUpon.addEventListener("mouseover", mouseAdd);
onceUpon.addEventListener("mouseover", swap);


});
