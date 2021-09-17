import { Typography } from '@material-ui/core'
import React from 'react'
import {useCheckStyles} from './CheckStyles'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


interface checkProps{
    label?: string;
    color: string;
}
export const Check: React.FC<checkProps> =() => {
    const classes = useCheckStyles()
    const [state, setState] = React.useState({
        checked:false,
      });
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    return (
        <div>
           
           <FormControlLabel
        control={
          <Checkbox
            checked={state.checked}
            onChange={handleChange}
            name="checked"
            color="primary"
          />
        }
        label="I Accept these terms and conditions"
      />
         
        </div>
    )
}


