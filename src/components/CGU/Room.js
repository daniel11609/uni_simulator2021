import React from 'react';
import '../../component-design/CGU/Room.css';

import Config from "../../helper/Config.js"


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
                            <p style={{textAlign: "center"}}>Room {this.props.room.id}</p>
                        </div>
                    ) : ( // unlocked - roof rooms get special css treatment
                        <div className={"unlocked-room " + (this.props.room.id === 1 ? ("roof-2nd") : (this.props.room.id < 4 ? ("roof-1st") : ("")))}>
                            <p style={{textAlign: "center"}}>Room {this.props.room.id}</p>
                            <p style={{marginTop: "30px", textAlign: "center"}}>unlocked</p>
                        </div>
                    )
                }
            </div>

        );
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
    }

    runCGU() {
        this.setState({running:true});
        let timeNeeded = Config.equipmentTime[this.state.room.equipment].time;
        this.setState({progressUpdate: Number(100/timeNeeded)});
        this.setState({runningTime: timeNeeded})
        this.startTimer();
        alert(timeNeeded)
    }

    doUpdate() {
        //do update enough money ? -> update-> write in local storage  
    }


    // <div class="progress-bar bg-success" role="progressbar" style={{width: this.state.progress+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>

}

