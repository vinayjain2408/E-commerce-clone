import React, { useContext } from 'react';
import { ContextAPI } from './EcommerceAPI';

function Cart() {
  const { Count, setCount } = useContext(ContextAPI);

  function Removelist(e, ind) {
    e.preventDefault();
    setCount(Count.filter((text, id) => id !== ind));
  }

  const subtotal = Count.reduce((total, item) => total + item.price, 0);

  return (
    <div className='display'>
      <h1>Cart</h1>
      {Count.map((item, index) => (
        <div className='cartbox' key={index}>
          <div className='cartimg'>
            <img src={item.image} alt={item.title} />
          </div>
          <div className='cartdetail'>
            <h3>{item.title}</h3>
            <h3>${item.price}</h3>
            <a href='/' onClick={(e) => Removelist(e, index)}>Remove</a>
          </div>
        </div>
      ))}
      <div>
        <h1>SubTotal: ${subtotal}</h1>
      </div>
    </div>





  );
}

export default Cart;
