import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/NavBar.css';


function NavBar() {

    const location = useLocation();

    return (
        <nav className = 'navbar nav-background'>
            {/* <a class = 'navbar-brand' href = '/'>
                StageCoach
            </a> */}

            <Link
                to = '/' className = 'page-name'
            >
                StageCoach
            </Link>

            <ul className = 'nav justify-content-end'>
                <li className = 'nav-item my-nav'>
                    <Link
                        to = '/login' className = 'other-links'
                    >
                        Login
                    </Link>
                </li>
                <li className = 'nav-item my-nav'>
                    <Link
                        to = '/signup' className = 'other-links'
                    >
                        Signup
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;