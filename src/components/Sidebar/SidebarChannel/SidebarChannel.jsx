//------------------------------------------------------------------
// Imports Section
//------------------------------------------------------------------
import React from 'react'
import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../../../redux/slices/appSlice';
import './SidebarChannel.css';

//------------------------------------------------------------------
// Component Function Section
//------------------------------------------------------------------
const SidebarChannel = (props) => {
    const dispatch = useDispatch();

    const updateChannel = () => {
        dispatch(
            setChannelInfo({
                channelId   : props.id,
                channelName : props.name
            })
        );
    }

    return (
        <div className="sidebarChannel"
             onClick={updateChannel}
        >
            <h4>
                <span className="sidebarChannel__hash">#</span>{props.name}
            </h4>
        </div>
    )
}

export default SidebarChannel;
