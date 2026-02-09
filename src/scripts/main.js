'use strict';

const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // window.alert('Форма успішно відправлена (без перезавантаження сторінки)');

  form.reset();
});
