"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CalendarDays, ChevronRight } from "lucide-react";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import { motion } from "framer-motion";

export default function UpcomingEventsSection() {
    return (
        <section id="events" className="relative w-full py-24 overflow-hidden font-fira bg-background">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background.png"
                    alt="Background"
                    fill
                    className="object-cover object-center opacity-50"
                    quality={100}
                />
                <div className="absolute inset-0 bg-background/80" />
            </div>

            {/* Top Gradient Transition */}
            <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-background/80 to-transparent z-10 pointer-events-none" />

            {/* Bottom Gradient Transition */}
            <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-background/80 to-transparent z-10 pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 flex flex-col items-center">
                <ScrollAnimationWrapper>
                    {/* Header content */}
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-foreground text-[48px] md:text-[56px] font-seasons italic font-normal mb-6 leading-tight"
                        >
                            Próximos <span className="font-seasons text-foreground not-italic">eventos</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg mx-auto font-fira"
                        >
                            Acompáñanos en nuestras actividades y servicios especiales diseñados para edificar tu vida y fortalecer nuestra comunidad.
                        </motion.p>
                    </div>

                    {/* Main UI Container */}
                    <div className="relative w-full max-w-6xl rounded-[30px] overflow-hidden shadow-2xl aspect-auto md:h-[700px] border border-border group">
                        
                        {/* Container Background Image */}
                        <div className="absolute inset-0 z-0 bg-background">
                            <Image
                                src="/background.png"
                                alt="Event Background"
                                fill
                                className="object-cover object-center opacity-30"
                                quality={100}
                            />
                        </div>

                        {/* Overlay Card Container - The "Card" */}
                        <div className="absolute inset-4 md:inset-8 rounded-[25px] overflow-hidden border border-border flex flex-col md:flex-row shadow-xl bg-background/40 backdrop-blur-sm z-10">

                            {/* LEFT SIDE: Agenda List */}
                            <div className="relative w-full md:w-[45%] h-full bg-background/80 backdrop-blur-xl p-8 md:p-10 flex flex-col border-r border-border">
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center text-primary shadow-sm border border-primary/20">
                                        <CalendarDays className="h-5 w-5" />
                                    </div>
                                    <h3 className="font-seasons text-4xl text-foreground">
                                        <span className="italic">Nuestra</span> <span className="not-italic">agenda</span>
                                    </h3>
                                </div>

                                <div className="w-full h-px bg-border mb-8" />

                                {/* List */}
                                <div className="flex flex-col gap-6">
                                    {[
                                        { label: "Servicio Dominical", time: "Domingo, 10:00 AM", color: "bg-blue-400" },
                                        { label: "Estudio Bíblico General", time: "Miércoles, 7:30 PM", color: "bg-green-400" },
                                        { label: "Noche de Adoración", time: "Viernes, 8:00 PM", color: "bg-yellow-400" },
                                        { label: "Reunión de Jóvenes", time: "Sábado, 6:00 PM", color: "bg-red-400" },
                                    ].map((task, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                                            viewport={{ once: true }}
                                            className="flex items-center gap-4 group/item hover:bg-muted/50 p-2 -mx-2 rounded-lg transition-colors cursor-pointer"
                                        >
                                            {/* Indicator */}
                                            <div className={`w-1.5 h-10 rounded-full ${task.color}`} />

                                            {/* Date/Time element */}
                                            <div className="p-2 border border-border rounded-[8px] bg-muted/50 flex flex-col items-center justify-center min-w-[50px] shadow-sm">
                                                <span className="text-xs font-bold text-foreground uppercase">
                                                    {task.time.split(',')[0].substring(0, 3)}
                                                </span>
                                            </div>

                                            {/* Text */}
                                            <div className="flex flex-col flex-1 pl-1">
                                                <span className="font-fira text-sm md:text-[15px] text-foreground font-medium tracking-wide">
                                                    {task.label}
                                                </span>
                                                <span className="font-fira text-xs md:text-sm text-muted-foreground font-medium tabular-nums">
                                                    {task.time.split(', ')[1]}
                                                </span>
                                            </div>
                                            
                                            <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* RIGHT SIDE: Featured Event Placeholder */}
                            <div className="relative flex-1 h-full flex flex-col p-8 md:p-10 bg-muted/30 backdrop-blur-md">
                                {/* Featured Event Card - Dummy placeholder */}
                                <div className="flex flex-col gap-4 mt-4 w-full h-[60%] md:h-[70%]">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.8 }}
                                        viewport={{ once: true }}
                                        className="w-full h-full rounded-2xl bg-muted border border-border/50 shadow-md relative overflow-hidden group cursor-pointer"
                                    >
                                        <div className="absolute inset-0 bg-background/50 flex items-center justify-center text-center p-4 transition-colors group-hover:bg-background/40">
                                            <div className="flex flex-col items-center">
                                                <span className="text-muted-foreground/80 font-seasons italic text-3xl group-hover:scale-105 transition-transform duration-500 mb-2">Evento Especial</span>
                                                <span className="text-muted-foreground/60 font-fira text-sm">(Placeholder: Imagen del evento)</span>
                                            </div>
                                        </div>
                                        <div className="absolute top-6 left-6 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                                            Destacado
                                        </div>
                                        <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-md p-5 rounded-xl border border-border shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-fira font-bold text-foreground text-lg">Congreso de Avivamiento</h4>
                                                <span className="text-primary font-bold text-sm bg-primary/10 px-2 py-1 rounded">24 - 26 Nov</span>
                                            </div>
                                            <p className="text-muted-foreground text-sm leading-relaxed">Únete a nosotros para un fin de semana dedicado a buscar el rostro de Dios y experimentar su poder transformador.</p>
                                        </div>
                                    </motion.div>
                                </div>
                                
                                {/* Action Banner Inside - Full Width */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    viewport={{ once: true }}
                                    className="absolute bottom-8 left-8 right-8 md:bottom-10 md:left-10 md:right-10 flex items-center justify-between bg-primary md:h-[64px] h-[56px] rounded-full px-2 pl-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer group"
                                >
                                    <span className="text-primary-foreground font-bold text-sm md:text-base font-fira truncate mr-2">Ver calendario completo</span>
                                    <div className="h-[44px] w-[44px] md:h-[50px] md:w-[50px] bg-background rounded-full flex items-center justify-center shadow-sm group-hover:scale-95 transition-transform shrink-0">
                                        <ArrowRight className="w-5 h-5 text-primary" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimationWrapper>
            </div>
        </section>
    );
}
