import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import MouseGlow from './components/MouseGlow'
import ScrollProgress from './components/ScrollProgress'
import useScrollAnimation from './hooks/useScrollAnimation'

function App() {
  useScrollAnimation()

  return (
    <div className="app">
      <CustomCursor />
      <MouseGlow />
      <ScrollProgress />
      <div className="noise-overlay" />
      <div className="bg-grid" />
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
