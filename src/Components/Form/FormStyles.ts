import {makeStyles}  from "@material-ui/core/styles";
import Theme from '../../theme'
export const useFormStyles = makeStyles((theme) => ({
  accountPage:{
    display:'flex',
    justifyContent:'space-around'
  },
  formWrapper:{
    width:614,
    height:'90vh'
  },
  formCard:{
    backgroundColor:theme.design.colors.white,
    height:614,
    width:455,
    boxShadow:'0px 0px 20px #0000000A',
    borderRadius:'14px',
    margin:theme.spacing()
 
  },
  formContent:{
marginLeft: '25%',

  },
  formLeft:{},
  formRight:{},
  createAcc:{
    marginLeft: '12%',
      color:theme.design.colors.black ,
      fontStyle:'normal',
      font:theme.typography.fontFamily ,
      fontSize:theme.typography.fontSize*1.3,
      fontWeight:'normal',
  },
  continue:{
    marginBottom:theme.spacing(3.8),
    marginLeft: '7%',
      font:theme.typography.fontFamily,
      fontWeight:'normal',
      color:theme.design.colors.grey80 ,
      fontSize:theme.typography.fontSize*1,
  }

}))

