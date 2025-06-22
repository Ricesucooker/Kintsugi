import React, {useState, useEffect, useRef} from 'react'
import Navbar from '../../components/Navbar'

function Feedback() {

    const [url, setUrl] = useState("https://docs.google.com/forms/d/e/1FAIpQLScFFzbC6cvVk070-BPFso8ZfzlURQ-7BG_leoA_ffpjRuy7-g/viewform?embedded=true");


  return (
    <>
    <Navbar />
    <div>Feedback</div>
    <div className='iframe'>
         <iframe 
         src={url} 
         width="100%" 
         height="850" 
         frameborder="0" 
         marginheight="0" 
         marginwidth="0"
         referrerPolicy="strict-origin-when-cross-origin" 
         title="Google Feedback" >Loading…</iframe>

    </div>
    </>
  )
}

export default Feedback