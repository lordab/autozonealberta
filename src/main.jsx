import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css'
import Home from './Pages/Home.jsx'
import Contact from './Pages/Contact.jsx'
import { ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ChakraProvider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
        </ChakraProvider>
    </StrictMode>
)
