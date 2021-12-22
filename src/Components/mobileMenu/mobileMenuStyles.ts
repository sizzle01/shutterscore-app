import { makeStyles } from '@material-ui/core/styles'
export const useMobileMenuStyles = makeStyles((theme) => ({
  mobileMenu: {
    width: '100%',
    height:'62px',
    backgroundColor: theme.design.colors.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   marginTop:'160px',
    bottom: 0,
 
  },
  menu: {
    // marginTop: '15.7%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },

  menuItems: {
     display:'flex',
     flexDirection:'column',
    justifyContent:'center', 
    fontStyle: 'normal',
    font: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize * 0.9,
    fontWeight: 'normal',
    marginBottom: theme.spacing(2),
    color: theme.design.colors.black,
    borderRadius: 5,
    '&:hover': {
      backgroundColor: theme.design.colors.blue,
      color: theme.design.colors.white,
    },
  },
  mobileMenuLink: {
    textDecoration: 'none',
  },

  MenuIcon: {
      margin:theme.spacing(0, 0, 0, 4.3),
    color: theme.design.colors.grey70,
    '&:hover': {
      color: theme.design.colors.white,
    },
  },
  mobileMenuText:{
    color: theme.design.colors.grey70,
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
