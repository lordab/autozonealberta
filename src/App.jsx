import { Text } from "@chakra-ui/react"
import Navbar from './components/ui/Navbar'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
