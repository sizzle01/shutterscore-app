import {makeStyles}  from "@material-ui/core/styles";
export const useFormStyles = makeStyles((theme) => ({
  accountPage:{
    display:'flex',
    justifyContent:'between',
    width:'100vw',
    overflowX:'hidden',
  },
  formWrapper:{
    width:'44vw',
  },
  formInstruction:{
   marginRight:theme.spacing(10)
  },
  formCard:{
    backgroundColor:theme.design.colors.white,
    height:614,
    width:'33vw',
    boxShadow:'0px 0px 20px #0000000A',
    borderRadius:'14px',
    marginLeft:'auto'
 
  },
  formContent:{
    marginTop:theme.spacing(5),
marginLeft: '22%',

  },
  formLeft:{
    
  },
  formRight:{},
  createAcc:{
    paddingTop:theme.spacing(3),
      color:theme.design.colors.black ,
      fontStyle:'normal',
      font:theme.typography.fontFamily ,
      fontSize:theme.typography.fontSize*1.3,
      fontWeight:'bold',
  },
  continue:{
    marginBottom:theme.spacing(3.8),
      font:theme.typography.fontFamily,
      fontWeight:'normal',
      color:theme.design.colors.grey70 ,
      fontSize:theme.typography.fontSize*1,
  },



  /**MEDIA QUERIES */

'@media screen and (max-width: 890px)': {
  formWrapper:{
    width:'100%',
  },
  accountPage:{
   flexDirection:'column'
  },
  formInstruction:{
    marginRight:theme.spacing(23)
   },
  formCard:{
    backgroundColor:theme.design.colors.white,
    width:'100vw',
    boxShadow:'none',
    borderRadius:'14px',
    marginLeft:0,
 
  },

},
'@media screen and (max-width: 500px)': {
  formWrapper:{
    width:'100%',
  },
  accountPage:{
   flexDirection:'column'
  },
  formInstruction:{
    marginRight:theme.spacing(22),

   },
  formCard:{
    backgroundColor:theme.design.colors.white,
    width:'100vw',
    boxShadow:'none',
    borderRadius:'14px',
    marginLeft:0,
 
  },
  formContent:{
    marginTop:theme.spacing(5),
marginLeft: '8%',

  },
  
  
}

}))



 


