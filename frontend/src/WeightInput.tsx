import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface WeightInputProps {
  weight: string;
  setWeight: (value: string) => void;
}

const WeightInput: React.FC<WeightInputProps> = ({ weight, setWeight }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(event.target.value);
  };

  return (
    <FormControl style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '16px' }}>
      <FormLabel id="weight-input-label" style={{ marginRight: '8px' }}></FormLabel>
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

export default WeightInput;
