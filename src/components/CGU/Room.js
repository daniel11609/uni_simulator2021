import React from 'react';
import '../../component-design/CGU/Room.css';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LockIcon from '@material-ui/icons/Lock';
import Config from "../../helper/Config.js"
import RoomCalc from "../../helper/RoomCalc";
export default class Room extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            unlocked: true,
            inventory: 0,
            capacity: 20,
            prof: -1,
            reward: "",
            background: "",
            id:0,
            running:false,
            runningTime:0,
            progress:0,
            progressUpdate:0,
        }
    }

    // TODO for room calc query if prof is inside else give 0.5 0.5 to room calc

    componentDidMount(){
        if((this.state.unlocked===true) && (this.state.prof>-1))
        {
            this.runCGU();
        }
    }
    startTimer() {
        this.ticker = setInterval(()=>this.tick(),1000);
    }
    componentWillUnmount() {
        clearInterval(this.ticker);
    }
    tick() {
        let timeNeeded= this.state.runningTime;
        let progress= this.state.progress
        this.setState({runningTime:timeNeeded-1,
                        progress:progress+this.state.progressUpdate})
        if((timeNeeded-1)==0)
        {
            //RoomCalc.calcRoom();
              // TODO: update money
              
            if(this.state.prof==-1){
                this.setState({running:false,progress:0,progressUpdate:0})
                clearInterval(this.ticker);
                
                
            }
        }
        

    }
    render() {
        return(
            <div className='Room' >
                {
                    this.state.unlocked ? (  // unlocked
                        <div>
                            {this.get_media_card()}
                        </div>
                    ) : ( // locked
                        <div>
                            <LockIcon/>
                        </div>
                    )
                }
            </div>

        );
    }
    runCGU()
    {
        
        this.setState({running:true});
        let timeNeeded = Config.equipmentTime[this.state.inventory].time;
        this.setState({progressUpdate:Number(100/timeNeeded)});
        this.setState({runningTime:timeNeeded})
        this.startTimer();
        alert(timeNeeded)

    }

    doUpdate(){
        //do update enough money ? -> update-> write in local storage  
    }
    get_media_card() {
        const classes = makeStyles({
            root: {
                maxWidth: 345,
            },
            media: {
                height: 140,
            },
        });

        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        <Typography>
                            <div class="progress">
                            <div class="progress-bar bg-success" role="progressbar" style={{width: this.state.progress+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </Typography>
                    </CardContent>
                </CardActionArea>
              
                <CardActions>
                    {this.state.prof==-1?
                       ( <Button size="small" color="primary" onClick={()=>{this.runCGU()}}>
                        Run
                    </Button>):
                    (<div></div>)//when prof , render progress bar
                    }
                    <Button size="small" color="primary" onClick={()=>this.doUpdate()}>
                        Upgrade
                    </Button>
                </CardActions>
            </Card>
        );
    }
}
