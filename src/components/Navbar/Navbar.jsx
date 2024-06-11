import React from 'react';
import styles from './Navbar.module.css';

function Navbar({input}) {
    return (
        <div className={styles.wrapper}>
            <input onChange={input} type='text' className={styles.search} placeholder='Search for your favourite movies' />
        </div>
    )
}

export default Navbar;