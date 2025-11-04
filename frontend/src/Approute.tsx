import { Route, Routes} from "react-router"
import Home from './page/Home'
import Notes from './page/Notes'

function Approute() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/notes" element={<Notes/>}/>
    </Routes>
  )
}

export default Approute