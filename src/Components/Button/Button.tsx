import React from 'react'
import { useButtonStyles } from './ButtonStyles'
import Buttons from '@material-ui/core/Button'

interface ButtonProps {
  label?: string
  color?: string
  variant?: string
  startIcon?: any
  action?: string
  className?: string
  type?: string
}
export const Button: React.FC<ButtonProps> = ({ startIcon, action }) => {
  const classes = useButtonStyles()

  return (
    <div>
      <Buttons
        className={classes.btn}
        startIcon={startIcon}
        variant="contained"
        color="primary"
      >
        {action}
      </Buttons>
    </div>
  )
}
