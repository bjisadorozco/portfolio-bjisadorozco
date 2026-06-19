import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'María García',
    role: 'CEO',
    company: 'TechStart',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    content: 'Trabajar con este desarrollador fue una experiencia excepcional. Entregó el proyecto antes de tiempo y superó todas nuestras expectativas. Su atención al detalle y comunicación fueron impecables.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    role: 'Director de Producto',
    company: 'InnovateLab',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    content: 'La calidad del código y la arquitectura implementada fueron sobresalientes. Nuestro sitio web ahora es más rápido y la experiencia de usuario mejoró significativamente.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ana Martínez',
    role: 'Fundadora',
    company: 'DigitalWave',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    content: 'Profesional, creativo y muy dedicado. Transformó nuestra visión en una aplicación funcional y hermosa. Sin duda volveremos a trabajar juntos en futuros proyectos.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Roberto Sánchez',
    role: 'CTO',
    company: 'CloudSoft',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    content: 'Excelente comprensión técnica y capacidad para resolver problemas complejos. Su expertise en React y Node.js nos ayudó a escalar nuestra plataforma eficientemente.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonios" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-coffee-600 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-coffee-600 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-coffee-400 font-medium text-sm uppercase tracking-wider">Testimonios</span>
          <h2 className="section-title mt-3">Lo que dicen mis clientes</h2>
          <p className="section-subtitle mx-auto">
            La satisfacción de mis clientes es mi mayor recompensa
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote icon */}
          <motion.div
            className="absolute -top-4 -left-4 w-20 h-20 text-coffee-700/30"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Quote className="w-full h-full" />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="card text-center py-12 px-8 lg:px-16"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-coffee-400 text-coffee-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-xl lg:text-2xl text-coffee-200 leading-relaxed mb-8 font-light italic">
                {`"${testimonials[currentIndex].content}"`}
              </p>

              {/* Author */}
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-coffee-500 mb-4"
                />
                <h4 className="text-lg font-semibold text-coffee-100">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-coffee-400">
                  {testimonials[currentIndex].role} en {testimonials[currentIndex].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-coffee-800 border border-coffee-700 flex items-center justify-center text-coffee-400 hover:text-coffee-100 hover:bg-coffee-700 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-coffee-400 w-8' 
                      : 'bg-coffee-700 hover:bg-coffee-600'
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-coffee-800 border border-coffee-700 flex items-center justify-center text-coffee-400 hover:text-coffee-100 hover:bg-coffee-700 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Siguiente testimonio"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>

        {/* Small testimonial cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`card cursor-pointer transition-all ${
                index === currentIndex 
                  ? 'border-coffee-500 bg-coffee-700/30' 
                  : 'opacity-60 hover:opacity-100'
              }`}
              onClick={() => setCurrentIndex(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h5 className="text-coffee-100 font-medium text-sm">{testimonial.name}</h5>
                  <p className="text-coffee-500 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
