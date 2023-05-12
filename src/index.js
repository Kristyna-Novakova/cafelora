import './style.css';
import { HomePage } from './pages/HomePage/index.js';
import { OrderPage } from './pages/OrderPage';

console.log('funguju!');

// const pageElement = document.createElement('div');
// pageElement.setAttribute('id', 'home');
// pageElement.classList.add('page');

// const main = document.createElement('main');
// main.append(Banner(), Menu({ drinks: 'loading' }), Gallery(), Contact());

// pageElement.append(Header(), main, Footer());

const { pathname } = window.location;

if (pathname === BASE_PATH + '/') {
  document.querySelector('#app').append(HomePage());
} else if (pathname === BASE_PATH + '/objednavka') {
  document.querySelector('#app').append(OrderPage());
}
