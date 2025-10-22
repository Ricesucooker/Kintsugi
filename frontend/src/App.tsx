import { useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'

export const BaseURI="http://localhost:8000/api/v1" 

function App() {

  const {data} = useQuery({

    queryKey:[ 'mynotes' ],
    queryFn: getMynotes})

  return (
    <>
    <h2>Hello there</h2>
    <div>{JSON.stringify(data)}</div>
    </>
  )
}

const getMynotes = async () =>{
  const response = await fetch(`${BaseURI}/mynote`)
  return await response.json()
}

export default App
