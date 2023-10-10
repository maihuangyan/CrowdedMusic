import React, { useState } from 'react'
import NavTabs from 'ui-component/navTabs'
import { useTheme } from '@mui/material/styles';

export default function Music() {

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <NavTabs
        value={value}
        handleChange={handleChange}
        label={["SONGS", "ALBUMS", "ARTISTS"]} component={["1", "2", "3"]} />
    </>
  )
}
