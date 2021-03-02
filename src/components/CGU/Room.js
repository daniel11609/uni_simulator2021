import React from 'react';
import '../../component-design/CGU/Room.css';

import Config from "../../helper/Config.js"
import RoomModal from "./parts/RoomModal";


export default class Room extends React.Component {

    constructor(props) {
        super(props);
        // room: {id: 13, locked: true, name: "da hood", "equipment": 0, capacity: 20, prof: -1}
        this.state = {
            reward: "",
            background: "",
            running: false,
            runningTime: 0,
            progress: 0,
            progressUpdate: 0,
            modal_open: false
        }
    }

    componentDidMount() {
        if((!this.props.room.locked) && (this.props.room.prof > -1)) {
            this.runCGU();
        }
    }

    componentWillUnmount() {
        clearInterval(this.ticker);
    }



    render() {
        return(
            <div className='Room' >
                {
                    this.props.room.locked ? (  // locked
                        <div className="locked-room">
                            <img className="locked-room locked-img" src="/misc/locked_room.svg" />
                            <p style={{textAlign: "center", fontWeight: "500"}}>Room {this.props.room.id}</p>
                        </div>
                    ) : ( // unlocked - roof rooms get special css treatment
                        <div id={this.props.room.id} className={"unlocked-room " + (this.props.room.id === 1 ? ("roof-2nd") : (this.props.room.id < 4 ? ("roof-1st") : ("")))}
                        onClick={event => {this.onRoomClick(event); }}>
                            <img className='unlocked-img' src={this.getRoomImage(this.props.room.id, this.props.room.purchased)} alt=""/>
                            <p style={{textAlign: "center", fontWeight: "500"}}>
                                Room {this.props.room.id}
                                <span style={{color: "RGB(3, 223, 252)", fontWeight: "700"}}>{this.state.progress > 0 ? (" - "+Math.round(this.state.progress)+"%") : ("")}</span>
                            </p>
                            <RoomModal open={this.state.modal_open} run={this.runCGU} progress={this.state.progress}
                                       close_modal={this.close_modal} room={this.props.room} />
                        </div>
                    )
                }
            </div>

        );
    }

    onRoomClick(event) {
        if(!this.state.modal_open) {
            const id = event.currentTarget.id;
            this.setState({modal_open: true});
        }
    }

    close_modal = () => {
        this.setState({modal_open: false})
    }

    getRoomImage(id=1, purchased=false) {
        //Returns the Image Corresponding to the Room state and id
        let subjects = ['Biology', 'Computer_Science', 'Chemistry', 'Literature', 'Law', 'Maths', 'Mech_Engineering', 'Music', 'Sports', 'Geography', 'Elec_Engineering', 'Art'];
        let path = 'Rooms/'
        if(purchased){
            path += 'Color/'
        }else{
            path += 'BW/'
        }
        path += subjects[id-1] + '.svg'
        return path
    }

    startTimer() {
        this.ticker = setInterval(()=>this.tick(),1000);
    }

    tick() {
        let timeNeeded= this.state.runningTime;
        let progress= this.state.progress
        this.setState({runningTime: timeNeeded-1, progress: progress+this.state.progressUpdate})
        if((timeNeeded-1) === 0) {
            //RoomCalc.calcRoom();
            // TODO: update money

            if(this.state.prof === -1){
                this.setState({running: false, progress: 0, progressUpdate: 0})
                clearInterval(this.ticker);
            }
        }
        if(progress >= 100){
            this.setState({running: false, progress: 0, progressUpdate: 0})
            clearInterval(this.ticker);
        }
    }

    runCGU = () => {
        this.setState({running: true});
        let timeNeeded = Config.equipmentTime[this.props.room.equipment].time;
        this.setState({progressUpdate: Number(100/timeNeeded)});
        this.setState({runningTime: timeNeeded})
        this.startTimer();
    }

    doUpdate() {
        //do update enough money ? -> update-> write in local storage  
    }


    // <div class="progress-bar bg-success" role="progressbar" style={{width: this.state.progress+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>

}

