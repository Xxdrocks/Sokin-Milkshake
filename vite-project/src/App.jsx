import React from 'react'
import Navbar from './components/Navbar'
import Hero from './section/Hero'
import ChocolateSection from './section/ChocolateSection'
import Variant from './section/Variant'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Variant />
      <ChocolateSection />
    </div>
  )
}

export default App
