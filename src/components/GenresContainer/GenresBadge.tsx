import React, {useEffect} from 'react';

import {genreActions} from "../../store/slices/genreSlice";
import GenreBadge from "./GenreBadge";
import {useAppDispatch, useAppSelector} from "../../hooks";
import css from './Genre.module.css'

const GenresBadge = () => {
    const {genres} = useAppSelector(state => state.genres)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, []);
    if (!genres) return
    return (
        <div className={css.block_genres}>
            {genres && genres.map(genre=><GenreBadge key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default GenresBadge;