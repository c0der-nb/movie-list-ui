import React from "react";
import styles from './Card.module.css';

function Card({ data }) {
    return (
        <div className={styles.card}>
            <div className={styles['card-img-content']}>
                <img src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" className={styles['card-image']} alt="movie poster" />
                <div className={styles.content}>
                    <p className={styles.title}><b>Atlas</b></p>
                    <p>May 24, 2024</p>
                </div>
            </div>
        </div>
    )
}

export default Card;