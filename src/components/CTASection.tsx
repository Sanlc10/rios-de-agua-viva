"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-gradient-to-br from-aqua-600 to-aqua-800 p-12 md:p-16 text-center overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-aqua-500/20 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-aqua-400/10 translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Te estamos esperando
            </h2>
            <p className="text-lg text-aqua-100 max-w-xl mx-auto mb-10 leading-relaxed">
              No importa dónde estés en tu camino de fe — aquí hay un lugar para
              ti. Ven este domingo y descubre lo que Dios tiene para tu vida.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/servicios"
                className="px-8 py-3.5 bg-white text-aqua-700 font-medium rounded-full hover:bg-aqua-50 transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                Planea tu visita
              </Link>
              <Link
                href="/contacto"
                className="px-8 py-3.5 bg-aqua-500/30 text-white font-medium rounded-full hover:bg-aqua-500/40 transition-all hover:scale-105 active:scale-95 border border-white/20"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
