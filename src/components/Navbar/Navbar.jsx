import React from 'react';
import styles from './Navbar.module.css';

function Navbar({placeholder}) {
    return (
        <div className={styles.wrapper}>
            <input type='text' className={styles.search} placeholder='Search for your favourite movies' />
        </div>
    )
}

export default Navbar;