import { Select, Typography } from '@material-ui/core'
import React from 'react'
import { TransactionHistoryStyles } from './TransactionHistoryStyles'
import moment from 'moment'
import { Transactions } from './Mock'
import { Categories } from '../Categories'

interface TransactionHistoryProps {
  itemName?: string
  itemType?: string
  cardId?: string
  transactionAmount?: number
  transactionAmountType?: string
  itemIcon?: any
}
export const TransactionHistory: React.FC<TransactionHistoryProps> = ({
  itemName,
  itemType,
  cardId,
  transactionAmount,
  transactionAmountType,
  itemIcon,
}) => {
  const classes = TransactionHistoryStyles()
  const transactionDate = moment().format('MMMM DD')

  // let transactionAmountTypes = []
  // if (Transaction.transactionAmount > 500) {
  //   transactionAmountTypes.push('positive')
  // } else if (Transaction.transactionAmount < 500) {
  //   transactionAmountTypes.push('negative')
  // }

  return (
    <div className={classes.historyContainer}>
      <div className={classes.historyContent}>
        <div className={classes.historyHead}>
          <Typography className={classes.historyDesc}>
            Transaction History
          </Typography>
          <Categories className={classes.category} />
        </div>
        <div className={classes.categoryLine}></div>
      </div>
      <div>
        <Typography className={classes.transactionDate}>
          {transactionDate}
        </Typography>

        <div className={classes.transactionItem}>
          {Transactions.map((Transaction, index) => {
            return (
              <div className={classes.transactionItemInfo}>
                <div className={classes.itemObject}>
                  <div className={classes.itemIcon}>
                    <img src={Transaction.itemIcon} alt="item icon" />
                  </div>
                  <div className={classes.itemDescription}>
                    <Typography className={classes.itemName}>
                      {Transaction.itemName}
                    </Typography>
                    <Typography className={classes.itemType}>
                      {Transaction.itemType}
                      <span className={classes.cardId}>
                        {Transaction.cardId}
                      </span>
                    </Typography>
                  </div>
                </div>
                <div className={classes.transactionPrice}>
                  <Typography
                    className={classes.transactionAmount}
                    style={
                      Transaction.transactionAmount > 0
                        ? {
                            color: '#27AE60',
                          }
                        : Transaction.transactionAmount < 0
                        ? {
                            color: '#FF6464',
                          }
                        : {
                            color: '#000000',
                          }
                    }
                  >
                    {Transaction.transactionAmount}
                    <span className={classes.transactionAmountTypes}>
                      {Transaction.transactionAmountType}
                    </span>
                  </Typography>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
