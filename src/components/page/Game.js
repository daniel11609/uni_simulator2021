import React from "react";

import '../../component-design/page/Game.css';
import Room from "../CGU/Room";

export default class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rooms: [

            ]
        }
    }


    render() {
        return (
            <div className="Game">
                
                <Room></Room>
            </div>
        );
    }




}
