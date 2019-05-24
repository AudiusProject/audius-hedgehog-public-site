const INC = 1;

const parallaxElement = document.getElementById('parallax');

let lastScroll;
let translate = 0;

window.parallax = () => {
  let s = window.pageYOffset || document.documentElement.scrollTop
  if (s > lastScroll) {
    translate -= INC;
    // console.log('down', s);
     // downscroll code
  } else {
    translate += INC;
    // console.log('up', s);
    // upscroll code
  }
  parallaxElement.style.transform = `translateY(${translate}px)`
  lastScroll = Math.max(0, s);
}