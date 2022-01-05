import {makeStyles}  from "@material-ui/core/styles";
export const useButtonStyles = makeStyles((theme) => ({
  btn:{
      backgroundColor:theme.design.colors.blue ,
      width: '75%',
      color:theme.design.colors.white,
      textTransform: "none",
      '&:hover':{
        backgroundColor: theme.design.colors.blue,
      }
  },
 
    
  /**MEDIA QUERIES */

  '@media screen and (max-width: 500px)': {
    btn:{
      width: '85%',
  },
 
  }

}))