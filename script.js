function Loading() {
  var tl = gsap.timeline();
  tl.to("#yellow1", {
    top: "-100%",
    duration: 0.6,
    delay: 0.5,
    ease: "expo.out",
    color:"black"
  });
  tl.from("#yellow2", {
    top: "100%",
    delay: 0.5,
    duration: 0.6,
    ease: "ease.out",
    color:"black"
  });
  tl.to("#loader",{
   opacity:0
  })
} 
Loading();
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// tl.to("#loader video", {
//   top: "-100%",
//   delay: 0.5,
//   duration: 0.6,
//   ease: "ease.out",
// });

var elem = document.querySelectorAll(".elem")
var page2  = document.querySelector("#page2")
elem.forEach(function(elems){
 elems.addEventListener("mouseenter" , function(){
  var bgimg = elems.getAttribute("data-img")
  // page2.style.backgroundImage = `url${bgimg}`
 page2.style.backgroundImage = `url(${bgimg})`
 })
})
