// Borda da navegação ao rolar
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

document.getElementById('year').textContent = new Date().getFullYear();

// Link da área atual na navegação: cada bloco pertence ao último link do menu que apareceu antes dele,
// até um bloco marcado com data-nav-reset (que não pertence a nenhum link)
const links = new Map(
  [...document.querySelectorAll('.nav__links a')].map((a) => [a.getAttribute('href').slice(1), a])
);
const groupOf = new Map();
let group = null;
document.querySelectorAll('main > [id]').forEach((el) => {
  if (el.hasAttribute('data-nav-reset')) group = null;
  if (links.has(el.id)) group = el.id;
  groupOf.set(el, group);
});
const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const current = groupOf.get(entry.target);
      links.forEach((a, id) => a.classList.toggle('is-here', id === current));
    });
  },
  { rootMargin: '-45% 0px -50% 0px' }
);
groupOf.forEach((_, el) => spy.observe(el));
