import { motion } from 'framer-motion'
import profileImage from '../../public/bj-rose.jpeg'
import TechCarousel from './TechCarousel'

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

        {/* Profile + Bio grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative mx-auto w-72 sm:w-80 lg:w-100">
              {/* Animated glow */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-coffee-500/30 to-coffee-600/30 rounded-full blur-xl"
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Quote Card - desktop */}
              <motion.div
                className="hidden sm:block absolute -top-2 -right-4 sm:-right-8 card px-4 py-3 max-w-[220px] z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-coffee-300 text-xs leading-relaxed italic text-center">
                  "Aprender para construir.<br />
                  Construir para servir.<br />
                  Servir para inspirar."
                </p>
              </motion.div>

              {/* Profile image */}
              <motion.div
                className="relative p-1 bg-gradient-to-br from-coffee-400 via-coffee-500 to-coffee-600 rounded-full"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.03 }}
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
            </div>

            {/* Hobbies Card */}
            <motion.div
              className="mt-6 card !px-8 w-fit mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-coffee-100 font-display font-semibold text-lg mb-3 text-center">
                Hobbies
              </h3>
              <div className="flex justify-center items-center gap-2 flex-wrap sm:flex-nowrap">
                <span className="px-3 py-2 bg-coffee-700/30 border border-coffee-600/30 rounded-full text-coffee-300 text-sm whitespace-nowrap">
                  Lectura
                </span>
                <span className="text-coffee-500 font-bold">•</span>
                <span className="px-3 py-2 bg-coffee-700/30 border border-coffee-600/30 rounded-full text-coffee-300 text-sm whitespace-nowrap">
                  Investigación
                </span>
                <span className="text-coffee-500 font-bold">•</span>
                <span className="px-3 py-2 bg-coffee-700/30 border border-coffee-600/30 rounded-full text-coffee-300 text-sm whitespace-nowrap">
                  Aprendizaje
                </span>
              </div>
            </motion.div>

            {/* Quote - mobile only */}
            <motion.div
              className="sm:hidden mt-4 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-coffee-400 text-xs leading-relaxed italic">
                "Aprender para construir.<br />
                Construir para servir.<br />
                Servir para inspirar."
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Bio + Carousel */}
          <motion.div
            className="space-y-8 min-w-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-coffee-200 text-lg leading-relaxed break-words">
              Soy <span className="text-coffee-400 font-semibold">Ingeniero de Sistemas</span> y{' '}
              <span className="text-coffee-400 font-semibold">Desarrollador Full Stack</span>, apasionado
              por convertir ideas abstractas en soluciones digitales que cobran vida mediante la tecnología.
              Me interesa comprender cada problema desde su raíz, analizarlo y transformarlo en sistemas
              funcionales, intuitivos y escalables. Combino pensamiento analítico, creatividad y calidad
              técnica para construir productos web y móviles que resuelvan necesidades reales, generen
              valor y tengan un impacto positivo en las personas.
            </p>

            <TechCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
