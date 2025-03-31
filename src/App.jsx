import { Text } from "@chakra-ui/react"
import Navbar from './components/ui/Navbar'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Admin from "./Pages/Admin"

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/admin' element={<Admin/>}/>
    </Routes>
    </>
  )
}

export default App
