import React from 'react'
import api from '../api'

function Chatv2() {

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
            <div className='bg-white h-28 rounded-2xl shadow-md border border-neutral-200 relative'>
            <div className='flex'>
                <textarea className='m-4 w-full' placeholder='Type out your thoughts here'>
                </textarea>            
                </div>
               <div className='flex items-center absolute right-2 bottom-2'> 
                icons
               </div>
            </div>
        </div>

    </div>
  )
}

export default Chatv2