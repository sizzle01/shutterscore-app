import { Select, Typography } from '@material-ui/core'
import React from 'react'
import { TransactionHistoryStyles } from './TransactionHistoryStyles'
import moment from 'moment'
import Mastercard from '../../images/mastercard.png'

interface TransactionHistoryProps {}
export const TransactionHistory: React.FC<TransactionHistoryProps> = () => {
  const classes = TransactionHistoryStyles()
  const transactionDate = moment().format('MMMM DD')
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
          <div className={classes.transactionItemInfo}>
            <div className={classes.itemObject}>
              <div className={classes.itemIcon}>
                <img src={Mastercard} alt="item icon" />
              </div>
              <div className={classes.itemDescription}>
                <Typography className={classes.itemName}>
                  ”Food & Drinks” restaurant
                </Typography>
                <Typography className={classes.itemType}>
                  Cafe and restaurants
                  <span className={classes.cardId}>Card: ** 3478</span>
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.transactionPrice}>
            <Typography className={classes.transactionAmount}>
              - 140 <span className={classes.transactionAmountType}>UAH</span>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
