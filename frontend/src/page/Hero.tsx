import React from 'react'

export const hero = () => {
  return (
        <div className='w-full h-full p-8 '>
        <h1 className='font-bold text-3xl mb-2'>Hello,</h1>
        <h2 className='font-bold text-xl mb-8'>Whats's on your mind today?📝</h2>
        <textarea 
            className='w-full p4 border border-gray-400 rounded-lg'
            rows={5}
            placeholder='Type your mind away..'/>
            <div className='flex justify-end'>
            <button className='mt-4 px-6 py-2 font-medium rounded-lg bg-sky-500 hover:bg-sky-700'>
                Send..
            </button>
            </div>
    </div>
    )}
