import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { DashboardStyles } from './DashboardStyles'
import { Card, Typography } from '@material-ui/core'
import { SideBar } from '../sideBar/SideBar'
import { WalletCard } from '../WalletCard'
import { Cards } from '../Cards'
import { TransactionHistory } from '../Transaction'

interface DashboardProps {
  DashboardTitle: string
  cardOption?: any
  cardButton?: any
}

export const Dashboard: React.FC<DashboardProps> = ({
  DashboardTitle,
  cardOption,
  cardButton,
}) => {
  const classes = DashboardStyles()

  return (
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
            <div className={classes.addCard}>{cardButton}</div>
          </div>
          <div className={classes.dashboardLine}></div>
          <div className={classes.cardWrapper}>
            {cardOption}
            {/* <Cards wallet={<WalletCard balance="$255,356,001" />} /> */}
          </div>
          <TransactionHistory />
        </div>
      </div>
    </div>
  )
}
