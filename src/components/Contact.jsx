import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hola@tudominio.com', href: 'mailto:hola@tudominio.com' },
  { icon: Phone, label: 'Teléfono', value: '+1 234 567 890', href: 'tel:+1234567890' },
  { icon: MapPin, label: 'Ubicación', value: 'Ciudad, País', href: '#' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contacto" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-coffee-600/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 w-56 h-56 bg-coffee-500/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-coffee-400 font-medium text-sm uppercase tracking-wider">Contacto</span>
          <h2 className="section-title mt-3">Hablemos</h2>
          <p className="section-subtitle mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-display font-semibold text-coffee-100 mb-4">
                Información de contacto
              </h3>
              <p className="text-coffee-300 leading-relaxed">
                Estoy disponible para proyectos freelance, colaboraciones o simplemente 
                para tomar un café virtual y charlar sobre tecnología.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="card flex items-center gap-4 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-coffee-700/50 flex items-center justify-center group-hover:bg-coffee-600/50 transition-colors">
                    <item.icon className="w-5 h-5 text-coffee-400" />
                  </div>
                  <div>
                    <p className="text-coffee-500 text-sm">{item.label}</p>
                    <p className="text-coffee-200 font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Decorative element */}
            <div className="hidden lg:block">
              <div className="w-32 h-32 bg-gradient-to-br from-coffee-500/20 to-coffee-600/20 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="card">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-coffee-200 font-medium mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-coffee-800/50 border border-coffee-700 rounded-xl text-coffee-100 placeholder-coffee-500 focus:outline-none focus:border-coffee-500 focus:ring-1 focus:ring-coffee-500 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-coffee-200 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-coffee-800/50 border border-coffee-700 rounded-xl text-coffee-100 placeholder-coffee-500 focus:outline-none focus:border-coffee-500 focus:ring-1 focus:ring-coffee-500 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-coffee-200 font-medium mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-coffee-800/50 border border-coffee-700 rounded-xl text-coffee-100 placeholder-coffee-500 focus:outline-none focus:border-coffee-500 focus:ring-1 focus:ring-coffee-500 transition-colors"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-coffee-200 font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-coffee-800/50 border border-coffee-700 rounded-xl text-coffee-100 placeholder-coffee-500 focus:outline-none focus:border-coffee-500 focus:ring-1 focus:ring-coffee-500 transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    ¡Mensaje enviado!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar mensaje
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
