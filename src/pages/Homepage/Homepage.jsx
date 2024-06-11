import React, { useState, useEffect } from 'react';
import styles from './Homepage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import MovieCard from "../../components/Card/Card";
import { getMovieList, searchMovie } from '../../api/api';

function Homepage() {
    const [movieList, setMovieList] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [timer, setTimer] = useState();
    const [searchText, setSearchText] = useState('');

    const nextHandler = () => {
        setPageCount((count) => count+1);
    }

    const prevhandler = () => {
        if (pageCount > 1) {
            setPageCount((count) => count-1);
        }
    }

    const loadData = async () => {
        try {
            setIsLoading(true);
            const data = await getMovieList(pageCount);
            setMovieList(data.results);
            setIsLoading(false);
        }
        catch (e) {
            setIsLoading(false);
            console.error(e);
        }
    }

    const search = async (movie) => {
        try {
            setIsLoading(true);
            if (!movie)
                loadData();
            else {
                const data = await searchMovie(movie, pageCount);
                setMovieList(data.results);
                setIsLoading(false);
            }
        }
        catch (e) {
            setIsLoading(false);
            console.error(e);
        }
    }

    const handlerSearchInput = (e) => {
        setIsLoading(true);
        setPageCount(1);
        setSearchText(e.target.value);
        const timer = setTimeout(() => {
            search(searchText);
        }, 1000)
        setTimer(timer);
    }

    useEffect(() => {
        return () => clearTimeout(timer);
    }, [timer])

    useEffect(() => {
        if (searchText)
            search(searchText);
        else
            loadData();
    }, [pageCount]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.navbar}>
                <Navbar input={handlerSearchInput} />
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