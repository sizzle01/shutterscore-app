import {makeStyles}  from "@material-ui/core/styles";
export const useCarouselStyles = makeStyles((theme) => ({
    carousel:{
        width:'55vw',
        height:'100vh',
        background: 'transparent linear-gradient(180deg, #FFFFFF 0%, #80BFFF 100%) 0% 0%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:theme.spacing(7)
    } ,
    sliderContent:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        marginBottom:theme.spacing(8.6),
    },
    itemName:{
        fontFamily:theme.typography.fontFamily,
        fontSize:theme.typography.fontSize*1.4,
        color:theme.design.colors.gray90,
        fontStyle:'normal',
        fontWeight:'bold',
        marginBottom:theme.spacing(0.7)
    },
    itemDesc:{
        fontFamily:theme.typography.fontFamily,
        fontSize:theme.typography.fontSize,
        color:theme.design.colors.gray90,
        fontStyle:'normal',
        fontWeight:'bold',
        width:310,
        height:54,
    },
    sliderButton:{
        textDecoration:'none',
      position:'absolute',
      bottom:40  ,
    right:22,
      width:'75%',
      display:'none'
    },
   
    
  /**MEDIA QUERIES */

  '@media screen and (max-width: 890px)': {
    carousel:{
        width:'100%',
        marginLeft:theme.spacing(0),
        overflowX:'hidden',
        
    } ,
    sliderButton:{
      display:'block',
      bottom:80,
    },

  },
  '@media screen and (max-width: 768px)': {


  },
  '@media screen and (max-width: 500px)': {
    
  },
}))