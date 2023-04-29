export const OrderItem = (props) => {
  const { name, image } = props;

  const element = document.querySelector('div');
  element.classList.add('order__items');
  element.innerHTML = `
        <div class="order-item">
          <img src="${image}" class="order-item__image">
          <div class="order-item__name">
            ${name}
          </div>
        </div>  
  `;
  return element;
};
