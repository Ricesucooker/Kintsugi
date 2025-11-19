import React from 'react'
import NavBar from '../components/NavBar'
import { useQuery } from '@tanstack/react-query'


export const BaseURI="http://localhost:8000/api/v1" 

const getNotes = async () =>{
    const response = await fetch(`${BaseURI}/mynote`)
    return await response.json()
}


// const getReplys = async() =>{
//     const response= await fetch(`${BaseURI}/reply/1`)
//     return await response.json()
// }


const ReplyDisplay = ({noteId}) =>{
    const getReply = async() =>{
        const response = await fetch(`${BaseURI}/replies/${noteId}`)
        return await response.json()
    };

    const {data: replyData, isLoading} =useQuery({
        queryKey:['reply', noteId],
        queryFn: getReply,
        enabled: !!noteId,
    });

    const repliesList = Array.isArray(replyData) ? replyData: [];

    if (isLoading){
        return <p className='text-sm text-gray-400 mt-2'>💬</p>
    }

    return(
        <div className='border-t border-gray-100 mt-2 pt-3'>
            <p className='text-xs font-medium'>Reply: ({repliesList.length}):</p>
                <ul className=' text-sm list-disc list-inside space-y-1 p-1'>

                    {repliesList.map((reply:any) => (
                        <ul key={reply.replyid} className='text-sm text-gray-700'>
                            <p className=' text-sm p-y-1 border '>{reply.replybody}</p>
                        </ul>
                    ))}
                </ul>
          
        </div>
    )
}


function Notes() {

    const {data} = useQuery({
        queryKey:['mynotes'],
        queryFn: getNotes});
    
    const notesLists = Array.isArray(data) ? data : [];

    // const reply = useQuery({
    //     queryKey:['myreply'],
    //     queryFn: getReplys
    // });
    
  return (
    <main>
        <NavBar/>
        <section>
            <div className='w-full p-8 m-4 '>
                <h1>Notes:</h1>
                <div className='p-4 m-2 '>
                   <div className=' flex-row m-4 p-4  overflow-hidden'>
                    <p>Data JSON</p>
                    <p>{JSON.stringify(data)}</p>
                   </div>
                   <div className='flex justify-between'>
                    {notesLists.map((data:any) =>{
                        return(
                            <ul className='box-content size-64 border-2 p-2 m-4 rounded-lg' key={data.noteid}>
                                <p className='text-lg m-2' >{data.notetitle}</p>
                                <p className='text-sm m-4'>{data.notebody}</p>
                               <ReplyDisplay noteId={data.noteid}/>
                            </ul>
                        )
                    })}
                   </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Notes
