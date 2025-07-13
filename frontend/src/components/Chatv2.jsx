import React, {useEffect, useState} from 'react'
import api from '../api'

function Chatv2() {

    const [chatHistory, setChatHistory] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const fetchChatHistory = async() => {
        try{
            const response = await api.get('/chat/get');
            setChatHistory(response.data.history || []);
        }catch(error){
            console.error("Errror fetching chat history", error);
        }
    };

    const handleSendMessage = async(userPrompt) =>{
        if (!userPrompt.trim()) return;

        try{
            setChatHistory(prevHistory => [...prevHistory,{role: 'user', parts:[userPrompt]}]);
            setNewMessage('')

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
        if(newMessage.trim()){
            handleSendMessage(newMessage);
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

                {chatHistory.map((message) =>(

                    <div className={`message-container ${message.role === 'user'? 'user': 'model'}`}>
                        <div className={`avatar-container ${message.role === 'user'? 'user':'model'}`}>
                        </div>
                        {Array.isArray(message.parts) ? newMessage.parts.join(' '):message.part}
                    </div>
                    
                ))}
            </div>

        <div className='bg-white h-28 rounded-2xl shadow-md border border-neutral-200 relative'>
            <form onSubmit={sendChat} className=' flex flex-col h-full'>
                <label htmlFor='prompt' className='sr-only'>Enter Your Message</label>
                <textarea
                    className='w-full flex-grow border-non focous:outline-non reize-none p-2'
                    id='prompt'
                    value={newMessage}
                    onChange={handleChange}
                    placeholder="Let's talk.."
                    rows='2'>
                </textarea>
                <div className='flex item-center justify-end mt-2'>
                    <button
                        type='submit'
                        className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bgblue-600 focous:ring-2 focous:ring-blue-500 focus:ring-opaacity-50'
                        >
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