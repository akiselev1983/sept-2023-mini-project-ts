import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../store";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationBlock = () => {
    const {page, total_pages} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()

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
                />
            </Stack>
        </div>
    );
};

export default PaginationBlock;