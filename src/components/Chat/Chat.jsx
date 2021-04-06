//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import React                    from 'react'

import AddCircleIcon            from "@material-ui/icons/AddCircle";
import CardGiftcardIcon         from "@material-ui/icons/CardGiftcard";
import GifIcon                  from "@material-ui/icons/Gif";
import EmojiEmotionsIcon        from "@material-ui/icons/EmojiEmotions";
import ChatHeader               from "./ChatHeader/ChatHeader.jsx";
import Message                  from "./Message/Message.jsx";

import { useState }             from 'react';
import { useEffect }            from 'react';
import { useSelector }          from "react-redux";
import { selectUser }           from "../../redux/slices/userSlice";
import { selectChannelId }      from "../../redux/slices/appSlice";
import { selectChannelName }    from "../../redux/slices/appSlice";

import db                       from '../../config/firebase.config';
import firebase                 from 'firebase';

import "./Chat.css";


//-------------------------------------------------------------------------------
// Component Section
//-------------------------------------------------------------------------------
function Chat()
{
    const user                      = useSelector(selectUser);
    const channelId                 = useSelector(selectChannelId);
    const channelName               = useSelector(selectChannelName);
    const [input, setInput]         = useState("");
    const [messages, setMessages]   = useState([]);

    useEffect(() => {
        if (channelId)
        {
            db.collection('channels')
                .doc(channelId)
                .collection('messages')
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) => {
                    setMessages(snapshot.docs.map((doc) => doc.data()));
                }
            );
        }
    }, [channelId]);

    const sendMessage = (e) => {
        e.preventDefault();

        db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .add({
            timestamp   : firebase.firestore.FieldValue.serverTimestamp,
            message     : input,
            user        : user
        });
        setInput("");
    };


    return (
        <div className="chat">
            <ChatHeader channelName={ channelName }/>

            <div className="chat__messages">
                {
                    messages.map(message => (
                        <Message
                            user = { message.user }
                            message = { message.message }
                            timestamp = { message.timestamp }
                        />
                    ))
                }
            </div>

            <div className="chat__input">
                <AddCircleIcon fontSize="large"/>
                <form>
                    <input  value={input}
                            disabled={!channelId}
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                            placeholder={`Message #${channelName}`}
                    />
                    <button className="chat__inputButton"
                            disabled={!channelId}
                            onClick={sendMessage}
                            type="submit"
                    >
                        Send Message
                    </button>
                </form>

                <div className="chat__inputIcons">
                    <CardGiftcardIcon fontSize="large"/>
                    <GifIcon fontSize="large"/>
                    <EmojiEmotionsIcon fontSize="large"/>
                </div>
            </div>
        </div>
    )
}

//-------------------------------------------------------------------------------
// Exports Section
//-------------------------------------------------------------------------------
export default Chat
