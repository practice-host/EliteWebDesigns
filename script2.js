var blackScreen = document.querySelector("#black-screen");

      setTimeout(function() {
        blackScreen.classList.add("slide-down");
      }, 1000);

      blackScreen.addEventListener("animationend", function() {
        if (blackScreen.classList.contains("slide-up")) {
          
        } else if (blackScreen.classList.contains("slide-down")) {
          blackScreen.remove();
        }
      });

      