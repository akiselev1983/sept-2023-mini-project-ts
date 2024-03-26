import React from 'react';
import {Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

import SearchPanel from "./Search/SearchPanel";
import SwitchPanel from "./Switch/SwitchPanel";
import UserInfo from "./UserInfo/UserInfo";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../store/slices/genreSlice";
import {movieActions} from "../../store";
import css from './Header.module.css'

const Header = () => {
    const {checkedTheme}= useAppSelector(state => state.theme)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()


    const handleButtonClick = () => {
        dispatch(genreActions.setGenreTrigger())
    };
    const handleMoviesButtonClick= () =>{
        dispatch(movieActions.setPage('1'))
        navigate('')
    }
    const handlePopularButtonClick = () =>{
        dispatch(movieActions.setPage('1'))
        navigate('/popular')
    }

    return (
        <div className={checkedTheme?css.Header:css.Header_dark}>
            <div>
                <Typography
                variant="h4"
                noWrap
                sx={{
                    mr: 2,
                    display: {xs: 'none', md: 'flex'},
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    marginLeft: '20px',
                }}
            >
                THE MOVIES DATABASE
            </Typography>
            </div>
            <div className={css.block_menu}>
                <div className={css.block_button}>
                    <Button variant="contained" sx={{marginLeft:'3vw'}} onClick={handleMoviesButtonClick}>Movies</Button>
                    <Button variant="contained" sx={{marginLeft:'3vw'}} onClick={handlePopularButtonClick}>Popular</Button>
                    <Button variant="contained" sx={{marginLeft:'3vw'}} onClick={handleButtonClick}>Genres</Button>
                </div>
                <div className={css.block_service}>
                    <div className={css.block_search}>
                        <SearchPanel/>
                    </div>
                    <div>
                        <SwitchPanel/>
                    </div>
                    <div className={css.block_user}>
                        <UserInfo/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;