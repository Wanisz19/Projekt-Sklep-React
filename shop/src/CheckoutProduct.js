import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({image, title, price, rating, id, hideButton}) {

console.log("siema")
console.log(id)

    const [{basket}, dispatch] = useStateValue();
    
    const removeFromBasket = () =>{
            // console.log(id)
            dispatch({
                type:'REMOVE_FROM_BASKET',
                id:id
            })
            
        }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image}/>

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title '>{title}</p>
                <p className='checkoutProduct_price'>
                    
                    <strong>{price} €</strong>
                </p>
                <div className="checkoutProduct_rating">
                    <p>rate:{rating}</p>
                </div>

                {!hideButton && (<button className="button_checkout" onClick={removeFromBasket}>
                    Remove from Basket </button>)}
                
            </div>
        </div>
    )
}

export default CheckoutProduct
