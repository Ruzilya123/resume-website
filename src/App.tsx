import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import './App.css'

function App() {
  return (
    <>
      <div className="aurora" aria-hidden="true">
        <span className="aurora__blob aurora__blob--one" />
        <span className="aurora__blob aurora__blob--two" />
        <span className="aurora__blob aurora__blob--three" />
      </div>

      <main className="page">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
      </main>

      <Contact />
    </>
  )
}

export default App
