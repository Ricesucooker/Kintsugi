import React, { useEffect, useState } from 'react';
import api from '../api';

function Chat() {
    const [chatHistory, setChatHistory] = useState([]);
    const [message, setMessage] = useState(''); 

    const fetchChatHistory = async () => {
        try {
            const response = await api.get('/chat/get');
            setChatHistory(response.data.history || []);
        } catch (error) {
            console.error("Error fetching chat history", error);
        }
    };

    const handleSendMessage = async (userPrompt) => {
        try {
            const response = await api.post('chat/post', { prompt: userPrompt });
            setChatHistory(response.data.history || []);

        } catch (error) {
            console.error("Error sending message", error); 
        }
    };

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const sendChat = (event) => {
        event.preventDefault();
        if (message.trim()) {
            handleSendMessage(message); 
            setMessage('');
        }
    };

    
    useEffect(() => {
        fetchChatHistory();
    }, []);

    return (
        <div>
            <p>Hello world</p>

            <div className='chat-container'>
                {chatHistory.map((msg, index) => ( 
                    <div
                        key={index}
                        className={`Message-Container ${msg.role === 'user' ? 'user' : 'model'}`}
                    >
                        <img src='#' alt='Avatar' />
                        <p>{Array.isArray(msg.parts) ? msg.parts.join(' ') : msg.part}</p>
                        <span className={`time-${msg.role === 'user' ? 'right' : 'left'}`}>
                        </span>
                    </div>
                ))}


                <form onSubmit={sendChat}>
                    <div className='input-text'>
                        <label htmlFor='prompt'> Message:</label>
                        <textarea
                            id='prompt'
                            value={message}
                            onChange={handleChange}
                            placeholder='Enter your message to Tsuki...'
                        />
                    </div>
                    <button type='submit'>Send</button> 
                </form>
            </div>
        </div>
    );
}

export default Chat;