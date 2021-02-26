import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SettingsIcon from '@material-ui/icons/Settings';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

import MoneyDisplay from './MoneyDisplay'

export default class NavBar extends React.Component  {

    constructor() {
      super();
    }

      classes = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          display: "flex",
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
      }));

      render() {
        return (
            <div className={this.classes.root}>
              <AppBar position="static">
                <Toolbar style={{justifyContent: "space-between"}}>
                  <IconButton edge="start" className={this.classes.menuButton} color="inherit" aria-label="menu">
                    <Paper className={this.classes.paper}>
                      <Button><SettingsIcon></SettingsIcon></Button>
                      <Button  onClick={async () => {await this.props.change_page("shop")}} > Shop </Button>
                      <Button onClick={async() => {await this.props.change_page("profs")}}> Profs </Button>
                    </Paper>
                  </IconButton>
                  <Typography variant="h6" className={this.classes.title}>
                    Uni- Simulator 2021
                  </Typography>
                  <Grid  direction="column" style={{width:"100px"}}>
                    <Grid item xs={12} spacing={3} style={{paddingTop:"5px",paddingBottom:"5px"}}>
                      <Paper className={this.classes.paper}>
                        <MoneyDisplay id={"student"} amount={0}> <SupervisedUserCircleIcon></SupervisedUserCircleIcon> </MoneyDisplay>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} spacing={3} style={{paddingBottom:"5px"}}>
                      <Paper className={this.classes.paper} >
                        <MoneyDisplay id={"exmat"} amount={0}> <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon> </MoneyDisplay>
                      </Paper>
                    </Grid>

                    <Grid item xs={12} spacing={3}style={{paddingBottom:"5px"}}>
                      <Paper className={this.classes.paper}>
                        <MoneyDisplay id={"degree"} amount={0}> <AssignmentTurnedInIcon></AssignmentTurnedInIcon> </MoneyDisplay>
                      </Paper>
                    </Grid>
                  </Grid>
                </Toolbar>

              </AppBar>
            </div>
        );
      }
}
