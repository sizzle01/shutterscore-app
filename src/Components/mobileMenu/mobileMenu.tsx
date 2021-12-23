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
import clx from 'classnames'

interface MobileMenuProps {
  scale?: string
  className?: any
}
export const MobileMenu: React.FC<MobileMenuProps> = ({ className }) => {
  const classes = useMobileMenuStyles()
  return (
    <div
      className={clx(className, classes.mobileMenu, classes.mobileMenuStatus)}
    >
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
