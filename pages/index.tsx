import React from 'react'
import { Container } from '../components/container'
import { Navbar } from '../components/Navbar'
import { SectionHeader } from '../components/SectionHeader'
import { About } from '../sections/About'
import { Contact } from '../sections/Contact'
import { Hero } from '../sections/Hero'
import { Projects } from '../sections/Projects'
import { Skills } from '../sections/Skills'

function App() {
  return (
    <>
    <header className='w-[100vw] h-[100vh]'>
      <Navbar/>
      <Hero/>
    </header>
    <main>
      <Projects/>
    <Skills/>
      <About/>
      <Contact/>
    </main>
    </>
  )
}

export default App