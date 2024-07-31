import * as React from 'react';
import AgeInput from './AgeInput';
import HeightInput from './HeightInput';
import GenderSelector from './GenderSelector';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

export default function FormLayout({ age, setAge, height, setHeight, weight, setWeight, gender, setGender }) {
    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <FormControl style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '16px' }}>
                <AgeInput age={age} setAge={setAge} />
            </FormControl>
            <FormControl style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '16px' }}>
                <FormLabel id="height-input-label" style={{ marginRight: '8px', width: '120px' }}>Height (cm)</FormLabel>
                <HeightInput height={height} setHeight={setHeight} />
            </FormControl>
            <FormControl style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '16px' }}>
                <FormLabel id="weight-input-label" style={{ marginRight: '8px', width: '120px' }}>Weight (kg)</FormLabel>
                <TextField
                    id="weight-input"
                    label="Weight"
                    type="number"
                    value={weight}
                    onChange={handleWeightChange}
                    style={{ width: '200px' }}
                />
            </FormControl>
            <FormControl style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '16px' }}>
                <FormLabel id="gender-input-label" style={{ marginRight: '8px', width: '120px' }}>Gender</FormLabel>
                <GenderSelector gender={gender} setGender={setGender} />
            </FormControl>
        </div>
    );
}
