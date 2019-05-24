window.onscroll = () => onScrollFn();

function onScrollFn() {
  window.addHeader();
  window.fireConfetti();
}