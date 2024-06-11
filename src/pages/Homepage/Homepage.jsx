import React, { useState, useEffect } from 'react';
import styles from './Homepage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import MovieCard from "../../components/Card/Card";
import { getMovieList, searchMovie } from '../../api/api';

function Homepage() {
    const [movieList, setMovieList] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const nextHandler = () => {
        setPageCount((count) => count+1);
    }

    const prevhandler = () => {
        if (pageCount > 1) {
            setPageCount((count) => count-1);
        }
    }

    const loadData = () => {
        setIsLoading(true);
        getMovieList(pageCount).then((data) => setMovieList(data.results))
                               .catch((err) => console.log(err));
        setIsLoading(false);
    }

    useEffect(() => {
        loadData();
    }, [pageCount]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.navbar}>
                <Navbar />
            </div>
            {!isLoading ?
            <div className={styles['card-container']}>
                {movieList.map((movie) => (<MovieCard data={movie} />))}
            </div> : <div className={styles.loaderContainer}><div className='loader'></div></div>}
            <div className={styles.paginationContainer}></div>
            <div className={styles.pagination}>
                <button onClick={prevhandler} className={styles.buttonPrevNext}>Previous</button>
                <button className={styles.pageNumView}>{pageCount}</button>
                <button onClick={nextHandler} className={styles.buttonPrevNext}>Next</button>
            </div>
            <footer></footer>
        </div>
    )
}

export default Homepage;