import React, {useEffect, useState} from 'react';
import api from '../api';
// import SendingBtn from './sendingBtn';
// import '../style/chat.css'

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

const [message, setMessage] = useState('');

const handleChange = (event) => {
    setMessage(event.target.value);
  };

const sendChat = (event) => {
    event.preventDefault(); 
    if (message.trim()) {
      onSendMessage(message); 
      setMessage(''); 
    };
};

    return (

    <div className='chat-container w-screen h-screen flex flex-col justify-center'>

        <div className=' message-history w-[80%] mx-auto'>
            <h1>Hello there,</h1><br/>
            <h2>How may I help you?</h2>
            <p>You can use one of the prompt below <br/> or type away...</p>

            {chatHistory.map((message, ) => (
                <div 
                className={`message-container ${message.role === 'user' ? 'user': 'model'}`}>
                    <div className={`image ${message.role === 'user' ? 'user':'model'}`}> 
                    </div>
                    <p>{Array.isArray(message.parts) ? message.parts.join(' '):message.part}</p>
                    <span className={`time-${message.role === 'user'? 'right': 'left'}`}>                        
                    </span>

                </div>
            ))}

        </div>

        <div className='sendBtn'>
             <form onSubmit={sendChat}>
        
          
             <button type='sumbit'>
             <label htmlFor='prompt'> </label>
            <textarea
            id='prompt'
            value={message}
            onChange={handleChange}
            placeholder='Enter your message to Tsuki...'
            onSendMessage={handleSendMessage}
            />
            ➤♡➤➤
             </button>

       
    </form>
        </div>
    </div>

  );
};

export default Chat;




