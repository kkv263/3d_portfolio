import './styles/normalize.css'
import globals from './styles/globals.module.scss'
import Nav from './components/Nav';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const  App = () => {
  return (
    <>
    <main className={globals.main}>
      <Nav />
      <Hero />
      <Skills />
      <Projects />
    </main>
    <Footer />
    <div id="end"></div>
    </>
  )
}

export default App
