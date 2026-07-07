import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Instagram, Heart, ArrowUp } from 'lucide-react'
import profileImage from '../../public/bj-logo.png'

const socialLinks = [
  { icon: Github, href: 'https://github.com/bjisadorozco', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/bjisadorozco/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/brayan_oroxco', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/brayan_oroxco/', label: 'Instagram' },
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
              <img src={profileImage} alt="Brayan Orozco" className="w-20 h-20 rounded-full" />
              <div>
                <span className="text-coffee-100 font-display font-semibold text-xl">Brayan Orozco</span>
                <p className="text-coffee-500 text-sm">Ingeniero de Sistemas & Desarrollador Full Stack</p>
              </div>
            </a>
            <p className="text-coffee-400 leading-relaxed max-w-xs">
              Especializado en desarrollo web y móvil, con experiencia en crear soluciones 
              escalables y de alta calidad para proyectos de diversa índole.
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
            © {new Date().getFullYear()} Brayan Orozco. Todos los derechos reservados.
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
