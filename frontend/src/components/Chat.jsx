import React, {useEffect, useState} from 'react';
import api from '../api';
import SendingBtn from './sendingBtn';

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

};
useEffect(() => {
    fetchChatHistory();
},[]);

    return (

    <div className='chat-container'>
        {chatHistory.map((message, index) => (
            <div key={index}
            className={`Message-Container ${message.role === 'user' ? 'user': 'model'}`}>
                <img src ='#' alt='Avatar' />
                <p>{Array.isArray(message.parts) ? message.parts.join(' '):message.part}</p>
                <span className={`time-${message.role === 'user'? 'right': 'left'}`}>
                    {/*time stamp logic*/}
                    {index}
                </span>
            </div>
        ))}
        <SendingBtn onSendMessage={handleSendMessage} />

</div>

  );
};

export default Chat;