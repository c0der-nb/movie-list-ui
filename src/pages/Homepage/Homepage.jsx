import React, { useState, useEffect } from 'react';
import styles from './Homepage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import MovieCard from "../../components/Card/Card";
import { getMovieList, searchMovie } from '../../api/api';

function Homepage() {
    const [movieList, setMovieList] = useState([]);
    const [pageCount, setPageCount] = useState(1);

    useEffect(() => {
        getMovieList(pageCount).then((data) => setMovieList(data.results))
                               .catch((err) => console.log(err));
    }, []);

    return (
        <div className={styles.wrapper}>
            <Navbar />
            <div className={styles['card-container']}>
                {movieList.map((movie) => (<MovieCard data={movie} />))}
            </div>
        </div>
    )
}

export default Homepage;