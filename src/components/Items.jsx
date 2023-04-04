import React, {useContext} from 'react'
import { CartContext } from './Cart'

const Items = ({id,description,title,price,quantity,img}) => {
  const { removeItem, increment,decrement } = useContext(CartContext)
  return (
    <>
       <div className="items-info">
                   <div className="product-img">
                    <img src= {img} />
                   </div>

                   <div className="title">
                      <h2>{title}</h2>
                       <p>{description}</p>
                   </div> 

                   <div className="add-minus-quantity">
                   <i className="fa-solid fa-minus" onClick={() => decrement(id)}></i>
                   <input type="text" placeholder={quantity}/>
                   <i className="fa-solid fa-plus add" onClick={() => increment(id)}></i>
                   </div> 

                   <div className="price">
                    <h3>{price} RS</h3>
                   </div> 
                  
                   <div className="remove-item">
                   <i className="fa-sharp fa-solid fa-trash-alt remove" onClick={() => removeItem(id)}></i>
                   </div> 
                   

                </div>
                <hr />
    </>
  )
}

export default Items
