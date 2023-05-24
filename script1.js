



var blackScreen = document.querySelector("#black-screen");
      var btn1 = document.querySelector("#btn1");

      btn1.addEventListener("click", function() {
        blackScreen.classList.add("slide-up1");
      });

      blackScreen.addEventListener("animationend", function() {
        if (blackScreen.classList.contains("slide-up1")) {
          setTimeout(function() {
            window.location.href = "index2.html";
          }, 1000);
        } else if (blackScreen.classList.contains("slide-down")) {
          
        }
});





var blackScreen = document.querySelector("#black-screen");
var btn2 = document.querySelector("#b2");

btn2.addEventListener("click", function() {
  blackScreen.classList.add("slide-up2");
});

blackScreen.addEventListener("animationend", function() {
  if (blackScreen.classList.contains("slide-up2")) {
    setTimeout(function() {
      window.location.href = "index3.html";
    }, 1000);
  } else if (blackScreen.classList.contains("slide-down")) {
    
  }
});








window.addEventListener("load", function(){
  var loader = document.getElementById("loader");
  setTimeout(function(){
      loader.style.opacity = "0";
      setTimeout(function(){
          loader.style.display = "none";
      }, 1000);
  }, 4500);
});





