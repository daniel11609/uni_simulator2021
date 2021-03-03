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
                        <Room id="room_2" room={this.props.rooms[1]} profs={this.props.profs} edit_room={this.props.edit_room}
                              get_prof_locations={this.get_prof_locations} save_to_storage={this.props.save_to_storage} load_from_storage={this.props.load_from_storage} />
                    </div>
                    <div className="col">
                        <Room id="room_1" room={this.props.rooms[0]} profs={this.props.profs} edit_room={this.props.edit_room}
                              get_prof_locations={this.get_prof_locations} save_to_storage={this.props.save_to_storage} load_from_storage={this.props.load_from_storage}/>
                    </div>
                    <div className="col">
                        <div className="house-spacer-3rd" />
                        <Room id="room_3" room={this.props.rooms[2]} profs={this.props.profs} edit_room={this.props.edit_room}
                              get_prof_locations={this.get_prof_locations} save_to_storage={this.props.save_to_storage} load_from_storage={this.props.load_from_storage}/>
                    </div>
                </div>
                <div className="flex-grid-body">
                    <div className="col">
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <Room id="room_4" room={this.props.rooms[3]} profs={this.props.profs} edit_room={this.props.edit_room}
                              get_prof_locations={this.get_prof_locations} save_to_storage={this.props.save_to_storage} load_from_storage={this.props.load_from_storage}/>
                        <div className="house-spacer-1st" />
                        <Room id="room_9" room={this.props.rooms[8]} profs={this.props.profs} edit_room={this.props.edit_room}
                              get_prof_locations={this.get_prof_locations} save_to_storage={this.props.save_to_storage} load_from_storage={this.props.load_from_storage}/>
                    </div>
                    <div className="col">
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <Room id="room_5" room={this.props.rooms[4]} profs={this.props.profs} edit_room={this.props.edit_room}
                              get_prof_locations={this.get_prof_locations} save_to_storage={this.props.save_to_storage} load_from_storage={this.props.load_from_storage}/>
                        <div className="house-spacer-1st" />
                        <Room id="room_10" room={this.props.rooms[9]} profs={this.props.profs} edit_room={this.props.edit_room}
                              get_prof_locations={this.get_prof_locations} save_to_storage={this.props.save_to_storage} load_from_storage={this.props.load_from_storage}/>
                    </div>
                    <div className="col">
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <Room id="room_6" room={this.props.rooms[5]} profs={this.props.profs} edit_room={this.props.edit_room}
                              get_prof_locations={this.get_prof_locations} save_to_storage={this.props.save_to_storage} load_from_storage={this.props.load_from_storage}/>
                        <div className="house-spacer-1st" />
                        <Room id="room_11" room={this.props.rooms[10]} profs={this.props.profs} edit_room={this.props.edit_room}
                              get_prof_locations={this.get_prof_locations} save_to_storage={this.props.save_to_storage} load_from_storage={this.props.load_from_storage}/>
                    </div>
                    <div className="col">
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <Room id="room_7" room={this.props.rooms[6]} profs={this.props.profs} edit_room={this.props.edit_room}
                              get_prof_locations={this.get_prof_locations} save_to_storage={this.props.save_to_storage} load_from_storage={this.props.load_from_storage}/>
                        <div className="house-spacer-1st" />
                        <Room id="room_12" room={this.props.rooms[11]} profs={this.props.profs} edit_room={this.props.edit_room}
                              get_prof_locations={this.get_prof_locations} save_to_storage={this.props.save_to_storage} load_from_storage={this.props.load_from_storage}/>
                    </div>
                    <div className="col">
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <div className="house-spacer-2nd" />
                        <Room id="room_8" room={this.props.rooms[7]} profs={this.props.profs} edit_room={this.props.edit_room}
                              get_prof_locations={this.get_prof_locations} save_to_storage={this.props.save_to_storage} load_from_storage={this.props.load_from_storage}/>
                        <div className="house-spacer-1st" />
                        <Room id="room_13" room={this.props.rooms[12]} profs={this.props.profs} edit_room={this.props.edit_room}
                              get_prof_locations={this.get_prof_locations} save_to_storage={this.props.save_to_storage} load_from_storage={this.props.load_from_storage}/>
                    </div>
                </div>
            </div>
        );
    }

    // returns array of tuples (prof_id, room_id)
    get_prof_locations = () => {
        let res = []
        for(let p = 0; p < this.props.profs.length; p++) {
            if(!this.props.profs[p].locked) {
                for(let r = 0; r < this.props.rooms.length; r++) {
                    if(Number(this.props.profs[p].id) === Number(this.props.rooms[r].prof)) {
                        res.push([this.props.profs[p].id, this.props.rooms[r].id])
                        break;
                    } else if(r === Number(this.props.rooms.length-1)) {
                        res.push([this.props.profs[p].id, -1])
                    }
                }
            }
        }
        return res;
    }




}
