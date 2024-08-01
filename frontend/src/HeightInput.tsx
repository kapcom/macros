import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'

interface HeightInputProps {
  height: string
  setHeight: (height: string) => void
  isMetric: boolean
}

const HeightInput: React.FC<HeightInputProps> = ({
  height,
  setHeight,
  isMetric
}) => {
  const [feet, setFeet] = React.useState<string>('')
  const [inches, setInches] = React.useState<string>('')

  useEffect(() => {
    // Reset height input when the height state is cleared
    if (height === '') {
      setFeet('')
      setInches('')
    }
  }, [height])

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(event.target.value)
  }

  const handleFeetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFeet(event.target.value)
    setHeight(`${event.target.value}' ${inches}"`)
  }

  const handleInchesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInches(event.target.value)
    setHeight(`${feet}' ${event.target.value}"`)
  }

  return (
    <>
      {isMetric ? (
        <TextField
          type="number"
          value={height}
          onChange={handleHeightChange}
          placeholder="Height in cm"
          variant="outlined"
          margin="normal"
        />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={2.3}>
            <TextField
              type="number"
              value={feet}
              onChange={handleFeetChange}
              placeholder="Feet"
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={2.5}>
            <TextField
              type="number"
              value={inches}
              onChange={handleInchesChange}
              placeholder="Inches"
              variant="outlined"
              margin="normal"
            />
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default HeightInput
