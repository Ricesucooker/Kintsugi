import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import ChatTsuki from './pages/Chat/ChatTsuki.jsx'
import Feedback from './pages/Feedback/Feedback.jsx'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Chat' element={<ChatTsuki />}/>
      <Route path='/Feedback' element={<Feedback />}/>
    </Routes>
    </>
    
  )
}

export default App
