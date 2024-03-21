import React, {FC} from 'react';
import {IGenre} from "../../interfaces";
import {useNavigate} from "react-router-dom";
import css from './Genre.module.css'

interface IProps{
    genre:IGenre
}
const GenreBadge:FC<IProps> = ({genre}) => {
    const {id, name} = genre
    const navigate = useNavigate()

    return (
        <div>
            <div className={css.block_genre} onClick={()=>navigate(`/movies/genre/${genre.id}`, {state:{name}})}>
                {name}
            </div>
        </div>
    );
};

export default GenreBadge;