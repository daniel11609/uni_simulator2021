import React from 'react';
import '../../../component-design/CGU/Room.css';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


export default class RoomModal extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="RoomModal">
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={"room-modal"}
                    open={this.props.open}
                    onClose={this.props.close_modal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={this.props.open}>
                        <div className="room-modal-content">
                            <h2 id="transition-modal-title">Room {this.props.room.id}</h2>
                            <p id="transition-modal-description">Hier könnte Ihre Werbung stehen!</p>
                            <div className="progress-bar bg-success" role="progressbar"
                                 style={{width: this.props.progress + "%", marginBottom: "15px"}} aria-valuenow="25" aria-valuemin="0"
                                 aria-valuemax="100">{Math.round(this.props.progress)} %</div>
                            <button className={"btn btn-primary "+(this.props.progress > 0 && this.props.progress < 100 ? ("disabled") : (""))}
                                    onClick={() => {this.props.run();}}>Run</button>
                        </div>
                    </Fade>
                </Modal>
            </div>
        );
    }





}
