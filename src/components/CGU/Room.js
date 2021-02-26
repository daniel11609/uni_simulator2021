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

export default class Room extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            unlocked: true,
            inventory: [],
            capacity: 20,
            prof: "",
            reward: "",
            background: ""
        }
    }

    // TODO for room calc query if prof is inside else give 0.5 0.5 to room calc


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
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Run
                    </Button>
                    <Button size="small" color="primary">
                        Upgrade
                    </Button>
                </CardActions>
            </Card>
        );
    }
}
