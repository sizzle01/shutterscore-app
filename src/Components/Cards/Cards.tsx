import React from 'react'
import { CardStyles } from './CardStyle'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Visa from '../../images/visa.png'
import EditIcon from '@mui/icons-material/Edit'
import Data from '../../Data'
import { WalletCard } from '../WalletCard/WalletCard'
import { cardDetails } from './Mock'
interface CardsProps {
  amount?: string
  currency?: string
  cardNumber?: number
  cardDate?: string
  wallet?: any
  cardIcon?: any
}

export const Cards: React.FC<CardsProps> = ({
  amount,
  cardNumber,
  currency,
  cardDate,
  wallet,
  cardIcon,
}) => {
  const classes = CardStyles()
  // const wallet = <WalletCard balance="265,285,750" />

  return (
    <div className={classes.cardCont}>
      {wallet}
      {cardDetails.map((card, index) => {
        return (
          <div className={classes.card} key={index}>
            <CardContent className={classes.cardInfo}>
              <div className={classes.cardTop}>
                <Typography className={classes.cardBalance} gutterBottom>
                  {card.amount}
                  <span className={classes.cardCurrency}>{card.currency}</span>
                </Typography>
                <EditIcon className={classes.editIcon} />
              </div>

              <Typography className={classes.cardNumber} gutterBottom>
                {card.cardNumber}
              </Typography>
              <div className={classes.cardBottom}>
                <Typography className={classes.cardDate}>
                  {card.cardDate}
                </Typography>
                <img
                  src={card.cardIcon}
                  alt="mastercard logo"
                  className={classes.cardLogo}
                />
              </div>
            </CardContent>
          </div>
        )
      })}
    </div>
  )
}
