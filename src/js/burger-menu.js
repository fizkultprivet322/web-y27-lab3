document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.getElementById('burgerBtn');
  const burgerMenu = document.getElementById('burgerMenu');
  const burgerClose = document.getElementById('burgerClose');
  const body = document.body;

  burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.add('active');
    body.style.overflow = 'hidden';
  });

  burgerClose.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    body.style.overflow = '';
  });

  const burgerLinks = document.querySelectorAll('.burger-menu__link');
  burgerLinks.forEach(link => {
    link.addEventListener('click', () => {
      burgerMenu.classList.remove('active');
      body.style.overflow = '';
    });
  });

  burgerMenu.addEventListener('click', (e) => {
    if (e.target === burgerMenu) {
      burgerMenu.classList.remove('active');
      body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && burgerMenu.classList.contains('active')) {
      burgerMenu.classList.remove('active');
      body.style.overflow = '';
    }
  });
});
