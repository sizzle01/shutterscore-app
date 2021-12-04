import {makeStyles}  from "@material-ui/core/styles";
import Theme from '../../theme'
export const useCheckStyles = makeStyles((theme) => ({
  checkBox:{
      marginBottom:theme.spacing(2.6)
  },
  checkBoxLabel:{
    color:theme.design.colors.gray70 ,
    fontStyle:'normal',
    font:theme.typography.fontFamily ,
    fontSize:theme.typography.fontSize*0.7,
    fontWeight:'normal',
  }

}))