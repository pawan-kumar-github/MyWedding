// ── Navigation ───────────────────────────────────────────────────────
const navbar    = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Hero Parallax ────────────────────────────────────────────────────
const heroBg = document.getElementById('heroBg');
if (heroBg) {
  window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight) {
      heroBg.style.transform = `scale(1.05) translateY(${window.scrollY * 0.25}px)`;
    }
  }, { passive: true });
}

// ── Scroll Reveal ────────────────────────────────────────────────────
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ── Falling Petals (hero only) ───────────────────────────────────────
const petalColors = [
  ['#FFD700', '#C2737A'],
  ['#FF9966', '#FF6B35'],
  ['#FFB347', '#D4AF37'],
  ['#FF8FAB', '#C9A84C'],
];
const petalContainer = document.getElementById('petalsContainer');

if (petalContainer) {
  function createPetal() {
    const p = document.createElement('div');
    p.className = 'petal';
    const [c1, c2] = petalColors[Math.floor(Math.random() * petalColors.length)];
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${6 + Math.random() * 10}px;
      height: ${8 + Math.random() * 12}px;
      background: radial-gradient(ellipse at 40% 30%, ${c1}, ${c2});
      animation-duration: ${5 + Math.random() * 8}s;
      animation-delay: ${Math.random() * 6}s;
      border-radius: ${Math.random() > 0.5 ? '50% 0 50% 0' : '0 50% 0 50%'};
      opacity: 0;
    `;
    petalContainer.appendChild(p);
    p.addEventListener('animationend', () => p.remove());
  }

  for (let i = 0; i < 18; i++) createPetal();
  setInterval(() => {
    if (window.scrollY < window.innerHeight * 1.5) createPetal();
  }, 700);
}
