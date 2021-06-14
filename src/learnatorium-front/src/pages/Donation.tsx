import React from 'react';
import {CardElement } from '@stripe/react-stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import '../style/pages/donation.css';
const stripePromise = loadStripe("pk_test_51IzIjtEz3oi7LdG0bP6SDaejfqw4eFTHKH3qzeMBaT3NQi2pJT82ai5Ji1GA5E8jDENSZh2Cfy4VrQjT2sEPRjWT008JPsYNCN");


function Donation() {
    return (
        <div className="uk-container" >
            <div className="uk-card uk-card-default uk-card-large uk-card-body" id="containerDonation">
            <h3 className="uk-card-title">Donations</h3>
            <div className="uk-margin">
                <Elements stripe={stripePromise}>
                    <form>
                        <p id="shadowText">Choose between those option:</p>
                        <select className="uk-select uk-margin-bottom">
                            <option>5 €</option>
                            <option>10 €</option>
                            <option>15 €</option>
                            <option>20 €</option>
                        </select>
                        <p id="shadowText">Insert the user that you want to donate:</p>
                        <input className="uk-input uk-margin-bottom" type="text"/>
                        <p id="shadowText">Card Number:</p>
                        <CardElement></CardElement>
                        <button className="uk-button uk-align-center uk-button-primary uk-margin-top uk-button-large">Submit</button>
                    </form>
                </Elements>
            </div>
        </div>
        </div>
    )
}


export default Donation;
