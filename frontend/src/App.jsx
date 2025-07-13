import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import ChatTsuki from './pages/Chat/ChatTsuki.jsx'
import Feedback from './pages/Feedback/Feedback.jsx'
import TalkV1 from './pages/Chat/TalkV1.jsx'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Chat' element={<ChatTsuki />}/>
      <Route path='/Feedback' element={<Feedback />}/>
      <Route path='/TalkV1' element={<TalkV1 />}/>
    </Routes>
    </>
    
  )
}

export default App
