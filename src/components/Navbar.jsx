import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import profileImage from '../../public/bjisadorozco.png'

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre mí', href: '#sobre-mi' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Experiencia', href: '#experiencia' },
  // { name: 'Testimonios', href: '#testimonios' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const target = document.querySelector(href)
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-coffee-900/95 backdrop-blur-md shadow-lg shadow-coffee-900/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#inicio"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            {/* <div className="w-10 h-10 bg-gradient-to-br from-coffee-400 to-coffee-600 rounded-lg flex items-center justify-center">
              <span className="text-coffee-900 font-bold text-xl">P</span>
            </div> */}
            {/* <span className="text-coffee-100 font-display font-semibold text-xl hidden sm:block">
              Brayan Orozco
            </span> */}
            <img src={profileImage} alt="Profile" className="w-44 h-12 rounded-full" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-2 text-coffee-300 hover:text-coffee-100 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-coffee-400 transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]" />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-coffee-300 hover:text-coffee-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-coffee-800/95 backdrop-blur-md border-t border-coffee-700"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-4 py-3 text-coffee-200 hover:text-coffee-100 hover:bg-coffee-700/50 rounded-lg transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
