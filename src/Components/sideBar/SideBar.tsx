import { Typography } from '@material-ui/core'
import React from 'react'
import { Button } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import PaymentIcon from '@material-ui/icons/Payment'
import HomeIcon from '@material-ui/icons/Home'
import { useSideBarStyles } from './SidebarStyles'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Link } from 'react-router-dom'

interface SideBarProps {
  scale?: string
}
export const SideBar: React.FC<SideBarProps> = () => {
  const classes = useSideBarStyles()
  return (
    <div className={classes.sideMenu}>
      <MenuList className={classes.menu}>
        <Link className={classes.sideBarLink} to="/dashboard">
          <MenuItem className={classes.menuItems}>
            <ListItemIcon className={classes.MenuIcon}>
              <HomeIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Dashboard</Typography>
          </MenuItem>
        </Link>
        <Link className={classes.sideBarLink} to="/cards">
          <MenuItem className={classes.menuItems}>
            <ListItemIcon className={classes.MenuIcon}>
              <PaymentIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">My cards</Typography>
          </MenuItem>
        </Link>
      </MenuList>

      <Button
        className={classes.btn}
        variant="text"
        startIcon={<ExitToAppIcon className={classes.exit} />}
      >
        Text
      </Button>
    </div>
  )
}
