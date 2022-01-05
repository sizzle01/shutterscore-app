import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Button, Typography } from '@material-ui/core'
import { useCarouselStyles } from './caouselStyles'

import { Link } from 'react-router-dom'

interface SliderProps {
  name?: string
  description?: string
  item?: string
  className?: string
}

export const Slider: React.FC<SliderProps> = () => {
  const classes = useCarouselStyles()

  var items = [
    {
      image: <img src="/card.png" alt="atm" />,
      name: 'Pay with card',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
    },
    {
      image: <img src="/bank.png" alt="atm" />,
      name: 'Grow your Funds',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
    },
    {
      image: <img src="/atm.png" alt="atm" />,
      name: 'Pay anywhere, anytime',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
    },
  ]

  return (
    <Carousel
      className={classes.carousel}
      navButtonsAlwaysInvisible
      indicatorIconButtonProps={{
        style: {
          padding: '5px',
          color: '#F8F8F8',
        },
      }}
      indicatorContainerProps={{
        style: {
          marginTop: '74px',
        },
      }}
    >
      {items.map((item, i) => (
        <div className={classes.sliderContent}>
          <div className={classes.image}>{item.image}</div>
          <Typography className={classes.itemName}> {item.name}</Typography>
          <Typography align="center" className={classes.itemDesc}>
            {item.description}
          </Typography>
          <Link to="/form" className={classes.sliderButton}>
            <Button className={classes.sliderBtn} variant="contained">
              Get started
            </Button>
          </Link>
        </div>
      ))}
    </Carousel>
  )
}
