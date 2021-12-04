import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { DashboardStyles } from './DashboardStyles'
import { Card, Typography } from '@material-ui/core'
import { SideBar } from '../sideBar/SideBar'
import { WalletCard } from '../WalletCard'
import { Cards } from '../Cards'

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
  const classes = DashboardStyles()
  return (
    <div className={classes.dashboard}>
      <SideBar />
      <div className={classes.dashboardCont}>
        <div className={classes.dashboardInfo}>
          <Typography className={classes.dashboardHead} variant="h4">
            Dashboard
          </Typography>
          <Typography className={classes.dashboardDesc} variant="h4">
            Sed ut perspiciatis unde omnis iste natus error sit
          </Typography>
          <div className={classes.dashboardLine}></div>
          <div className={classes.cardWrapper}>
            <WalletCard balance="$25,356,01" />
            <Cards
              amount={5423472}
              currency="UAH"
              cardNumber={3332873223473478}
              cardDate="10/22"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
