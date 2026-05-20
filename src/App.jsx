import React from 'react'
import MarqueeNav from './components/MarqueeNav'
import StickyTopNav from './components/StickyTopNav'
import Home from './components/Home'
import HomeAbout from './components/HomeAbout'
import HomeContactUs from './components/HomeContactUs'

const App = () => {
  return (
    <div className='epilogue-font'>
      <MarqueeNav/>
      <StickyTopNav/>
      <Home/>
      <HomeAbout/>
      <HomeContactUs/>
      {/* animation on slide change, green border, background image */}
    </div>
  )
}

export default App
