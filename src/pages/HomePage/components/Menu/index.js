import { Drink } from './components/Drink/index.js';
import './style.css';

export const Menu = (props) => {
  const { drinks } = props;

  const element = document.createElement('section');
  element.setAttribute('id', 'menu');
  element.classList.add('menu');

  element.innerHTML = `
  <<div class="container">
  <h2>Naše nabídka</h2>
  <p class="menu-intro">
    Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
  </p>
  <div class="drinks-list"></div>

  <div class="order-detail">
    <a href="/objednavka">Detail objednávky</a>
  </div>
</div>  
`;

  const drinksList = element.querySelector('.drinks-list');

  if (drinks === 'loading') {
    fetch('https://cafelora.kodim.app/api/me/drinks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.result.forEach((drink) => {
          const drinkComponent = Drink({
            id: drink.id,
            name: drink.name,
            layers: drink.layers,
            ordered: drink.ordered,
            image: drink.image,
          });
          drinksList.append(drinkComponent);
        });
      });
  }

  return element;
};
