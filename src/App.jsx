import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Approach from './components/Approach'
import Contact from './components/Contact'
import JohnWick from './components/JohnWick'

function App() {

  return (
    <div className='w-screen overflow-x-hidden'>
      <JohnWick/>
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
