var topbar = document.querySelector(".topbar");
var headerr = document.querySelector(".header");

// =================back to top==========
var backTOP = document.querySelector(".back-top-btn");

window.onload = function () {
  if (this.scrollY >= 250) {
    topbar.style.display = "none";
    headerr.classList.add("active");
    backTOP.classList.add("active");
  } else {
    topbar.style.display = "block";
    headerr.classList.remove("active");
    backTOP.classList.remove("active");
  }
};
window.onscroll=function(){
    if(this.scrollY >=250){
        topbar.style.display = "none";
        headerr.classList.add("active");
        backTOP.classList.add("active");
    }
    else {
        topbar.style.display='block';
        headerr.classList.remove("active");
        backTOP.classList.remove("active");
    }
}

const parallaxItems = document.querySelectorAll("[data-parallax-item]");
console.log(parallaxItems);

let x, y;

window.addEventListener("mousemove", function (event) {
  x = (event.clientX / window.innerWidth) * 10 - 5;
  y = (event.clientY / window.innerHeight) * 10 - 5;

  // reverse the number eg. 20 -> -20, -5 -> 5
  x = x - x * 2;
  y = y - y * 2;

  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }
});



// =================back to top==========
var buttonss = document.querySelectorAll(".header .navbar-nav .nav-link"),
  buttoons = [...buttonss];

  console.log(buttoons)
buttonss.forEach((e)=> {
  e.addEventListener('click',function(){
     buttoons.map(item=>{
      item.classList.remove("active")
     })
     e.classList.add("active")
  })
  
});
