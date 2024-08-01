import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface HeightInputProps {
  height: string;
  setHeight: (value: string) => void;
}

const HeightInput: React.FC<HeightInputProps> = ({ height, setHeight }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(event.target.value);
  };

  return (
    <FormControl style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '16px' }}>
      <FormLabel id="height-input-label" style={{ marginRight: '8px' }}></FormLabel>
      <TextField
        id="height-input"
        label="Height"
        type="number"
        value={height}
        onChange={handleChange}
      />
    </FormControl>
  );
}

export default HeightInput;
