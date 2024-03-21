import React, {FC} from 'react';
import {posterBaseUrl} from "../../constants";
import css from './PosterPreview.module.css'

interface IProps {
    title:string;
    poster_path:string;
}
const PosterPreview:FC<IProps> = ({title, poster_path}) => {
    return (
        <div className={css.poster_view}>
            <img src={`${posterBaseUrl}/${poster_path}`} alt={title}/>
        </div>
    );
};

export default PosterPreview;