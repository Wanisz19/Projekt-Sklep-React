import React from 'react'
import "./Product.css"
import buty from './photos/buty.jpg'
import { useStateValue } from './StateProvider'


export default function Product({title,image,price,rating,id}) {
    const [state, dispatch] = useStateValue()

    // console.log(state.basket)
     
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                title:title,
                image:image,
                price:price,
                rating:rating,
                id:id
            }
        })
    }
    return (
        <div className='product'>
            <div className='product_info'>
                <p> {title}</p>
                <p className='product_price'>
                    <small>€ </small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    <p>Rate: {rating}</p>
                </div>
            </div>
                <img 
                src={image} 
                alt="shoes"/>

                <button className="order_button" onClick={addToBasket}>Add to Basket</button>
            
        </div>
    )
}
