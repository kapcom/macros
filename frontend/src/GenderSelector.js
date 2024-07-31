import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';

export default function GenderSelector({ gender, setGender }) {
  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <FormLabel id="gender-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="gender-radio-buttons-group-label"
        value={gender}
        onChange={handleChange}
        name="radio-buttons-group"
        row
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
}
