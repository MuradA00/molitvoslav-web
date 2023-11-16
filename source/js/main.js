function detectLanguage() {
  let languageOption = sessionStorage.getItem('languageOption');

  // Если язык еще не был определен
  if (!languageOption) {
    languageOption = navigator.language;
    sessionStorage.setItem('languageOption', languageOption); // Сохраняем в sessionStorage
  }

  console.log(languageOption);

  // Проверяем язык и перенаправляем пользователя
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
}

detectLanguage();

if (AOS) {
  AOS.init({
    once: true
  });
}
