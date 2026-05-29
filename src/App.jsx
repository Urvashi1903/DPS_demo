import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/Home/CompleteHome'
import ContactPage from './components/Contact/Contact'
import MarqueeNav from './components/Home/MarqueeNav'
import HomeContactUs from './components/Home/HomeContactUs'
import StickyTopNav from './components/Home/StickyTopNav'

import Freelance from './components/pages/Freelance'

const App = () => {
  return (
    <div className='epilogue-font'>
      <MarqueeNav />
      <StickyTopNav />

      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
        <Route path='/freelance' element={<Freelance/>}></Route>
      </Routes>

      <HomeContactUs />
    </div>
  )
}

export default App

