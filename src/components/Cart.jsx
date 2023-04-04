import React, { createContext, useReducer, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import "./Cart.css"
import { products } from './Products';
import Items from './Items';
import ContextCart from './ContextCart';
import { reducer } from './Reducer';
import { useEffect } from 'react';
export const CartContext = createContext()
const initialState = {
  item:products,
  totalAmount:0,
  totalItem:0
}


const Cart = () => {
   // const [ items, setItems ] = useState(products)
   const [ state,dispatch ] = useReducer(reducer,initialState)
   const removeItem = (id) => {
    return dispatch({
      type:"REMOVE_ITEM",
      payload:id
    })
   }
   const clearAll = () => {
    return dispatch({
      type:"CLEAR_ALL",
    })
   }
   const increment = (id) => {
     return dispatch({
      type:"INCR",
      payload:id
     })
   }
   const decrement = (id) => {
    return dispatch({
     type:"DECR",
     payload:id
    })
  }


  useEffect(() => {
    dispatch({type:"GET_TOTAL"})
    console.log("Awesome");
  }, [state.item])

  //state.item isliye hai jb b maii cart mai changing kroonga click kroonga i.e delete 
  // increment or decrement tb useeffect chali gi or Awesoem proint hoga
  return (
    <>
       {/* <CartContext.Provider value={products}> */}
        <CartContext.Provider value={{...state,removeItem,clearAll,increment,decrement}}> 
         <ContextCart/>
       </CartContext.Provider>
    </>
  )
}

export default Cart
