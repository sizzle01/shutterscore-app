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
  dashboardHead:{
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
    display:'flex',
    padding:theme.spacing(1, 0, 3, 0)
  }

}))



 


