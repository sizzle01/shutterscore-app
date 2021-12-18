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

  name?: string
}
export const Form: React.FC<formProps> = () => {
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
  return (
    <div className={classes.accountPage}>
      <div className={classes.formWrapper}>
        <div className={classes.formCard}>
          <div className={classes.formContent}>
            <div className={classes.formLeft}>
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
                placeholder=""
                value={values.password}
                onChange={handleInputChange}
              />
              <TextBox
                subject="Confirm password"
                name="confirm-password"
                type="password"
                placeholder=""
                value={values.confirmPassword}
                onChange={handleInputChange}
              />

              <SelectField
                label=""
                name="currency"
                subject="Select currency"
                value={values.currency}
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
                  className={classes.start}
                  color="primary"
                  action="Get Started"
                />
              </Link>
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
