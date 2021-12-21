import { makeStyles } from '@material-ui/core/styles'
import { NONAME } from 'dns'
export const TransactionHistoryStyles = makeStyles((theme) => ({
  historyContainer: {
    backgroundColor: theme.design.colors.white,
    borderRadius: '15px',
    padding: theme.spacing(2),
  },
  historyContent: {},
  historyHead: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  historyDesc: {
    color: theme.design.colors.black2,
    fontSize: theme.typography.fontSize * 1.15,
    fontWeight: 'normal',
    fontFamily: theme.typography.fontFamily,
  },
  category: {
    width: '13%',
  },
  categoryLine: {
    height: '1px',
    backgroundColor: theme.design.colors.gray30,
    marginTop: theme.spacing(2),
  },
  transactionDate: {
    color: theme.design.colors.gray40,
    fontSize: theme.typography.fontSize * 1.1,
    fontWeight: 'bold',
    fontFamily: theme.typography.fontFamily,
    marginTop: theme.spacing(2.5),
  },
  transactionItem: {
    marginTop: theme.spacing(3),
  },
  transactionItemInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(1),
  },
  itemObject: {
    display: 'flex',
  },
  itemIcon: {
    padding: theme.spacing(0, 0.5, 0, 0),
    '& img': {
      width: '40px',
    },
  },
  itemDescription: {
    paddingLeft: theme.spacing(1.1),
  },
  itemName: {
    color: theme.design.colors.gray60,
    fontSize: theme.typography.fontSize * 1,
    fontWeight: 'normal',
    fontFamily: theme.typography.fontFamily,
  },
  itemType: {
    color: theme.design.colors.gray55,
    fontSize: theme.typography.fontSize * 0.86,
    fontWeight: 'normal',
    fontFamily: theme.typography.fontFamily,
  },
  cardId: {
    color: theme.design.colors.gray55,
    fontSize: theme.typography.fontSize * 0.86,
    fontWeight: 'normal',
    fontFamily: theme.typography.fontFamily,
    paddingLeft: theme.spacing(2.5),
  },

  transactionPrice: {},
  transactionAmount: {
    color: theme.design.colors.black,
    fontSize: theme.typography.fontSize * 1.4,
    fontWeight: 'normal',
    fontFamily: theme.typography.fontFamily,
  },
  positive: {
    color: 'green',
  },
  negative: {
    color: 'red',
  },
  transactionAmountTypes: {
    color: theme.design.colors.gray60,
    fontSize: theme.typography.fontSize * 0.85,
    fontWeight: 'normal',
    fontFamily: theme.typography.fontFamily,
    padding: theme.spacing(1),
  },
  /**Media queries */
  '@media screen and (max-width: 935px)': {},

  '@media screen and (max-width: 768px)': {},
  '@media screen and (max-width: 500px)': {
    historyContainer: {
      padding: theme.spacing(1),
      width: '100%',
    },
    historyDesc: {
      fontSize: theme.typography.fontSize * 1,
    },
    transactionDate: {
      fontSize: theme.typography.fontSize * 1,
    },
    itemIcon: {
      padding: theme.spacing(0, 0.25, 0, 0),
      '& img': {
        width: '33px',
      },
    },

    itemName: {
      fontSize: theme.typography.fontSize * 0.85,
    },
    itemType: {
      fontSize: theme.typography.fontSize * 0.76,
    },
    cardId: {
      fontSize: theme.typography.fontSize * 0.86,

      paddingLeft: theme.spacing(2.5),
    },
    transactionAmount: {
      fontSize: theme.typography.fontSize * 1.1,
    },
    transactionAmountTypes: {
      fontSize: theme.typography.fontSize * 0.7,

      padding: theme.spacing(0.8),
    },
  },
}))
