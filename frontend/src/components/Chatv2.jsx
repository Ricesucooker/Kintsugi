import React, {useEffect, useState} from 'react'
import api from '../api'

function Chatv2() {

    const [chatHistory, setChatHistory]=useState([]);
    const [newMessage, setNewMessage]=useState('');

    const fetchChatHistory = async() => {
        try{
            const response = await api.get('/chat/get');
            setChatHistory(response.data.history || []);
        }catch(error){
            console.error("Errror fetching chat history", error);
        }
    };

    const handleSendMessage = async(userPrompt) =>{
        try{
            const response = await api.post('chat/post',{prompt : userPrompt});
            setChatHistory(response.data.history || []);
        }catch(error){
            console.error("error sending message", error)
        }
    };

    useEffect(() => {
        fetchChatHistory();
    },[]);

    const handleChange = (event) =>{
        setNewMessage(event.target.value);
    };

    const sendChat = (event) =>{
        event.preventDefault();
        if(MessageEvent.trim()){
            onSendMessage(message);
            setNewMessage('');
        };
    };

  return (
    <div className='w-screen h-screen flex flex-col justify-center '>

        <div className='w-[80%] max-w-2xl mx-auto'>
            <h1 className='text-5xl'>Hello there,</h1>
            <br/><h1 className='text-3xl'>How can I help you?</h1>
            <p>To get started you can use one of the prompts below to begin</p>
            
            <div className='flex w-full mb-5 gap-3 text-sm mt-5'>
               <div className=' group'>Help me with reason 1</div>
               <div className=' group'>Help me with reason 2</div>
               <div className=' group'>Help me with reason 3</div>
            </div>

            <div className='w-full mb-5 text-m'>

                {chatHistory.map((message ) =>(
                    <div className={`message-container ${message.role === 'user'? 'user': 'model'}`}>
                        <div className={`avatar-container ${message.role === 'user'? 'user':'model'}`}>
                        </div>
                        {Array.isArray(message.parts) ? newMessage.parts.join(' '):message.part}
                    </div>
                ))}
            </div>

        <div className='bg-white h-28 rounded-2xl shadow-md border border-neutral-200 relative'>
            
            <div className='flex'>
                <form onSubmit={sendChat}>
                <label htmlFor='prmpt'></label>
                <textarea
                className='w-full'
                id='prompt'
                value={newMessage}
                onChange={handleChange}
                onSendMessage={handleSendMessage}
                placeholder='Lets talk...'>
                </textarea>
                </form>
                </div>
            <div className='flex items-center absolute right-2 bottom-2'> 
                <button
                type='submit'
                onClick={sendChat}
                className='px-2 py-2 bg-blue-500 text-white rounded-md'>
                    send
                </button>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Chatv2