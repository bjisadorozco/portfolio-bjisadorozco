import { motion } from 'framer-motion'
import { Code, Smartphone, Palette, Database, Search, Rocket } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Desarrollo Web',
    description: 'Creo sitios web y aplicaciones modernas, rápidas y optimizadas usando las últimas tecnologías.',
    features: ['React / Vue / Next.js', 'Sitios responsivos', 'Optimización SEO', 'Alto rendimiento'],
  },
  {
    icon: Smartphone,
    title: 'Apps Móviles',
    description: 'Desarrollo aplicaciones móviles nativas y multiplataforma para iOS y Android.',
    features: ['React Native', 'Flutter', 'UX optimizada', 'Push notifications'],
  },
  {
    icon: Palette,
    title: 'Diseño UI/UX',
    description: 'Diseño interfaces intuitivas y atractivas centradas en la experiencia del usuario.',
    features: ['Wireframes', 'Prototipos', 'Design Systems', 'Accesibilidad'],
  },
  {
    icon: Database,
    title: 'Backend & APIs',
    description: 'Construyo sistemas backend robustos, APIs RESTful y bases de datos escalables.',
    features: ['Node.js / Python', 'REST / GraphQL', 'Bases de datos', 'Autenticación'],
  },
  {
    icon: Search,
    title: 'Consultoría Tech',
    description: 'Asesoro en arquitectura de software, mejores prácticas y optimización de proyectos.',
    features: ['Code Review', 'Arquitectura', 'Mentoring', 'Best Practices'],
  },
  {
    icon: Rocket,
    title: 'Deploy & DevOps',
    description: 'Implemento CI/CD, containerización y despliegue en la nube para tu proyecto.',
    features: ['AWS / Vercel', 'Docker', 'CI/CD', 'Monitoreo'],
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-coffee-800/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-coffee-400 font-medium text-sm uppercase tracking-wider">Lo que ofrezco</span>
          <h2 className="section-title mt-3">Mis Servicios</h2>
          <p className="section-subtitle mx-auto">
            Soluciones digitales completas para llevar tu proyecto al siguiente nivel
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="card group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Gradient accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-coffee-500 to-coffee-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-coffee-600/30 to-coffee-700/30 border border-coffee-600/20 flex items-center justify-center mb-6 group-hover:from-coffee-500/40 group-hover:to-coffee-600/40 transition-all duration-300">
                <service.icon className="w-8 h-8 text-coffee-400 group-hover:text-coffee-300 transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-coffee-100 mb-3 group-hover:text-coffee-50 transition-colors">
                {service.title}
              </h3>
              <p className="text-coffee-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-coffee-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-coffee-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-coffee-300 mb-6">
            ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte.
          </p>
          <motion.a
            href="#contacto"
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar Cotización
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
