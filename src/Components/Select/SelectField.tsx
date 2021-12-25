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
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
}
export const SelectField: React.FC<SelectProps> = ({ subject }) => {
  const classes = useSelectFieldStyles()

  return (
    <div className={classes.selectField}>
      <Typography className={classes.boxLabel}>{subject}</Typography>
      <Select
        className={classes.selectBox}
        native
        label=""
        inputProps={{
          name: 'currency',
        }}
      >
        <option value="select currency">Select currency</option>
        <option value={10}>United States Dollar (USD)</option>
      </Select>
    </div>
  )
}
