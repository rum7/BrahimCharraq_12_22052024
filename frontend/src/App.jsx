import { Header } from '@/components'
import { Sidebar } from '@/components'
import { Home } from '@/pages'
import { Dashboard } from '@/pages'

import './App.scss'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


/**
 * Returns the App component handling the routing of the application
 * @function App
 * @returns {JSX.Element}
 */
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
