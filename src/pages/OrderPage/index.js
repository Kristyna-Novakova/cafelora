import './style.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const OrderPage = () => {
  const element = document.createElement('main');
  element.classList.add('order');

  element.append(
    Header({
      showMenu: false,
    }),
  );
  element.innerHTML += `
      <div class="order__content container">
      <h1>Vaše objedávnka</h1>
      <p class="empty-order empty-order--hide">Zatím nemáte nic objednáno</p>
      <div class="order__items">
        <div class="order-item">
          <img src="https://apps.kodim.cz/daweb/cafelora/assets/cups/vienna-coffee.png" class="order-item__image">
          <div class="order-item__name">
            Vídeňská káva
          </div>
        </div>
        
        <div class="order-item">
          <img src="https://apps.kodim.cz/daweb/cafelora/assets/cups/chocolate-milk.png" class="order-item__image">
          <div class="order-item__name">
            Čokoláda s mlékem
          </div>
        </div>
      </div>
    </div>
  `;

  element.append(Footer());

  return element;
};
