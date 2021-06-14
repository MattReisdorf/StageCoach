import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/NavBar.css';
import loginApi from '../utils/loginStuff'


function NavBar() {
    let userIdCookieString = document.cookie;
    let userIdCookieArray = userIdCookieString.split('=');
    let userIdCookieValue = userIdCookieArray[1];

    const logout = async() => {
        loginApi.logout().then(() => {
            document.cookie = "id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            return window.location.assign('/');
        })
    }

    return (
        <nav className = 'navbar nav-background col-lg-12 col-md-auto col-sm-auto'>
            <Link
                to = '/' className = 'page-name'
            >
                StageCoach
            </Link>

            <ul className = 'nav justify-content-end'>
                <li className = 'nav-item my-nav'>
                    { userIdCookieValue ? <a onClick={() => logout()} className='other-links' style={{"cursor":"pointer"}}>Logout</a> : <Link
                        to = '/login' className = 'other-links'
                    >
                        Login
                    </Link> }
                    
                </li>
                <li className = 'nav-item my-nav'>
                    { userIdCookieValue ? <Link to = '/shows/create' className='other-links' style={{"cursor":"pointer"}}>Create a show</Link> : null }
                    
                </li>
                <li className = 'nav-item my-nav'>
                    { userIdCookieValue ? <></> : <Link
                        to = '/signup' className = 'other-links'
                    >
                        Signup
                    </Link>}
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;