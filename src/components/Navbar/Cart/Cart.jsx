import React from 'react'
import { CartWrapper, CartItemsWrapper, CartDescriptionWrapper } from './CartStyles'
import { Button } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, toggleHiddenCart } from '../../../redux/cart/cartSlice'
import CartItemCard from './CartItemCard'

const Cart = () => {
    const dispatch = useDispatch();
    const hiddenCart = useSelector((state)=> state.cart.hidden)
    const cartItems = useSelector((state)=> state.cart.cartItems)

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) =>{
      return (total += item.price * item.quantity)
    }, 0)
  
  return (
    <>
        {!hiddenCart &&
            (
                <CartWrapper>
                  <Button className='closeCartBtn' onClick={()=> dispatch(toggleHiddenCart())}>
                  <span className="material-symbols-outlined">
                    close
                  </span>
                  </Button>
                  <CartItemsWrapper>
                    {
                      cartItems.length ? (
                        cartItems.map((item) => {
                          return <CartItemCard item={item} key={item.id} />
                        })
                      ) : (
                        <p>Carrito Vacío</p>
                      )
                    }
                  </CartItemsWrapper>
                  <Button onClick={()=> dispatch(clearCart())}>
                    Vaciar Carrito
                  </Button>
                  <CartDescriptionWrapper>
                    <div>
                        {totalItems <= 1 ? (
                          <p>{totalItems} producto</p>
                        ) : (
                          <p>{totalItems} productos</p>
                        )}
                
                    <p>Total: ${totalPrice}</p>
                    </div>
                  </CartDescriptionWrapper>
                  <Button>Finalizar Compra</Button>
                </CartWrapper>
            )
        }

       
    </>
  )
}

export default Cart