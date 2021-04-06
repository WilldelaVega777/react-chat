//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import React                    from 'react'

import AddIcon                  from '@material-ui/icons/Add';
import ExpandMoreIcon           from '@material-ui/icons/ExpandMore';
import SignalCellularAltIcon    from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon         from '@material-ui/icons/InfoOutlined';
import CallIcon                 from '@material-ui/icons/Call';
import Avatar                   from '@material-ui/core/Avatar';
import MicIcon                  from '@material-ui/icons/Mic';
import HeadsetIcon              from '@material-ui/icons/Headset';
import SettingsIcon             from '@material-ui/icons/Settings';

import { useState }             from 'react';
import { useEffect }            from 'react';
import { useSelector }          from 'react-redux';
import { selectUser }           from '../../redux/slices/userSlice.js';
import { auth }                 from '../../config/firebase.config';
import db                       from '../../config/firebase.config';

import SidebarChannel           from './SidebarChannel/SidebarChannel.jsx';

import './Sidebar.css';


//-------------------------------------------------------------------------------
// Component Section
//-------------------------------------------------------------------------------
function Sidebar() {
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState();

    useEffect(() => {
        db.collection("channels").onSnapshot(snapshot => {
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data()
            })));
        });
    }, []);


    const handleAddChannel = () => {
        const channelName = prompt("Enter a new Channel Name");
        db.collection('channels').add({ channelName });
    };

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Discord</h3>
                <ExpandMoreIcon/>
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon/>
                        <h4>Text Channels</h4>
                    </div>

                    <AddIcon className="sidebar__addChannel"
                             onClick={handleAddChannel}
                    />
                </div>

                <div className="sidebar__channelsList">
                    {
                        channels?.map(({ id, channel }) =>
                            (
                                <SidebarChannel
                                    key     = { id }
                                    id      = { id }
                                    name    = { channel.channelName }
                                />
                            )
                        )
                    }
                </div>
            </div>

            <div className="sidebar__voice">
                <SignalCellularAltIcon
                    className="sidebar__voiceIcon"
                    fontSize="large"
                />

                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className="sidebar__voiceIcons">
                    <InfoOutlinedIcon/>
                    <CallIcon/>
                </div>
            </div>

            <div className="sidebar__profile">
                <Avatar src={user.photo}
                        onClick={() => auth.signOut()}
                />
                <div className="sidebar__profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>{user.uid}</p>
                </div>
                <div className="sidebar__profileIcons">
                    <MicIcon/>
                    <HeadsetIcon/>
                    <SettingsIcon/>
                </div>
            </div>


        </div>
    );
}

//-------------------------------------------------------------------------------
// Exports Section
//-------------------------------------------------------------------------------
export default Sidebar;
