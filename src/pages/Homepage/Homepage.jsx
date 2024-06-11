import React from 'react';
import styles from './Homepage.module.css';
import Navbar from '../../components/Navbar/Navbar';

function Homepage() {
    return (
        <div className={styles.wrapper}>
            <Navbar />
        </div>
    )
}

export default Homepage;