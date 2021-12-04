import {makeStyles}  from "@material-ui/core/styles";
export const useSelectFieldStyles = makeStyles((theme) => ({
    selectField:{
        marginBottom:theme.spacing(2),
    },
    boxLabel:{
        padding: theme.spacing(0.9, 0),
        color:theme.design.colors.gray70,
        fontStyle:'normal',
        font:theme.typography.fontFamily ,
        fontSize:theme.typography.fontSize*1,
        fontWeight:'normal',
    },
    selectBox:{
width:'74%',
backgroundColor:theme.design.colors.gray30,
border:'0.5px solid #BCBCBC',
borderRadius: 3,
    },
     /**MEDIA QUERIES */

  '@media screen and (max-width: 500px)': {
    selectBox:{
        width:'85%',
        backgroundColor:theme.design.colors.gray30,
        border:'0.5px solid #BCBCBC',
        borderRadius: 3,
            },
  }

}))