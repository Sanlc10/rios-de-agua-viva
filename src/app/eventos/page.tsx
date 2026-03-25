"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    title: "Servicio Dominical",
    date: "Cada Domingo",
    time: "12:00 PM",
    location: "Presencial",
    description: "Nuestro servicio semanal de alabanza, adoración y predicación.",
    recurring: true,
  },
  {
    title: "Discipulado Dominical",
    date: "Cada Domingo",
    time: "10:30 AM",
    location: "Presencial",
    description: "Estudio bíblico antes del servicio principal.",
    recurring: true,
  },
  {
    title: "Estudio de Profecías Bíblicas",
    date: "Cada Miércoles",
    time: "8:30 PM",
    location: "Zoom",
    description: "Estudio semanal sobre profecías bíblicas.",
    recurring: true,
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

      <section className="py-20 px-4 bg-white">
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
              {events
                .filter((e) => e.recurring)
                .map((event, i) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col sm:flex-row gap-4 p-6 rounded-2xl bg-beige-50 border border-aqua-100/30"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-aqua-100 flex items-center justify-center shrink-0">
                      <Calendar className="w-6 h-6 text-aqua-700" />
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
            className="p-12 rounded-3xl bg-aqua-50/50 border border-aqua-100/30 text-center"
          >
            <Calendar className="w-10 h-10 text-aqua-400 mx-auto mb-4" />
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
