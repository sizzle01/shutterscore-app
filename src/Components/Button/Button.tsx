import React from 'react';
import {useButtonStyles} from './ButtonStyles'
import Button from '@material-ui/core/Button';

interface ButtonProps{
    label?: string;
    color: string;
    variant?: string;
}
export const Buttons: React.FC<ButtonProps> =() => {
  const classes = useButtonStyles();

  return (
    <div >
      <Button className={classes.btn} variant="contained" color="primary">
   Get Started
      </Button>
    </div>
  );
}