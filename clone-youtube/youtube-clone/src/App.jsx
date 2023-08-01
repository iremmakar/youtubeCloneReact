import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Feed from './pages/Feed'
import Header from "./components/Header"

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import VideoDetail from './pages/VideoDetail'
import SearchResult from './pages/SearchResult'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Feed />}></Route>
        <Route path='/watch/:videoId' element={<VideoDetail />}></Route>
        <Route path='/results' element={<SearchResult />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
