import React from 'react';
import '../../component-design/CGU/Room.css';

import Config from "../../helper/Config.js"
import RoomModal from "./parts/RoomModal";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import RoomCalc from "../../helper/RoomCalc"
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

    }

    componentWillUnmount() {
        clearInterval(this.ticker);
    }

    setProf = async(prof_id) =>
    {
        this.setState({prof_id:prof_id})
    }

    buyRoom()
    {
        let user_name = localStorage.getItem("user_name");
        let degrees = JSON.parse(localStorage.getItem(user_name+"_currencies_3"));
        if(degrees.amount<this.props.room.price)
        {
            alert("You need more Degrees to buy a new room")
            return;
        }
        else{
            let money_new = {id:3,name:"degree",amount:degrees.amount-this.props.room.price};
            localStorage.setItem(user_name+"_currencies_3",JSON.stringify(money_new));
            let room = JSON.parse(localStorage.getItem(user_name+"_room_"+this.props.room.id));
            room.locked = false;
            console.log(room)
            localStorage.setItem(user_name+"_room_"+this.props.room.id,JSON.stringify(room));
            window.location.reload();
        }

    }

    render() {
        return(
            <div className='Room' >
                {
                    this.props.room.locked ? (  // locked
                        <div className="locked-room" onClick={()=>{this.buyRoom()}}>
                            <img className="locked-room locked-img" src="/misc/locked_room.svg" />
                            <div style={{position: "absolute"}}>
                                <div style={{fontWeight: "700"}}>
                                    {this.props.room.name}
                                </div>
                                <div>
                                    <span className="badge bg-secondary">{this.props.room.price} <AssignmentTurnedInIcon/></span>
                                </div>
                            </div>
                        </div>
                    ) : ( // unlocked - roof rooms get special css treatment
                        <div id={this.props.room.id} className={"unlocked-room " + (this.props.room.id === 1 ? ("roof-2nd") : (this.props.room.id < 4 ? ("roof-1st") : ("")))}
                        onClick={event => {this.onRoomClick(event); }}>
                            <img className='unlocked-img' src={this.getRoomImage(this.props.room.id, this.props.room.purchased)} alt=""/>
                            <p style={{textAlign: "center", fontWeight: "500"}}>
                                {this.props.room.name}
                                <span style={{color: "RGB(3, 223, 252)", fontWeight: "700"}}>{this.state.progress > 0 ? (" - "+Math.round(this.state.progress)+"%") : ("")}</span>
                            </p>
                            <RoomModal setProf={this.setProf} open={this.state.modal_open} run={this.runCGU} progress={this.state.progress}
                                       close_modal={this.close_modal} room={this.props.room} profs={this.props.profs}
                                       edit_room={this.props.edit_room} get_prof_locations={this.props.get_prof_locations}
                                       save_to_storage={this.props.save_to_storage} load_from_storage={this.props.load_from_storage}/>
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
        let subjects = ['Biology', 'Computer_Science', 'Chemistry', 'Literature', 'Law', 'Maths', 'Mech_Engineering', 'Music', 'Sports', 'History', 'Geography', 'Elec_Engineering', 'Art'];
        let path = 'Rooms/Color/'
        /*if(purchased){
            path += 'Color/'
        }else{
            path += 'BW/'
        }*/
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
        if(((timeNeeded-1) === 0)||(progress >= 100) ){
           
            let room = {id: this.props.room.id,capacity:this.props.room.capacity};
            let prof= null;
            if(this.props.room.prof>-1)
            {
                let profstats = Config.profs[this.props.room.prof-1];
                console.log(profstats)
                 prof = {id : profstats.id, pop: profstats.pop, ex: profstats.ex}
            }
            let stats = this.calcRoom(room,prof);
            console.log(stats);
            console.log(prof);
            // TODO: update money
            let user_name = localStorage.getItem("user_name");
            let student = JSON.parse(localStorage.getItem(user_name+"_currencies_1"));
            let exmat = JSON.parse(localStorage.getItem(user_name+"_currencies_2"));
            let degree = JSON.parse(localStorage.getItem(user_name+"_currencies_3"));
            student.amount= student.amount + stats.studentAmount;
            exmat.amount = exmat.amount + stats.exmatriculations;
            degree.amount = degree.amount + stats.degrees;

            localStorage.setItem(user_name+"_currencies_1",JSON.stringify(student));
            localStorage.setItem(user_name+"_currencies_2",JSON.stringify(exmat));
            localStorage.setItem(user_name+"_currencies_3",JSON.stringify(degree));

            if(this.props.room.prof === -1){
                this.setState({running: false, progress: 0, progressUpdate: 0})
                clearInterval(this.ticker);
            }
            if(this.props.room.prof>-1){
                this.setState({running: false, progress: 0, progressUpdate: 0})
                this.runCGU();
            }
        }
        
        
    }

    runCGU = () => {
        this.setState({running: true});
        let timeNeeded = Config.equipmentTime[this.props.room.equipment].time/1000;
        this.setState({progressUpdate: Number(100/timeNeeded)});
        this.setState({runningTime: timeNeeded})
        this.startTimer();
    }

    doUpdate() {
        //do update enough money ? -> update-> write in local storage  
    }
    calcRoom(room, prof) 
    {
        /**
         * room:{ id:0,
         * capacity:20
         * }
         * prof:{
         * id:0,
         * popularity:0.5,
         * exmatric:0.5
         * }
         * 
         */
        let pop;
        let ex;
        if(prof===null)
        {
             pop = 0.5;
             ex = 0.5; 
        }
        else
        {
             pop = prof.pop;
             ex = prof.ex;
        }
        let capacity = room.capacity;
        let students = Math.round(pop*capacity+0.5);
        let exmatric = Math.round(students*ex-0.5); 
        let degrees = students-exmatric;
        return {
            id: room.id,
            capacity: capacity,
            studentAmount: students,
            exmatriculations: exmatric,
            degrees: degrees,
        }       
    }

    // <div class="progress-bar bg-success" role="progressbar" style={{width: this.state.progress+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>

}

