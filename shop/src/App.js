
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

          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>

          <Route path="/payment">
            <Header/>
            <Payment/>
            <h1>payment dupa</h1>
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
