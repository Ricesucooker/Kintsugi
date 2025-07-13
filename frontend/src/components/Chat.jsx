import React, { useEffect, useState } from 'react';
import api from '../api';

function Chat() {
    const [chatHistory, setChatHistory] = useState([]);
    const [message, setMessage] = useState(''); // Using 'message' for the input field

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
            // You might want to also append the user's message to chatHistory immediately
            // for a better UX, before the API response confirms it.
        } catch (error) {
            console.error("Error sending message", error); // Changed message for clarity
        }
    };

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const sendChat = (event) => {
        event.preventDefault();
        if (message.trim()) {
            handleSendMessage(message); // Corrected: Call handleSendMessage
            setMessage('');
        }
    };

    // Corrected: useEffect placed at the top level of the component
    useEffect(() => {
        fetchChatHistory();
    }, []);

    return (
        <div>
            <p>Hello world</p>

            <div className='chat-container'>
                {chatHistory.map((msg, index) => ( // Renamed 'message' to 'msg' to avoid confusion with component's 'message' state
                    <div
                        key={index}
                        className={`Message-Container ${msg.role === 'user' ? 'user' : 'model'}`}
                    >
                        <img src='#' alt='Avatar' />
                        <p>{Array.isArray(msg.parts) ? msg.parts.join(' ') : msg.part}</p>
                        <span className={`time-${msg.role === 'user' ? 'right' : 'left'}`}>
                            {index}
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
                    <button type='submit'>Send</button> {/* Corrected typo */}
                </form>
            </div>
        </div>
    );
}

export default Chat;