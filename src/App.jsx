import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Services from './components/Services.jsx'
import Experience from './components/Experience.jsx'
// import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen bg-coffee-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Experience />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
