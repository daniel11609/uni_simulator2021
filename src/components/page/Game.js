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
                <img className="background-house container" src="/background/building.svg" />
                <div className="spacer"/>
                <div className="flex-grid">
                    <div className="col">
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <img id="room_4" onClick={async (event) => {this.click_locked_room(event)}}
                             className="room-decoration" src={this.load_room_image(4)} />
                        <div className="house-spacer-1st" />
                        <img id="room_9" onClick={async (event) => {this.click_locked_room(event)}}
                             className="room-decoration" src={this.load_room_image(9)} />
                    </div>
                    <div className="col">
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <img id="room_5" onClick={async (event) => {this.click_locked_room(event)}}
                             className="room-decoration" src={this.load_room_image(5)} />
                        <div className="house-spacer-1st" />
                        <img id="room_10" onClick={async (event) => {this.click_locked_room(event)}}
                             className="room-decoration" src={this.load_room_image(10)} />
                    </div>
                    <div className="col">
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <img id="room_6" onClick={async (event) => {this.click_locked_room(event)}}
                             className="room-decoration" src={this.load_room_image(6)} />
                        <div className="house-spacer-1st" />
                        <img id="room_11" onClick={async (event) => {this.click_locked_room(event)}}
                             className="room-decoration" src={this.load_room_image(11)} />
                    </div>
                    <div className="col">
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <img id="room_7" onClick={async (event) => {this.click_locked_room(event)}}
                             className="room-decoration" src={this.load_room_image(7)} />
                        <div className="house-spacer-1st" />
                        <img id="room_12" onClick={async (event) => {this.click_locked_room(event)}}
                             className="room-decoration" src={this.load_room_image(12)} />
                    </div>
                    <div className="col">
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <img id="room_8" onClick={async (event) => {this.click_locked_room(event)}}
                             className="room-decoration" src={this.load_room_image(8)} />
                        <div className="house-spacer-1st" />
                        <img id="room_13" onClick={async (event) => {this.click_locked_room(event)}}
                             className="room-decoration" src={this.load_room_image(13)} />
                    </div>
                </div>
            </div>
        );
    }


    click_locked_room(event) {
        console.log(event.currentTarget.getAttribute('id'))
        alert("You did not unlock room "+event.currentTarget.getAttribute('id').replace("room_", "")+" yet!")
    }

    load_room_image(room_id) {
        console.log(this.props.rooms)
        if(this.props.rooms[room_id-1].locked) {
            return "/misc/locked_room.svg"
        }
    }


}
