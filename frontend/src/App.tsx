import React, { useState } from 'react';
import './App.css';
import GenderSelector from './GenderSelector';
import AgeInput from './AgeInput';
import HeightInput from './HeightInput';
import WeightInput from './WeightInput';
import ActivityFactor from './ActivityFactor';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const App: React.FC = () => {
  const [age, setAge] = useState<number | null>(null);
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [gender, setGender] = useState<string>('female');
  const [isMetric, setIsMetric] = useState<boolean>(false); // Updated default to false for US units
  const [activityFactor, setActivityFactor] = useState<string>('1.2');

  const handleUnitToggle = () => {
    setIsMetric(!isMetric);
  };

  const calculateMacronutrients = () => {
    // Add logic to calculate macronutrients here
  };

  const clearInputs = () => {
    setAge(null);
    setHeight('');
    setWeight('');
    setGender('female');
    setActivityFactor('1.2');
    setIsMetric(false);
  };

  return (
<Container>
  <h1 style={{ textAlign: 'center' }}>Macronutrients Calculator</h1>
  <Box border={1} borderColor="grey.500" padding={2} marginBottom={2}>
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6}>
        <Box display="flex" flexDirection="column" alignItems="flex-start" gap={1}>
          <FormControlLabel
            control={<Switch checked={isMetric} onChange={handleUnitToggle} />}
            label={isMetric ? "Metric Units" : "US Units"}
          />
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs={2}>
              <FormLabel component="legend">Gender</FormLabel>
            </Grid>
            <Grid item xs={9}>
              <GenderSelector gender={gender} setGender={setGender} />
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs={2.1}>
              <FormLabel component="legend">Age</FormLabel>
            </Grid>
            <Grid item xs={9}>
              <AgeInput age={age} setAge={setAge} />
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs={2.1}>
              <FormLabel component="legend">Height</FormLabel>
            </Grid>
            <Grid item xs={9}>
              <HeightInput height={height} setHeight={setHeight} isMetric={isMetric} />
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs={2.1}>
              <FormLabel component="legend">Weight</FormLabel>
            </Grid>
            <Grid item xs={9}>
              <WeightInput weight={weight} setWeight={setWeight} isMetric={isMetric} />
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs={2.1}>
              <FormLabel component="legend">Activity Level</FormLabel>
            </Grid>
            <Grid item xs={9}>
              <ActivityFactor activityFactor={activityFactor} setActivityFactor={setActivityFactor} />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  </Box>
  <Grid container spacing={2} justifyContent="center">
    <Grid item xs={12} style={{ textAlign: 'left' }}>
      <Button variant="contained" color="primary" onClick={calculateMacronutrients}>
        Calculate
      </Button>
      <Button variant="outlined" color="secondary" onClick={clearInputs} style={{ marginLeft: '10px' }}>
        Clear
      </Button>
    </Grid>
  </Grid>
</Container>
  );
};

export default App;