import {makeStyles}  from "@material-ui/core/styles";
export const useTextFieldProps = makeStyles((theme) => ({
    textField:{
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
    textBox:{
width:'74%',
backgroundColor:theme.design.colors.gray30,
border:'0.5px solid #BCBCBC',
borderRadius: 3,
    }

}))