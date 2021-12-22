import { Typography } from '@material-ui/core'
import React from 'react'
import { Button } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import PaymentIcon from '@material-ui/icons/Payment'
import HomeIcon from '@material-ui/icons/Home'
import { useMobileMenuStyles } from './mobileMenuStyles'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Link } from 'react-router-dom'

interface MobileMenuProps {
  scale?: string
}
export const MobileMenu: React.FC<MobileMenuProps> = () => {
  const classes = useMobileMenuStyles()
  return (
    <div className={classes.mobileMenu}>
      <MenuList className={classes.menu}>
        <Link className={classes.mobileMenuLink} to="/dashboard">
          <MenuItem className={classes.menuItems}>
            <ListItemIcon className={classes.MenuIcon}>
              <HomeIcon fontSize="small" />
            </ListItemIcon>
            <Typography className={classes.mobileMenuText} variant="inherit">
              Dashboard
            </Typography>
          </MenuItem>
        </Link>
        <Link className={classes.mobileMenuLink} to="/cards">
          <MenuItem className={classes.menuItems}>
            <ListItemIcon className={classes.MenuIcon}>
              <PaymentIcon fontSize="small" />
            </ListItemIcon>
            <Typography className={classes.mobileMenuText} variant="inherit">
              My cards
            </Typography>
          </MenuItem>
        </Link>
      </MenuList>
    </div>
  )
}
