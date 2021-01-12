import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {MdFingerprint} from 'react-icons/md';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Button } from './button.components';
import './navbar.styles.css';
import {IconContext} from 'react-icons/lib';
//import Dropdown from './dropdown.components'
//import { Alert } from 'react-bootstrap';
//import { useAuth } from '../contexts/AuthContext';

function Navbar() {
    const [click, setClick] = useState(false);
//    const [dropdown, setDropdown] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false)

    
   /*
const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false);
        }
    }


    const [error, setError] = useState('')
    const {currentUser, logout} = useAuth()
    function handleLogout() {
        setError('')

        try {
            await logout()
            history.pushState('/')
        } catch {
            setError('Failed to logout.')
        }
    }
*/
//function below will show button depending on screensize
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else{
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className='navbar'>
            <div className='navbar-container container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <MdFingerprint className='navbar-icon' />
                    POPLAR PAY
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/features' className='nav-links' onClick={closeMobileMenu}>
                        Features
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/faq' className='nav-links' onClick={closeMobileMenu}>
                        FAQ
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                        Blog
                    </Link>
                </li>
                <li className='nav-btn'>
                    {button ? (
                        <Link to='/sign-up' className='btn-link'>
                            <Button buttonStyle='btn--outline'>SIGN UP</Button>
                        </Link>
                    ): (
                    <Link to='/sign-up'className='btn-link' onClick={closeMobileMenu}>
                        <Button 
                        buttonStyle='btn--outline' 
                        buttonSize='btn--mobile'
                        >
                        SIGN UP
                        </Button>
                    </Link>
                    )}
                </li>
                <li className='nav-btn'>
                    {button ? (
                        <Link to='/login' className='btn-link'>
                            <Button buttonStyle='btn--outline'>LOGIN</Button>
                        </Link>
                    ): (
                    <Link to='/login'className='btn-link' onClick={closeMobileMenu}>
                        <Button 
                        buttonStyle='btn--outline' 
                        buttonSize='btn--mobile'
                        >
                        LOGIN
                        </Button>
                    </Link>
                    )}
                </li>
                </ul>
            </div>
            </div>
            </IconContext.Provider>
        </>
    )
}

//{error && <Alert variant='danger'>{error}</Alert>}
//<Button variant='link' onClick={handleLogout}>Logout</Button>

export default Navbar;

//rtce enter

/*
<li className='nav-item'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <Link to='/resources' className='nav-links' onClick={closeMobileMenu}>
                        Resources <i className='fas fa-caret-down' />
                    </Link>
                    {dropdown && <Dropdown />}
                </li>
*/