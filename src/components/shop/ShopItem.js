import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

import '../../component-design/shop/ShopItem.css';


export default class ShopItem extends React.Component {

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
                        <Button size="small" color="primary" onClick={() => { this.buyExmatric() }}>
                            Buy for {this.props.price} <SupervisedUserCircleIcon></SupervisedUserCircleIcon>
                        </Button>

                    </CardActions>
                </Card>
            </div>
        );
    }
    buyExmatric() {
        let user_name = localStorage.getItem("user_name");

        let students = JSON.parse(localStorage.getItem(user_name + "_currencies_1"));
        if (students.amount < this.props.price) {
            alert("You need more Students to buy this Item")
        }
        else {
            students.amount = students.amount - this.props.price;
            let exmatric = JSON.parse(localStorage.getItem(user_name + "_currencies_2"));
            exmatric.amount = exmatric.amount + this.props.price;
            localStorage.setItem(user_name + "_currencies_1", JSON.stringify(students));
            localStorage.setItem(user_name + "_currencies_2", JSON.stringify(exmatric));
            alert("You sucessfully bought the item ")
        }

    }




}
