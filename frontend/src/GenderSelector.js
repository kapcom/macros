import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Grid, Box } from '@mui/material';

function GenderSelector({ gender, setGender }) {
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <Box display="flex" alignItems="center">
        <Box marginRight={2}>
          <FormLabel component="legend">Gender</FormLabel>
        </Box>
        <RadioGroup
          row
          aria-label="gender"
          name="gender"
          value={gender}
          onChange={handleGenderChange}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </Box>
    </FormControl>
  );
}

export default GenderSelector;
