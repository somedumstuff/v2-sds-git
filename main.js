//variables
let item2 = document.getElementById("item2")
let item3 = document.getElementById("item3")
let main_wrapper = document.getElementById("main_wrapper")
let design_wrapper = document.getElementById("design_wrapper")
let design_grid = document.getElementById("design_grid")
let design = document.getElementById("design")
let image6 = document.getElementById("image6")

item1.onclick = function(){
  console.log("yo")
  location.href = "dev.html";

}

item2.onclick = function(){
  console.log("yo")
  location.href = "design.html";

}

item3.onclick = function(){
  console.log("yo")
  location.href = "about.html";

}

item4.onclick = function(){
  console.log("yo")
  location.href = "soon.html";

}
//const scrollContainer = document.querySelector("main");

//test
console.log("yo")

//helpers
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }


//performers
// item2.onclick = function(){
//     console.log(getOffset(main_wrapper))
//     console.log(getOffset(design_wrapper))
//     main_wrapper.style.transform = "translate(-100%, 100%)"
//     design_wrapper.style.transform="translate(0, -100%)"
//     document.body.style.overflow = "hidden";
// }




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
    trigger: 'design',
    stagger: .005,
    pin: true,  
    scrub: true
  }
}).to('img', {
  stagger: .05,
  y: -200,
  scrub: true
})





