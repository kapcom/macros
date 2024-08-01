import React from 'react'
import TextField from '@mui/material/TextField'

interface AgeInputProps {
  age: number | null
  setAge: (value: number | null) => void
}

const AgeInput: React.FC<AgeInputProps> = ({ age, setAge }) => {
  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setAge(value ? parseInt(value) : null)
  }

  return (
    <TextField
      label="Age"
      variant="outlined"
      value={age !== null ? age : ''}
      onChange={handleAgeChange}
    />
  )
}

export default AgeInput
