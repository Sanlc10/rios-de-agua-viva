"use client";

import React from "react";
import Image from "next/image";
import { Users, Flame, Music, Heart, ChevronRight } from "lucide-react";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import TypewriterText from "@/components/TypewriterText";

export default function MinistriesSection() {
    return (
        <section id="ministries" className="relative w-full py-24 overflow-hidden font-fira bg-background">
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

            <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
                <ScrollAnimationWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        {/* LEFT COLUMN: Text & Cards */}
                        <div className="flex flex-col gap-12">
                            {/* Headings */}
                            <div>
                                <h2 className="text-foreground text-[48px] md:text-[56px] font-seasons italic font-normal mb-4 leading-tight">
                                    Nuestros <span className="font-seasons text-foreground not-italic">ministerios</span>
                                </h2>
                                <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg font-fira">
                                    Encuentra tu lugar de servicio y crecimiento en Ríos de Agua Viva. Tenemos un espacio diseñado especialmente para ti y tu familia.
                                </p>
                            </div>

                            {/* Feature Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Card 1 */}
                                <div className="bg-background/40 backdrop-blur-sm border border-border/50 rounded-[20px] p-6 flex flex-col gap-4 hover:scale-105 transition-transform duration-300 shadow-sm relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-muted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative z-10">
                                        <div className="h-10 w-10 mb-4 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                            <Users className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3 className="text-foreground font-bold text-sm mb-2">Agua Viva Kids</h3>
                                        <p className="text-muted-foreground text-xs leading-relaxed">
                                            Instruyendo a la próxima generación en la palabra y el amor de Dios mediante dinámicas divertidas.
                                        </p>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="bg-background/40 backdrop-blur-sm border border-border/50 rounded-[20px] p-6 flex flex-col gap-4 hover:scale-105 transition-transform duration-300 shadow-sm relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-muted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative z-10">
                                        <div className="h-10 w-10 mb-4 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                            <Flame className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3 className="text-foreground font-bold text-sm mb-2">Jóvenes</h3>
                                        <p className="text-muted-foreground text-xs leading-relaxed">
                                            Una generación imparable y apasionada por vivir para Jesús y descubrir su propósito en la vida.
                                        </p>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className="bg-background/40 backdrop-blur-sm border border-border/50 rounded-[20px] p-6 flex flex-col gap-4 hover:scale-105 transition-transform duration-300 shadow-sm relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-muted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative z-10">
                                        <div className="h-10 w-10 mb-4 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                            <Music className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3 className="text-foreground font-bold text-sm mb-2">Adoración</h3>
                                        <p className="text-muted-foreground text-xs leading-relaxed">
                                            Liderando a la congregación en una genuina expresión de adoración y encuentro con la presencia de Dios.
                                        </p>
                                    </div>
                                </div>

                                {/* Card 4 */}
                                <div className="bg-background/40 backdrop-blur-sm border border-border/50 rounded-[20px] p-6 flex flex-col gap-4 hover:scale-105 transition-transform duration-300 shadow-sm relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-muted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative z-10">
                                         <div className="h-10 w-10 mb-4 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                            <Heart className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3 className="text-foreground font-bold text-sm mb-2">Matrimonios</h3>
                                        <p className="text-muted-foreground text-xs leading-relaxed">
                                            Edificando familias fuertes, saludables y restauradas sobre la roca firme que es Cristo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Image & Overlay */}
                        <div className="flex justify-center w-full">
                            <div className="relative w-full max-w-[380px] h-[650px] rounded-[65px] overflow-hidden shadow-2xl border border-border/50 bg-muted flex items-center justify-center group cursor-pointer transition-all duration-500">
                                {/* Placeholder Content instead of Image */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
                                    <span className="text-muted-foreground/40 text-6xl mb-4 font-seasons italic">Galeria</span>
                                    <span className="text-muted-foreground/60 font-fira text-sm">(Placeholder: Collage de Imágenes Ministeriales)</span>
                                </div>
                                
                                {/* Inner Glass Overlay floating card just for style */}
                                <div className="absolute right-[-20px] bottom-32 bg-background/80 backdrop-blur-md rounded-2xl border border-border shadow-xl p-5 w-[220px] transform -rotate-3 group-hover:rotate-0 transition-transform duration-500 z-20">
                                     <span className="block text-xs text-muted-foreground font-fira mb-1 uppercase tracking-wider">Próximo retiro</span>
                                     <span className="block text-base font-bold text-foreground font-fira">Congreso de Jóvenes</span>
                                     <div className="h-1 w-full bg-muted mt-3 rounded-full overflow-hidden">
                                         <div className="h-full bg-primary w-[75%]" />
                                     </div>
                                </div>
                                <div className="absolute left-[-20px] top-20 bg-background/80 backdrop-blur-md rounded-2xl border border-border shadow-xl p-5 w-[220px] transform rotate-3 group-hover:rotate-0 transition-transform duration-500 z-20">
                                     <span className="block text-xs text-muted-foreground font-fira mb-1 uppercase tracking-wider">Clases dominicales</span>
                                     <span className="block text-base font-bold text-foreground font-fira">Escuela Infantil</span>
                                     <div className="mt-3 flex -space-x-2">
                                         {[1,2,3].map(i => (
                                             <div key={i} className="w-6 h-6 rounded-full bg-muted border-2 border-background" />
                                         ))}
                                     </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </ScrollAnimationWrapper>
            </div>
        </section>
    );
}
