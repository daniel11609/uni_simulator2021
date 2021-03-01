import React from "react";

import '../../component-design/page/Shop.css';
import ShopItem from "../shop/ShopItem";


export default class Shop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div className="Shop">
                {
                    this.props.items.map((data, id) => {
                        return <ShopItem key={id} item_id={data.id} image={data.image} image_title={data.image_title} price={data.price} used_in={data.used_in} title={data.title} description={data.description} />
                    })
                }
            </div>
        );
    }



}
