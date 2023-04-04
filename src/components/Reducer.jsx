export const  reducer = ( state,action ) => {
    if(action.type === "REMOVE_ITEM"){
        return {
        ...state,
        item:state.item.filter((currElm) => {
            return currElm.id !== action.payload
    })
        }
   }
   if(action.type === "CLEAR_ALL"){
    return {
        ...state,
        item:[]
    }
   }
   if(action.type === "INCR" ){
    let updatedCart = state.item.map((currElm) => {
        if(currElm.id === action.payload){
          return {...currElm, quantity:currElm.quantity + 1}  
        } 
        return currElm
    })
     return {...state, item:updatedCart}
    }
    if(action.type === "DECR" ){
        let updatedCart = state.item.map((currElm) => {
            if(currElm.id === action.payload){
              return {...currElm, quantity:currElm.quantity - 1}     
            } 
            return currElm
        }).filter((currElement) => {
            return currElement.quantity !== 0;
        })
         return {...state, item:updatedCart}
        }

    if(action.type === "GET_TOTAL"){
        let { totalItem,totalAmount} = state.item.reduce((accum,currElm) => {
            let { quantity,price } = currElm;
            let updatedPrice = quantity * price;
            accum.totalAmount += updatedPrice;
            accum.totalItem += quantity
            return accum
          },
          {
          totalItem:0,
          totalAmount:0
          }
        )
        return {...state, totalItem,totalAmount}
    }    

    return state;
}