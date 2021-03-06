import React from 'react'
import { useTextFieldProps } from './TextBoxStyles'
import { TextField, Typography } from '@material-ui/core'
interface TextFieldProps {
  variant?: string
  placeholder: string
  subject: string
  type: string
  value: string
  name: string
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
}
export const TextBox: React.FC<TextFieldProps> = ({
  subject,
  placeholder,
  type,
}) => {
  const classes = useTextFieldProps()
  return (
    <div className={classes.textField}>
      <Typography className={classes.boxLabel}>{subject}</Typography>
      <TextField
        className={classes.textBox}
        variant="outlined"
        placeholder={placeholder}
        type=""
        // error
        // helperText="some validation error"
      />
    </div>
  )
}
