"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import {
  Calendar,
  BookOpen,
  Video,
  MapPin,
  Clock,
  Heart,
  Music,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    icon: Calendar,
    name: "Servicio Principal",
    day: "Domingos",
    time: "12:00 PM",
    location: "Presencial",
    description:
      "Nuestro servicio principal donde nos reunimos como familia para alabar, adorar y escuchar la Palabra de Dios. Un ambiente lleno de la presencia de Dios donde cada persona es bienvenida.",
  },
  {
    icon: BookOpen,
    name: "Discipulado",
    day: "Domingos",
    time: "10:30 AM",
    location: "Presencial",
    description:
      "Antes del servicio principal, nos reunimos para estudiar la Biblia de manera profunda. Un espacio para hacer preguntas, compartir y crecer juntos en el conocimiento de Dios.",
  },
  {
    icon: Video,
    name: "Profecías Bíblicas",
    day: "Miércoles",
    time: "8:30 PM",
    location: "Zoom",
    description:
      "Estudio semanal enfocado en las profecías bíblicas. Conectamos desde casa para explorar juntos lo que la Biblia nos revela sobre el plan de Dios.",
  },
];

export default function Servicios() {
  return (
    <>
      <PageHeader
        label="Reuniones"
        title="Nuestros Servicios"
        subtitle="Tenemos diferentes espacios durante la semana para que puedas crecer en tu fe y conectar con la comunidad."
      />

      {/* Services detail */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-beige-50 border border-aqua-100/30 hover:border-aqua-200 transition-all"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-aqua-100 flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-aqua-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-aqua-600 font-medium mb-4">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {service.day} · {service.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {service.location}
                      </span>
                    </div>
                    <p className="text-gray-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* First visit */}
      <section className="py-20 px-4 bg-beige-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-aqua-600 font-medium text-sm uppercase tracking-widest mb-3">
              Primera vez
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ¿Qué esperar en tu primera visita?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: Heart,
                title: "Ambiente cálido",
                text: "Desde que llegas te recibiremos con los brazos abiertos. No importa quién eres o de dónde vienes.",
              },
              {
                icon: Music,
                title: "Alabanza contemporánea",
                text: "Música de adoración que te conecta con Dios. Un tiempo para cantar, orar y sentir su presencia.",
              },
              {
                icon: BookOpen,
                title: "Predicación relevante",
                text: "Mensajes basados en la Biblia que hablan a tu vida real. Prácticos, profundos y llenos de esperanza.",
              },
              {
                icon: MessageCircle,
                title: "Comunidad genuina",
                text: "Después del servicio, quédate a platicar. Aquí encontrarás personas reales que quieren conocerte.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-aqua-100/30"
                >
                  <Icon className="w-6 h-6 text-aqua-600 mb-3" />
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
