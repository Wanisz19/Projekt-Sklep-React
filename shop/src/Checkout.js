import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'

export default function Checkout() {
    const [{basket, user}, dispatch] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout_left">
               
                   <h3>Hello, {user? user.email : "Guest"}</h3>
                   <h2 className="checkout_title">Your shopping Basked
                   </h2>
                    {basket.map(item =>
                        <CheckoutProduct
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}  
                        id={item.id}  
                        /> )}
               
            </div>


            <div className="checkout_right">
                <Subtotal/>
                {/* <h2>The subtotal will go here</h2> */}
            </div>
        </div>
    )
}
