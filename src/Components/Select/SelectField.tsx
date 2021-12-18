import React from 'react'
import { useSelectFieldStyles } from './SelectStyles'
import Select from '@material-ui/core/Select'
import Typography from '@material-ui/core/Typography'

interface SelectProps {
  label?: string
  variant?: string
  subject?: string
  value: string
  name: string
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
}
export const SelectField: React.FC<SelectProps> = ({ subject }) => {
  const classes = useSelectFieldStyles()
  const [state, setState] = React.useState<{
    currency: string | number
    name: string
  }>({
    currency: '',
    name: 'usd',
  })
  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>,
  ) => {
    const name = event.target.name as keyof typeof state
    setState({
      ...state,
      [name]: event.target.value,
    })
  }

  return (
    <div className={classes.selectField}>
      <Typography className={classes.boxLabel}>{subject}</Typography>
      <Select
        value={state.currency === '' ? 'Select currency' : state.currency}
        className={classes.selectBox}
        variant="outlined"
        native
        onChange={handleChange}
        label=""
        inputProps={{
          name: 'currency',
        }}
      >
        <option aria-label="None" value="" />
        <option value={10}>United States Dollar (USD)</option>
      </Select>
    </div>
  )
}
