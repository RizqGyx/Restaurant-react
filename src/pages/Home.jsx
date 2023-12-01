import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Restaurant from '../components/Restaurant'
import Footer from '../components/Footer'
import Brand from '../components/Brand'
import About from '../components/About'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Brand />
            <About />
            <Restaurant />
            <Footer />
        </>
    )
}

export default Home