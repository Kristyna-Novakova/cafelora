import './style.css';
import { HomePage } from './pages/HomePage/index.js';

console.log('funguju!');

// const pageElement = document.createElement('div');
// pageElement.setAttribute('id', 'home');
// pageElement.classList.add('page');

// const main = document.createElement('main');
// main.append(Banner(), Menu({ drinks: 'loading' }), Gallery(), Contact());

// pageElement.append(Header(), main, Footer());

const { pathname } = window.location;

if (pathname === '/') {
  document.querySelector('#app').append(HomePage());
}
