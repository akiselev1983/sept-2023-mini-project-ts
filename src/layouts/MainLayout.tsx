import React from 'react';
import {Outlet} from "react-router-dom";

import Header from "../components/HeaderContainer/Header";
import css from './MainLayout.module.css'
import GenresBadge from "../components/GenresContainer/GenresBadge";
import {useAppSelector} from "../hooks";

const MainLayout = () => {

    const {genreTrigger}= useAppSelector(state => state.genres)
    const {checkedTheme}= useAppSelector(state => state.theme)

    return (
        <div className={checkedTheme?css.MainLayout:css.MainLayout_dark}>
            <Header/>
            {genreTrigger&&<GenresBadge/>}
            <div className={css.block_main}>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;