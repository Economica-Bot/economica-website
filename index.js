const menuBtn = document.querySelector('.menu-toggler');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } 
  else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

const questionOneBtn = document.querySelector('.why-economica-header');
const questionTwoBtn = document.querySelector('.compare-economica-header');
const questionOneAnimation = document.querySelector('.why-economica-icon');
const questionTwoAnimation = document.querySelector('.compare-economica-icon');

let questionOpen = false;
questionOneBtn.addEventListener('click', () => {
  if (!questionOpen) {
    questionOneAnimation.classList.add('why-economica-icon-open');
    questionOpen = true;
  }
  else {
    questionOneAnimation.classList.remove('why-economica-icon-open');
    questionOpen = false;
  }
  
})
questionTwoBtn.addEventListener('click', () => {
  if (!questionOpen) {
    questionTwoAnimation.classList.add('compare-economica-icon-open');
    questionOpen = true;
  }
  else {
    questionTwoAnimation.classList.remove('compare-economica-icon-open');
    questionOpen = false;
  }
  
})

const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.1,
}
const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  })
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});