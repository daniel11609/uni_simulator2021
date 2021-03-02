import React from "react";

import '../../component-design/page/Game.css';
import Room from "../CGU/Room";

export default class Game extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="Game">
                <img className="background-house main-container" src="/background/building.svg" />
                <div className="flex-grid-roof">
                    <div className="col">
                        <div className="house-spacer-3rd" />
                        <Room id="room_2" room={this.props.rooms[1]} />
                    </div>
                    <div className="col">
                        <Room id="room_1" room={this.props.rooms[0]} />
                    </div>
                    <div className="col">
                        <div className="house-spacer-3rd" />
                        <Room id="room_3" room={this.props.rooms[2]} />
                    </div>
                </div>
                <div className="flex-grid-body">
                    <div className="col">
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <Room id="room_4" room={this.props.rooms[3]} />
                        <div className="house-spacer-1st" />
                        <Room id="room_9" room={this.props.rooms[8]} />
                    </div>
                    <div className="col">
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <Room id="room_5" room={this.props.rooms[4]} />
                        <div className="house-spacer-1st" />
                        <Room id="room_10" room={this.props.rooms[9]} />
                    </div>
                    <div className="col">
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <Room id="room_6" room={this.props.rooms[5]} />
                        <div className="house-spacer-1st" />
                        <Room id="room_11" room={this.props.rooms[10]} />
                    </div>
                    <div className="col">
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <Room id="room_7" room={this.props.rooms[6]} />
                        <div className="house-spacer-1st" />
                        <Room id="room_12" room={this.props.rooms[11]} />
                    </div>
                    <div className="col">
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <Room id="room_8" room={this.props.rooms[7]} />
                        <div className="house-spacer-1st" />
                        <Room id="room_13" room={this.props.rooms[12]} />
                    </div>
                </div>
            </div>
        );
    }


    click_locked_room(event) {
        console.log(event.currentTarget.getAttribute('id'))
        alert("You did not unlock room "+event.currentTarget.getAttribute('id').replace("room_", "")+" yet!")
    }



}
