import { Typography } from '@material-ui/core'
import React from 'react'
import {useFormStyles} from './FormStyles'
import {TextBox} from '../../Components/TextField/TextBox';
import {Check} from '../CheckBox/Check'
import {Buttons} from '../Button/Button'
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
        <Typography className={classes.createAcc}>Create an account</Typography> 
        <Typography className={classes.continue}>Create an account to continue</Typography>
         <TextBox subject='Email'
           placeholder='Topebanlosi@gmail.com' />
         <TextBox subject='Password' 
           placeholder=''/>
         <TextBox subject='Confirm password'
           placeholder='' />
        
        <Check 
        color='primary' />
        <SelectField label=''
        subject='Select currency'
        />
        <Buttons color='primary' />
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


