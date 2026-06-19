import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Instagram, Heart, ArrowUp } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

const footerLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre mí', href: '#sobre-mi' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-coffee-900 border-t border-coffee-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#inicio" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-coffee-400 to-coffee-600 rounded-lg flex items-center justify-center">
                <span className="text-coffee-900 font-bold text-xl">P</span>
              </div>
              <span className="text-coffee-100 font-display font-semibold text-xl">Portfolio</span>
            </a>
            <p className="text-coffee-400 leading-relaxed max-w-xs">
              Desarrollador Full Stack apasionado por crear experiencias digitales 
              excepcionales y soluciones innovadoras.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-coffee-100 font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-coffee-400 hover:text-coffee-200 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-coffee-100 font-semibold mb-4">Sígueme</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-coffee-800 border border-coffee-700 flex items-center justify-center text-coffee-400 hover:text-coffee-100 hover:bg-coffee-700 hover:border-coffee-500 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-coffee-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-coffee-500 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Portfolio. Hecho con 
            <Heart className="w-4 h-4 text-coffee-400 fill-coffee-400" />
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-coffee-800 border border-coffee-700 flex items-center justify-center text-coffee-400 hover:text-coffee-100 hover:bg-coffee-700 transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            aria-label="Volver arriba"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
