//Bouger la voiture au scroll
const car = document.querySelector(".delorean");

window.addEventListener("scroll", function (e) {
  console.log(window.scrollY);
  car.style.transform = "translateX( +" + window.scrollY + "px)";
});

//Animation menu Burger
var elems = document.querySelectorAll('.menu-trigger');

for (var i = 0; i < elems.length; i++) {
  (function() {
    var el = elems[i];
    el.addEventListener('click', function(event) {
      el.classList.toggle('active');
    }, false);
  })();
}

// TEST
