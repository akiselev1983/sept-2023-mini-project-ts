import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieActions} from "../../../store";
import css from "../MoviesList/MoviesList.module.css";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import PaginationBlock from "../../Pagination/PaginationBlock";

const MoviesPopularList = () => {
    const {results, page} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(movieActions.getAllPopularMovies({page}))

    }, [page, dispatch]);

    return (
        <div className={css.main}>
            {results.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
            <div className={css.pagination}>
                <PaginationBlock/>
            </div>


        </div>
    );
};

export default MoviesPopularList;