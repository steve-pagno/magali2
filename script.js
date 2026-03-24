document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('open'));
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

  const form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Protótipo estático: depois essa mensagem será integrada ao formulário do WordPress ou WhatsApp.');
      form.reset();
    });
  }
});
