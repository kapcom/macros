import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function GenderSelector() {
  const [gender, setGender] = React.useState('female');

  const handleChange = (event) => {
    setGender(event.target.value);
  };

return (
    <FormControl>
        <FormLabel id="gender-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
            aria-labelledby="gender-radio-buttons-group-label"
            value={gender}
            onChange={handleChange}
            name="radio-buttons-group"
            row  // Add this line to make the buttons horizontal
        >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
    </FormControl>
);
}
