

// fade animations/////////////////////////////////////////////////////////////////
// about section/////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const aboutCol = document.querySelector(".about-section .col-md-6");

  if (!aboutCol) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // fade in when entering viewport
        aboutCol.classList.remove("fade-out-right");
        aboutCol.classList.add("fade-in-right");
      } else {
        // fade out when leaving viewport
        aboutCol.classList.remove("fade-in-right");
        aboutCol.classList.add("fade-out-right");
      }
    });
  }, { threshold: 0.3 });

  observer.observe(aboutCol);
});

// vision section animation
document.addEventListener("DOMContentLoaded", () => {
  const visionElements = document.querySelectorAll(
    ".vision-section .feature-box, .vision-section h2, .vision-section h1"
  );

  if (!visionElements.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        el.classList.remove("fade-out-left");
        el.classList.add("fade-in-left");
      } else {
        el.classList.remove("fade-in-left");
        el.classList.add("fade-out-left");
      }
    });
  }, { threshold: 0.3 });

  visionElements.forEach(el => observer.observe(el));
});


// future section//////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const titleElements = document.querySelectorAll(".future-section h2, .future-section h1");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        el.classList.remove("fade-out-right");
        el.classList.add("fade-in-right");
      } else {
        el.classList.remove("fade-in-right");
        el.classList.add("fade-out-right");
      }
    });
  }, { threshold: 0.3 });

  titleElements.forEach(el => observer.observe(el));
});

// footer section/////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".footer-section");

  if (!footer) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        footer.classList.remove("fade-out");
        footer.classList.add("fade-in");
      } else {
        footer.classList.remove("fade-in");
        footer.classList.add("fade-out");
      }
    });
  }, { threshold: 0.3 });

  observer.observe(footer);
});




// active pages//////////////////////////////////////////////////////////////////////////////////////////////
// Get all nav links
let navLinks = document.querySelectorAll('.nav-link');

// Function to remove 'active' from all links
function removeActiveClasses() {
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });
}

// Function to handle a click on any link
function handleNavClick(event) {

    // Remove 'active' from all links first
    removeActiveClasses();

    // Add 'active' to the clicked one
    event.target.classList.add('active');
}


// Attach the click event handler to each link
navLinks.forEach(function(link) {
    // console.log(link)
    link.addEventListener('click', handleNavClick);
});


//time line///////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.querySelector(".timeline");
  const line = document.createElement("div");
  line.classList.add("timeline-line");
  timeline.prepend(line);

  const items = document.querySelectorAll(".timeline-item");

  function animateTimeline() {
    const timelineTop = timeline.offsetTop;
    const timelineHeight = timeline.offsetHeight;
    const scrollMiddle = window.scrollY + window.innerHeight / 2;  // get the center of the vieport //We use scrollMiddle to check which timeline items have reached the middle of the screen

    // Calculate progress (0 to 1)
    let progress = (scrollMiddle - timelineTop) / timelineHeight;   //middle point of your screen while scrolling.how far the top of the timeline is from the top of the page.
    progress = Math.min(Math.max(progress, 0), 1);                   //(scroll-top)How much of the timeline have we reached (-)/ that represents how much is completed

    // Update line height
    line.style.height = progress * timelineHeight + "px";
    line.style.backgroundColor = '#A9824D';

    // Reveal/fade items and color dots
    items.forEach(item => {
      const dot = item.querySelector(".dot");
      const itemTop = item.offsetTop + timeline.offsetTop + 20; // approx dot center

      if (scrollMiddle >= itemTop) {
        item.classList.add("show");
        if(dot) dot.style.backgroundColor = "#ffffffff";
      } else {
        item.classList.remove("show");
        if(dot) dot.style.backgroundColor = "#fff";
      }
    });
  }

  window.addEventListener("scroll", animateTimeline);
  animateTimeline();
});

//carousel scroll/////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (window.innerWidth >= 768) { // only desktop
  const carouselElement = document.querySelector('#carouselExample');
  const carousel = new bootstrap.Carousel(carouselElement, { interval: false });

  let canScroll = false;

  carouselElement.addEventListener('mouseenter', () => canScroll = true);
  carouselElement.addEventListener('mouseleave', () => canScroll = false);

  carouselElement.addEventListener('wheel', (e) => {
    if (!canScroll) return;
    e.preventDefault();
    if (e.deltaY > 0) carousel.next();
    else if (e.deltaY < 0) carousel.prev();
  }, { passive: false });
}

// merwuee/////////////////////////////////////////////////////////////////////////////////////////////////////
let copy = document.querySelector(".marquee-track").cloneNode(true);
document.querySelector(".marquee-text-wrapper").appendChild(copy);




// document.addEventListener('DOMContentLoaded', function(){
//   var timeline = document.querySelector('.timeline');
//   var line = document.createElement('div');
//   line.classList.add('timeline-line');
//   timeline.insertBefore(line, timeline.firstChild);

//   var items = document.querySelectorAll('.timeline-item');


//   function animateTimeline(){
//     var timelineTop = timeline.offsetTop;
//     var timelineHeight = timeline.offsetHeight;
//     var scrollMiddle = window.scrollY + window.innerHeight / 2;

//     var progress = (scrollMiddle - timelineTop) / timelineHeight;
//     progress = Math.min(Math.max(progress, 0), 1);

//     line.style.height = progress * timelineHeight + "px";
//     line.style.backgroundColor = "#A9824D";

//     items forEach(function(item){
//       var dot = document.querySelector('.dot');
//       var itemTop = itemTop.offsetTop + timeline.offsetTop + 20;
//       if(scrollMiddle >= itemTop) {
//         item.classList.add('show');
//         if(dot) dot.style.backgroundColor = "#A9824D";

//       } else{
//         item.classList.remove('show');
//         if (dot) dot.style.backgroundColor = "#fff";
//       }


//     })
//   }



//   window.addEventListener('scroll', animateTimeline);
// })




