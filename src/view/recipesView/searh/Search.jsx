import * as React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from 'react';

export const Search=()=> {
    const [value,setValue]= useState("Find your recipes");
  return (
    <div className="search">
      <TextField
        id="standard-bare"        
        variant="filled"
        label={value}
        InputProps={{
       endAdornment: (
      <InputAdornment >
        <IconButton  >
          <SearchIcon onClick={setValue} />
        </IconButton>
      </InputAdornment>
     )}}
     />
    </div>
    
  );
}