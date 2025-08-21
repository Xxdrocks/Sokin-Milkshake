import React from 'react'
import Navbar from './components/Navbar'
import Hero from './section/Hero'
import ChocolateSection from './section/ChocolateSection'
import Strawberrysection from './section/Strawberrysection'
import Contact from './section/Contact'
import Banner from './components/Banner'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Banner />
      <ChocolateSection />
      <Strawberrysection />
      <Contact />
    </div>
  )
}

export default App
