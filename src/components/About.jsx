import { motion } from 'framer-motion'
import profileImage from '../../public/bj-rose.jpeg'

const techStack = [
  // Lenguajes
  "C#", "JavaScript", "PHP", "Dart", "C", "Java",

  // Frontend & Mobile
  "React JS", "Next.js", "Flutter", "Tailwind CSS",

  // Backend
  "ASP.NET", "Laravel", "CodeIgniter", "Node JS",

  // Bases de datos
  "Microsoft SQL Server",
  "Oracle",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Firebase",

  // DevOps y Despliegue
  "Git",
  "Docker",
  "AWS",
  "Vercel",
  "Postman",
  "Jira",

  // Inteligencia Artificial y Productividad
  "ChatGPT",
  "Claude",
  "Gemini",
  "GitHub Copilot",
  "Cursor",
  "Trae",

  // Metodologías y buenas prácticas
  "Scrum",
  "XP",
  "SOLID",
  "Design Patterns",
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

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative mx-auto max-w-md">
              {/* Multiple animated decorative layers */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-coffee-500/30 to-coffee-600/30 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Main image container */}
              <motion.div
                className="relative p-1 bg-gradient-to-br from-coffee-400 via-coffee-500 to-coffee-600 rounded-full"
                initial={{ rotate: 0, scale: 0.5 }}
                whileInView={{ rotate: 720, scale: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  mass: 0.8,
                }}
              >
                <div className="bg-coffee-800 rounded-full p-1">
                  <div className="w-full aspect-square rounded-full bg-gradient-to-br from-coffee-700 to-coffee-800 flex items-center justify-center overflow-hidden">
                    <img  
                      src={profileImage}
                      alt="Foto de perfil"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Hobbies Card */}
              <motion.div
                className="mt-6 card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-coffee-100 font-display font-semibold text-lg mb-3 text-center">
                  Hobbies
                </h3>
                <div className="flex justify-center items-center gap-3 flex-wrap">
                  <span className="px-4 py-2 bg-coffee-700/30 border border-coffee-600/30 rounded-full text-coffee-300 text-sm">
                    Lectura
                  </span>
                  <span className="text-coffee-500 font-bold">•</span>
                  <span className="px-4 py-2 bg-coffee-700/30 border border-coffee-600/30 rounded-full text-coffee-300 text-sm">
                    Investigación
                  </span>
                  <span className="text-coffee-500 font-bold">•</span>
                  <span className="px-4 py-2 bg-coffee-700/30 border border-coffee-600/30 rounded-full text-coffee-300 text-sm">
                    Aprendizaje
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - About Text + Tech Stack */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-lg">
              <p className="text-coffee-200 text-lg leading-relaxed mb-6">
                Soy <span className="text-coffee-400 font-semibold">Ingeniero de Sistemas</span> y <span className="text-coffee-400 font-semibold">Desarrollador Full Stack en formación</span>. Me apasiona transformar ideas abstractas en soluciones reales a través de la tecnología, participando en cada etapa del desarrollo de software: desde el análisis y la planificación hasta la construcción de aplicaciones web y móviles. Actualmente continúo fortaleciendo mis habilidades con el objetivo de crear productos digitales completos, intuitivos y escalables que generen un impacto positivo en las personas.
              </p>
              {/* <p className="text-coffee-300 leading-relaxed">
                Me especializo en construir aplicaciones web modernas utilizando tecnologías como React, 
                Node.js y bases de datos tanto SQL como NoSQL. Cada proyecto que desarrollo está enfocado 
                en ofrecer la mejor experiencia de usuario posible, combinando diseño atractivo con 
                funcionalidad robusta.
              </p> */}
            </div>

            {/* Tech Stack Tags */}
            <div className="card">
              <h3 className="text-coffee-100 font-display font-semibold text-xl mb-6">
                Stack Tecnológico
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1.5 bg-coffee-700/30 border border-coffee-600/30 rounded-full text-coffee-300 text-xs hover:bg-coffee-600/30 hover:text-coffee-200 transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.03 }}
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
