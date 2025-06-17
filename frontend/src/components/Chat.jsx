import React, {useEffect, useState} from 'react';
import api from '../api';
import SendingBtn from './sendingBtn';
import '../style/chat.css'

function Chat() {

    const [chatHistory, setChatHistory]=useState([]);
    const [newMessage, setNewMessage] = useState('');

const fetchChatHistory = async () =>{
    try{
        const response = await api.get('/chat/get');
        setChatHistory(response.data.history || []);

    }catch (error){
        console.error("error fetching chat history", error);
    }
};

const handleSendMessage = async(userPrompt) =>{
    try{
        const response = await api.post('chat/post',{prompt: userPrompt});
        setChatHistory(response.data.history || []);
    }catch(error){
        console.error("Error getting message", error)
    }

    const tStamp = new Date();

};
useEffect(() => {
    fetchChatHistory();
},[]);

    return (

    <div className='chat-container'>

        <div className=' message-history'>

            {chatHistory.map((message, ) => (
                <div 
                className={`message-container ${message.role === 'user' ? 'user': 'model'}`}>
                    <div className={`image ${message.role === 'user' ? 'user':'model'}`}>    <img src ='https://i.imgur.com/KhPAfjq.gif' alt='Avatar' />
                    </div>
                    <p>{Array.isArray(message.parts) ? message.parts.join(' '):message.part}</p>
                    <span className={`time-${message.role === 'user'? 'right': 'left'}`}>                        
                    </span>

                </div>
            ))}

        </div>

        <div className='sendBtn'>
        <SendingBtn onSendMessage={handleSendMessage} />
        </div>
    </div>

  );
};

export default Chat;




