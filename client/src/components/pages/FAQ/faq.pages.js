/*
import React from 'react';
//import Features from '../../features.components';
//import HeroSection from '../../hero-section.components';
//import {homeObjOne} from './data.faq';
import { Collapse } from 'antd';

const { Panel } = Collapse;
function FAQ () {
    return (
        <div class='block faqBlock'>
            <div className='container-fluid'>
                <div class='titleHolder'>
                    <h2>Frequently Asked Questions</h2>
                    <p>Contact support for further questions!</p>
                </div>
            <Collapse defaultActiveKey={['1']}>
            <Panel header="This is panel header 1" key="1">
            <p>colaapse content</p>
            </Panel>
            <Panel header="This is panel header 2" key="2">
            <p>colappse content</p>
            </Panel>
            <Panel header="This is panel header 3" key="3">
            <p>collapse content yess</p>
            </Panel>
            </Collapse>
            </div>
        </div>
    );
}

export default FAQ;
remove antd dependecy


import React from 'react'
import './faq.styles.css'

function FAQ() {
    return (
        <div className='accordion__section'>
            <button className='accordion'>
                <p className='accordion__title'>{props.title}</p>
            </button>
            <div className='accordion__content'>
                <div className='accordion__text'
                dangerouslySetInnerHTML={{__html: props.content}}
                ></div>
                
            </div>
        </div>
    );
}

export default FAQ;
*/



import React from 'react'
import Accordion from './data.faq'

import './faq.styles.css'

function FAQ() {
  return (
    <div>
        <div className='titleHolder'>
            <h2>Frequently Asked Questions</h2>
            <p>Contact support for further questions!</p>
        </div>
        <br></br>
      <h3>For Merchants</h3>
      <Accordion title="What is Poplar Pay and how does it work?">
        <span className="accordion-text">
        Poplar Pay is a platform that enables merchants anywhere in the world to accept cryptocurrency payments in a fully decentralized way. 
        This means that all funds that you receive are solely and fully controlled by you – Coinbase Commerce does not have access to any of the funds that you receive. 
        Unfortunately, this also means that if you lose your 12 word seed phrase, there is no way for Coinbase to help recover it.
        There are various features that allow users to use our platform in different ways:
        For users who want to sell a few products, we offer super simple hosted Checkouts and payment buttons
        For users who currently run a store on an eCommerce platform, we offer quick integrations to 12 of the most popular eCommerce services
        For users who need more advanced functionality, we offer a flexible API.
        </span>
      </Accordion>
      <br></br>
      <h3>Getting Started</h3>
      <Accordion title="How can I sign up for an account?">
        <span className="accordion-text">
        You only need an email address and we don’t require any documentation.
        There is also no upfront waiting period – simply sign up, confirm your email address, and you’re all set.
        </span>
      </Accordion>
      <Accordion title="What are the fees to use Poplar Pay?">
        <span className="accordion-text">We do not charge any fees in order to use Coinbase Commerce. However, in order to withdraw any funds you have received, you will need to pay a network fee to cryptocurrency miners. If you would like to convert your cryptocurrency into fiat, an exchange may charge fees.</span>
      </Accordion>
      <Accordion title="Which cryptocurrencies can I accept? Do I have to accept all of the cryptocurrencies that Coinbase Commerce offers?">
        <span className="accordion-text">We currently support Bitcoin, Bitcoin Cash, and much more.</span>
      </Accordion>
      <br></br>
      <h3>Withdrawals</h3>
      <Accordion title="How can I withdraw the funds that I have received?">
        <span className="accordion-text">To withdraw your funds, log into your Poplar Pay account and click on a “Withdraw” button next to the relevant cryptocurrency in the “Balances” section. A modal will pop up with the ability to specify how much you would like to withdraw, and where you would like these funds to go.</span>
      </Accordion>
      <Accordion title="Why do I have to pay a network fee to withdraw? Where does this fee go? How much is this fee?">
        <span className="accordion-text">
        A network fee is necessary in order to have your transaction processed by the decentralized cryptocurrency network. This fee goes to cryptocurrency miners, not Poplar Pay, as an incentive to secure the network and include your transaction in a block.
        There are a number of network-dependent factors that are used to calculate a withdrawal fee, making it difficult to predict these fees before attempting to withdraw. That being said, withdrawal fees for Bitcoin tend to be $1.00-$5.00, and fees for other currencies tend to be under $1.00. In general, these fees will be higher when more payments have been received.            </span>
      </Accordion>
      <Accordion title="Is there a minimum amount that I have to withdraw?">
        <span className="accordion-text">Yes, but Poplar Pay enforces very low minimum withdrawal amount to ensure that your funds are always accessible (i.e. avoid generating dust). These minimums fluctuate with exchange rates, but are generally under $0.10.</span>
      </Accordion>
      <Accordion title="Is there a maximum amount that I can withdraw?">
        <span className="accordion-text">There are no maximum withdrawal limits on Poplar Pay – you can withdraw all of the funds that you have received at any point.</span>
      </Accordion>
      <Accordion title="How can I convert my cryptocurrency into fiat?">
        <span className="accordion-text">Using Poplar Pay you can use our pull payment feature to convert your crypto to fiat.</span>
      </Accordion>
      <br></br>
      <h3>Refunds</h3>
      <Accordion title="How do I refund a customer?">
        <span className="accordion-text">To issue a refund using our pull payment method, simply open the transaction you’d like to refund and click on “Refund payment“. Once you enter your seed phrase and click “Confirm Refund,” you will not be able to cancel a refund, so it’s important that you get the correct destination address.</span>
      </Accordion>
      <Accordion title="Why doesn’t Coinbase automatically refund to the same address as the original payment?">
        <span className="accordion-text">If your customer paid using an account on an exchange, we can’t guarantee that the funds would be returned to the correct person. Also people sometimes lose access to their wallets, so it’s best to confirm where they would like the funds deposited. The address must be for the same currency in which the original transaction was paid.</span>
      </Accordion>
      <br></br>
      <h3>Integrations</h3>
      <Accordion title="How do I connect Coinbase Commerce to my eCommerce provider?">
        <span className="accordion-text">Follow instructions in our documentations or contact support.</span>
      </Accordion>
      <br></br>
      <h3>Account Issues</h3>
      <Accordion title="How can I reset my password?">
        <span className="accordion-text">If you’ve forgotten your password, please visit our reset password page and follow the on-screen instructions.</span>
      </Accordion>
      <Accordion title="I never received an account confirmation or password reset email. What should I do?">
        <span className="accordion-text">Please check your spam folder to ensure that your account confirmation or password reset email was not accidentally mislabeled. If you are still unable to find this email, please contact us.</span>
      </Accordion>
      <Accordion title="How do I close my account?">
        <span className="accordion-text">To close your account, please visit your settings page and follow the instructions under the “Close Account” section at the bottom of the page.</span>
      </Accordion>
      <br></br>
      <h3>Payment Issues</h3>
      <Accordion title="What does an “OVERPAID” payment mean? What should I do?">
        <span className="accordion-text">
        Poplar Pay tracks payment amounts in the cryptocurrency units. An overpayment indicates that we have detected an amount greater than we expected – the most common reason for this occurring is your customer’s wallet using a significantly different exchange rate than Poplar Pay.
        If you click on the relevant payment on your merchant dashboard, you will be able to see the overpayment amount, a button to resolve the payment failure and a button to email your customer (if you have requested the customer submit an email address). 
        Depending on the magnitude of the overpayment, we recommend either marking the payment as resolved and processing the order, or requesting an address from your client to refund the excess amount in addition to marking as resolved.
        </span>
      </Accordion>
      <Accordion title="What does an “UNDERPAID” payment mean? What should I do?">
        <span className="accordion-text">
        Poplar Pay tracks payment amounts in the cryptocurrency units. An underpayment indicates that we have detected an amount less than what was requested – the most common reason for this occurring is your customer’s wallet using a significantly different exchange rate than Poplar Pay.
        If you click on the relevant payment on your merchant dashboard, you will be able to see the underpayment amount, a button to resolve the payment failure and a button to email your customer (if you have requested the customer submit an email address). 
        Depending on the magnitude of the underpayment, we recommend either marking the payment as resolved and processing the order or requesting your customer send a second transaction for the remaining amount before marking the payment as resolved and processing the order.
        </span>
      </Accordion>
      <Accordion title="What does a “MULTIPLE” payment mean? What should I do?">
        <span className="accordion-text">
        Poplar Pay expects to see a single blockchain transaction for each order, and it appears that we have detected more than one transaction for this order. Sometimes this can happen when your customer initially underpays an order and is attempting to top up the remaining balance.
        If you click on the relevant payment on your merchant dashboard, you will be able to see the total amount paid, a button to resolve the payment failure and a button to email your customer (if you have requested the customer submit an email address). 
        Depending on the circumstance, we recommend either marking the payment as resolved and processing the order, or refunding the excess amount before marking the payment as resolved and processing the order. 
        To refund the excess amount, ask your customer for a cryptocurrency address and then send the payment.
        </span>
      </Accordion>
    </div>
  )
}

export default FAQ

