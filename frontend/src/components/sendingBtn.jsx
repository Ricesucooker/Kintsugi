import React,{useState} from 'react'



function SendingBtn({onSendMessage}) {
    const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const sendChat = (event) => {
    event.preventDefault(); 
    if (message.trim()) {
      onSendMessage(message); 
      setMessage(''); 
    }
  };

  return (
    <form onSubmit={sendChat}>
        
          
             <button type='sumbit'>
             <label htmlFor='prompt'> </label>
            <textarea
            id='prompt'
            value={message}
            onChange={handleChange}
            placeholder='Enter your message to Tsuki...'
            />
            ➤♡➤➤
             </button>

       
    </form>
  );
}

export default SendingBtn;