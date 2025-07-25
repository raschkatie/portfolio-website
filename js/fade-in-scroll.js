const faders = document.querySelectorAll('.fade-in');
const fastFaders = document.querySelectorAll('.fade-in-fast');

const appearOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -10px 0px'
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

fastFaders.forEach(fader => {
  appearOnScroll.observe(fader);
});
