import React from 'react';
import styles from './Homepage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import MovieCard from "../../components/Card/Card";

function Homepage() {
    return (
        <div className={styles.wrapper}>
            <Navbar />
            <div className={styles['card-container']}>
                <MovieCard />
            </div>
        </div>
    )
}

export default Homepage;