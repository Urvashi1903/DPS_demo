import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Footer from './Footer'
import Nav from './Nav'
import Hero from './Hero'
import About from './About'
import WhatIDo from './WhatIDo'
import Skills from './Skills'
import LearningJourney from './LearningJourney'

const Portfolio = () => {

    return (
        <div className='bg-[#1E1E1E] text-[#B3B3B3] ubuntu-font overflow-hidden! m-0! scroll-smooth'>

            {/* full header */}
            {/* nav-section  */}
            <Nav />
            <div className='p-[10px] md:p-[25px]'>
                {/* hero-section */}
                <Hero />
                {/* about-section */}
                <About />
                {/* what i do-section */}
                <WhatIDo />
                {/* skills-section */}
                <Skills />

                {/* My-learning-jouney */}
                <LearningJourney />
            </div>
            {/* footer */}
            <Footer />

        </div>
    )
}

export default Portfolio
