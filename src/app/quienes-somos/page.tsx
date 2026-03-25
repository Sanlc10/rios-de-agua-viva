"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { Heart, Target, Eye, User } from "lucide-react";

export default function QuienesSomos() {
  return (
    <>
      <PageHeader
        label="Nuestra Historia"
        title="Quiénes Somos"
        subtitle="Somos una iglesia apasionada por Jesús, ubicada en el corazón de Cholula. Una comunidad mayormente de jóvenes que busca vivir la fe de manera auténtica."
      />

      <section className="py-20 px-4 bg-beige-100/50">
        <div className="max-w-6xl mx-auto">
          {/* Pastors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-aqua-600 font-medium text-sm uppercase tracking-widest mb-3">
              Liderazgo
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
              Nuestros Pastores
            </h2>

            <div className="max-w-lg mx-auto">
              {/* Placeholder pastor photo */}
              <div className="w-32 h-32 rounded-full bg-aqua-100/60 glass-card mx-auto mb-6 flex items-center justify-center">
                <User className="w-12 h-12 text-aqua-500" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                Juan Manuel y Mariana Fierro
              </h3>
              <p className="text-aqua-600 font-medium mb-4">Pastores</p>
              <p className="text-gray-500 leading-relaxed max-w-md mx-auto">
                Con un corazón por las nuevas generaciones, los pastores Juan
                Manuel y Mariana lideran nuestra comunidad con amor, integridad
                y una pasión genuina por ver vidas transformadas por Jesús.
              </p>
            </div>
          </motion.div>

          {/* Vision / Mission */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Nuestra Misión",
                text: "Amar a Dios sobre todas las cosas, amar a nuestro prójimo e impactar a nuestra comunidad, siempre dándole la gloria y honra a Jesús.",
              },
              {
                icon: Target,
                title: "Nuestro Propósito",
                text: "Formar discípulos de Jesús que vivan su fe de manera auténtica y transformen su entorno con el amor de Dios.",
              },
              {
                icon: Eye,
                title: "Nuestra Visión",
                text: "Ser una iglesia que impacte a Cholula y más allá, levantando una generación apasionada por Jesús y comprometida con su Palabra.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="p-8 rounded-3xl glass-card hover:shadow-lg hover:shadow-aqua-100/30 transition-all text-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-aqua-100/60 flex items-center justify-center mb-5 mx-auto">
                    <Icon className="w-6 h-6 text-aqua-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
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
