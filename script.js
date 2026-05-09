// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Scroll reveal
const srEls = document.querySelectorAll('.sr');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
srEls.forEach(el => obs.observe(el));

// Mobile menu
const ham = document.getElementById('ham');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

ham.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  ham.classList.add('open');
});

mobileClose.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  ham.classList.remove('open');
});

document.querySelectorAll('.mm-link').forEach(l => {
  l.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    ham.classList.remove('open');
  });
});

// Close on outside click
mobileMenu.addEventListener('click', e => {
  if (e.target === mobileMenu) {
    mobileMenu.classList.remove('open');
    ham.classList.remove('open');
  }
});

// Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => preloader.classList.add('hidden'), 300);
  }
});

// Parallax Hero Image
const heroImg = document.querySelector('.hero-img-main');
if (heroImg) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    heroImg.style.transform = `translateY(${scrolled * 0.3}px) scale(1.06)`;
  }, { passive: true });
}
