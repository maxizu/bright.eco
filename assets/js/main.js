// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
if (toggle) toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
