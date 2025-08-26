import React from 'react'
import Navbar from './components/Navbar'
import Hero from './section/Hero'
import ChocolateSection from './section/ChocolateSection'
import Strawberrysection from './section/Strawberrysection'
import Contact from './section/Contact'
import Banner from './components/Banner'
import MilkPreview from './Models/MilkPreview'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ChocolateSection />
      <Strawberrysection />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
