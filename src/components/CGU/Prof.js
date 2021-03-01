import React from 'react';

export default class Prof extends React.Component {
    
        constructor(props) {
            super(props);
            this.state = {
                name:this.props.name,
                id:this.props.id,
                popularity:this.props.popularity, 
                exmatric:this.props.exmatric,
                svg:this.props.svg,
            }
        }
    

    render() {
        return (
            <div>
                <img className="prof-img" id={this.state.id} alt={"prof_"+this.state.name} src={this.state.svg}
                onClick={""}
                />
            </div>
        )
    }

}
