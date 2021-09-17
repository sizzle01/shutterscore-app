import React from 'react'
import {useTextFieldProps} from './TextBoxStyles'
import {TextField, Typography} from '@material-ui/core';
interface TextFieldProps{
    variant?: string;
    placeholder: string;
    subject: string;
    
}
export const TextBox : React.FC<TextFieldProps> =({subject, placeholder}) => {
  const classes = useTextFieldProps()
    return ( 
        
        < div className={classes.textField} >
          <Typography className={classes.boxLabel}>{subject}</Typography>
      <TextField className={classes.textBox}  variant="outlined" placeholder={placeholder}
   />
    </div>
      
    )
}



