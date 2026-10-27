tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        display: ['"Druk Condensed"', 'Anton', 'Impact', 'sans-serif'],
        sans: ['Barlow', 'system-ui', 'sans-serif'],
        brush: ['"Road Rage"', 'Anton', 'Impact', 'sans-serif']
      },
      colors: {
        ink: '#0B0B0F',
        coal: '#121217',
        volt: '#70A05A',
        mute: '#9CA3AF'
      }
    }
  }
};

document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const backdrop = document.getElementById('menu-backdrop');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !mobileMenu) return;

  function openMenu() {
    toggleBtn.classList.add('menu-open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleBtn.setAttribute('aria-label', 'Fechar menu de navegação');
    mobileMenu.classList.add('is-open');
    if (backdrop) backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    toggleBtn.classList.remove('menu-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.setAttribute('aria-label', 'Abrir menu de navegação');
    mobileMenu.classList.remove('is-open');
    if (backdrop) backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.contains('is-open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeMenu();
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMenu();
      toggleBtn.focus();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768 && mobileMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });
});
