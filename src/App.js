import './App.css';
import Navbar from "./components/navigation/Navbar"
import React from "react";
import Login from "./components/page/Login";
import Game from "./components/page/Game";
import Shop from "./components/page/Shop";
import Profs from "./components/page/Profs";
import Settings from "./components/page/Settings";
import Config from "./helper/Config.js"

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.game_state_loader().then(() => {
            this.setState({
                loading: false,
                exit_time_update_process: setInterval(()=>this.exit_time_updater(),1000)
            })
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.exit_time_update_process);
    }


    render() {
        return (
            <div className="App">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
                      integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
                      crossOrigin="anonymous"/>
                <div className="container">
                    {this.state.loading ? (
                        <div>
                            Loading...
                        </div>
                    ) : (
                        <div>
                            {this.state.page === "login" ? (<h1 className="display-3 login-header">Uni-Simulator 2021</h1>) : (<Navbar mainstate={this.state} logout={this.logout} change_page={this.change_page} />)}
                            <div className="spacer"/>
                            {this.page_handler()}
                        </div>
                    )}
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
            case "settings":
                return <Settings/>;
            default:
               return "Something unexpected has happened. Please refresh your page.";
        }
    }

    save_to_storage(key, object) {
        localStorage.setItem(this.state.user_name+"_"+key, object);
    }

    load_from_storage(key) {
        return localStorage.getItem(this.state.user_name+"_"+key) ;
    }

    change_page = async (page) => {
        await this.setState({page: page});
    }

    set_user_name = async (user_name) => {
        await this.setState({user_name: user_name, page: "game"});
        localStorage.setItem("user_name", user_name);
    }

    logout = async () => {
        if(window.confirm("Do you really want to log out?")) {
            localStorage.setItem("user_name", "");
            window.location.href = "";
        }
    }

    exit_time_updater() {
        if(this.state.page !== "login") {
            this.save_to_storage("exit_time", Date.now());
        }
    }

    async game_state_loader() {
        if(localStorage.getItem("user_name") && localStorage.getItem("user_name") !== "") {
            console.log("Found session...")
            await this.setState({
                page: "game",
                user_name: localStorage.getItem("user_name"),
                rooms: [
                    this.load_from_storage("room_1"),
                    this.load_from_storage("room_2"),
                    this.load_from_storage("room_3"),
                    this.load_from_storage("room_4"),
                    this.load_from_storage("room_5"),
                    this.load_from_storage("room_6"),
                    this.load_from_storage("room_7"),
                    this.load_from_storage("room_8"), // TODO: schleife (manu)
                    this.load_from_storage("room_9"),
                    this.load_from_storage("room_10"),
                    this.load_from_storage("room_11"),
                    this.load_from_storage("room_12"),
                    this.load_from_storage("room_13"),
                ]
            })
        } else {
            await this.setState({
                page: "login",
                user_name: "",
                rooms: Config.rooms
            })
        }
    }

}
