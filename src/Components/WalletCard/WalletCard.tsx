import React from 'react'
import { WalletCardStyles } from './WalletCardStyles'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import { Button } from '@material-ui/core'
import Typography from '@mui/material/Typography'
interface WalletCardProps {
  balance: string
}

export const WalletCard: React.FC<WalletCardProps> = ({ balance }) => {
  const classes = WalletCardStyles()
  const handleClick = () => {
    console.log('button response')
  }
  return (
    <div className={classes.wallet}>
      <CardContent className={classes.walletInfo}>
        <Typography className={classes.balanceDesc} gutterBottom>
          Total available balance
        </Typography>
        <Typography className={classes.balance} variant="h5">
          {balance}
        </Typography>
      </CardContent>
      <CardActions>
        <div className={classes.balanceButton}>
          <Button onClick={handleClick} className={classes.fundButton}>
            Fund Wallet
          </Button>
          <Button onClick={handleClick} className={classes.withdrawButton}>
            Withdraw Wallet
          </Button>
        </div>
      </CardActions>
    </div>
  )
}
