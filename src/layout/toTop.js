import React from 'react'
import { Box } from '@mui/material'
import { IconChevronUp } from "@tabler/icons-react";

export default function ToTop({ handleClick, showButton }) {

    return (
        <Box sx={{ position: "fixed", bottom: "10%", right: "6%", zIndex: 50, transition: "1s", opacity: showButton ? 1 : 0 }} onClick={() => handleClick()}>
            <Box sx={{ p: 2, background: "#dd4377", borderRadius: "50%", cursor: "pointer" }}>
                <IconChevronUp size={25} stroke={2} color='#fff' style={{verticalAlign:"top"}} />
            </Box>
        </Box>
    )
}
