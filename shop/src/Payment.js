import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue(); 

    return (
        <div className="payment">
            <div className="payment_container">
                <h1> Checkout (<Link to="/checkout>">{basket?.length} items</Link>)</h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Adress</h3>
                        </div>
                        <div className='payment_address'>
                            <p>{user ? user.email : "guest"}</p>
                            <p>Łagodna 5/37</p>
                            <p>Bielsko-Biala, Polska</p>
                        </div>
                    
                </div>

                <div className="payment_section">
                    <div className='payment_title'>
                        <h3> reviews items and delivery</h3>
                    </div>

                    <div className='payment_items'>
                    {basket.map(item =>
                        <CheckoutProduct
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}  
                        id={item.id}  
                        /> )}
                    </div>
                    
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Payment
