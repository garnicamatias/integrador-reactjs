import React from 'react';

import { CartIconContainer } from './CartIconStyles';
import { toggleHiddenCart } from '../../../redux/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';


const CartIcon = () => {
  const totalCartItems = useSelector(state => state.cart.cartItems).reduce((total, item) => (total += item.quantity), 0)

  const dispatch = useDispatch();

  return (
    <CartIconContainer onClick={() => dispatch(toggleHiddenCart())}>
      <span className="material-symbols-outlined">
        shopping_cart
      </span>
      <span className='cartCounter'>{totalCartItems}</span>
    </CartIconContainer>
  );
};

export default CartIcon;