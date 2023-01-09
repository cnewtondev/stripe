import React from 'react'

import './App.css';
import Lottie from "lottie-react";
import Card from './animations/cardAnimation.json'
import laptop from './animations/laptop.png'

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './components/CheckoutForm'

const stripePromise = loadStripe('pk_test_51MORuuCyLYwa5YX5LsFZPjJdf9128MQzdtAfzdtpkoPfIF7zVHHluhyAVQojd1j8OoKfdvafjnW1EC8ORCW0Chea00ctfBxfh6');

function App() {
 
  return (
    <div className="App">
      <div className='left'>
      
      Some functions have been disabled
      
      <Lottie animationData={Card} loop={true} />
      </div>
      <div className='right'>
      <img
          src={laptop}
          alt="laptop"
          style={{ width: "50%", height: "auto"}}
        />
        <div className='cardy'>
        <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
}



export default App;
