import React from 'react';
import '../../../component-design/CGU/Room.css';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SpeedIcon from '@material-ui/icons/Speed';
import PeopleIcon from '@material-ui/icons/People';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';


export default class RoomModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            free_profs: [], // prof_id
            prof_name: null,
            prof_img: null,
            selected_prof: -1,
            data_loaded: false
        }
    }

    load_data() {
        this.setState({selected_prof: -1, prof_name: null, prof_img: null, free_profs: []})
        const prof_locations = this.props.get_prof_locations(); // returns array of tuples (prof_id, room_id)
        let free_profs = [];
        for(let i = 0; i < prof_locations.length; i++) {
            if(prof_locations[i][1] <= 0) {
                free_profs.push(prof_locations[i][0]);
            }
        }
        if(this.props.room.prof > 0) {
            const prof_data = this.get_prof_by_id(this.props.room.prof);
            this.setState({prof_name: prof_data[0], prof_img: prof_data[1]})
        }
        this.setState({free_profs: free_profs})
    }

     advanced_close_modal = async () => {
        this.setState({selected_prof: -1, prof_name: null, prof_img: null, free_profs: [], data_loaded: false});
        this.props.close_modal();
    }


    render() {
        if(!this.state.data_loaded) {
            if(this.props.open) {
                this.load_data()
                this.setState({data_loaded: true})
            }
        }
        return (
            <div className="RoomModal">
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={"room-modal"}
                    open={this.props.open}
                    onClose={this.advanced_close_modal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 300,
                    }}
                >
                    <Fade in={this.props.open}>
                        <div className="room-modal-content">
                            <h2 id="transition-modal-title">
                                {this.props.room.name}
                            </h2>
                            <p>
                                <SpeedIcon/><span> Equipment: <strong>{this.props.room.equipment} / 5</strong></span>
                                <span style={{marginLeft: "10px"}}></span>
                                <button className={"btn btn-primary "+(this.props.room.equipment === 5 ? ("disabled") : (""))} style={{padding: "0px 6px 0px 5px"}}
                                        onClick={async () => {await this.add_equipment()}}>+</button>
                                <br/>
                                <PeopleIcon/> Capacity: <strong>{this.props.room.capacity}</strong>
                                {this.state.prof_name ? (<span><br/><RecordVoiceOverIcon/> Teaching: <strong>{this.state.prof_name}</strong></span>) : ("")}
                            </p>
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
            <p>This room is missing a professor.</p>
            <div style={{display: "flex", marginBottom: "20px"}}>
                <select className="form-select" aria-label="Default select example" onChange={(event => {this.setState({selected_prof: event.target.value})})}>
                    <option value="" selected disabled hidden>Choose Prof</option>
                    {this.render_prof_options()}
                </select>
                <button className="btn btn-primary" onClick={(async () => {await this.add_prof()})}>Add Prof</button>
            </div>
            <div className="progress-bar bg-success" role="progressbar"
                 style={{width: Math.round(this.props.room.progress*100) + "%", marginBottom: "15px"}} aria-valuenow="25" aria-valuemin="0"
                 aria-valuemax="100">{Math.round(this.props.room.progress*100)} %</div>
            <button className={"btn btn-light "+(this.props.room.progress > 0 && this.props.room.progress < 1 ? ("disabled") : (""))} onClick={() => {this.props.run()}}>Run Without</button>
        </div>
    }

    async add_equipment() {
        const upgrade_cost = Math.pow((this.props.room.equipment+1+Math.round(Number(this.props.room.id))), 2)+20
        if(window.confirm("Do you really want to upgrade this room to level "+(this.props.room.equipment+1)+" for "+upgrade_cost+" degrees?")) {
            if(Number(this.props.load_from_storage("currencies_3").amount) < upgrade_cost) {
                alert("Not enough balance.");
                return;
            }
            let new_currency = this.props.load_from_storage("currencies_3");
            new_currency.amount = Number(new_currency.amount) - upgrade_cost
            this.props.save_to_storage("currencies_3", new_currency);
            let new_room = this.props.room;
            new_room.equipment += 1;
            new_room.running = false;
            new_room.progress = 0;
            await this.props.edit_room(this.props.room.id, new_room);
            this.load_data()
        }
    }

    async add_prof() {
        if(this.state.selected_prof === -1) {
            alert("You have to select a professor.");
            return;
        }
        let new_room = this.props.room;
        new_room.prof = this.state.selected_prof;
        new_room.running = false;
        new_room.progress = 0;
        this.props.setProf(this.state.selected_prof)
        await this.props.edit_room(this.props.room.id, new_room);
        this.load_data()
    }

    async remove_prof() {
        let new_room = this.props.room;
        new_room.prof = -1;
        new_room.running = false;
        new_room.progress = 0;
        this.props.setProf(-1)
        await this.props.edit_room(this.props.room.id, new_room);
        await this.load_data()
    }

    render_prof() {
        return <div>
            <img className="prof-img" src={this.state.prof_img} alt="" />
            <div className="progress-bar bg-success" role="progressbar"
                 style={{width: Math.round(this.props.room.progress*100) + "%", marginBottom: "15px"}} aria-valuenow="25" aria-valuemin="0"
                 aria-valuemax="100">{Math.round(this.props.room.progress*100)} %</div>
            <div className="prof-buttons">
                <button className={"btn btn-light "+(this.props.room.progress > 0 && this.props.room.progress < 1 ? ("disabled") : (""))}
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

function sleep(milliseconds) {
    let start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}
