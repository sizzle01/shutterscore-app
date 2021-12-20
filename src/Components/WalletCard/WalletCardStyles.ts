import { makeStyles } from '@material-ui/core/styles'
export const WalletCardStyles = makeStyles((theme) => ({
  wallet: {
    width: '284px',
    height: '138px',
    borderRadius: '15px',
    backgroundColor: theme.design.colors.blue,
    marginRight: theme.spacing(1),
  },
  walletInfo: {
    marginLeft: theme.spacing(2),
  },
  balanceDesc: {
    color: theme.design.colors.white,
    fontSize: theme.typography.fontSize * 0.6,
    fontWeight: 'normal',
    fontFamily: theme.typography.fontFamily,
  },
  balance: {
    color: theme.design.colors.white,
    fontSize: theme.typography.fontSize * 2.2,
    fontWeight: 'bold',
    fontFamily: theme.typography.fontFamily,
  },
  fundButton: {
    width: '108px',
    height: '29px',
    color: theme.design.colors.deepBlue,
    fontSize: theme.typography.fontSize * 0.7,
    fontWeight: 'normal',
    fontFamily: theme.typography.fontFamily,
    border: `1px solid ${theme.design.colors.white}`,
    backgroundColor: theme.design.colors.white,
    '&:hover': {
      backgroundColor: 'none',
      color: theme.design.colors.white,
    },
    marginRight: theme.spacing(1.25),
    borderRadius: '3px',
  },
  withdrawButton: {
    width: '118px',
    height: '29px',
    color: theme.design.colors.white,
    fontSize: theme.typography.fontSize * 0.7,
    fontWeight: 'normal',
    fontFamily: theme.typography.fontFamily,
    border: `1px solid ${theme.design.colors.white}`,
  },
  balanceButton: {
    marginLeft: theme.spacing(2),
    display: 'flex',
    flexWrap: 'nowrap',
  },

  /**Media queries */
  '@media screen and (max-width: 992px)': {
    wallet: {
      width: '280px',
      height: '138px',
    },
    balanceDesc: {
      fontSize: theme.typography.fontSize * 0.5,
    },
    balance: {
      fontSize: theme.typography.fontSize * 2.2,
    },
    fundButton: {
      width: '108px',
      height: '29px',
      color: theme.design.colors.blue,
      fontSize: theme.typography.fontSize * 0.7,
      fontWeight: 'normal',
      fontFamily: theme.typography.fontFamily,
      border: `1px solid ${theme.design.colors.white}`,
      backgroundColor: theme.design.colors.white,
      '&:hover': {
        backgroundColor: 'none',
        color: theme.design.colors.white,
      },
      marginRight: theme.spacing(1),
      borderRadius: '3px',
    },
    withdrawButton: {
      color: theme.design.colors.white,
      fontSize: theme.typography.fontSize * 0.7,
      fontWeight: 'normal',
      fontFamily: theme.typography.fontFamily,
      border: `1px solid ${theme.design.colors.white}`,
    },
    balanceButton: {
      marginLeft: theme.spacing(2.6),
      display: 'flex',
      flexWrap: 'nowrap',
    },
  },

  '@media screen and (max-width: 768px)': {},
  '@media screen and (max-width: 500px)': {},
}))
