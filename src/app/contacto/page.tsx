"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { MapPin, Clock } from "lucide-react";

export default function Contacto() {
  return (
    <>
      <PageHeader
        label="Encuéntranos"
        title="Contacto"
        subtitle="Nos encantaría saber de ti. Si tienes preguntas o quieres saber más sobre nuestra iglesia, no dudes en contactarnos."
      />

      <section className="py-20 px-4 bg-beige-100/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Información
                </h2>

                <div className="flex items-start gap-4 p-5 rounded-2xl glass-card">
                  <div className="w-10 h-10 rounded-xl bg-aqua-100/60 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-aqua-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Dirección
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Carretera Federal México-Puebla
                      <br />
                      San Juan Tlautla, San Andrés Cholula
                      <br />
                      Puebla, México
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl glass-card">
                  <div className="w-10 h-10 rounded-xl bg-aqua-100/60 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-aqua-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Horarios
                    </h3>
                    <div className="text-sm text-gray-500 space-y-1">
                      <p>
                        <strong className="text-gray-700">Discipulado:</strong>{" "}
                        Domingos 10:30 AM
                      </p>
                      <p>
                        <strong className="text-gray-700">
                          Servicio Principal:
                        </strong>{" "}
                        Domingos 12:00 PM
                      </p>
                      <p>
                        <strong className="text-gray-700">
                          Profecías Bíblicas:
                        </strong>{" "}
                        Miércoles 8:30 PM (Zoom)
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-10"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Escríbenos
                </h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl glass-card text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-aqua-500/30 focus:border-aqua-300 transition-all text-sm"
                    />
                    <input
                      type="email"
                      placeholder="Tu correo"
                      className="w-full px-4 py-3 rounded-xl glass-card text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-aqua-500/30 focus:border-aqua-300 transition-all text-sm"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Asunto"
                    className="w-full px-4 py-3 rounded-xl glass-card text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-aqua-500/30 focus:border-aqua-300 transition-all text-sm"
                  />
                  <textarea
                    rows={5}
                    placeholder="Tu mensaje..."
                    className="w-full px-4 py-3 rounded-xl glass-card text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-aqua-500/30 focus:border-aqua-300 transition-all text-sm resize-none"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 bg-aqua-600 text-white font-medium rounded-full hover:bg-aqua-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-aqua-600/25"
                  >
                    Enviar mensaje
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-full min-h-[400px]"
            >
              <div className="w-full h-full rounded-3xl overflow-hidden glass-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0!2d-98.35!3d19.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc9ef9b264cbb%3A0xa9486593f7648020!2sIglesia%20Cristiana%20R%C3%ADos%20de%20Agua%20Viva!5e0!3m2!1ses!2smx!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "500px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
