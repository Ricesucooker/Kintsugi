import { useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'

export const BaseURI="http://localhost:8000/api/v1" 


function App() {

  const {data} = useQuery({

    queryKey:[ 'mynotes' ],
    queryFn: getMynotes});


    const noteList = data || [];


  return (
    <>
    <h2>Hello there</h2>
    <div>{JSON.stringify(data)}</div>

    <h3>Data below</h3>
    <ul>
      {noteList.map((data:any) =>{
        return(
          <li className='' key={data.noteid}><h2 className='text-lg'>{data.notetitle}</h2><p>{data.notebody}</p></li>
        )
      })}
    </ul>

    </>
  )
}

const getMynotes = async () =>{
  const response = await fetch(`${BaseURI}/mynote`)
  return await response.json()
}

export default App
