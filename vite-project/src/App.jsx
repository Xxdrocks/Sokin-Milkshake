import React from 'react'
import Navbar from './components/Navbar'
import Hero from './section/Hero'
import ChocolateSection from './section/ChocolateSection'
import Strawberrysection from './section/Strawberrysection'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ChocolateSection />
      <Strawberrysection />
    </div>
  )
}

export default App
