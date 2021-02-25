import React from 'react';
import Prof from './Prof'
import './CGUStyle.css';
const Room = (props) => {
    
    return(
        <div className='RoomBox' >
            <progress max={props.runtime} value={props.runtime/2} ></progress>
            <p>{props.level}</p>
            <button className='UpgradeBtn'>Upgrade</button>
            <button className='RunBtn'>Run</button>
        </div>

    );
}

export default Room;