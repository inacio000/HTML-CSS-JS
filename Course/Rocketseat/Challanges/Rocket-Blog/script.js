// var header = document.getElementById("myDIV");
// var btns = header.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }

var burgerIcon = document.querySelector(".burger img");
var menu = document.querySelector("ul");

burgerIcon.addEventListener("click", function() {

    if (burgerIcon.getAttribute("src") == "src/burger.svg") {
        
        burgerIcon.setAttribute("src", "src/close.svg")

        if (menu.style.display === "flex") {
            menu.style.display = "none"
        } else {
            menu.style.display = "flex"
        }

    } else {
        burgerIcon.setAttribute("src", "src/burger.svg");

        if (menu.style.display === "flex") {
            menu.style.display = "none"
        } else {
            menu.style.display = "flex"
        }
    }

});