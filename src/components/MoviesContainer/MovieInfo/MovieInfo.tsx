import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieInfoActions} from "../../../store/slices/MovieInfoSlice";
import PosterPreview from "../../PosterContainer/PosterPreview";
import css from './MovieInfo.module.css'
import {StarRating} from "star-rating-react-ts";

const MovieInfo = () => {
    const {movieId} = useParams()

    const {movieInfo} = useAppSelector(state => state.movieInfo)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(movieInfoActions.getMovieById({id:movieId}))
    }, [movieId]);
    console.log(movieInfo);
    if (!movieInfo) return;

    const {title,poster_path, overview, vote_average, runtime, release_date, genres} = movieInfo
    return (
        <div className={css.main}>
            <div className={css.title}>
                <h1>{title}</h1>
            </div>
            <div className={css.flex}>
                <div className={css.poster}>
                    <PosterPreview poster_path={poster_path} title={title}/>
                </div>
                <div className={css.info}>
                    <StarRating numStars={10} initialRating={vote_average} readOnly={false} />
                    <div className={css.block_link}>
                        <h2>Genre: </h2>
                        {genres.map(genre=> <div><Link to={`/movies/genre/${genre.id}`}>{genre.name}</Link></div>)}
                    </div>
                    <h2>Runtime: {runtime}min</h2>
                    <h2>Release date: {release_date}</h2>
                    <div className={css.overview}>
                        <h1>OVERVIEW</h1>
                        <p>{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;