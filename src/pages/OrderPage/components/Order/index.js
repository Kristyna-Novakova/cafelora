import { OrderItem } from '../OrderItem';

export const Order = (props) => {
  const { items } = props;

  const element = document.createElement('div');
  element.classList.add('order__content', 'container');

  element.innerHTML += `
      <h1>Vaše objedávnka</h1>
      <p class="empty-order empty-order--hide">Zatím nemáte nic objednáno</p>
      <div class="order__items"></div>
  `;

  const orderItems = element.querySelector('.order__items');

  if (items === 'loading') {
    fetch('https://cafelora.kodim.app/api/me/drinks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const orderedItems = data.result.filter((item) => item.ordered);
        if (orderedItems === true) {
          orderedItems.forEach((item) => {
            const orderComponent = OrderItem({
              name: item.name,
              image: item.image,
            });
            orderItems.append(orderComponent);
          });
          element
            .querySelector('.empty-order')
            .classList.add('empty-order--hide');
        } else {
          element
            .querySelector('.empty-order')
            .classList.remove('empty-order--hide');
        }
      });
  }
  return element;
};
