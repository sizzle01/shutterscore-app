import {makeStyles}  from "@material-ui/core/styles";
export const CardStyles = makeStyles((theme) => ({
  
    cardCont:{
        display:'flex',
       overflowY:'hidden',
       scrollBar:'none'
    },
    card:{
        margin:theme.spacing(0, 1.4),
    width:'231px',
    height:'135px',
    borderRadius:'15px',
    backgroundImage:'linear-gradient(#2C2C2C, #373737 )',  
    },
    
    cardInfo:{
marginLeft:theme.spacing(2.4),
width:'181px',

    },
    cardBalance:{
        color:theme.design.colors.white,
    fontSize: theme.typography.fontSize*.2,
    fontWeight: 'normal',
    fontFamily:theme.typography.fontFamily,
    
    },
    cardCurrency:{
        marginLeft:theme.spacing(.5),
        color:theme.design.colors.gray40,
    fontSize: theme.typography.fontSize*.7,
    fontWeight: 'normal',
    fontFamily:theme.typography.fontFamily,
    },

    cardNumber:{
        marginTop:'17px !important',
        color:theme.design.colors.gray50,
        fontSize: theme.typography.fontSize*.8,
        fontWeight: 'normal',
        fontFamily:theme.typography.fontFamily,
    },
    cardLogo:{
       width:'32px',
       height:'20px'
    },
    cardDate:{
        
        color:theme.design.colors.gray50,
        fontSize: theme.typography.fontSize*.6,
        fontWeight: 'normal',
        fontFamily:theme.typography.fontFamily,
    },

cardTop:{
    display:'flex',
    justifyContent:'space-between',
},
editIcon:{
color:theme.design.colors.gray70,
},
cardBottom:{
    marginTop:theme.spacing(1.5),
    display:'flex',
    justifyContent:'space-between',
},

    /**Media queries */
'@media screen and (max-width: 992px)': {
   
    
  
},

'@media screen and (max-width: 768px)': {
 

},
'@media screen and (max-width: 500px)': {
 

},
}))



