"use client";

import { motion } from "framer-motion";
import { Calendar, BookOpen, Video } from "lucide-react";

const services = [
  {
    icon: Calendar,
    name: "Servicio Principal",
    day: "Domingos",
    time: "12:00 PM",
    description: "Alabanza, adoración y predicación de la Palabra.",
    color: "aqua",
  },
  {
    icon: BookOpen,
    name: "Discipulado",
    day: "Domingos",
    time: "10:30 AM",
    description: "Estudio bíblico para crecer juntos en la fe.",
    color: "aqua",
  },
  {
    icon: Video,
    name: "Profecías Bíblicas",
    day: "Miércoles",
    time: "8:30 PM",
    description: "Estudio de profecías bíblicas por Zoom.",
    color: "aqua",
  },
];

export default function ScheduleSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-aqua-600 font-medium text-sm uppercase tracking-widest mb-3">
            Reuniones
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Nuestros Horarios
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative p-8 rounded-3xl bg-beige-50 border border-aqua-100/30 hover:border-aqua-200 hover:shadow-lg hover:shadow-aqua-100/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-aqua-100 flex items-center justify-center mb-5 group-hover:bg-aqua-200 transition-colors">
                  <Icon className="w-6 h-6 text-aqua-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {service.name}
                </h3>
                <p className="text-aqua-600 font-medium text-sm mb-3">
                  {service.day} · {service.time}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
