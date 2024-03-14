const description = document.getElementById("description");
const pyrode = document.getElementById("pyrodescription")
const mem = document.getElementById("mem");
const alu = document.getElementById("alu");
const control = document.querySelector(".control");
const controlalu = document.querySelector(".controlalu");
const cards = document.querySelectorAll(".card");
const videos = document.querySelectorAll(".card-video video");
const init = document.getElementById("init");
const home = document.getElementById("home");
const about = document.getElementById("about");
const events = document.getElementById("events");
const teams = document.getElementById("team");
let currentIndex = 0;
let currentIndexalu = 0;
const items = document.querySelectorAll('.carousel-item');
const itemsalu = document.querySelectorAll('.carousel-item-alu');
const modelviewer = document.querySelector("model-viewer");

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

    videos.pause();

    
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
      duration:1000,
  });
  timeline.add({
      targets: element,
      opacity: [0, 1],
      translateX:["-15rem", "0rem"],
      begin: function () {
          element.style.display = "block";
      }
  });
}

function fadein2(element) {
  const timeline = anime.timeline({
      easing: "easeOutExpo",
      duration:1000,
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



cards.forEach((card, index) => {
    card.addEventListener("mouseenter", function() {
        videos.forEach((video, i) => {
            if (i !== index) {
                video.pause();
            }
        });
        
        videos[index].play();
    });

  
})

window.addEventListener("load", function() {
    
    const loaderVideo = document.getElementById("loader-video");
    const content = document.getElementById("fullpage");
    content.style.display = "none";
    events.style.display = "none";
    teams.style.display = "none";
    // Listen for the ended event on the loader video
    loaderVideo.addEventListener("ended", function() {
        // Hide the loader video
        loaderVideo.style.display = "none";
        // Display the website content
        content.style.display = "block";
        showSection(home);
    });
});

function fadeIn(element) {
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1000,
    });
  
    timeline.add({
      targets: element,
      opacity: [0, 1],
      translateY: [100, 0],
    });
  
    timeline.play();
  }
  

  function showSection(section) {
    const sections = [home, about, events, teams]; // Include all sections here
    events.style.display = "block";
    teams.style.display = "block";
    sections.forEach((s) => {
      if (s === section) {
        fadeIn(s);
        s.style.display = 'block';
      } else {
        s.style.display = 'none';
      }
    });
}

  init.addEventListener("click", function() {
    showSection(about);
  });
//Smooth Scroll

const lenis = new Lenis();



lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);