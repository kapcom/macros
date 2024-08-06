import React, { useState } from 'react'
import { TextField } from '@mui/material'
import Grid from '@mui/material/Grid'

const HeightInput = ({
  isMetric,
  onSubmit
}: {
  isMetric: boolean
  onSubmit: (finalHeight: string) => void
}) => {
  const [height, setHeight] = useState('')
  const [feet, setFeet] = useState('')
  const [inches, setInches] = useState('')

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

  const handleSubmit = () => {
    let finalHeight = height
    if (!isMetric) {
      const totalInches = parseInt(feet) * 12 + parseInt(inches)
      finalHeight = `${totalInches} inches`
    }
    onSubmit(finalHeight)
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
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default HeightInput
