import React, {useEffect, useState, useRef} from 'react'
import api from '../api'

function Chatv2() {


    const [chatHistory, setChatHistory] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const chatHistoryRef = useRef(null);

    const fetchChatHistory = async() => {
        try{
            const response = await api.get('/chat/get');
            setChatHistory(response.data.history || []);
        }catch(error){
            console.error("Errror fetching chat history", error);
        }
    };

    const handleSendMessage = async (userPrompt) =>{
        if (!userPrompt.trim()) return;
         setNewMessage('');

        try{
            const response = await api.post('chat/post', {prompt: userPrompt});
            setChatHistory(response.data.history || []);
        }catch(error){
            console.error("error with message", error, response.data);
        }
    };

    useEffect(() => {
        fetchChatHistory();
    },[]);

    useEffect(() =>{
        if(chatHistoryRef.current){
            chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
        }
    },[chatHistory]);

    const handleChange = (event) =>{
        setNewMessage(event.target.value);
    };

    const sendChat = (event) =>{
        event.preventDefault();
        if(newMessage.trim()){
            handleSendMessage(newMessage);
        };
    };


  return (
    <div className='w-screen h-[600px] overflow-scroll flex flex-col justify-center items-center '>

        <div className='w-[80%] max-w-2xl flex flex-col flex-grow'>

          {chatHistory.length === 0 &&(
            <div className='title-message mb-5'>
            <h1 className='text-5xl'>Hello there,</h1>
            <br/><h1 className='text-3xl'>How can I help you?</h1>
            <p>To get started you can use one of the prompts below to begin</p>
            
            <div className='flex w-full gap-3 text-sm mt-5'>
               <div className=' group'>Help me with reason 1</div>
               <div className=' group'>Help me with reason 2</div>
               <div className=' group'>Help me with reason 3</div>
            </div>
            </div>
            )}

            <div ref={chatHistoryRef} className='flex-grow overflow-y-auto flex flex-col gap-2.5 p-4 rounded-lg bg-gray-50 mb-4'>
                {chatHistory.length > 0 ? (
                    chatHistory.map((msg, index) => (

                    <div key={index} 
                    className={`message-container ${msg.role === 'user'? 'user': 'model'} mb-2 p-2 rounded-lg `}>
                        <div className={`avatar-container ${msg.role === 'user'? 'user-avatar':'model-avatar'} w-10 h-10 rounded-full bg-gray-300 mr-2 inline-flex items-center`}>
                            {msg.role === 'user'? 'Me:':'Tsuki:'}
                        </div>
                        <span className='flex flex-col p-4 border-gray-200 rounded-e-xl rounded-es-xl'>
                            <p className='text-small'>{Array.isArray(msg.parts) ? msg.parts.join(' ') : msg.part || ''}</p>
                        </span>
                    </div>

                ))
                    ) : (
                        chatHistory.length === 0 && ( 
                            <div className='flex items-center justify-center text-gray-500 overflow-hidden w-full h-50'>
                            </div>
                        )
                    )}
                </div>

        <div className='bg-white h-28 rounded-2xl shadow-md border border-neutral-200 relative'>
            <form onSubmit={sendChat} className=' flex flex-col'>
                <label htmlFor='prompt' className='sr-only'>Enter Your Message</label>
                <textarea
                    className='w-full flex-grow border-none focus:outline-none resize-none p-2'
                    id='prompt'
                    value={newMessage}
                    onChange={handleChange}
                    placeholder="Let's talk.."
                    rows='2'>
                </textarea>
                <div className='flex item-center justify-end mt-2'>
                    <button
                        type='submit'
                        className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>
                            Send
                        </button>

                </div>
            </form>
        </div>

    </div>
    </div>
  )
}

export default Chatv2