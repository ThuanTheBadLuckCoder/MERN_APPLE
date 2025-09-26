import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './Pages/Home.jsx'
import Accessories from './Pages/Accessories.jsx'
import Airpods from './Pages/Airpods.jsx'
import Ipad from './Pages/Ipad.jsx'
import Iphone from './Pages/Iphone.jsx'
import Mac from './Pages/Mac.jsx'
import Services from './Pages/Services.jsx'
import Support from './Pages/Support.jsx'
import TVHome from './Pages/TVHome.jsx'
import Watch from './Pages/Watch.jsx'
import Header from './Components/Header.jsx'
import './App.css'
import Store from './Pages/Store.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/airpods" element={<Airpods />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/services" element={<Services />} />
        <Route path="/support" element={<Support />} />
        <Route path="/tvhome" element={<TVHome />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
