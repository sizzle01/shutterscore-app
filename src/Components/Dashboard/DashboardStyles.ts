import { makeStyles } from '@material-ui/core/styles'
export const DashboardStyles = makeStyles((theme) => ({
  dashboard: {
    //marginTop: theme.spacing(9),
    display: 'flex',
  },
  dashboardCont: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.design.colors.lightBlue,
    width: '84.5%',
  },
  dashboardInfo: {
    width: '90%',
  },
  dashTop: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  addCardContainer: {},
  mobileAddCard: {
    width: '53px !important',
    height: '53px !important',
    pointer: 'cursor',
    display: 'none !important',
    margin: theme.spacing(0, 0, 2, 0),
  },
  addCard: {
    width: '200px',
    margin: theme.spacing(1.8, 0, 0, 'auto'),
    pointer: 'cursor',
  },
  addButton: {},
  dashboardTitle: {
    color: theme.design.colors.black,
    fontSize: theme.typography.fontSize * 1.7,
    fontWeight: 'normal',
    fontFamily: theme.typography.fontFamily,
    marginTop: '3%',
  },
  dashboardDesc: {
    color: theme.design.colors.gray75,
    fontSize: theme.typography.fontSize * 1,
    fontWeight: 'normal',
    fontFamily: theme.typography.fontFamily,
  },
  dashboardLine: {
    backgroundColor: theme.design.colors.gray75,
    height: '.5px',
    width: '100%',
  },
  cardWrapper: {
    overflowX: 'hidden',
    scrollBar: 'none',
    display: 'flex',
    padding: theme.spacing(1, 0, 3, 0),
  },
  /**Media queries */
  '@media screen and (max-width: 935px)': {
    dashboardCont: {
      width: '100%',
    },
  },

  '@media screen and (max-width: 768px)': {
    mobileAddCard: {
      margin: theme.spacing(1.5, 0, 0, 0),
      width: '38px !important',
      height: '38px !important',
      pointer: 'cursor !important',
      display: 'block !important',
    },
    addCard: {
      display: 'none !important',
    },
  },
  '@media screen and (max-width: 500px)': {
    dashboardTitle: {
      fontSize: theme.typography.fontSize * 1.4,
    },
    dashboardDesc: {
      fontSize: theme.typography.fontSize * .8,
    },
    dashboardCont: {
      backgroundColor: theme.design.colors.white,
    
    },
    dashboardLine: {
      backgroundColor: theme.design.colors.white,
    },
  },
}))
