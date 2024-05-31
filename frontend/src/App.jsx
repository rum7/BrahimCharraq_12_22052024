import { Header } from '@/components'
import { Sidebar } from '@/components'
import { Home } from '@/pages'
import { Dashboard } from '@/pages'
import './App.scss'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <>
        <BrowserRouter>
            <Header />
            <Sidebar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/user/:apiCheck/:userId' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
