import React, { useState } from 'react'
import { useCategoriesStyles } from './CategoriesStyles'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Typography from '@material-ui/core/Typography'
import { MenuItem } from '@material-ui/core'

interface CategoriesProps {
  className?: string
  handleChange?: (
    event: React.ChangeEvent<{
      name?: string | undefined
      value: unknown
    }>,
  ) => void
}
export const Categories: React.FC<CategoriesProps> = () => {
  const classes = useCategoriesStyles()
  const [category, setCategory] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value)
  }

  return (
    <div className={classes.categories}>
      <Select
        onChange={handleChange}
        variant="standard"
        displayEmpty
        disableUnderline
        name="category"
        value={category}
        className={classes.select}
      >
        <MenuItem value="" disabled>
          All Categories
        </MenuItem>
        <MenuItem value={10}>Restaurant</MenuItem>
        <MenuItem value={20}>Store</MenuItem>
        <MenuItem value={30}>Transfers</MenuItem>
      </Select>
    </div>
  )
}
