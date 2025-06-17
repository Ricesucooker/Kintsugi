import {Route, Routes} from 'react-router-dom'
import './style/App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home/Home.jsx'
import Chat from './pages/Chat/Chat.jsx'
import Feedback from './pages/Feedback/Feedback.jsx'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Chat' element={<Chat />}/>
      <Route path='/Feedback' element={<Feedback />}/>
    </Routes>
    </>
    
  )
}

export default App
