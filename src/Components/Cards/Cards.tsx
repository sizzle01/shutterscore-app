import React from 'react'
import { CardStyles } from './CardStyle'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Visa from '../../images/visa.png'
import EditIcon from '@mui/icons-material/Edit'
interface CardsProps {
  amount: number
  currency: string
  cardNumber: number
  cardDate: string
}

export const Cards: React.FC<CardsProps> = ({
  amount,
  cardNumber,
  currency,
  cardDate,
}) => {
  const classes = CardStyles()
  return (
    <div className={classes.card}>
      <CardContent className={classes.cardInfo}>
        <div className={classes.cardTop}>
          <Typography className={classes.cardBalance} gutterBottom>
            {amount} <span className={classes.cardCurrency}>{currency}</span>
          </Typography>
          <EditIcon className={classes.editIcon} />
        </div>

        <Typography className={classes.cardNumber} gutterBottom>
          {cardNumber}
        </Typography>
        <div className={classes.cardBottom}>
          <Typography className={classes.cardDate}>{cardDate}</Typography>
          <img src={Visa} alt="mastercard logo" className={classes.cardLogo} />
        </div>
      </CardContent>
    </div>
  )
}
