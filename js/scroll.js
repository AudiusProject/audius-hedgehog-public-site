window.onscroll = () => onScrollFn();

let debounced = false;

function onScrollFn() {
  window.parallax();
  window.addHeader();
  console.log(window.height);
  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
    if (!debounced || (window.screen.width > 600)) {
      debounced = true;
      console.log('fire', window.innerHeight + window.scrollY, document.body.scrollHeight);
      window.fireConfetti();
      setTimeout(() => { debounced = false }, 1000);
    }
  }
}