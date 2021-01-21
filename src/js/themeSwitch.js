const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  const refs = {
    input: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
  };
  
  loadingThem();
  refs.input.addEventListener('change', chengeTheme);
  
  function chengeTheme() {
    refs.body.classList.toggle(Theme.DARK);
    refs.body.classList.toggle(Theme.LIGHT);
  
    getCurrentTheme(refs.body.classList);
  }
  
  function getCurrentTheme(currentThem) {
    localStorage.setItem('Theme', currentThem);
  }
  
  function loadingThem() {
    const savedThem = localStorage.getItem('Theme');
    if (savedThem === Theme.DARK) {
      refs.body.classList.add(savedThem);
      refs.input.checked = true;
    } else {
      refs.body.classList.add(Theme.LIGHT);
    }
  }



  /*Добавь функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.

По умолчанию тема светлая.
При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй localStorage.
Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true, чтобы ползунок сдвинулся в правильное положение.*/