import { Typography } from '@material-ui/core'
import React from 'react'
import { IconStyles } from './IconStyles'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import DeleteForever from '@mui/icons-material/DeleteForever'
interface IconProps {
  onClick?: (e: React.FormEvent<HTMLInputElement>) => void
  IconType: any
  style?: any
  width?: string
  height?: string
  color?: string
  backgroundColor?: string
}
export const Icon: React.FC<IconProps> = ({ IconType, ...props }) => {
  const classes = IconStyles(props)
  const handleChange = () => {
    console.log('we are here')
  }
  return (
    <div className={classes.icon}>
      <AddCircleOutlineIcon
        onClick={handleChange}
        style={
          IconType === 'AddCircleOutlineIcon'
            ? {
                width: '45px',
                borderRadius: '50%',
                height: '45px',
                color: '#FFFFFF',
                backgroundColor: '#2994FF',
              }
            : {
                width: '52px',
                backgroundColor: 'green',
              }
        }
      ></AddCircleOutlineIcon>
    </div>
  )
}
