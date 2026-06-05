import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/Home/CompleteHome'
import ContactPage from './components/pages/Contact'
import MarqueeNav from './components/Home/MarqueeNav'
import HomeContactUs from './components/Home/HomeContactUs'
import StickyTopNav from './components/Home/StickyTopNav'

import Freelance from './components/pages/Freelance'
import DesigningSpaces from './components/pages/DesigningSpaces'
import FlipCard from './components/pages/FlipCard'
import FlipCard2 from './components/pages/FlipCard2'
import Portfolio from './components/pages/Portfolio/HomePage'
import UniversalNavBar from './components/pages/UniversalNavBar'
import ContactMe from './components/pages/Portfolio/ContactMePage'
import AboutMe from './components/pages/Portfolio/AboutMePage'

const App = () => {
  return (
    <div className='epilogue-font m-0!'>

      {/* <MarqueeNav />
      <StickyTopNav /> */}

      <UniversalNavBar />

      <Routes>
        {/* <Route path='/' element={<HomePage />}></Route> */}

        <Route path='/contact' element={<ContactPage />}></Route>
        <Route path='/freelance' element={<Freelance />}></Route>
        <Route path='/designing' element={<DesigningSpaces />}></Route>
        {/* <Route path='/flipcard' element={<FlipCard/>}></Route> */}
        <Route path='/flipcards' element={<FlipCard2 />}></Route>
        {/* portfolio-project */}
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/contact_me' element={<ContactMe/>}></Route>
        <Route path='/about_me' element={<AboutMe/>}></Route>
      
      </Routes>

      {/* <HomeContactUs /> */}
    </div>

  )
}

export default App

