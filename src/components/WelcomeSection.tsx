"use client";

import { motion } from "framer-motion";
import { Heart, Users, BookOpen } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Apasionados por Jesús",
    description:
      "Todo lo que hacemos gira alrededor de Jesús y su Palabra. Él es el centro de nuestra vida y nuestra comunidad.",
  },
  {
    icon: Users,
    title: "Comunidad Real",
    description:
      "No somos solo una iglesia — somos familia. Aquí encontrarás personas genuinas que caminan contigo en la fe.",
  },
  {
    icon: BookOpen,
    title: "Crecimiento Constante",
    description:
      "Creemos en el discipulado intencional. Cada semana es una oportunidad para crecer más cerca de Dios.",
  },
];

export default function WelcomeSection() {
  return (
    <section className="py-24 px-4 bg-beige-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-aqua-600 font-medium text-sm uppercase tracking-widest mb-3">
            Bienvenido
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Un lugar para ti
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Ríos de Agua Viva es una iglesia de jóvenes y familias en Cholula
            donde puedes ser tú mismo, encontrar propósito y crecer en tu
            relación con Dios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center p-8 rounded-3xl glass-card hover:shadow-lg hover:shadow-aqua-100/30 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-aqua-100/60 flex items-center justify-center mb-5 mx-auto">
                  <Icon className="w-7 h-7 text-aqua-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
