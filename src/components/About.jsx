import { motion } from 'framer-motion'
import { Code2, Palette, Zap, Users } from 'lucide-react'

const skills = [
  { name: 'React', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'UI/UX Design', level: 85 },
]

const highlights = [
  { icon: Code2, title: 'Código Limpio', description: 'Escribo código mantenible y escalable siguiendo las mejores prácticas' },
  { icon: Palette, title: 'Diseño Creativo', description: 'Creo interfaces atractivas centradas en la experiencia del usuario' },
  { icon: Zap, title: 'Alto Rendimiento', description: 'Optimizo cada proyecto para máxima velocidad y eficiencia' },
  { icon: Users, title: 'Colaborativo', description: 'Trabajo en equipo y comunico de manera efectiva con clientes' },
]

const techStack = [
  'React', 'Next.js', 'Vue.js', 'Node.js', 'Express', 'MongoDB', 
  'PostgreSQL', 'Tailwind CSS', 'TypeScript', 'Python', 'Docker', 'AWS'
]

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-coffee-600 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-coffee-400 font-medium text-sm uppercase tracking-wider">Conóceme</span>
          <h2 className="section-title mt-3">Sobre Mí</h2>
          <p className="section-subtitle mx-auto">
            Un apasionado desarrollador comprometido con crear experiencias digitales excepcionales
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose prose-lg">
              <p className="text-coffee-200 text-lg leading-relaxed mb-6">
                Soy un <span className="text-coffee-400 font-semibold">Desarrollador Full Stack</span> con 
                más de 3 años de experiencia creando soluciones digitales innovadoras. Mi pasión por la 
                tecnología me impulsa a mantenerme actualizado con las últimas tendencias y herramientas.
              </p>
              <p className="text-coffee-300 leading-relaxed mb-8">
                Me especializo en construir aplicaciones web modernas utilizando tecnologías como React, 
                Node.js y bases de datos tanto SQL como NoSQL. Cada proyecto que desarrollo está enfocado 
                en ofrecer la mejor experiencia de usuario posible, combinando diseño atractivo con 
                funcionalidad robusta.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="card group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-coffee-700/50 flex items-center justify-center mb-4 group-hover:bg-coffee-600/50 transition-colors">
                    <item.icon className="w-6 h-6 text-coffee-400" />
                  </div>
                  <h3 className="text-coffee-100 font-semibold mb-2">{item.title}</h3>
                  <p className="text-coffee-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Skills Progress */}
            <div className="card mb-8">
              <h3 className="text-coffee-100 font-display font-semibold text-xl mb-6">
                Habilidades Técnicas
              </h3>
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-coffee-200 font-medium">{skill.name}</span>
                      <span className="text-coffee-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-coffee-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-coffee-500 to-coffee-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div className="card">
              <h3 className="text-coffee-100 font-display font-semibold text-xl mb-6">
                Stack Tecnológico
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-coffee-700/30 border border-coffee-600/30 rounded-full text-coffee-300 text-sm hover:bg-coffee-600/30 hover:text-coffee-200 transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
