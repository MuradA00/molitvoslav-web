// Функция для определения языка
function detectLanguage() {
  const languageOption = navigator.language;

  console.log(languageOption);

  switch(languageOption) {
    case 'ru-RU': {
      if (window.location.pathname !== '/index-ru.html') {
        window.location.href = 'index-ru.html';
      }
      break;
    }
    case 'en-EN': {
      if (window.location.pathname !== '/index-en.html') {
        window.location.href = 'index-en.html';
      }
      break;
    }
    case 'hy-HY': {
      if (window.location.pathname !== '/index-hy.html') {
        window.location.href = 'index-hy.html';
      }
      break;
    }
    case 'ro-RO': {
      if (window.location.pathname !== '/index-ro.html') {
        window.location.href = 'index-ro.html';
      }
      break;
    }
    default: {
      if (window.location.pathname !== '/index.html') {
        window.location.href = 'index.html';
      }
      break;
    }
  }

  // Устанавливаем флаг в localStorage, чтобы знать, что проверка была выполнена
  localStorage.setItem('languageChecked', 'true');
}

// Проверяем, была ли уже выполнена проверка языка
const languageChecked = localStorage.getItem('languageChecked');

// Если проверка языка еще не была выполнена, выполняем её
if (!languageChecked) {
  window.addEventListener('DOMContentLoaded', detectLanguage);
}
if (AOS) {
  AOS.init({
    once: true
  });
}
