import React from 'react';
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../store";


const PaginationBlock = () => {
    let {page, total_pages} = useAppSelector(state => state.movies)
    const {checkedTheme} = useAppSelector(state => state.theme)
    const dispatch = useAppDispatch()

    if (total_pages>500) {
        total_pages = 500
    }

    const handleChange = (event:React.ChangeEvent<unknown>, value:number) => {
        dispatch(movieActions.setPage(value))
    };

    return (
        <div>
            <Stack spacing={2}>
                <Pagination count={total_pages || 0}
                            page={+page}
                            variant="outlined"
                            shape="rounded"
                            onChange={handleChange}
                            size={"large"}
                            style={{
                                backgroundColor: checkedTheme ? '#fff' : '#b7b3b3',
                                color: checkedTheme ? '#000' : '#fff',
                            }}
                />
            </Stack>
        </div>
    );
};

export default PaginationBlock;