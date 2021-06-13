import sass from './sass/main.scss';
import receptArr from './templates/menu.json';
import markupTemp from './templates/markup-menu.hbs';

const menuReceps = markupTemp(receptArr);
const isertMenu = document.querySelector('.js-menu');
isertMenu.insertAdjacentHTML('beforeend', menuReceps);