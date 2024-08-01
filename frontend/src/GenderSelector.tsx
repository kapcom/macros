import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';

interface GenderSelectorProps {
  gender: string;
  setGender: (value: string) => void;
}

const GenderSelector: React.FC<GenderSelectorProps> = ({ gender, setGender }) => {
  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <Box display="flex" alignItems="center">
        <Box marginRight={2}>
          <FormLabel component="legend"></FormLabel>
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
