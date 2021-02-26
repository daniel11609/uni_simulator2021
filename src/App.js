import './App.css';
import Navbar from "./components/navigation/Navbar"
import React from "react";
import Login from "./components/page/Login";
import Game from "./components/page/Game";
import Shop from "./components/page/Shop";
import Profs from "./components/page/Profs";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "login",
            user_name: ""
        }
    }

    change_page = async (page) => {
        await this.setState({page: page})
    }

    set_user_name = async (user_name) => {
        await this.setState({user_name: user_name, page: "game"})
    }

    render() {
        return (
            <div className="App">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
                      integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
                      crossOrigin="anonymous"/>
                <div className="container">
                    {this.state.page === "login" ? (<h1 className="display-3 login-header">Uni-Simulator 2021</h1>) : (<Navbar change_page={this.change_page} />)}
                    <div className="spacer"/>
                    {this.page_handler()}
                </div>
            </div>
        );
    }

    page_handler() {
        switch (this.state.page) {
            case "login":
                return <Login set_user_name={this.set_user_name} />;
            case "game":
                return <Game/>;
            case "shop":
                return <Shop/>;
            case "profs":
                return <Profs/>;
            default:
               return "Something unexpected has happened. Please refresh your page."
        }
    }

}
