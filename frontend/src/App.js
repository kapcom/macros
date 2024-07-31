import React, { useState } from 'react';
import './App.css';
import GenderSelector from './GenderSelector';
import AgeInput from './AgeInput';
import HeightInput from './HeightInput';
import WeightInput from './WeightInput';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

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
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <GenderSelector gender={gender} setGender={setGender} />
        </Grid>
        <Grid item xs={12} md={4}>
          <AgeInput age={age} setAge={setAge} />
        </Grid>
        <Grid item xs={12} md={4}>
          <HeightInput height={height} setHeight={setHeight} />
        </Grid>
        <Grid item xs={12} md={4}>
          <WeightInput weight={weight} setWeight={setWeight} />
        </Grid>
        <button onClick={calculateMacronutrients}>Calculate</button>
      </Grid>
    </Container>
  );
}

export default App;
