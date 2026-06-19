import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    description: 'Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    category: 'Frontend',
    description: 'Dashboard interactivo con visualización de datos en tiempo real, gráficos dinámicos y reportes exportables.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['Vue.js', 'D3.js', 'Firebase', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'App de Fitness',
    category: 'Mobile',
    description: 'Aplicación móvil para seguimiento de entrenamientos, nutrición y progreso personal con IA.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
    tags: ['React Native', 'Express', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Blog Platform',
    category: 'Full Stack',
    description: 'Plataforma de blogs con editor markdown, sistema de comentarios y SEO optimizado.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'MDX'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Task Manager',
    category: 'Frontend',
    description: 'Gestor de tareas colaborativo con drag & drop, notificaciones y sincronización en tiempo real.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    tags: ['React', 'Redux', 'Socket.io', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Portfolio Creativo',
    category: 'Design',
    description: 'Portfolio interactivo con animaciones 3D, transiciones fluidas y diseño inmersivo.',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80',
    tags: ['Three.js', 'GSAP', 'React', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
]

const categories = ['Todos', 'Full Stack', 'Frontend', 'Mobile', 'Design']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [hoveredProject, setHoveredProject] = useState(null)

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

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

        {/* Category Filter */}
        <motion.div
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
        </motion.div>

        {/* Featured Project */}
        {filteredProjects.filter(p => p.featured).length > 0 && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {filteredProjects.filter(p => p.featured).slice(0, 1).map(project => (
              <div
                key={project.id}
                className="card overflow-hidden p-0 group"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/80 via-coffee-900/20 to-transparent lg:bg-gradient-to-r" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="text-coffee-400 text-sm font-medium mb-2">{project.category}</span>
                    <h3 className="text-3xl font-display font-bold text-coffee-100 mb-4">{project.title}</h3>
                    <p className="text-coffee-300 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-coffee-700/30 text-coffee-400 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <motion.a
                        href={project.liveUrl}
                        className="btn-primary text-sm py-3 px-6 flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        Ver Proyecto
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className="btn-secondary text-sm py-3 px-6 flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        Código
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.filter(p => !p.featured || activeCategory !== 'Todos').map((project, index) => (
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
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
                  <h3 className="text-xl font-display font-semibold text-coffee-100 mt-1 mb-2 group-hover:text-coffee-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-coffee-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-coffee-800/50 text-coffee-400 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-coffee-500 text-xs">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Todos los Proyectos
            <ChevronRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
