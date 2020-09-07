import React from 'react';
import { Link } from 'react-router-dom'

import styles from './navbar.module.css';

const navbar = (props) => {
    return (
        <div className={styles.navbar} id="navbar">
            <div className={styles.logo}>
                <h1>
                    <i className="fas fa-cheese" />
                    <Link to='/'>Mihaela's Kitchen </Link>
                </h1>
                <div className={styles.social}>
                    <i className="fab fa-facebook fa-2x"></i>
                    <i className="fab fa-instagram fa-2x"></i>
                </div>
            </div>
            <nav>
                <ul>
                    {/* <li><Link to="/#home">Home</Link></li> */}
                    {/* <li><Link to="/#gallery">Gallery</Link></li>
                    <li><Link to="/#contact">Contact</Link></li> */}
                </ul>
            </nav>
        </div>
    );
}

export default navbar;