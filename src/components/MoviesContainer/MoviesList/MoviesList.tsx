import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieActions} from "../../../store";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css'

import PaginationBlock from "../../Pagination/PaginationBlock";

const MoviesList = () => {

    const {results, page} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()



    useEffect(() => {
        dispatch(movieActions.getAll({page}))
    }, [page]);
    console.log(results);

    return (
        <div className={css.main}>
            {results.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
            <div className={css.pagination}>
                <PaginationBlock/>
            </div>


        </div>
    );
};

export default MoviesList;