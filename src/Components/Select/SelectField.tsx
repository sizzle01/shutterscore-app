import React from 'react';
import {useSelectFieldStyles} from './SelectStyles';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';


interface SelectProps{
    label: string;
    variant?: string;
    subject: string;
}
export const SelectField: React.FC<SelectProps> =({subject}) => {
  const classes = useSelectFieldStyles();
  const [state, setState] = React.useState<{ age: string | number; name: string }>({
    age: '',
    name: 'hai',
  });
  const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className={classes.selectField}>
         <Typography className={classes.boxLabel}>{subject}</Typography>
        <Select
        className={classes.selectBox}
        variant="outlined"
          native
          value={state.age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>United States Dollar (USD)</option>
         
        </Select>
    </div>
  );
}