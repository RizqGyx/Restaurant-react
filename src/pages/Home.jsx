import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Restaurant from '../components/Restaurant'
import Footer from '../components/Footer'
import Brand from '../components/Brand'
import About from '../components/About'
import Book from '../components/Book'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Brand />
            <About />
            <Restaurant />
            <Book />
            <Footer />
        </>
    )
}

export default Home