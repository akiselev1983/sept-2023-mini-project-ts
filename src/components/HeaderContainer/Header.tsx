import React from 'react';
import {Button, Typography} from "@mui/material";
import css from './Header.module.css'

import {useNavigate} from "react-router-dom";
import SearchPanel from "./Search/SearchPanel";
import SwitchPanel from "./Switch/SwitchPanel";
import UserInfo from "./UserInfo/UserInfo";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../store/slices/genreSlice";

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()


    const handleButtonClick = () => {
        dispatch(genreActions.setGenreTrigger())
    };

    return (
        <div className={css.Header}>
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
                    <Button variant="contained" sx={{marginLeft:'3vw'}} onClick={()=>navigate('')}>Movies</Button>
                    <Button variant="contained" sx={{marginLeft:'3vw'}}>Popular</Button>
                    <Button variant="contained" sx={{marginLeft:'3vw'}} onClick={handleButtonClick}>Genres</Button>
                </div>
                <div className={css.block_service}>
                    <div className={css.block_search}>
                        <SearchPanel/>
                    </div>
                    <div>
                        <SwitchPanel/>
                    </div>
                    <div>
                        <UserInfo/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;