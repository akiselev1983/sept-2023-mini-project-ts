import React, {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../../interfaces";
import PosterPreview from "../../PosterContainer/PosterPreview";
import css from './MoviesListCard.module.css'
import {StarRating} from "star-rating-react-ts";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren{
    movie:IMovie
}
const MoviesListCard:FC<IProps> = ({movie}) => {
    const {title, release_date, poster_path, vote_average,id}= movie
    const navigate = useNavigate()

    return (
        <div className={css.movie_list_card} onClick={()=> navigate(`/movies/${id}`)}>
            <div className={css.image}>
                <PosterPreview title={title} poster_path={poster_path}/>
            </div>
            <StarRating theme={{size:20}} numStars={10} initialRating={vote_average} readOnly={false}/>
            <div className={css.title}>{title} ({new Date(release_date).getFullYear()})</div>
        </div>
    );
};

export default MoviesListCard;