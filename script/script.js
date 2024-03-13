const description = document.getElementById("description");
const pyrode = document.getElementById("pyrodescription")
const mem = document.getElementById("mem");
const alu = document.getElementById("alu");
const control = document.querySelector(".control");
const controlalu = document.querySelector(".controlalu");
const cards = document.querySelectorAll(".card");
const videos = document.querySelectorAll(".card-video");
let currentIndex = 0;
let currentIndexalu = 0;
const items = document.querySelectorAll('.carousel-item');
const itemsalu = document.querySelectorAll('.carousel-item-alu');
const modelviewer = document.querySelector("model-viewer");
const maxRotationspeed = 20;
const rotationMultiplier = 1;
const scrollStopDelay = 100;

let currentRotationSpeed = 0;
let previousScrollPosition = window.scrollY;
let isScrolling = false;
let scrollStopTimeout;

function stopRotation() {
    isScrolling = true;
    clearTimeout(scrollStopTimeout);
    scrollStopTimeout =  setTimeout(() => {
        isScrolling = false;
    }, scrollStopDelay);
}

window.addEventListener("scroll", ()=> {
    
    if (previousScrollPosition != 668) {
        const scrollPosition = window.scrollY;

    if (isScrolling) {
        stopRotation();
        return;
    }

    const scrollDifference = previousScrollPosition - scrollPosition;
    currentRotationSpeed = Math.abs(scrollDifference) * rotationMultiplier;

    if (currentRotationSpeed > maxRotationspeed) {
        currentRotationSpeed = maxRotationspeed * Math.sign(currentRotationSpeed);        
    }

    const ScrollDirection = scrollDifference >= 0 ? -1: 1;
    const currentRotation = parseFloat(modelviewer.cameraOrbit);
    const newRotation = currentRotation + (currentRotationSpeed * ScrollDirection);

    modelviewer.cameraOrbit = `${newRotation}deg`;
    previousScrollPosition = scrollPosition;
    console.log(previousScrollPosition);
    }
    else {
        currentRotationSpeed = 0;
        setTimeout(() => {
            fadein1(description);
            fadein2(pyrode);
        }, 500);
    }
});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: modelviewer,
        start: "-5% left",
        end: "250% center",
        scrub: true,
        markers: false
    }
});

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

    video.pause();

    
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

tl.to(modelviewer, {
    x: 500,
    y: 980,
  
});

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


//Smooth Scroll

const lenis = new Lenis();



lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);