import React from 'react'
import { NavLink } from 'react-router'

function NavBar() {

    
  return (
    <nav className=' sticky top-0 p-4 w-full'>
        <div className='flex p-3  py-5 font-semibold text-base gap-8 justify-between item-center '>
        <p className=''> Website Logo</p>
        <ul className='flex gap-4 '>
            <li className=''><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='Notes'>Notes</NavLink></li>
            <li>Chat with Tsuki</li>
            <li>Feedback</li>
            
        </ul>
        </div>
    </nav>
  )
}

export default NavBar