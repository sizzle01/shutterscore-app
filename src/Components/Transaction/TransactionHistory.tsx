import { Select, Typography } from '@material-ui/core'
import React from 'react'
import { TransactionHistoryStyles } from './TransactionHistoryStyles'
import moment from 'moment'
import Transactions from '../../Mock'
import Food from '../../images/food.png'

interface TransactionHistoryProps {}
export const TransactionHistory: React.FC<TransactionHistoryProps> = () => {
  const classes = TransactionHistoryStyles()
  const transactionDate = moment().format('MMMM DD')

  const Transactions = [
    {
      itemIcon: ' ../../images/food.png ',
      itemName: '”Food & Drinks” restaurant ',
      itemType: 'Cafe and restaurants',
      cardId: 'Card: ** 3478',
      transactionAmount: -140,
      transactionAmountType: 'UAH',
    },
  ]

  return (
    <div className={classes.historyContainer}>
      <div className={classes.historyContent}>
        <div className={classes.historyHead}>
          <Typography className={classes.historyDesc}>
            Transaction History
          </Typography>
          <Select className={classes.category}></Select>
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
              <div key={index}>
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
                </div>
                <div className={classes.transactionPrice}>
                  <Typography className={classes.transactionAmount}>
                    {Transaction.transactionAmount}
                    <span className={classes.transactionAmountType}>
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
