import { useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import Approute from './Approute';




function App() {



  return (
    <Approute />

    // <div className='w-full h-full' id='note-section'>   
    // <h2 className='Bold text-3xl underline p-4 m4 '>Hello There</h2>
    
    // {/* <div>{JSON.stringify(data)}</div> */}

    // <h3 className='bold text-xl m-4 p-2'>Data below</h3>
    // <ul className=' m-4 py-2 '>
    //   {noteList.map((data:any) =>{
    //     return(
    //       <li className='m-2 p-2 border' key={data.noteid}><h2 className='text-lg m-2 p-2'>{data.notetitle}</h2><p className='text-sm'>{data.notebody}</p></li>
    //     )
    //   })}
    // </ul>
    // </div>
  )
}




export default App
