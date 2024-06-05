import React from 'react';
import logo from '../../assets/img/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    console.log('Logo path:', logo);
    const nav_titles = [
        { path: '/', display: 'Home' },
        { path: '/services', display: 'Services' },
        { path: '/courses', display: 'Courses' },
        { path: '/about', display: 'About Us' },
    ];

    return (
        <header className='header'>
            <div className='container'>
                <div className='nav_container'>
                    <div className="logo">
                        <div className="logo-img">
                            <img src={logo} alt="Educmate Logo" />
                        </div>
                        <h2>Educmate</h2>
                    </div>

                    <div className="navigation">
                        <ul className='menu'>
                            {nav_titles.map((item, index) => (
                                <li className='nav_item' key={index}>
                                    <Link to={item.path}>{item.display}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
