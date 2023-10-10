import React from 'react'
import {
    Box,
    Typography,
    Tab,
    Tabs,
} from '@mui/material'
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography component={"div"}>{children}</Typography>
                </Box>
            )}
        </Box>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default function NavTabs({ value, handleChange, label, component }) {
    const theme = useTheme();

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', background: "#8b008b" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label={label[0]} {...a11yProps(0)} />
                    <Tab label={label[1]} {...a11yProps(1)} />
                    <Tab label={label[2]} {...a11yProps(2)} />
                </Tabs>
            </Box>
            {/* <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            > */}
            <TabPanel value={value} index={0} dir={theme.direction}>
                {component[0]}
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                {component[1]}
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
                {component[2]}
            </TabPanel>
            {/* </SwipeableViews> */}
        </>

    )
}
