import './style.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Order } from './components/Order';

export const OrderPage = () => {
  const element = document.createElement('main');
  element.classList.add('order');

  element.append(
    Header({
      showMenu: false,
    }),
  );

  element.append(Order({ items: 'loading' }));

  element.append(Footer());

  return element;
};
