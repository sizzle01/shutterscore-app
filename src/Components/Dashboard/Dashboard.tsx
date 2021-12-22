import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { DashboardStyles } from './DashboardStyles'
import { Card, Typography } from '@material-ui/core'
import { SideBar } from '../sideBar/SideBar'
import { WalletCard } from '../WalletCard'
import { Cards } from '../Cards'
import { TransactionHistory } from '../Transaction'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { MobileMenu } from '../mobileMenu'

interface DashboardProps {
  DashboardTitle: string
  cardOption?: any
  cardButton?: any
  mobileAddCard?: any
}

export const Dashboard: React.FC<DashboardProps> = ({
  DashboardTitle,
  cardOption,
  cardButton,
  mobileAddCard,
}) => {
  const classes = DashboardStyles()
  const handleClick = () => {
    console.log('Add card')
  }
  return (
    <>
      <div className={classes.dashboard}>
        <SideBar />
        <div className={classes.dashboardCont}>
          <div className={classes.dashboardInfo}>
            <div className={classes.dashTop}>
              <div className="">
                <Typography className={classes.dashboardTitle} variant="h4">
                  {DashboardTitle}
                </Typography>
                <Typography className={classes.dashboardDesc} variant="h4">
                  Sed ut perspiciatis unde omnis iste natus error sit
                </Typography>
              </div>
              <div className={classes.addCardContainer}>
                <div className={classes.mobileAddCard}>{mobileAddCard}</div>

                <div className={classes.addCard}>{cardButton}</div>
              </div>
            </div>
            <div className={classes.dashboardLine}></div>
            <div className={classes.cardWrapper}>{cardOption}</div>
            <TransactionHistory />
          </div>
        </div>
      </div>
      <MobileMenu />
    </>
  )
}
