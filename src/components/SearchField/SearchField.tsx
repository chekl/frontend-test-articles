import React, { Dispatch } from 'react';

import { InputLabel, 
  Typography, 
  Paper,
  InputBase,
  IconButton,
  ThemeProvider
 } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { theme } from '../../style/theme/theme';
import { searchInputStyle, font, inputLabelStyle } from '../../style/styles';

type Props = {
  filter: string,
  setFilter: Dispatch<React.SetStateAction<string>>
}

const SearchField = ({filter, setFilter}:Props) => {
  return (
<div style={searchInputStyle}>
  <InputLabel shrink htmlFor="search-input" sx={inputLabelStyle}>
    <ThemeProvider theme={theme}>
      <Typography variant="subtitle1">
        Filter by keywords 
      </Typography>
    </ThemeProvider>
  </InputLabel>
  <Paper component="div" elevation={3}> 
    <IconButton type="button" aria-label="search">
      <SearchIcon />
    </IconButton>
    <InputBase
        id="search-input"
        placeholder="Enter text"
        inputProps={{ 'aria-label': 'enter text' }}
        value={filter}
        onChange={ (event) => setFilter(event.target.value)}
        sx={font}
    />
  </Paper>
</div>
  )
}

export default SearchField;


