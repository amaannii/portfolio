import { BrowserRouter,Routes,Route } from "react-router-dom"

import Home from "../pages/Home"
import About from "../pages/About"
import Recentproj from "../pages/Recentproj"

function Layoutroute() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/about" element={<About/>}/> 
        <Route path="/" element={<Home/>}/>
        <Route path="/project" element={<Recentproj/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default Layoutroute