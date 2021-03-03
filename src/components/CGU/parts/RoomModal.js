import React from 'react';
import '../../../component-design/CGU/Room.css';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


export default class RoomModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            free_profs: [], // prof_id
            prof_name: null,
            prof_img: null,
            selected_prof: -1
        }
    }

    componentDidMount() {
        this.setState({selected_prof: -1, prof_name: null, prof_img: null, free_profs: []})
        const prof_locations = this.props.get_prof_locations(); // returns array of tuples (prof_id, room_id)
        let free_profs = [];
        for(let i = 0; i < prof_locations.length; i++) {
            if(prof_locations[i][1] <= 0) {
                free_profs.push(prof_locations[i][0]);
            }
        }
        this.setState({free_profs: free_profs})
        if(this.props.room.prof > 0) {
            const prof_data = this.get_prof_by_id(this.props.room.prof);
            this.setState({prof_name: prof_data[0], prof_img: prof_data[1]})
        }
    }


    render() {
        return (
            <div className="RoomModal">
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={"room-modal"}
                    open={this.props.open}
                    onClose={this.props.close_modal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={this.props.open}>
                        <div className="room-modal-content">
                            <h2 id="transition-modal-title">
                                {this.props.room.name}
                                </h2>
                            {this.state.prof_name ? (
                                <div>{this.render_prof()}</div>
                            ) : (
                                <div>{this.render_empty()}</div>
                            )}
                        </div>
                    </Fade>
                </Modal>
            </div>
        );
    }


    render_empty() {
        return <div>
            <p>Equipment: {this.props.room.equipment}<br/> Capacity: {this.props.room.capacity}</p>
            <p>This room is missing a professor.</p>
            <div style={{display: "flex", marginBottom: "20px"}}>
                <select className="form-select" aria-label="Default select example" onChange={(event => {this.setState({selected_prof: event.target.value})})}>
                    <option value="" selected disabled hidden>Choose Prof</option>
                    {this.render_prof_options()}
                </select>
                <button className="btn btn-primary" onClick={(async () => {await this.add_prof()})}>Add Prof</button>
            </div>
            <div className="progress-bar bg-success" role="progressbar"
                 style={{width: this.props.progress + "%", marginBottom: "15px"}} aria-valuenow="25" aria-valuemin="0"
                 aria-valuemax="100">{Math.round(this.props.progress)} %</div>
            <button className="btn btn-light" onClick={() => {this.props.run()}}>Run Without</button>
        </div>
    }

    async add_prof() {
        if(this.state.selected_prof === -1) {
            alert("You have to select a professor.");
            return;
        }
        let new_room = this.props.room;
        new_room.prof = this.state.selected_prof;
        await this.props.edit_room(this.props.room.id, new_room);
        this.componentDidMount()
    }

    async remove_prof() {
        let new_room = this.props.room;
        new_room.prof = -1;
        await this.props.edit_room(this.props.room.id, new_room);
        await this.componentDidMount()
    }

    render_prof() {
        return <div>
            <p>Equipment: {this.props.room.equipment}<br/>Capacity: {this.props.room.capacity}<br/>Professor: {this.state.prof_name}</p>
            <img className="prof-img" src={this.state.prof_img} />
            <div className="progress-bar bg-success" role="progressbar"
                 style={{width: this.props.progress + "%", marginBottom: "15px"}} aria-valuenow="25" aria-valuemin="0"
                 aria-valuemax="100">{Math.round(this.props.progress)} %</div>
            <div>
                <button className={"btn btn-light "+(this.props.progress > 0 && this.props.progress < 100 ? ("disabled") : (""))}
                        onClick={() => {this.props.run()}}>Run</button>
                <button className="btn btn-danger" style={{marginLeft: "20px"}} onClick={async () => {await this.remove_prof()}}>Remove Prof</button>
            </div>
        </div>
    }

    render_prof_options() {
        return this.state.free_profs.map((data, id) => {
            return <option key={id} value={data}>{this.get_prof_by_id(data)[0]}</option>
        })
    }


    get_prof_by_id(id) { // returns tuple (name, image)
        for(let i = 0; i < this.props.profs.length; i++) {
            if(this.props.profs[i].id === Number(id)) {
                return [this.props.profs[i].name, this.props.profs[i].img]
            }
        }
    }



}
