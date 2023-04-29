import './style.css';
import { Layer } from '../Layer';

export const Drink = (props) => {
  // console.log(props);
  const { id, name, ordered, image, layers } = props;

  const element = document.createElement('div');
  element.classList.add('drink');
  element.innerHTML = `
        <div class="drink__product">
        <div class="drink__cup">
          <img src="${image}">
        </div>
        <div class="drink__info">
          <h3>${name}</h3>
        </div>
      </div>
      <div class="drink__controls">
        <button class="order-btn ${ordered ? 'order-btn--ordered' : ''}">
        ${ordered ? 'Zrušit' : 'Objednat'}
        </button>
      </div>
      `;

  const layersContainer = element.querySelector('.drink__info');

  layers.forEach((layer) => {
    const layerElement = Layer(layer);
    layersContainer.appendChild(layerElement);
  });

  //Funkce handleClick
  const handleClick = () => {
    fetch(`https://cafelora.kodim.app/api/me/drinks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        ordered: !ordered,
      }),
    })
      .then((response) => response.json())
      .then((data) =>
        element.replaceWith(
          Drink({ id, name, ordered: data.result.ordered, image, layers }),
        ),
      );
  };

  ///Posluchač události
  element.querySelector('.order-btn').addEventListener('click', handleClick);

  return element;
};
