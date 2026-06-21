import { motion } from 'framer-motion'
import { Code, Smartphone, Palette, Database, Search, Rocket } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

// Tech icons SVG
const ReactIcon = () => (
  <svg className="w-20 h-20 opacity-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="3" fill="currentColor" />
    <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth="1.5" stroke="currentColor" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" strokeWidth="1.5" stroke="currentColor" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" strokeWidth="1.5" stroke="currentColor" />
  </svg>
)

const ReactNativeIcon = () => (
  <svg className="w-20 h-20 opacity-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="3" fill="currentColor" />
    <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth="1.5" stroke="currentColor" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" strokeWidth="1.5" stroke="currentColor" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" strokeWidth="1.5" stroke="currentColor" />
  </svg>
)

const FlutterIcon = () => (
  <svg className="w-20 h-20 opacity-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor"/>
    <rect x="9" y="4" width="6" height="4" rx="0.5" fill="currentColor"/>
    <circle cx="12" cy="18" r="1" fill="currentColor"/>
    <path d="M9 10H15M9 13H13" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

const NodeIcon = () => (
  <svg className="w-20 h-20 opacity-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="12" cy="6" rx="8" ry="3"/>
    <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/>
    <ellipse cx="12" cy="18" rx="8" ry="3"/>
    <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/>
  </svg>
)

const DockerIcon = () => (
  <svg className="w-20 h-20 opacity-10" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.184-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/>
  </svg>
)

const FigmaIcon = () => (
  <svg className="w-20 h-20 opacity-10" viewBox="0 0 24 24" fill="currentColor">
    <rect x="8" y="4" width="4" height="4" rx="2" fill="#F24E1E"/>
    <rect x="12" y="4" width="4" height="4" rx="2" fill="#FF7262"/>
    <rect x="8" y="8" width="4" height="4" rx="2" fill="#A259FF"/>
    <rect x="12" y="8" width="4" height="4" rx="2" fill="#1ABCFE"/>
    <rect x="8" y="12" width="4" height="4" rx="2" fill="#0ACF83"/>
    <circle cx="14" cy="10" r="2" fill="currentColor"/>
  </svg>
)

const AwsIcon = () => (
  <svg className="w-20 h-20 opacity-10" viewBox="0 0 24 24" fill="currentColor">
    <path d="M2 12C2 7.58 5.58 4 10 4H14C18.42 4 22 7.58 22 12C22 16.42 18.42 20 14 20H10C5.58 20 2 16.42 2 12Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <text x="12" y="16" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor">AWS</text>
  </svg>
)

const services = [
  {
    icon: Code,
    title: 'Desarrollo Web',
    description: 'Creo sitios web y aplicaciones modernas, rápidas y optimizadas usando las últimas tecnologías.',
    features: ['React / Vue / Next.js', 'Sitios responsivos', 'Optimización SEO', 'Alto rendimiento'],
    techIcon: ReactIcon,
    bgColor: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: Smartphone,
    title: 'Apps Móviles',
    description: 'Desarrollo aplicaciones móviles nativas y multiplataforma para iOS y Android con experiencias fluidas.',
    features: ['React Native', 'Flutter', 'UX optimizada', 'Push notifications'],
    techIcon: FlutterIcon,
    bgColor: 'from-indigo-500/20 to-purple-500/20'
  },
  {
    icon: Palette,
    title: 'Diseño UI/UX',
    description: 'Diseño interfaces intuitivas y atractivas completamente centradas en la experiencia del usuario final.',
    features: ['Wireframes', 'Prototipos', 'Design Systems', 'Accesibilidad'],
    techIcon: FigmaIcon,
    bgColor: 'from-pink-500/20 to-rose-500/20'
  },
  {
    icon: Database,
    title: 'Backend & APIs',
    description: 'Construyo sistemas backend robustos, APIs RESTful y bases de datos escalables con seguridad avanzada.',
    features: ['Node.js / Python', 'REST / GraphQL', 'Bases de datos', 'Autenticación'],
    techIcon: NodeIcon,
    bgColor: 'from-green-500/20 to-emerald-500/20'
  },
  {
    icon: Search,
    title: 'Consultoría Tech',
    description: 'Asesoro en arquitectura de software, mejores prácticas y optimización de proyectos para equipos.',
    features: ['Code Review', 'Arquitectura', 'Mentoring', 'Best Practices'],
    techIcon: AwsIcon,
    bgColor: 'from-orange-500/20 to-amber-500/20'
  },
  {
    icon: Rocket,
    title: 'Deploy & DevOps',
    description: 'Implemento CI/CD, containerización y despliegue en la nube para tu proyecto con automatización.',
    features: ['AWS / Vercel', 'Docker', 'CI/CD', 'Monitoreo'],
    techIcon: DockerIcon,
    bgColor: 'from-teal-500/20 to-cyan-500/20'
  },
]

export default function Services() {
  const duplicatedServices = [...services, ...services]

  return (
    <section id="servicios" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-coffee-800/20 to-transparent" />
      
      <div className="relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
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

        {/* Infinite Carousel - Full Width */}
        <div className="w-full overflow-hidden px-4 sm:px-0">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={4000}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="py-8"
          >
            {duplicatedServices.map((service, index) => (
              <SwiperSlide key={`${service.title}-${index}`}>
                <motion.div
                  className="card group relative overflow-hidden h-full p-6 flex flex-col pt-8 pr-8"
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Tech Icon Background - Bottom Right */}
                  <div className="absolute bottom-4 right-4 text-coffee-500 pointer-events-none">
                    <service.techIcon />
                  </div>
                  
                  {/* Gradient accent on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-coffee-500 to-coffee-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-coffee-600/30 to-coffee-700/30 border border-coffee-600/20 flex items-center justify-center mb-4 group-hover:from-coffee-500/40 group-hover:to-coffee-600/40 transition-all duration-300 relative z-10">
                    <service.icon className="w-7 h-7 text-coffee-400 group-hover:text-coffee-300 transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="text-xl font-display font-semibold text-coffee-100 mb-2 group-hover:text-coffee-50 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-coffee-400 mb-4 leading-relaxed min-h-[4.5rem]">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-1.5">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-coffee-300 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-coffee-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16 px-4 sm:px-6 lg:px-8"
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