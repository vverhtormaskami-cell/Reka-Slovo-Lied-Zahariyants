// ============================================
// Навигация по сайту «Река Слово Лид Захарьянц»
// ============================================

document.addEventListener('DOMContentLoaded', function () {

  // Список страниц сайта
  const pages = [
    { title: 'Главная',  url: 'index.html' },
    { title: 'Природа',  url: 'nature.html' },
    { title: 'Культура', url: 'culture.html' },
    { title: 'Наследие', url: 'heritage.html' }
  ];

  // Определяем текущую страницу
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Ищем существующее меню на странице
  let nav = document.querySelector('nav') || document.querySelector('.nav') || document.querySelector('#nav');

  // Если меню нет — создаём его и вставляем в начало body
  if (!nav) {
    nav = document.createElement('nav');
    nav.className = 'main-nav';
    document.body.insertBefore(nav, document.body.firstChild);
  }

  // Очищаем меню и заполняем ссылками
  nav.innerHTML = '';
  pages.forEach(function (page) {
    const link = document.createElement('a');
    link.textContent = page.title;
    link.href = page.url;

    // Подсвечиваем активную страницу
    if (page.url === currentPage) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }

    nav.appendChild(link);
  });

  // ============================================
  // Плавный переход при клике (если браузер поддерживает)
  // ============================================
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const href = link.getAttribute('href');
      // Не перехватываем внешние ссылки и якоря
      if (!href || href.startsWith('http') || href.startsWith('#')) return;
      // Обычный переход — оставляем браузеру
    });
  });

  // ============================================
  // Кнопки быстрого перехода (если есть на странице)
  // ============================================
  document.querySelectorAll('[data-goto]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const target = btn.getAttribute('data-goto');
      if (target) window.location.href = target;
    });
  });

  // ============================================
  // Мобильное меню (бургер), если нужен
  // ============================================
  const burger = document.querySelector('.burger');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }
});
// Плавная прокрутка к разделам
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

console.log('Сайт "Река. Слово. След" загружен!');