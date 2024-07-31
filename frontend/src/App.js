import React, { useState } from 'react';
import './App.css';
import GenderSelector from './GenderSelector';
import AgeInput from './AgeInput';
import HeightInput from './HeightInput';
import WeightInput from './WeightInput';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

function App() {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('female');

  const calculateMacronutrients = () => {
    // Add logic to calculate macronutrients here
  };

  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>Macronutrients Calculator</h1>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" alignItems="stretch" gap={2}>
            <GenderSelector gender={gender} setGender={setGender} />
            <AgeInput age={age} setAge={setAge} />
            <HeightInput height={height} setHeight={setHeight} />
            <WeightInput weight={weight} setWeight={setWeight} />
          </Box>
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button variant="contained" color="primary" onClick={calculateMacronutrients}>
            Calculate
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
