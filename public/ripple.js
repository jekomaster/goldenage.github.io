console.log('Starting ripple animation...');
anime({
  targets: '.grid-item',
  scale: [
    { value: 0.1, easing: 'easeOutSine', duration: 500 },
    { value: 1, easing: 'easeInOutQuad', duration: 1200 },
  ],
  opacity: [
    { value: 0.5, duration: 500 },
    { value: 1, duration: 1200 },
  ],
  delay: anime.stagger(100, { grid: [10, 10], from: 'center' }),
});
