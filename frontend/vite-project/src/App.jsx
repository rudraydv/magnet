import React ,{ useEffect, useState }from 'react';
import './App.css';
import './index.css';
import axios from 'axios';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import WebFont from 'webfontloader';
import Header from './components/layout/header/Header';
import Home from './components/home/Home';
import ProductDetails from './components/product/ProductDetails';
import Products from './components/product/Products';
import UserOptions from './components/layout/header/UserOptions';
import { useSelector } from 'react-redux';
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
import ConfirmOrder from './components/cart/ConfirmOrder';
import Payment from './components/cart/Payment';
import {loadStripe} from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';
import OrderSuccess from './components/cart/OrderSuccess';
import NotFound from './components/layout/NotFound';



const  App = () => {

  const {user} = useSelector((state)=>state.user);

  const [stripeApiKey,setStripeApiKey] = useState('');

  async function getStripeApiKey() {
    try {
      const { data } = await axios.get('http://localhost:3000/api/auth/stripeapikey');
      setStripeApiKey(data.stripeApiKey);
    } catch (error) {
      console.error('Error fetching Stripe API Key:', error);
    }
  }
  
  useEffect(()=>{
   WebFont.load({
      google: {
        families: ['Roboto','Droid Sans','Chilanka'],
        },
        });

        getStripeApiKey();
  },[]);

  return (
    <>
    <Router>
      <Header />
      {<UserOptions user = {user}/>}
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = '/product/:id' element = {<ProductDetails/>} />
        <Route path='/products' element = {<Products/>}/>
        <Route path='/products/:keyword' element = {<Products/>}/>             
          <Route path='/cart' element = {<Cart/>}/>
          <Route path='/shipping' element = {
              <Shipping/>  
          }/>

          <Route path='/order/confirm' element = {
              <ConfirmOrder/>
          }/>

          <Route
            path="/process/payment"
            element={
              <Elements stripe={loadStripe(stripeApiKey)}>
                  <Payment /> 
              </Elements>
            }
          />
        <Route path='/success' element = {
            <OrderSuccess/>
        }/>
        
        <Route path='/*' element = {<NotFound/>}/>
      </Routes>
    </Router>
    </>
  );
};

export default App;
