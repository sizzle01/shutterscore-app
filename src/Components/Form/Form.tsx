import { Typography } from '@material-ui/core'
import React from 'react'
import {useFormStyles} from './FormStyles'
import {TextBox} from '../TextField/TextBox';
import {Check} from '../CheckBox/Check'
import {Button} from '../Button/Button'
import { SelectField } from '../Select/SelectField';
import {Slider} from  '../Carousel/Slider'



interface formProps{
    scale?: string;
}
export const Form: React.FC<formProps> =() => {
    const classes = useFormStyles()
    return (
      <div className={classes.accountPage}>
        <div className={classes.formWrapper}>
    <div className={classes.formCard}>
    <div className={classes.formContent}>
    <div className={classes.formLeft}>
      <div className={classes.formInstruction} >
        <Typography align='center' className={classes.createAcc}>Create an account</Typography> 
        <Typography align='center' className={classes.continue}>Create an account to continue</Typography>
        </div>
         <TextBox 
         type='' 
         subject='Email'
           placeholder='Topebanlosi@gmail.com' />
         <TextBox subject='Password'
         type='password' 
           placeholder=''/>
         <TextBox subject='Confirm password'
          type='password'
           placeholder='' />
        
        
        <SelectField label=''
        subject='Select currency'
        />
        <Check 
        color='primary' />
        <Button color='primary'
        action='Get Started'
        />
        </div>
        </div>
       
        </div>
        </div>
        <div className={classes.formRight}>
        <Slider />
        </div>
        </div>
    )
}


