const r = (min, max) => {
  return Math.random() * (max - min) + min;
}
 
window.fireConfetti = () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    confetti({
      angle: 70,
      spread: r(50, 70),
      particleCount: r(100, 150),
      startVelocity: 50,
      colors: [
        '#484459',
        '#8D7D9D',
        '#9070B7',
        '#000000',
        '#858199',
        '#964BF1',
        '#64D2B8',
        '#DDDAE0',
        '#4A9C88',
        '#A14D78',
        '#D2649D',
        '#D0021B'
      ],
      origin: {
        x: 0,
        y: 1
      }
    })
    confetti({
      angle: 110,
      spread: r(50, 70),
      particleCount: r(100, 150),
      startVelocity: 50,
      colors: [
        '#484459',
        '#8D7D9D',
        '#9070B7',
        '#000000',
        '#858199',
        '#964BF1',
        '#64D2B8',
        '#DDDAE0',
        '#4A9C88',
        '#A14D78',
        '#D2649D',
        '#D0021B'
      ],
      origin: {
        x: 1,
        y: 1
      }
    })
  }
}