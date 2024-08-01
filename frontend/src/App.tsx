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
import FormLabel from '@mui/material/FormLabel';

const App: React.FC = () => {
  const [age, setAge] = useState<number | null>(null);
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [gender, setGender] = useState<string>('female');

  const calculateMacronutrients = () => {
    // Add logic to calculate macronutrients here
  };

  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>Macronutrients Calculator</h1>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" alignItems="flex-start" gap={1}>
            <Grid container alignItems="center" spacing={1}>
              <Grid item xs={2}>
                <FormLabel component="legend">Gender</FormLabel>
              </Grid>
              <Grid item xs={9}>
                <GenderSelector gender={gender} setGender={setGender} />
              </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={1}>
              <Grid item xs={2}>
                <FormLabel component="legend">Age</FormLabel>
              </Grid>
              <Grid item xs={9}>
                <AgeInput age={age} setAge={setAge} />
              </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={1}>
              <Grid item xs={2}>
                <FormLabel component="legend">Height</FormLabel>
              </Grid>
              <Grid item xs={9}>
                <HeightInput height={height} setHeight={setHeight} />
              </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={1}>
              <Grid item xs={2}>
                <FormLabel component="legend">Weight</FormLabel>
              </Grid>
              <Grid item xs={9}>
                <WeightInput weight={weight} setWeight={setWeight} />
              </Grid>
            </Grid>
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
