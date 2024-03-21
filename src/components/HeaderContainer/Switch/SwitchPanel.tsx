import React from 'react';
import {Switch} from "@mui/material";

const label = { inputProps: { 'aria-label': 'Switch demo' } };
const SwitchPanel = () => {
    return (
        <div>
            <Switch {...label} defaultChecked />
        </div>
    );
};

export default SwitchPanel;