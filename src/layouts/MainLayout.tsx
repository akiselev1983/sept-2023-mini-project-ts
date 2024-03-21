import React from 'react';
import Header from "../components/HeaderContainer/Header";
import {Outlet} from "react-router-dom";
import css from './MainLayout.module.css'
import GenresBadge from "../components/GenresContainer/GenresBadge";
import {useAppSelector} from "../hooks";

const MainLayout = () => {
    const {genreTrigger}= useAppSelector(state => state.genres)
    return (
        <div className={css.MainLayout}>
            <Header/>
            {genreTrigger&&<GenresBadge/>}
            <div className={css.block_main}>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;