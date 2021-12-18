import { Typography } from '@material-ui/core'
import React from 'react'
import { useCheckStyles } from './CheckStyles'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

interface checkProps {
  label?: string
  color: string
  value: string
  name: string
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
}
export const Check: React.FC<checkProps> = () => {
  const classes = useCheckStyles()
  const [state, setState] = React.useState({
    checked: false,
  })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }
  return (
    <div>
      <FormControlLabel
        className={classes.checkBox}
        control={
          <Checkbox
            checked={state.checked}
            onChange={handleChange}
            name="checked"
            color="primary"
          />
        }
        label={
          <Typography className={classes.checkBoxLabel}>
            I accept these terms and conditions
          </Typography>
        }
      />
    </div>
  )
}
