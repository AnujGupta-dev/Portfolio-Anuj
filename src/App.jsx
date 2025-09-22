import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Approach from './components/Approach'
import Contact from './components/Contact'

function App() {

  return (
    <div className='w-screen overflow-x-hidden bg-[#f3ede5]'>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Approach />
      <Contact />
    </div>
  )
}

export default App
