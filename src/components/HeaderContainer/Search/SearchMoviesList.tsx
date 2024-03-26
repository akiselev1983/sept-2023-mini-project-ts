import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieActions} from "../../../store";
import MoviesListCard from "../../MoviesContainer/MoviesListCard/MoviesListCard";
import PaginationBlock from "../../Pagination/PaginationBlock";
import css from "../../MoviesContainer/MoviesList/MoviesList.module.css";



const SearchMoviesList = () => {
    const {results, page} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()
    const [query,] = useSearchParams({page:`1`})
    const search = query.get('search')


    useEffect(() => {
        dispatch(movieActions.getAllBySearch({page, search}))
    }, [page, search, dispatch]);

    return (
        <div className={css.main}>
            {results.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
            <div className={css.pagination}>
                <PaginationBlock/>
            </div>
        </div>
    );
};

export default SearchMoviesList;