import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Gerenciar from './pages/Gerenciar.jsx'
import Emprestar from './pages/Emprestar.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gerenciar' element={<Gerenciar />} />
        <Route path='/emprestar' element={<Emprestar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
