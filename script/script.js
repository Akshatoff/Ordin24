const ordin = document.getElementById("ordin");
const pyro = document.getElementById("pyro");
const ordindescription = document.getElementById("description");
const pyrodescription = document.getElementById("pyrodescription");
const ordinimage = document.getElementById("ordinimage");
const pyroimage = document.getElementById("pyroimage");
const sun = document.getElementById("sun");
const sunanim = document.getElementById("sun-anim");
const build = document.getElementById("build");
const anim = document.getElementById("anim");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const mem = document.getElementById("mem");
const alu = document.getElementById("alu");
const alucarousel =  document.getElementById("aluc");
const memcarousel = document.getElementById("memc");
const control = document.querySelector(".control");
const controlalu = document.querySelector(".controlalu");
let currentIndex = 0;
let currentIndexalu = 0;
    const items = document.querySelectorAll('.carousel-item');
    const itemsalu = document.querySelectorAll('.carousel-item-alu');

    function next1() {
        currentIndex = (currentIndex + 3) % items.length;
        updateCarousel();
    }
    function nextalu() {
        currentIndexalu = (currentIndexalu + 3) % items.length;
        updateCarouselalu();
    }

    function prev1() {
        currentIndex = (currentIndex - 3 + items.length) % items.length;
        updateCarousel();
    }
    function prevalu() {
        currentIndexalu = (currentIndexalu - 3 + items.length) % items.length;
        updateCarouselalu();
    }
    
    function updateCarousel() {
        items.forEach(item => {
            item.style.display = 'none';
        });
    
        // Show the next 3 items
        for (let i = currentIndex; i < currentIndex + 3; i++) {
            items[i % items.length].style.display = 'block';
        }
    }
    function updateCarouselalu() {
        itemsalu.forEach(item => {
            item.style.display = 'none';
        });
    
        // Show the next 3 items
        for (let i = currentIndexalu; i < currentIndexalu + 3; i++) {
            itemsalu[i % itemsalu.length].style.display = 'block';
        }
    }

window.addEventListener("DOMContentLoaded", function (){
    ordin.classList.add("active");
    fadein2(ordindescription);
    pyrodescription.style.display = "none";
    ordinimage.style.display = "block";
    pyroimage.style.display = "none";
    anim.style.display = "none";
    mem.classList.add("active");
    memcarousel.style.display = "block";
    alucarousel.style.display = "none";
    control.style.display = "flex";
    controlalu.style.display = "none";

ordin.addEventListener("click", function () {
    ordin.classList.add("active");
    pyro.classList.remove("active");
    fadeout(pyrodescription);
    fadeout(pyroimage);
    fadein1(ordinimage);
    fadein2(ordindescription);
    ordinimage.style.display = "block";
    pyroimage.style.display = "none";
})

pyro.addEventListener("click", function() {
    ordin.classList.remove("active");
    pyro.classList.add("active");
    fadeout(ordindescription);
    fadeout(ordinimage);
    fadein2(pyroimage);
    fadein1(pyrodescription);
    ordinimage.style.display = "none";
    pyroimage.style.display = "block";
})

mem.addEventListener("click", function() {
    mem.classList.add("active");
    alu.classList.remove("active");
    memcarousel.style.display = "block";
    alucarousel.style.display = "none";
    control.style.display = "flex";
    controlalu.style.display = "none";
})

alu.addEventListener("click", function() {
    mem.classList.remove("active");
    alu.classList.add("active");
    memcarousel.style.display = "none";
    alucarousel.style.display = "block";
    control.style.display = "none";
    controlalu.style.display = "flex";
})

var pos = document.documentElement;
pos.addEventListener("mousemove", e=> {
    pos.style.setProperty("--x", e.clientX + "px");
    pos.style.setProperty("--y", e.clientY + "px");

})

})

function fadein1(element) {
  const timeline = anime.timeline({
      easing: "easeOutExpo",
      duration:2000,
  });
  timeline.add({
      targets: element,
      opacity: [0, 1],
      translateX:["-10rem", "0rem"],
      begin: function () {
          element.style.display = "block";
      }
  });
}

function fadein2(element) {
  const timeline = anime.timeline({
      easing: "easeOutExpo",
      duration:2000,
  });
  timeline.add({
      targets: element,
      opacity: [0, 1],
      translateX:["10rem", "0rem"],
      begin: function () {
          element.style.display = "block";
      }
  });
}

function fadeout(element) {
  const timeline = anime.timeline({
      easing: "easeOutExpo",
      duration:1000,
  });
  timeline.add({
      targets: element,
      opacity: [1, 0],
      begin:function () {
          element.style.display = "none";
      }
  });
}
next.addEventListener("click", function() {
  expand(sun);
  setTimeout(() => {
    fadeout(build);
    fadein6(anim);
    
  }, 400);
 
});

prev.addEventListener("click", function() {
    expand(sunanim);
    setTimeout(() => {
      fadeout(anim);
      fadein6(build);
     
    }, 400);
});



function fadein6(element) {
  const timeline = anime.timeline({
      easing: "easeOutExpo",
      duration:4000,
  });
  timeline.add({
      targets: element,
      opacity: [0, 1],
      translateX:["1rem", "2rem"],
      begin: function () {
          element.style.display = "block";
      }
  });
}

function expand(element) {
  const timeline = anime.timeline({
      easing: "easeOutExpo",
      duration: 2000,
  });
  timeline.add({
      targets: element,
      scale: 5,
  });
  // Remove scale property after 8 seconds (8000 milliseconds)
  setTimeout(function() {
      element.style.transform = "none";
  }, 2500);
}



//Smooth Scroll

const lenis = new Lenis()



function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)