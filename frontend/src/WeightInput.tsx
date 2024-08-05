import React from 'react'
import TextField from '@mui/material/TextField'

interface WeightInputProps {
  weight: string
  setWeight: React.Dispatch<React.SetStateAction<string>>
  isMetric: boolean
}

const WeightInput: React.FC<WeightInputProps> = ({
  weight,
  setWeight,
  isMetric
}) => {
  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(event.target.value)
  }

  return (
    <TextField
      type="number"
      value={weight}
      onChange={handleWeightChange}
      placeholder={isMetric ? 'Weight in kg' : 'Weight in lbs'}
      variant="outlined"
      margin="normal"
    />
  )
}

export default WeightInput
