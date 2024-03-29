
import './App.css';
import './Header'
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import {useStateValue} from "./StateProvider"
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Orders from './Orders'

const promise = loadStripe('pk_test_51JtZE0LcuY9EIOVN7ykzFHzpleawV46uk27DSAGIpofEMRe16i1fH48O1t3zgj2LTfW0ZWytiGXANA7BQLAEk0eq00Q6sjKiv1')

// promise is public key


function App() {
  const [{},dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>', authUser);

      if(authUser){
        //user just logged in log out
        dispatch({ type: 'SET_USER',
                   user: authUser}
        )
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])

  return (
    
    <Router>  
      <div className="App"> 
        <Switch>
          <Route path='/login'>
            <Login/>
          </Route>

          <Route path='/orders'>
            <Header/>
            <Orders/>
          </Route>

          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>

          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>

          <Route path="/">
            <Header/>
            <Home/>
          </Route>

        </Switch>
      </div>
    </Router>
    
  );
}

export default App;



