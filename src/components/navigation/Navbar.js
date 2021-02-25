import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import MoneyDisplay from './MoneyDisplay'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function openShop(){

}
function openProfs(){

}
export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar >
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <Paper className={classes.paper}>
              <Button  onClick={openShop} > Shop </Button>
              <Button onClick={openProfs}> Profs </Button>
              </Paper>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Uni- Simulator 2021
          </Typography>
          <Grid  direction="column" style={{width:"100px"}}>
            <Grid item xs={12} spacing={3} style={{paddingTop:"5px",paddingBottom:"5px"}}>
            <Paper className={classes.paper}>
              <MoneyDisplay currency={"students"}></MoneyDisplay>
            </Paper>
            </Grid>
            <Grid item xs={12} spacing={3} style={{paddingBottom:"5px"}}>
            <Paper className={classes.paper} >
              <MoneyDisplay currency={"exmat."}></MoneyDisplay>
            </Paper>
            </Grid>
            
            <Grid item xs={12} spacing={3}style={{paddingBottom:"5px"}}>
            <Paper className={classes.paper}>
              <MoneyDisplay currency={"degrees"}></MoneyDisplay>
              </Paper>
            </Grid>
          </Grid>
        </Toolbar>
        
      </AppBar>
    </div>
  );
}
