import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function AgeInput({ age, setAge }) {
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '16px' }}>
      <FormLabel id="age-input-label" style={{ marginRight: '8px' }}>Age</FormLabel>
      <TextField
        id="age-input"
        label="Age"
        type="number"
        value={age}
        onChange={handleChange}
      />
    </FormControl>
  );
}