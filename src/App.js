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
        // async game state loader:
        // load existing or generate new game state --> asynchronous, change loading to false when done so all gathered data can be rendered, else null pointer exceptions
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
                    {this.state.loading ? ( // gets shown before game state is loaded
                        <div>
                            Loading...
                        </div>
                    ) : ( // finished game state loading, entry point for actual game
                        <div>
                            {this.state.page === "login" ? ( // login page
                                <h1 className="display-3 login-header">Uni-Simulator 2021</h1>
                            ) : ( // navigation for game pages
                                <div>
                                    <img className="background-image container" src="/background/ground_and_sky.svg" />
                                    <Navbar mainstate={this.state} logout={this.logout} change_page={this.change_page} />
                                </div>
                                )
                            }
                            <div className="spacer"/>
                            {this.page_handler() /* renders selected pages*/}
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
                return <Game rooms={this.state.rooms} />;
            case "shop":
                return <Shop items={this.state.items} />;
            case "profs":
                return <Profs/>;
            case "settings":
                return <Settings/>;
            default:
               return "Something unexpected has happened. Please refresh your page.";
        }
    }

    change_page = async (page) => {
        await this.setState({page: page});
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


    // STORAGE FUNCTIONS

    save_to_storage(key, object) {
        // local storage can only store strings, so we convert the json data of the object to a string
        localStorage.setItem(this.state.user_name+"_"+key, JSON.stringify(object));
    }

    load_from_storage(key) {
        // we convert the string json data to a real object and return it
        return JSON.parse(localStorage.getItem(this.state.user_name+"_"+key));
    }

    set_user_name = async (user_name) => {
        await this.setState({user_name: user_name});
        await localStorage.setItem("user_name", user_name);

        // check if this user has been playing on this account before and was logged out:
        // for this we have a defined playing_history variable with the user_name in its name
        if(await localStorage.getItem("playing_history_"+user_name)) {
            console.log("Loading old game state...");
            await this.load_existing_game_state();
        } else { // did not find user_name in history variables
            await this.setState({
                rooms: Config.rooms,
                items: Config.items
            })
            // save initial game state to local storage and bind it to current user_name
            for(let r = 0; r < Config.rooms.length; r++) {
                await this.save_to_storage("room_"+(r+1), this.state.rooms[r]);
            }
            for(let i = 0; i < Config.items.length; i++) {
                await this.save_to_storage("item_"+(i+1), this.state.items[i]);
            }
            localStorage.setItem("playing_history_"+user_name, "true")
            await this.setState({page: "game"})
        }


    }

    async game_state_loader() {
        // check if active user_name is in local storage
        if(localStorage.getItem("user_name") && localStorage.getItem("user_name") !== "") {
            console.log("Found session...")
            await this.setState({
                page: "game",
                user_name: localStorage.getItem("user_name"),
            })
            await this.load_existing_game_state()

        } else { // did not find any entries for this *active* user_name
            await this.setState({
                page: "login",
                user_name: ""
            })
        }
    }


    async load_existing_game_state() {
        // load existing game components from local storage
        let rooms = []
        let items = []
        for(let r = 0; r < Config.rooms.length; r++) {
            await rooms.push(await this.load_from_storage("room_"+(r+1)));
        }
        for(let i = 0; i < Config.items.length; i++) {
            await items.push(await this.load_from_storage("item_"+(i+1)));
        }
        await this.setState({items: items, rooms: rooms});
    }



}
