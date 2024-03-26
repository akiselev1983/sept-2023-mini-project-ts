import React from 'react';
import {Switch} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {themeActions} from "../../../store/slices/themeSlice";

const label = { inputProps: { 'aria-label': 'Switch demo' } };
const SwitchPanel = () => {
    const {checkedTheme} = useAppSelector(state => state.theme)
    const dispatch = useAppDispatch()
    const handleChange = ():void => {
            dispatch(themeActions.setCheckedTheme())
        }

    return (
        <div>
            <Switch
                checked={checkedTheme}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
        </div>
    )
}

export default SwitchPanel;