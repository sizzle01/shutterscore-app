import {makeStyles}  from "@material-ui/core/styles";
export const DashboardStyles = makeStyles((theme) => ({
  dashboard:{
     //marginTop: theme.spacing(9),
     display:'flex',

  },
  dashboardCont:{
    display:'flex',
    justifyContent:'center',
backgroundColor:theme.design.colors.lightBlue,
width:'84.5%',
  },
  dashboardInfo:{
    width:'90%'
      },
      dashTop:{

      },
      addCard:{
        
      },
  dashboardTitle:{
    color:theme.design.colors.black,
    fontSize: theme.typography.fontSize*1.7,
    fontWeight: 'normal',
    fontFamily:theme.typography.fontFamily,
    marginTop:'3%',
  },
  dashboardDesc:{
    color:theme.design.colors.gray75,
    fontSize: theme.typography.fontSize*1,
    fontWeight: 'normal',
    fontFamily:theme.typography.fontFamily,
  },
  dashboardLine:{
    backgroundColor:theme.design.colors.gray75,
    height:'.5px',
    width:'100%'
  },
  cardWrapper:{
    overflowX:'hidden',
    scrollBar:'none',
    display:'flex',
    padding:theme.spacing(1, 0, 3, 0)
  },
/**Media queries */
'@media screen and (max-width: 935px)': {
  dashboardCont:{
  width:'100%'

 },

},

'@media screen and (max-width: 768px)': {


},
'@media screen and (max-width: 500px)': {


},
}))



 


