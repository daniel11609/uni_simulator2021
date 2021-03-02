import React from "react";

import '../../component-design/page/Settings.css';
import RoomModal from "../CGU/parts/RoomModal";

export default class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div className="Settings">
                <div className="spacer"/>
                <div class="card" style={{margin:"15px"}}>
                    <div class="card-header" > 
                        Profile administation
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Delete your profiles</h5>
                        <p class="card-text">Are you sure? All your data will be irrevocably deleted!</p>
                        <button type="button" class="btn btn-danger" onClick={()=>{this.deleteAllProfile()}}>Delete all profiles</button>
                    </div>
                    </div>

            </div>
        );
    }

    deleteAllProfile(){
        localStorage.clear();
        window.location.reload();
    }
    
    


}
