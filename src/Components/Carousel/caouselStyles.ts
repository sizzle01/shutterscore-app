import {makeStyles}  from "@material-ui/core/styles";
export const useCarouselStyles = makeStyles((theme) => ({
    carousel:{
        width:752,
        height:'90vh',
        background: 'transparent linear-gradient(180deg, #FFFFFF 0%, #80BFFF 100%) 0% 0%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
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
    

}))