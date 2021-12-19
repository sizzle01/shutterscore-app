import { makeStyles } from '@material-ui/core/styles'
export const useSideBarStyles = makeStyles((theme) => ({
  sideMenu: {
    width: '15.5%',
    height: '100vh',
    backgroundColor: theme.design.colors.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  menu: {
    marginTop: '15.7%',
  },

  menuItems: {
    fontStyle: 'normal',
    font: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize * 0.9,
    fontWeight: 'normal',
    marginBottom: theme.spacing(3.8),
    color: theme.design.colors.black,
    borderRadius: 5,
    '&:hover': {
      backgroundColor: theme.design.colors.blue,
      color: theme.design.colors.white,
    },
  },
  sideBarLink: {
    textDecoration: 'none',
    
  },

  MenuIcon: {
    minWidth: '40px',
    color: theme.design.colors.black,
    '&:hover': {
      color: theme.design.colors.white,
    },
  },
  btn: {
    marginTop: 'auto',
    marginBottom: '70px',
  },
  exit: {
    color: theme.design.colors.red,
  },
  /**Media queries */
  '@media screen and (max-width: 935px)': {
    sideMenu: {
      display: 'none',
    },
  },
  logout: {
    textDecoration: 'none',
    marginTop: 'auto',
    marginBottom: '20px',
  },

  '@media screen and (max-width: 768px)': {},
  '@media screen and (max-width: 500px)': {},
}))
