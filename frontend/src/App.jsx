import { Header } from '@/components'
import { Sidebar } from '@/components'
import './App.scss'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar />
      </BrowserRouter>
    </>
  )
}

export default App
