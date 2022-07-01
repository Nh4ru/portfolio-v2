const car = document.querySelector(".delorean");

window.addEventListener("scroll", function(e){
  console.log(window.scrollY);
  car.style.transform = "translateX( +" + window.scrollY + "px)";
});