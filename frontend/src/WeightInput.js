import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function WeightInput({ weight, setWeight }) {
  const handleChange = (event) => {
    setWeight(event.target.value);
  };

  return (
    <FormControl style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '16px' }}>
     <FormLabel id="weight-input-label" style={{ marginRight: '8px' }}>Weight</FormLabel>
      <TextField
        id="weight-input"
        label="Weight"
        type="number"
        value={weight}
        onChange={handleChange}
      />
    </FormControl>
  );
}
