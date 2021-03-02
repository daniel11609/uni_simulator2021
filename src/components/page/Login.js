import React from "react";

import '../../component-design/page/Login.css';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_name: "",
            error: " "
        }
    }

    async login() { 
        if(this.state.error.length === 0) {
            await this.props.set_user_name(this.state.user_name);
        }
    }

    async name_change(name) {
        if(name.length < 3) {
            await this.setState({user_name: name, error: "Your username has to be longer than 3 characters."})
        } else if(name.length > 20) {
            await this.setState({user_name: name, error: "Your username cannot be longer than 20 characters."})
        } else {
            await this.setState({user_name: name, error: ""})
        }
    }


    render() {
        return (
            <div className="Login">
                <div className="login-error">{this.state.error}</div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                           aria-describedby="basic-addon1" onChange={async event => {await this.name_change(event.target.value)}}/>
                </div>
                <button type="button" className="btn btn-success btn-play" onClick={async () => {await this.login()}} disabled={this.state.error.length !== 0}>Play</button>
            </div>
        );
    }


}
