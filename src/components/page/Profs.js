import React from "react";

import '../../component-design/page/Profs.css';
import ProfListing from "../Profs/ProfListing";

export default class Profs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }


    render() {
        return (
            <div className="Profs">
                <ProfListing prof={{id:0,name:"Herberto", img:"https://www.ravensburg.dhbw.de/fileadmin/Ravensburg/Bilder/Portraits_Mitarbeiter/DHBW_RV_Mitarbeiter_Judt_Andreas.jpg", pop:0,ex:2}}/>
            </div>
        );
    }


}
