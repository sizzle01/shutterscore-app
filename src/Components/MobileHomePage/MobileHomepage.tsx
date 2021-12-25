import React from 'react'
import { MobileHomePageStyles } from './MobileHomePageStyles'
import { Slider } from '../Carousel/Slider'
import { Form } from '../Form/Form'

interface MobileHomePageProps {}
export const MobileHomePage: React.FC<MobileHomePageProps> = () => {
  const classes = MobileHomePageStyles()
  let width = window.innerWidth
  return (
    <div className={classes.home}>
      {width <= 890 ? (
        <Slider />
      ) : width >= 890 ? (
        <Form slider={<Slider />} />
      ) : null}
    </div>
  )
}
