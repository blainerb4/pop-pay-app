import React from 'react';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
//import Features from '../../features.components';
import HeroSection from '../../hero-section.components';
import {homeObjSix, homeObjSeven} from './data.referral'
import { FaFire } from 'react-icons/fa'
import {BsXDiamondFill} from 'react-icons/bs'
import {GiCrystalize} from 'react-icons/gi'
import { Button } from '../../button.components'


function Referral () {
    return (
        <>
        <HeroSection {...homeObjSix} />
        <HeroSection {...homeObjSeven} />
        <IconContext.Provider value={{color: '#fff', size: 64}}>
        <div>
            <div className='features__section'>
                <div className='features__wrapper'>
                    <h1 className='features__heading'>Tier-based comission</h1>
                    <p>Create multiple sources of income. Send your referral links to businesses anywhere in the world and start earning.</p>
                    <div className='features__container'>
                        <Link to='/sign-up' className='features__container-card'>
                            <div className='features__container-cardInfo'>
                                <div className='icon'>
                                    <FaFire />
                                </div>
                                <h3>Gold</h3>
                                <h4>$50</h4>
                                <p>Earn rewards immediately</p>
                                <ul className='features__container-features'>
                                    <li>Earn $50 USD when the merchant places its first order</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Get Started
                                </Button>
                            </div>
                        </Link>
                        <Link to='/sign-up' className='features__container-card'>
                            <div className='features__container-cardInfo'>
                                <div className='icon'>
                                    <BsXDiamondFill />
                                </div>
                                <h3>Diamond</h3>
                                <h4>$200</h4>
                                <p>Recurring rewards program.</p>
                                <ul className='features__container-features'>
                                <li>Earn $200 USD when the merchant generates $100,000 USD in sales</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='blue'>
                                    Get Started
                                </Button>
                            </div>
                        </Link>
                        <Link to='/sign-up' className='features__container-card'>
                            <div className='features__container-cardInfo'>
                                <div className='icon'>
                                    <GiCrystalize />
                                </div>
                                <h3>Platinum</h3>
                                <h4>$1000</h4>
                                <p>Lifetime rewards program.</p>
                                <ul className='features__container-features'>
                                <li>Earn $1000 USD when the merchant generates $1,000,000 USD in sales</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Get Started
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>
        </>
    );
}

export default Referral;