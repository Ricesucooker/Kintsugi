import React, {useState, useEffect} from 'react';

function DateTime() {
    var [date,setDate] = useState(new Date());

    useEffect(() =>{
        var timer = setInterval(()=> setDate(new Date(new Date())), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    });

    return(

        <>
            <p>{date.toLocaleTimeString()}</p>
            
        </>
     
    )
}

export default DateTime;
