import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award } from 'lucide-react'

const experiences = [
  {
    type: 'work',
    title: 'Senior Full Stack Developer',
    company: 'Tech Company',
    period: '2023 - Presente',
    description: 'Lideré el desarrollo de aplicaciones web escalables, implementando arquitecturas modernas y mejorando el rendimiento en un 40%.',
    skills: ['React', 'Node.js', 'AWS', 'MongoDB'],
  },
  {
    type: 'work',
    title: 'Frontend Developer',
    company: 'Startup Digital',
    period: '2021 - 2023',
    description: 'Desarrollé interfaces de usuario interactivas y responsivas, colaborando estrechamente con el equipo de diseño UX.',
    skills: ['Vue.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    type: 'work',
    title: 'Junior Developer',
    company: 'Agencia Web',
    period: '2020 - 2021',
    description: 'Creé sitios web y landing pages para diversos clientes, aprendiendo las mejores prácticas del desarrollo web.',
    skills: ['JavaScript', 'React', 'WordPress'],
  },
]

const education = [
  {
    type: 'education',
    title: 'Ingeniería en Sistemas',
    institution: 'Universidad Tecnológica',
    period: '2016 - 2020',
    description: 'Especialización en desarrollo de software y arquitectura de sistemas.',
  },
  {
    type: 'education',
    title: 'Certificación Full Stack',
    institution: 'Bootcamp Tech',
    period: '2020',
    description: 'Programa intensivo de desarrollo web con tecnologías modernas.',
  },
]

const achievements = [
  { icon: Award, value: '15+', label: 'Certificaciones' },
  { icon: Briefcase, value: '50+', label: 'Proyectos' },
  { icon: GraduationCap, value: '500+', label: 'Horas de código' },
]

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 lg:py-32 bg-coffee-800/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-coffee-700/20 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-coffee-400 font-medium text-sm uppercase tracking-wider">Mi trayectoria</span>
          <h2 className="section-title mt-3">Experiencia</h2>
          <p className="section-subtitle mx-auto">
            Un recorrido por mi carrera profesional y formación académica
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          className="grid grid-cols-3 gap-6 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-coffee-700/50 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-coffee-400" />
              </div>
              <p className="text-3xl font-bold text-coffee-100 mb-1">{item.value}</p>
              <p className="text-coffee-400 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-coffee-600/30 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-coffee-400" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-coffee-100">
                Experiencia Laboral
              </h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-coffee-500 via-coffee-600 to-coffee-700" />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    className="relative pl-12"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-coffee-800 border-2 border-coffee-500 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-coffee-400" />
                    </div>

                    <div className="card">
                      <span className="text-coffee-500 text-sm font-medium">{exp.period}</span>
                      <h4 className="text-xl font-semibold text-coffee-100 mt-1">{exp.title}</h4>
                      <p className="text-coffee-400 mb-3">{exp.company}</p>
                      <p className="text-coffee-300 text-sm mb-4 leading-relaxed">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map(skill => (
                          <span key={skill} className="px-3 py-1 bg-coffee-700/30 text-coffee-400 text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-coffee-600/30 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-coffee-400" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-coffee-100">
                Educación
              </h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-coffee-500 via-coffee-600 to-coffee-700" />

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.title}
                    className="relative pl-12"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-coffee-800 border-2 border-coffee-500 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-coffee-400" />
                    </div>

                    <div className="card">
                      <span className="text-coffee-500 text-sm font-medium">{edu.period}</span>
                      <h4 className="text-xl font-semibold text-coffee-100 mt-1">{edu.title}</h4>
                      <p className="text-coffee-400 mb-3">{edu.institution}</p>
                      <p className="text-coffee-300 text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Download CV Button */}
            <motion.div
              className="mt-10 pl-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#"
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Descargar CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
