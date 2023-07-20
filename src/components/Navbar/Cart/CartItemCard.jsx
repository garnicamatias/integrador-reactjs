import React from 'react'
import { CartItemCardWrapper } from './CartStyles'
import { Button } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../../redux/cart/cartSlice'

const CartItemCard = ({item}) => {

  const dispatch = useDispatch()

  return (
    <CartItemCardWrapper>
      <img src={item.thumbnail} alt="" />
      <p>{item.title}</p>
      <Button className='deleteItemBtn' onClick={()=> dispatch(removeFromCart(item.id))}>
        <span className="material-symbols-outlined">
        delete
        </span>
      </Button>
    </CartItemCardWrapper>
  )
}

export default CartItemCard