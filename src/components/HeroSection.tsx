"use client";

import { motion } from "framer-motion";
import { ChevronDown, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-beige-100 via-beige-50 to-aqua-50/40" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-aqua-200/20 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-aqua-300/15 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Verse reference */}
          <p className="text-aqua-600 font-medium text-sm uppercase tracking-widest mb-6">
            Juan 7:38
          </p>

          {/* Main verse */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
            El que cree en mí,{" "}
            <span className="text-aqua-600">
              de su interior correrán ríos de agua viva.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Una comunidad apasionada por Jesús en el corazón de Cholula. Ven a
            conocernos — nuestras puertas siempre están abiertas.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/servicios"
              className="px-8 py-3.5 bg-aqua-600 text-white font-medium rounded-full hover:bg-aqua-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-aqua-600/25"
            >
              Planea tu visita
            </Link>
            <Link
              href="/quienes-somos"
              className="px-8 py-3.5 glass-card text-aqua-700 font-medium rounded-full hover:bg-aqua-50/60 transition-all hover:scale-105 active:scale-95"
            >
              Conócenos
            </Link>
          </div>
        </motion.div>

        {/* Schedule badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm text-gray-600 shadow-sm">
            <Clock className="w-4 h-4 text-aqua-500" />
            Domingos 12:00 PM
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm text-gray-600 shadow-sm">
            <MapPin className="w-4 h-4 text-aqua-500" />
            San Andrés Cholula, Puebla
          </span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-6 h-6 text-aqua-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
