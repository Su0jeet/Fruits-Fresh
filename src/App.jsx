import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero/Hero'
import Fruits from './components/Fruits-price/Fruits'
import Banner from './components/Banner/Banner'
import Banner2 from './components/Banner/Banner2'
import Banner3 from './components/Banner/Banner3'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <main className=' overflow-hidden' >
        <Nav />
        <Hero />
        <Fruits />
        <Banner />
        <Banner2 />
        <Banner3 />
        <Footer />

    </main>
    
    </>
  )
}

export default App