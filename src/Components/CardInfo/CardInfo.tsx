import { Typography } from '@material-ui/core'
import React from 'react'
import { Button } from '../Button/Button'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import HomeIcon from '@material-ui/icons/Home'
import { useCardInfoStyles } from './CardInfoStyles'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Dashboard } from '../Dashboard/Dashboard'
import { Cards } from '../Cards/Cards'
import { Icon } from '../Icon/Icon'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { Link } from 'react-router-dom'

interface CardInfoProps {
  scale?: string
  action?: string
}
export const CardInfo: React.FC<CardInfoProps> = (action) => {
  const classes = useCardInfoStyles()
  return (
    <div className={classes.cardInfo}>
      <Dashboard
        DashboardTitle="Debit card"
        cardButton={
          <Button
            startIcon={<DeleteForeverIcon />}
            action="Delete card"
            className={classes.Btn}
            color="secondary"
          />
        }
        cardOption={<Cards />}
        mobileAddCard={<Icon IconType="AddCircleOutlineIcon" style="" />}
      />
    </div>
  )
}
