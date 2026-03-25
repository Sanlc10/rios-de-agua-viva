"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";

const events = [
  {
    title: "Servicio Dominical",
    date: "Cada Domingo",
    time: "12:00 PM",
    location: "Presencial",
    description: "Nuestro servicio semanal de alabanza, adoración y predicación.",
  },
  {
    title: "Discipulado Dominical",
    date: "Cada Domingo",
    time: "10:30 AM",
    location: "Presencial",
    description: "Estudio bíblico antes del servicio principal.",
  },
  {
    title: "Estudio de Profecías Bíblicas",
    date: "Cada Miércoles",
    time: "8:30 PM",
    location: "Zoom",
    description: "Estudio semanal sobre profecías bíblicas.",
  },
];

export default function Eventos() {
  return (
    <>
      <PageHeader
        label="Calendario"
        title="Eventos"
        subtitle="Mantente al tanto de nuestras actividades y eventos especiales. Siempre hay algo sucediendo en nuestra comunidad."
      />

      <section className="py-20 px-4 bg-beige-100/50">
        <div className="max-w-4xl mx-auto">
          {/* Recurring events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Reuniones Semanales
            </h2>
            <div className="space-y-4">
              {events.map((event, i) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col sm:flex-row gap-4 p-6 rounded-2xl glass-card"
                >
                  <div className="w-12 h-12 rounded-2xl bg-aqua-100/60 flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-aqua-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-aqua-600 font-medium mt-1 mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {event.date} · {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {event.location}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming special events placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl glass-card text-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-aqua-100/60 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-aqua-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Eventos Especiales
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Próximamente publicaremos nuestros eventos especiales aquí.
              Síguenos en redes sociales para estar al tanto.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
