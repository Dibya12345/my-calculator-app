var toggle = document.getElementById("toggle-btn");
var togglecount = 0
var bodycolor = document.getElementsByTagName("BODY")[0];
var headerDisplay = document.getElementsByClassName("header-display")[0];

function ToggleFunction() {
  toggle.style.position = 'relative';
  togglecount+=1
  if (togglecount == 1){
  	togglecount += 1; 
  	toggle.style.left = "7px";
    bodycolor.style.backgroundColor = "#e6e6e6";
    headerDisplay.style.backgroundColor = "#eeeeee";
  }
  else if (togglecount == 3){
  	togglecount += 1;
  	toggle.style.left = "14px";
    bodycolor.style.backgroundColor = "#17062a";
    headerDisplay.style.backgroundColor = "#1e0836";
  }
  else{
     togglecount = 0
     toggle.style.left = "0px";
     bodycolor.style.backgroundColor = "#3B4664";
     headerDisplay.style.backgroundColor = "#181f32";
  }
  console.log(togglecount)
}
