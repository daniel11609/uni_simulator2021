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
                <ProfListing prof={this.props.profs} displayInShop={false}/>
            </div>
        );
    }


}
