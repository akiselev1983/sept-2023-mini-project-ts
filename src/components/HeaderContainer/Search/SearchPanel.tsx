import React from 'react';
import {useNavigate} from "react-router-dom";
import {InputBase} from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor:alpha('#3c95de', 0.5),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '50%',
    transition: 'width 0.3s ease-in-out',
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
const SearchPanel = () => {
    const navigate = useNavigate();

    const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const search = (event.currentTarget.elements.namedItem('search') as HTMLInputElement)?.value;

        if(search.trim().length>0){
            navigate(`/search/movies?search=${search}`)
            event.currentTarget.reset();
        } else {
            navigate(`/movies`);
            event.currentTarget.reset();
        }


    };

    return (
    <Search>
        <form onSubmit={handleSearchSubmit}><SearchIconWrapper>
            <SearchIcon/>
        </SearchIconWrapper>
            <StyledInputBase
                name="search"
                placeholder="Search…"
                inputProps={{'aria-label': 'search'}}
            /></form>
    </Search>
    );
};

export default SearchPanel;