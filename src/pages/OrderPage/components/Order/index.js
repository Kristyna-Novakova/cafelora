import { OrderItem } from '../OrderItem';

export const Order = (props) => {
  const { item } = props;

  if (item === 'loading') {
    fetch('https://cafelora.kodim.app/api/me/drinks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
};
