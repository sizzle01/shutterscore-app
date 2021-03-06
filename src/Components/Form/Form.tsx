import { Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useFormStyles } from './FormStyles'
import { TextBox } from '../TextField/TextBox'
import { Check } from '../CheckBox/Check'
import { Button } from '../Button/Button'
import { SelectField } from '../Select/SelectField'
import { Slider } from '../Carousel/Slider'
import { Link } from 'react-router-dom'

const initialValues = {
  id: 0,
  email: '',
  password: '',
  confirmPassword: '',
  currency: '',
  terms: '',
}

interface formProps {
  scale?: string
  target?: EventTarget
  slider?: any
  name?: string
  className?: string
  password?: string
}
export const Form: React.FC<formProps> = ({ slider }) => {
  const classes = useFormStyles()
  const [values, setValues] = useState(initialValues)
  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as typeof e.target & {
      name: { value: string }
      value: { value: string }
    }
    setValues({
      ...values,
      [name as any]: value,
    })
  }
  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  // const validate = () => {
  //   let temp = {}
  //   temp.password = values.password ? '' : 'this field is required'
  //   temp.confirmPassword = values.confirmPassword
  //     ? ''
  //     : 'please confirm password'
  //   temp.email = /$|.+@.+..+/.test(values.email) ? '' : 'email is not valid'
  //   temp.currency =
  //     values.currency.length != 0 ? '' : 'please select your currency'
  // }
  return (
    <div className={classes.accountPage}>
      <div className={classes.formWrapper}>
        <div className={classes.formCard}>
          <div className={classes.formContent}>
            <form className={classes.formLeft}>
              <div className={classes.formInstruction}>
                <Typography align="center" className={classes.createAcc}>
                  Create an account
                </Typography>
                <Typography align="center" className={classes.continue}>
                  Create an account to continue
                </Typography>
              </div>
              <TextBox
                type="email"
                subject="Email"
                name="email"
                placeholder="SizzleAli@gmail.com"
                value={values.email}
                onChange={handleInputChange}
              />
              <TextBox
                subject="Password"
                type="password"
                name="password"
                placeholder="password"
                value={values.password}
                onChange={handleInputChange}
              />
              <TextBox
                subject="Confirm password"
                name="confirm-password"
                type="password"
                placeholder="confirm password"
                value={values.confirmPassword}
                onChange={handleInputChange}
              />

              <SelectField
                label=""
                name="currency"
                subject="Select currency"
                value={
                  values.currency === '' ? 'select currency' : values.currency
                }
                onChange={handleInputChange}
              />
              <Check
                color="primary"
                onChange={handleInputChange}
                value={values.terms}
                name="terms"
              />
              <Link className={classes.start} to="/dashboard">
                <Button
                  type="submit"
                  className={classes.start}
                  color="primary"
                  action="Create account"
                />
              </Link>
            </form>
          </div>
        </div>
      </div>
      <div className={classes.formRight}>{slider}</div>
    </div>
  )
}
