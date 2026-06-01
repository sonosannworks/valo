// =====================
// Slideshow（重ね表示＋opacityで切り替え）
// =====================
const slideImgs = document.querySelectorAll('.hero__img--slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function goToSlide(index) {
  // 現在のスライドを非表示
  slideImgs[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  currentSlide = index;

  // 新しいスライドを表示
  slideImgs[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  const next = (currentSlide + 1) % slideImgs.length;
  goToSlide(next);
}

// ドットクリックで手動切り替え
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    clearInterval(slideshowTimer);
    goToSlide(i);
    slideshowTimer = setInterval(nextSlide, 5000);
  });
});

// 5秒ごとに自動切り替え
let slideshowTimer = setInterval(nextSlide, 5000);

// =====================
// Header scroll effect
// =====================
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 80);
});

// =====================
// Hamburger menu（オーバーレイ方式）
// =====================
const hamburger = document.getElementById('hamburger');
const navClose = document.getElementById('navClose');

function openNav() { document.body.classList.add('nav-open'); }
function closeNav() { document.body.classList.remove('nav-open'); }

hamburger.addEventListener('click', openNav);
navClose.addEventListener('click', closeNav);

// オーバーレイ背景クリックで閉じる
document.getElementById('navOverlay').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeNav();
});

// =====================
// Scroll fade-in animation
// =====================
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
