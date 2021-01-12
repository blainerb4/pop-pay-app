import React from 'react'
import { FaFire } from 'react-icons/fa'
import {BsXDiamondFill} from 'react-icons/bs'
import {GiCrystalize} from 'react-icons/gi'
import {IconContext} from 'react-icons/lib'
import { Link } from 'react-router-dom'
import { Button } from './button.components'
import './features.styles.css'

function Features() {
    return (
        <IconContext.Provider value={{color: '#fff', size: 64}}>
        <div>
            <div className='features__section'>
                <div className='features__wrapper'>
                    <h1 className='features__heading'>Features</h1>
                    <div className='features__container'>
                        <Link to='/sign-up' className='features__container-card'>
                            <div className='features__container-cardInfo'>
                                <div className='icon'>
                                    <FaFire />
                                </div>
                                <h3>Dynamic Billing</h3>
                                <h5>$0</h5>
                                <p>Subscription and invoice services</p>
                                <ul className='features__container-features'>
                                    <li>Recurring billing</li>
                                    <li>Invoice management</li>
                                    <li>Crypto to fiat conversion</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Register Now
                                </Button>
                            </div>
                        </Link>
                        <Link to='/sign-up' className='features__container-card'>
                            <div className='features__container-cardInfo'>
                                <div className='icon'>
                                    <BsXDiamondFill />
                                </div>
                                <h3>Seamless integration</h3>
                                <h5>$0</h5>
                                <p>Online and mobile payments</p>
                                <ul className='features__container-features'>
                                    <li>E-commerce/CMS integration</li>
                                    <li>Payment and donation buttons</li>
                                    <li>Point-of-sale payments</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='blue'>
                                    Register Now
                                </Button>
                            </div>
                        </Link>
                        <Link to='/sign-up' className='features__container-card'>
                            <div className='features__container-cardInfo'>
                                <div className='icon'>
                                    <GiCrystalize />
                                </div>
                                <h3>Privacy focused</h3>
                                <h5>$0</h5>
                                <p>No KYC/AML requirements</p>
                                <ul className='features__container-features'>
                                    <li></li>
                                    <li>Lightning Network node</li>
                                    <li>Keep your privacy keys</li>
                                    <li>Payjoin and Tor support</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Register Now
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>
    );
}

export default Features
//                                <p>No transaction fees</p>
