import React, { useState } from 'react';
import './App.css';
import GenderSelector from './GenderSelector';
import AgeInput from './AgeInput';
import HeightInput from './HeightInput';
import WeightInput from './WeightInput';
function App() {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('female');

  const calculateMacronutrients = () => {
    // Add your logic to calculate macronutrients here
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Macronutrients Calculator</h1>
        <GenderSelector gender={gender} setGender={setGender} />
        <AgeInput age={age} setAge={setAge} />
        <HeightInput height={height} setHeight={setHeight} />
        <WeightInput weight={weight} setWeight={setWeight} />
        <button onClick={calculateMacronutrients}>Calculate</button>
      </header>
    </div>
  );
}

export default App;
