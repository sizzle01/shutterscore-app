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
interface CardsProps {
  amount?: string
  currency?: string
  cardNumber?: number
  cardDate?: string
  wallet: any
}

export const Cards: React.FC<CardsProps> = ({
  amount,
  cardNumber,
  currency,
  cardDate,
  wallet,
}) => {
  const classes = CardStyles()
  // const wallet = <WalletCard balance="265,285,750" />
  const cardDetails = [
    {
      amount: '744,397.56',
      currency: 'UAH',
      cardNumber: '4684 4734 8957 655',
      cardDate: '10/24',
    },
    {
      amount: '879,865.49',
      currency: 'USD',
      cardNumber: '4685 6243 2257 399',
      cardDate: '10/24',
    },
  ]

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
                  src={Visa}
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
