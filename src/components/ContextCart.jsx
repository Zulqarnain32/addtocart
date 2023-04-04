import React, { useContext, useState } from 'react'
import Items from './Items';
import { products } from './Products';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { CartContext } from './Cart';
const ContextCart = () => {
   const { item } = useContext(CartContext)
   const { clearAll,totalItem,totalAmount } = useContext(CartContext)
   //the two above lines can be written on the  same line seperating by a coma
    // const [ items, setItems ] = useState(products)
  return (
    <> 
     <header>
        <div className="continue-shopping">
           <img src="./images/arrow.png" alt="" className='arrow-icon' />
           <h3>continue shopping</h3>
        </div>
        <div className="cart-icon">
            <img src="./images/cart.png" alt="" />
            <p>{totalItem}</p>
        </div>
     </header>
     {/* header section ends here */}
     <section className='main-cart-section'>
        <h1>shopping cart</h1>
        <p className='total-items'>you have <span className='total-items-count'>{totalItem}</span> items in your cart</p>
        
        
        <div className="cart-items">
            <div className="cart-items-container">
               {/* scrollbar */}
               <Scrollbars >
              {
               item.map((currElm) => {
                  return <>
                     <Items  key={currElm.id} {...currElm}/>     
                     
                  </>
               })
              }  
                </Scrollbars>
            </div> 
         </div> 
         <div className="card-total">
            <h3>Cart-Total : <span>{totalAmount}</span></h3>
            <button className='checkout'>checkout</button>
            <button onClick={() => clearAll()} className='clearall' id='red'>Clear ALl</button>

         </div>
     </section>
      
    </>
  )
}

export default ContextCart
