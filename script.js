// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

// Close nav on link click
document.querySelectorAll('.header__nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

// Scroll fade-in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.product-card, .journal-card, .feature-item, .about__text, .about__img-wrap, .section-header'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
