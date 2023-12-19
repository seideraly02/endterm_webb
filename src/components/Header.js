import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Order from './Order';

const showOrders = (props) => {
  return (
    <div>
      {props.orders.map((el) => (
        <Order  key={el.id} item={el} onDelete={props.onDelete} />
      ))}
    </div>
  );
};

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Желаемые нету</h2>
    </div>
  );
};

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className='logo'> Galery Naruto and Sasuke</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-cart-button ${cartOpen ? 'active' : ''}`}
        />

        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ? (
              showOrders(props)
            ) : (
              showNothing()
            )}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  );
}
