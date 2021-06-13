import sass from './sass/main.scss';
import receptArr from './templates/menu.json';
import markupTemp from './templates/markup-menu.hbs';

const menuReceps = markupTemp(receptArr);
const isertMenu = document.querySelector('.js-menu');
const bodyThem = document.querySelector('body');
const buttonBox = document.querySelector('#theme-switch-toggle');
isertMenu.insertAdjacentHTML('beforeend', menuReceps);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

savedThemLoad();

buttonBox.addEventListener('change', onChekbox);
function onChekbox(e) {
    const chkedbox = e.target.checked;
    if (chkedbox) {
        bodyThem.classList.add(Theme.DARK);
         bodyThem.classList.remove(Theme.LIGHT);
        

        localStorage.setItem('theTheme', Theme.DARK);
        
    } else if (!chkedbox) {
          bodyThem.classList.add(Theme.LIGHT);
         bodyThem.classList.remove(Theme.DARK);
      

          localStorage.setItem('theTheme', Theme.LIGHT);
    }
    
}


function savedThemLoad() {
    const currTheme = localStorage.getItem('theTheme');
    if (currTheme) {
        bodyThem.classList.add('currTheme');
        if (currTheme === Theme.DARK) {
            bodyThem.classList.add(Theme.DARK);
            buttonBox.checked = true;
        }
    }
    
}
