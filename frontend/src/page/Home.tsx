import React from 'react'
import NavBar from '../components/NavBar'

function Home() {
  return (
    <main>
      <NavBar/>

    <section>
    
    <div className='w-full p-8'>

      <h1 className='font-bold text-3xl mb-4'>Welcome</h1>
      <h2 className='font-bold text-xl m-4'>Whats on your mind today?📝</h2>
      <textarea
        className='w-full p-4 border border-grey-400 rounded-lg'
        rows={5}
        placeholder='Type whats on your mind and send it away..'>
      </textarea>
      <div className='flex justify-end'>
        <button className='mt-4 px-2 font-medium rounded-lg bg-green-800 hover:bg-green-400'>
          sending..
        </button>
      </div>
      <div className='p-8 m-8'>
      <h3 className=' font-bold my-2'>Welcome to your anonymous wall on the Internet</h3>
        
        <p>This is your safe place to share thoughts, the ones you wish someone could hear but might be afraid to say aloud. Write them away!</p>
       
       <h3 className='font-bold my-2'>Keeping it Safe</h3>

        <p className='my-2'>To ensure this remains a safe and welcoming space for everyone, we need a few simple guidelines:</p>
            <ul className='p-0 m-2 text-s'>
              <li>All posts are anonymous.</li>
              <li>Please be kind when leaving replies and always respect other users.</li>
              <li>We review posts that are reported or found to be violating our community standards, and those inappropriate notes may be taken down.</li>
              <li>To manage the feed and keep things running fast, there might be a limit to how many notes are shown at once.</li>
              <li>For optimal performance, notes are permanently removed from our database 90 days after creation. We highly recommend using the upcoming export feature to save any thoughts and replies you wish to keep.</li>
            </ul>
    </div>
    </div>

    </section>
    </main>
  )
}

export default Home