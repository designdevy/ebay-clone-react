import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import {useEffect} from "react";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";

function App() {
    const [{}, dispatch] = useStateValue();
    
    useEffect(() => {
        // Will only run once when the app component loads
        auth.onAuthStateChanged(authUser => {
            if (authUser) {
                // The user just ogged in and the user was logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            } else {
                // the user is logged out
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        })
    }, [])
    
  return (
      <Router>
        <div className="App">
            <Switch>
                <Route path="/checkout">
                    <Header />
                    <Checkout />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/coming-soon">
                    <Header />
                    <h1>Coming soon!</h1>
                </Route>
                <Route path="/">
                    <Header />
                    <Home />
                </Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
