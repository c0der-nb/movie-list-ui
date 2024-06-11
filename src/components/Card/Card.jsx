import React from "react";
import styles from './Card.module.css';

function Card({ data }) {
    return (
        <div className={styles.card}>
            <div className={styles['card-img-content']}>
                <img src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${data.poster_path}.jpg`} className={styles['card-image']} alt="movie poster" />
                <div className={styles.content}>
                    <p className={styles.title}><b>{data.title}</b></p>
                    <p>{new Date(data.release_date).toDateString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;