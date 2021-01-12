import React from 'react';
import { FaDiscord, FaFacebook, FaInstagram, FaReddit, FaTwitter } from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Button } from '../../button.components';
import './footer.footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join our exclusive membership to receive the latest news, trends and new features!
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input 
                        type='email' 
                        name='email' 
                        className='footer-input'
                        placeholder='Your email'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/login'>Login</Link>
                        <Link to='/'>Privacy Policy</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Donate</h2>
                        <Button buttonStyle='btn--outline'>Donate</Button>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Twitter</Link>
                        <Link to='/'>Reddit</Link>
                        <Link to='/'>Discord</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/'className='social-logo'>
                            <MdFingerprint className='navbar-icon' />
                            POPLAR PAY 
                        </Link>
                    </div>
                    <small className='website-rights'> POPLAR PAY © 2020</small>
                    <div className='social-icons'>
                        <Link 
                        className='social-icon-link' 
                        to='/' 
                        target='_blank' 
                        aria_label='Facebook'>
                        <FaFacebook />
                        </Link>
                        <Link 
                        className='social-icon-link' 
                        to='/' 
                        target='_blank' 
                        aria_label='Instagram'>
                        <FaInstagram />
                        </Link>
                        <Link 
                        className='social-icon-link' 
                        to='/' 
                        target='_blank' 
                        aria_label='Twitter'>
                        <FaTwitter />
                        </Link>
                        <Link 
                        className='social-icon-link' 
                        to='/' 
                        target='_blank' 
                        aria_label='Reddit'>
                        <FaReddit />
                        </Link>
                        <Link 
                        className='social-icon-link' 
                        to='/' 
                        target='_blank' 
                        aria_label='Discord'>
                        <FaDiscord />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
