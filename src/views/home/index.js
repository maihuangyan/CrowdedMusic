import React, { useState } from 'react'
import {
    Box,
    Grid,
    Typography,
} from '@mui/material'
import NavTabs from 'ui-component/navTabs';
import Trending from './Trending';
import News from './News';
import TimeLing from './TimeLing';

export default function Home() {

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <NavTabs
                value={value}
                handleChange={handleChange}
                label={["NEWS", "TIMELINE", "TRENDING"]}
                component={[<News />,<TimeLing />,<Trending />]}
            />
        </>
    )
}