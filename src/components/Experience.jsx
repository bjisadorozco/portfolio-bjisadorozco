import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react'

const experiences = [
  {
    type: 'work',
    title: 'Desarrollador Full Stack & Mobile',
    company: 'Freelancer',
    period: 'Jul 2025 – Feb 2026',
    location: 'Valledupar, Colombia (Remoto)',
    description: 'Desarrollé soluciones completas web y móvil para gestión financiera, administrativa y comercial, encargándome del diseño, arquitectura, desarrollo, base de datos, autenticación y despliegue.',
    skills: ['React JS', 'Next.js', 'React Native', 'TypeScript', 'Firebase', 'TailwindCSS'],
  },
  {
    type: 'work',
    title: 'Instructor de Ofimática Empresarial',
    company: 'Comfacesar',
    period: 'Jun 2025 – Jul 2025',
    location: 'La Jagua de Ibirico, Cesar, Colombia (Híbrido)',
    description: 'Impulsé la formación en ofimática empresarial, diseñando y ofreciendo sesiones virtuales y presenciales en Word, Excel, PowerPoint y Outlook, enfocándome en fortalecer habilidades prácticas para mejorar la productividad laboral.',
    skills: ['Microsoft Office', 'Office 365', 'Docencia', 'Liderazgo'],
  },
  {
    type: 'work',
    title: 'Líder de equipo de ingeniería',
    company: 'Sofactia SAS',
    period: 'Ene 2025 – Jul 2025',
    location: 'Medellín, Colombia (Remoto)',
    description: 'Organicé y coordiné al equipo de desarrollo, desarrollé cursos interactivos personalizados con React JS, creé plantillas y arquitecturas eficientes, y generé empaquetados SCORM para plataformas LMS.',
    skills: ['React JS', 'JavaScript', 'HTML', 'CSS', 'Git', 'Jira', 'SCRUM'],
  },
  {
    type: 'work',
    title: 'Desarrollador Back-End',
    company: 'UNYDOS SAS',
    period: 'Jul 2024 – Dic 2024',
    location: 'Medellín, Colombia (Remoto)',
    description: 'Mejoré acciones de login y visualización de datos con PHP y MVC, implementé exportación de reportes mensuales en Excel y desarrollé un tour guiado interactivo para usuarios.',
    skills: ['PHP', 'MySQL', 'Codeigniter', 'MVC', 'Amazon S3'],
  },
  {
    type: 'work',
    title: 'Desarrollador Front-End',
    company: 'TensorCode SAS',
    period: 'Ene 2023 – Jul 2024',
    location: 'Bogotá, Colombia (Remoto)',
    description: 'Optimicé el rendimiento del front-end (mejora del 45% en tiempos de carga), realicé pruebas unitarias y de integración, y implementé notificaciones en tiempo real.',
    skills: ['React JS', 'JavaScript', 'TailwindCSS', 'Firebase', 'NodeJS', 'Git', 'SCRUM'],
  },
]

const education = [
  {
    type: 'education',
    title: 'Ingeniería de Sistemas',
    institution: 'Universidad Popular del Cesar',
    period: 'Mar 2019 - Jun 2025',
    location: 'Valledupar, Colombia',
    description: 'Formación integral en desarrollo de software, arquitectura de sistemas y tecnologías modernas.',
  },
]

const certifications = [
  {
    title: 'Curso Profesional de Docker',
    institution: 'Código Facilito',
    period: 'Dic 2025',
    url: 'https://codigofacilito.com/certificates/abebffaa-6f96-43a8-8f49-d49275e37333',
  },
  {
    title: 'Junior Cybersecurity Analyst Career Path',
    institution: 'Cisco',
    period: 'Jun 2024',
    url: 'https://www.credly.com/badges/1210446b-2aea-46cf-a24f-7906311fc819/linked_in_profile',
  },
  {
    title: 'Curso Profesional de React',
    institution: 'Código Facilito',
    period: 'Sept 2023',
    url: 'https://codigofacilito.com/certificates/3d911999-04ad-4033-b7fe-21e667be0b68',
  },
  {
    title: 'Curso Profesional de Angular',
    institution: 'Código Facilito',
    period: 'Jul 2023',
    url: 'https://codigofacilito.com/certificates/fdbab309-853f-4f9c-a3db-447ee1209fed',
  },
  {
    title: 'Curso Profesional de Base de Datos',
    institution: 'Código Facilito',
    period: 'Jul 2023',
    url: 'https://codigofacilito.com/certificates/b6e4f892-8789-43ff-8646-9666be741881',
  },
  {
    title: 'M320: MongoDB Data Modeling',
    institution: 'MongoDB',
    period: 'Oct 2023',
    url: 'https://learn.mongodb.com/c/vDtJ5T0tSfaEi1sQyCKTlg',
  },
  {
  title: 'Constancia de Participacion UCIENCIA',
  institution: 'UCIENCIA',
  period: 'Sep 2023',
  url: 'https://drive.google.com/file/d/1DtR4U_15QDeT0zC0SD2n_V4hWXbj12rL/view?usp=drive_link',
},
  {
    title: 'Introduction to Data Science',
    institution: 'Cisco',
    period: 'Oct 2023',
    url: 'https://www.credly.com/badges/2ce53fb7-559c-4bfe-b7ab-86ef76189c69/print',
  },
  {
    title: 'CCNA: Introduction to Networks',
    institution: 'Cisco',
    period: 'Dic 2022',
    url: 'https://www.credly.com/badges/2503228b-41dd-46dd-82af-cd854b31592a/linked_in_profile',
  },
]

const achievements = [
  { icon: Briefcase, value: '3+', label: 'Años de experiencia' },
  { icon: Award, value: '10+', label: 'Proyectos completados' },
  { icon: GraduationCap, value: '5000+', label: 'Horas de código' },
]

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 lg:py-32 bg-coffee-800/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-coffee-600/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-coffee-500/10 rounded-full blur-3xl" />
      
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

        {/* Achievement Stats
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
        </motion.div> */}

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
                      <p className="text-coffee-400 mb-1">{exp.company}</p>
                      <p className="text-coffee-500 text-xs mb-3">{exp.location}</p>
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
                      <p className="text-coffee-400 mb-1">{edu.institution}</p>
                      <p className="text-coffee-500 text-xs mb-3">{edu.location}</p>
                      <p className="text-coffee-300 text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-coffee-600/30 flex items-center justify-center">
                  <Award className="w-5 h-5 text-coffee-400" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-coffee-100">
                  Constancias y Certificaciones
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, index) => (
                  <motion.a
                    key={cert.title}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card group hover:border-coffee-500/50 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-lg font-semibold text-coffee-100 group-hover:text-coffee-400 transition-colors">{cert.title}</h4>
                          <ExternalLink className="w-4 h-4 text-coffee-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-coffee-400 text-sm">{cert.institution}</p>
                      </div>
                      <span className="text-coffee-500 text-xs font-medium whitespace-nowrap">{cert.period}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Download CV Button */}
            <motion.div
              className="mt-10 pl-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://drive.google.com/file/d/1biDPAyXDgVTfNJbOzHP29i3cGLURswZB/view?usp=drive_link"
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
