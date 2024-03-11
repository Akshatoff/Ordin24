const sun = document.getElementById("sun");
const sunanim = document.getElementById("sun-anim");
const build = document.getElementById("build");
const anim = document.getElementById("anim");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const mem = document.getElementById("mem");
const alu = document.getElementById("alu");

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

    anim.style.display = "none";
    mem.classList.add("active");
    control.style.display = "flex";
    controlalu.style.display = "none";




mem.addEventListener("click", function() {
    mem.classList.add("active");
    alu.classList.remove("active");
    control.style.display = "flex";
    controlalu.style.display = "none";
})

alu.addEventListener("click", function() {
    mem.classList.remove("active");
    alu.classList.add("active");
    control.style.display = "none";
    controlalu.style.display = "flex";
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