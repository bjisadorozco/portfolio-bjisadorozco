import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, MailCheck, Twitter } from 'lucide-react'
import profileImage from '../../public/profile.jpg'

const roles = ['Ingeniero de Sistemas', 'Desarrollador Full Stack', 'Freelancer']

const stats = [
  { label: 'Experiencia', value: '3+', sublabel: 'Años' },
  { label: 'Especialidad', value: 'Full Stack', sublabel: 'Web & Mobile' },
  { label: 'Tecnologías', value: '10+', sublabel: 'Herramientas y frameworks' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/bjisadorozco', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/bjisadorozco/', label: 'LinkedIn' },
  { icon: MailCheck, href: 'mailto:brayanorozco920@gmail.com', label: 'Email' },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, roleIndex])

  return (
    <section id="inicio" className="min-h-screen relative overflow-hidden flex items-center mt12">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-coffee-900 via-coffee-800 to-coffee-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-coffee-700/20 via-transparent to-transparent" />
      
      {/* Animated background circles */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-coffee-600/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 bg-coffee-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >

            {/* Name */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-coffee-100 text-5xl">Hola, soy</span>
              <br />
              <span className="gradient-text text-4xl">Brayan Jisad Orozco Varela</span>
            </motion.h1>

            {/* Role with typing effect */}
            <motion.p 
              className="text-coffee-400 font-medium text-lg mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-coffee-300">{displayedText}</span>
              <span className="animate-pulse text-coffee-400">|</span>
            </motion.p>

            {/* Description */}
            <motion.p
             className="text-coffee-300 text-lg max-w-lg mb-8 leading-relaxed text-justify lg:text-left"
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Transformo ideas complejas en experiencias digitales excepcionales. Creo aplicaciones web modernas, responsivas y optimizadas que impulsan el crecimiento de tu negocio. También desarrollo aplicaciones móviles eficientes y escalables, diseñadas para ofrecer experiencias ágiles, intuitivas y centradas en el usuario.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#proyectos"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Proyectos
              </motion.a>
              <motion.a
                href="#contacto"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contactar
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 rounded-full bg-coffee-800/50 border border-coffee-700 flex items-center justify-center text-coffee-400 hover:text-coffee-100 hover:bg-coffee-700 hover:border-coffee-500 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image & Stats */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Profile Image Container */}
            <div className="relative mx-auto w-72 sm:w-80 lg:w-100">
              {/* Decorative ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-coffee-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Image container with gradient border */}
              <div className="relative p-2 bg-gradient-to-br from-coffee-400 via-coffee-500 to-coffee-600 rounded-full">
                <div className="bg-coffee-800 rounded-full p-1">
                  <div className="w-full aspect-square rounded-full bg-gradient-to-br from-coffee-700 to-coffee-800 flex items-center justify-center overflow-hidden">
                    {/* Placeholder Avatar */}
                    <div className="w-full h-full bg-gradient-to-br from-coffee-600 to-coffee-700 flex items-center justify-center">
                      {/* <span className="text-8xl text-coffee-400 font-display font-bold">TN</span> */}
                      <img  
                        src={profileImage}
                        alt="Foto de perfil"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              {stats.map((stat, index) => {
                const positions = [
                  'top-2 -left-4 sm:-left-8',
                  'top-1/2 -right-4 sm:-right-16 -translate-y-1/2',
                  'bottom-2 -left-4 sm:-left-20'
                ]
                return (
                  <motion.div
                    key={stat.label}
                    className={`absolute ${positions[index]} card px-4 py-3 sm:px-6 sm:py-4`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      y: [0, -55, 0]
                    }}
                    transition={{ 
                      delay: 0.8 + index * 0.2,
                      y: { duration: 5 + index * 0.5, repeat: Infinity, ease: 'easeInOut' }
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-coffee-400 text-xs sm:text-sm">{stat.label}</p>
                    <p className="text-coffee-100 text-xl sm:text-2xl font-bold">{stat.value}</p>
                    <p className="text-coffee-500 text-xs">{stat.sublabel}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#sobre-mi" className="flex flex-col items-center text-coffee-400 hover:text-coffee-300 transition-colors" aria-label="Scroll to about section">
            <span className="text-lg font-bold mb-2">Scroll</span>
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
