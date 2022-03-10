import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import {db} from './firebase'

function Payment() {
    const [{basket, user}, dispatch] = useStateValue(); 
    const history = useHistory()


    const stripe = useStripe();
    const elements = useElements();

    

    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    

    const [clientSecret, setClientSecret] = useState(true) 
    useEffect(() => {
         const getClientSecret = async () => {
            const responce = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(responce.data.clientSecret)
         }
         getClientSecret();
    }, [basket])


    console.log("secreet is ",clientSecret)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {payment_method: {
            card: elements.getElement(CardElement)
        }
        }).then(({ paymentIntent }) => {
            //paymentIntent = paymet confirmation
            
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })



            setSucceeded(true);
            setError(null);
            setProcessing(false)

            dispatch({
                type: "EMPTY_BASKET"
            })

            history.replace('/orders')
        })
    }

    // .then daje nam "responce", ale wykonujemy destrukturyzacje

    const handleChange = e => {
        //Listen for changes in the CardElement
        //and dispaly any errors as the custoremr types their card details
        setDisabled(e.empty)
        setError(e.error ? e.error.message : "");
    }

    const a = false;
    const b = false;
    const c = true;
    
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
                            <p>Adress</p>
                            <p>City and County</p>
                        </div>
                    
                </div>

                <div className="payment_section">
                    <div className='payment_title'>
                        <h3>Your Order</h3>
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
                        
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment_priceContainer">

                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                        <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    suffix={"€"}
                                />
                                
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing? <p>Processing</p> : "Buy Now" }</span>
                                </button>
                                
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Payment
