console.log("yo")
let back_arrow = document.getElementById("back_arrow")
let up_button = document.getElementById("up_button")

window.addEventListener("scroll", ()=> {
  console.log(scrollY)
  if(window.scrollY > 500) {
    up_button.style.opacity = "100"
  }
  if(window.scrollY == 0) {
    up_button.style.opacity = "0"
  }
})
back_arrow.onclick = function(){
  
  location.href = "index.html";

}

var rootElement = document.documentElement;
function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
up_button.addEventListener("click", scrollToTop);
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  })
  
  function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#first_section',
      pin: true,  
      scrub: true
    }
  }).to('.image', {
    stagger: .15,
    scrub: true
  })



//   gsap.registerPlugin(ScrollTrigger);
//   let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);
//   gsap.utils.toArray("#gallery_main_wrapper").forEach((div, i) => {
//     div.bg = div.querySelector(".image"); 
  
//     gsap.fromTo(div.bg, {
//       backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(div)}px` : "50% 0px"
//     }, {
//       backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(div))}px`,
//       ease: "none",
//       scrollTrigger: {
//         trigger: img,
//         start: () => i ? "top bottom" : "top top", 
//         end: "bottom top",
//         invalidateOnRefresh: true // to make it responsive
//       }
//     });
  
//   });