import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import '../../component-design/shop/ShopItem.css';


export default class ShopItem extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div item_id={this.props.id} className="ShopItem">
                <Card className="">
                    <CardActionArea>
                        <CardMedia
                            className=""
                            image={this.props.image}
                            title={this.props.image_title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {this.props.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <CardActions className="shop-item-buttons">
                        <Button size="small" color="primary">
                            Buy for {this.props.price}$
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }




}
