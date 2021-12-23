import { makeStyles } from '@material-ui/core/styles'
export const useMobileMenuStyles = makeStyles((theme) => ({
  mobileMenu: {
    backgroundColor: theme.design.colors.white,
    width: '100%',
    height: '62px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'fixed',
    left: 0,
    bottom: 0,
    border:`1px solid ${theme.design.colors.gray40}`,
  },
  mobileMenuStatus:{
display:'none'
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuItems: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontStyle: 'normal',
    font: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize * 0.9,
    fontWeight: 'normal',
    marginBottom: theme.spacing(2),
    color: theme.design.colors.gray70,
    borderRadius: 5,
    '&:hover': {
      color: theme.design.colors.blue,
    },
  },
  mobileMenuLink: {
    textDecoration: 'none',
  },

  MenuIcon: {
    margin: theme.spacing(0, 0, 0, 4.3),
    color: theme.design.colors.grey70,
    '&:hover': {
      color: theme.design.colors.blue,
    },
  },
  mobileMenuText: {
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
    mobileMenuStatus:{
      display:'block'
  },
  

  '@media screen and (max-width: 768px)': {
   
  },
  '@media screen and (max-width: 500px)': {
    }
  
  },
}))
