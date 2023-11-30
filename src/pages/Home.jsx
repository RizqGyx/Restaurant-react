import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Restaurant from '../components/Restaurant'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Restaurant />
            <Footer />
        </>
    )
}

export default Home