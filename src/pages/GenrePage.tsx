import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import {movieActions} from "../store";
import {useAppDispatch, useAppSelector} from "../hooks";
import css from "../components/MoviesContainer/MoviesList/MoviesList.module.css";
import MoviesListCard from "../components/MoviesContainer/MoviesListCard/MoviesListCard";
import PaginationBlock from "../components/Pagination/PaginationBlock";


const GenrePage = () => {
    const {id} = useParams()

    const {results, page} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()



    useEffect(() => {
        dispatch(movieActions.getAllByGenreId({page, genreId:id}))
    }, [page, id]);

    return (
            <div className={css.main}>
                {results.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
                <div className={css.pagination}>
                    <PaginationBlock/>
                </div>

            </div>
    );
};

export default GenrePage;