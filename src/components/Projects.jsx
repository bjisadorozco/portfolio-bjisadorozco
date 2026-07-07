import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import imgTecnokng from "../../public/projects/tecnokng.jpeg"
import imgStaff from "../../public/projects/staff.jpeg"
import imgPrestApp from "../../public/projects/prestApp.jpg"

const projects = [
  {
    id: 1,
    title: 'TecnoKnG – Ecommerce + Panel Administrativo',
    category: 'Full Stack',
    description: 'Plataforma web para la venta de productos tecnológicos y servicios de reparación, con tienda online y panel de administración.',
    fullDescription: 'Plataforma web con tienda online y panel administrativo. Incluye CRUD de productos, categorías y marcas, carrito de compras con persistencia, gestión de pedidos e inventario, y arquitectura modular con Context API. Desplegada en producción con Next.js.',
    image: imgTecnokng,
    tags: ['React JS', 'Next.js 14', 'TypeScript', 'TailwindCSS', 'Firebase', 'Firestore'],
    liveUrl: 'https://tecnokng.com/',
    githubUrl: 'https://github.com/bjisadorozco/TecnoKnG-LandingPage',
    featured: true,
  },
  {
    id: 2,
    title: 'PrestApp Manager – Aplicación móvil de gestión de préstamos',
    category: 'Mobile',
    description: 'Aplicación móvil para la gestión de préstamos personales con cálculo automático de cuotas y generación de recibos.',
    fullDescription: 'Aplicación móvil con React Native y TypeScript. Incluye sistema de préstamos con cálculo automático de intereses y cuotas, integración Firebase con control por roles, generación de recibos PDF, envío por WhatsApp, dashboard con métricas y gestión de estado con Zustand.',
    image: imgPrestApp,
    tags: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Firestore', 'Zustand'],
    liveUrl: 'https://expo.dev/accounts/bjisadorozco/projects/prestamos-admin/builds/09b1cc79-3dd8-4324-ab13-f03e324aa731',
    githubUrl: 'https://github.com/bjisadorozco/mobile-loan-app',
    featured: true,
  },
  {
    id: 3,
    title: 'Staff Hub – Sistema de gestión ministerial',
    category: 'Full Stack',
    description: 'Sistema integral para la gestión del ministerio juvenil, con administración de contactos, invitaciones y asistencia a eventos.',
    fullDescription: 'Sistema web para gestión ministerial con autenticación Firebase, base de datos Firestore optimizada, CRUD de contactos, invitaciones y asistencia, rutas protegidas, reglas de seguridad, dashboard con métricas en tiempo real y despliegue en Vercel.',
    image: imgStaff,
    tags: ['React JS', 'Next.js 14', 'TypeScript', 'Firebase', 'Firestore', 'TailwindCSS'],
    liveUrl: 'https://staff-hub-gr.vercel.app/',
    githubUrl: 'https://github.com/bjisadorozco/STAFF-HUB-GR',
    featured: true,
  },
]

const categories = ['Todos', 'Full Stack', 'Mobile']

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)

  return (
    <section id="proyectos" className="py-24 lg:py-32 bg-coffee-800/30 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-coffee-700/10 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-coffee-400 font-medium text-sm uppercase tracking-wider">Portafolio</span>
          <h2 className="section-title mt-3">Mis Proyectos</h2>
          <p className="section-subtitle mx-auto">
            Una selección de mis trabajos más recientes y destacados
          </p>
        </motion.div>

        {/* Category Filter - Comentado para usar después */}
        {/* <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-coffee-500 text-coffee-900'
                  : 'bg-coffee-800/50 text-coffee-300 hover:bg-coffee-700/50 hover:text-coffee-200 border border-coffee-700/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div> */}

        {/* Projects Grid - 3 proyectos */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="card p-0 overflow-hidden group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-900 via-coffee-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  >
                    <motion.a
                      href={project.liveUrl}
                      className="w-12 h-12 rounded-full bg-coffee-500 flex items-center justify-center text-coffee-900 hover:bg-coffee-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Ver proyecto ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="w-12 h-12 rounded-full bg-coffee-100 flex items-center justify-center text-coffee-900 hover:bg-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Ver código de ${project.title}`}
                    >
                      <Github size={20} />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-coffee-500 text-sm font-medium">{project.category}</span>
                  <h3 className="text-xl font-display font-semibold text-coffee-100 mt-1 mb-3 group-hover:text-coffee-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-coffee-400 text-sm mb-4 leading-relaxed">{project.fullDescription}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-coffee-800/50 text-coffee-400 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <motion.a
                      href={project.liveUrl}
                      className="flex-1 btn-primary text-xs py-2 px-4 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={14} />
                      Ver Proyecto
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="flex-1 btn-secondary text-xs py-2 px-4 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={14} />
                      Código
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
