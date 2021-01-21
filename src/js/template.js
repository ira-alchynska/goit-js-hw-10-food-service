import menuTemplate from '../templates/menu.hbs';
import dishes from '../menu.json';


const markUp = menuTemplate(dishes).trim();


const foodMenu = document.querySelector('.js-menu');

foodMenu.insertAdjacentHTML('afterbegin', markUp);
