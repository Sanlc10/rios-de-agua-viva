"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Clock } from "lucide-react";

export default function LocationTimesSection() {
    const [location, setLocation] = useState<"central" | "online">("central");

    return (
        <section id="location" className="relative w-full py-20 overflow-hidden font-fira bg-background">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background.png"
                    alt="Location Background"
                    fill
                    className="object-cover object-center opacity-50"
                    quality={100}
                />
                <div className="absolute inset-0 bg-background/80" />
            </div>

            {/* Top Gradient Transition */}
            <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-background/80 to-transparent z-10 pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 flex flex-col items-center">
                {/* Title */}
                <h2 className="text-foreground text-[48px] md:text-[56px] font-seasons italic font-normal tracking-tight text-center mb-10 leading-tight">
                    Horarios y <span className="font-seasons text-foreground not-italic">ubicación</span>
                </h2>

                {/* Toggle */}
                <div className="flex justify-center w-full mb-16">
                    <div className="flex items-center bg-muted/50 rounded-full p-1 backdrop-blur-sm border border-border/50 shadow-sm">
                        <button
                            onClick={() => setLocation("central")}
                            className={`px-8 py-2.5 rounded-full text-sm font-fira transition-all duration-300 ${location === "central"
                                ? "bg-background text-foreground font-bold shadow-md opacity-100"
                                : "text-muted-foreground hover:text-foreground opacity-80"
                                }`}
                        >
                            Sede Central
                        </button>
                        <button
                            onClick={() => setLocation("online")}
                            className={`px-8 py-2.5 rounded-full text-sm font-fira transition-all duration-300 ${location === "online"
                                ? "bg-background text-foreground font-bold shadow-md opacity-100"
                                : "text-muted-foreground hover:text-foreground opacity-80"
                                }`}
                        >
                            Campus Online
                        </button>
                    </div>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-4 md:px-0">

                    {/* Card 1: Domingos */}
                    <div className="bg-background/40 backdrop-blur-sm border border-border/50 rounded-[30px] p-10 flex flex-col h-full hover:bg-background/60 transition-colors duration-500 group shadow-lg">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shadow-sm group-hover:bg-primary/20 transition-colors">
                                <Clock className="h-6 w-6 text-primary" />
                            </div>
                            <span className="text-foreground text-3xl font-seasons italic tracking-wide">Domingos</span>
                        </div>
                        
                        <div className="flex flex-col gap-6 mb-12 flex-1">
                            {location === "central" ? (
                                <>
                                    <div className="flex flex-col">
                                        <span className="text-3xl md:text-4xl font-bold text-foreground font-fira mb-1">09:00 AM</span>
                                        <span className="text-sm text-muted-foreground font-fira uppercase tracking-wider">Primer Servicio</span>
                                    </div>
                                    <div className="w-full h-px bg-border/50 border-dashed" />
                                    <div className="flex flex-col">
                                        <span className="text-3xl md:text-4xl font-bold text-foreground font-fira mb-1">11:30 AM</span>
                                        <span className="text-sm text-muted-foreground font-fira uppercase tracking-wider">Segundo Servicio</span>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex flex-col">
                                        <span className="text-3xl md:text-4xl font-bold text-foreground font-fira mb-1">10:00 AM</span>
                                        <span className="text-sm text-muted-foreground font-fira uppercase tracking-wider">Transmisión Global</span>
                                    </div>
                                    <div className="w-full h-px bg-border/50 border-dashed" />
                                    <div className="flex flex-col">
                                        <span className="text-3xl md:text-4xl font-bold text-foreground font-fira mb-1">06:00 PM</span>
                                        <span className="text-sm text-muted-foreground font-fira uppercase tracking-wider">Re-transmisión</span>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Location Box */}
                        <div className="w-full flex items-center gap-4 p-5 rounded-2xl bg-muted/60 border border-border/50 mt-auto transition-colors group-hover:bg-muted/80">
                            <MapPin className="h-6 w-6 text-primary shrink-0" />
                            <span className="text-sm text-foreground font-fira leading-snug">
                                {location === "central" 
                                    ? "Av. Las Américas 1234, Ciudad Nueva, Zona 10."
                                    : "A través de nuestro canal de YouTube y Facebook Live."}
                            </span>
                        </div>
                    </div>

                    {/* Card 2: Entre Semana */}
                    <div className="bg-background border border-border/50 rounded-[30px] p-10 flex flex-col h-full hover:bg-muted/30 transition-colors duration-500 group relative overflow-hidden shadow-xl">
                        {/* Shine effect hint */}
                        <div className="absolute top-0 right-0 p-10 opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-40">
                            <div className="w-32 h-32 bg-primary/30 blur-3xl rounded-full translate-x-10 -translate-y-10" />
                        </div>

                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                <Clock className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <span className="text-foreground text-3xl font-seasons italic tracking-wide">Entre Semana</span>
                        </div>
                        
                        <div className="flex flex-col gap-6 mb-12 flex-1 relative z-10 w-full">
                            {location === "central" ? (
                                <>
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex flex-col">
                                            <span className="text-lg font-bold text-foreground font-fira mb-1">Martes</span>
                                            <span className="text-xs text-muted-foreground font-fira uppercase tracking-wider">Oración y Ayuno</span>
                                        </div>
                                        <span className="text-xl font-bold text-primary font-fira">07:00 PM</span>
                                    </div>
                                    <div className="w-full h-px bg-border/50" />
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex flex-col">
                                            <span className="text-lg font-bold text-foreground font-fira mb-1">Jueves</span>
                                            <span className="text-xs text-muted-foreground font-fira uppercase tracking-wider">Estudio Bíblico</span>
                                        </div>
                                        <span className="text-xl font-bold text-primary font-fira">07:30 PM</span>
                                    </div>
                                    <div className="w-full h-px bg-border/50" />
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex flex-col">
                                            <span className="text-lg font-bold text-foreground font-fira mb-1">Viernes</span>
                                            <span className="text-xs text-muted-foreground font-fira uppercase tracking-wider">Red de Jóvenes</span>
                                        </div>
                                        <span className="text-xl font-bold text-primary font-fira">08:00 PM</span>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex flex-col">
                                            <span className="text-lg font-bold text-foreground font-fira mb-1">Miércoles</span>
                                            <span className="text-xs text-muted-foreground font-fira uppercase tracking-wider">Células Online</span>
                                        </div>
                                        <span className="text-xl font-bold text-primary font-fira">08:00 PM</span>
                                    </div>
                                    <div className="w-full h-px bg-border/50" />
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex flex-col">
                                            <span className="text-lg font-bold text-foreground font-fira mb-1">Viernes</span>
                                            <span className="text-xs text-muted-foreground font-fira uppercase tracking-wider">Jóvenes Online</span>
                                        </div>
                                        <span className="text-xl font-bold text-primary font-fira">08:30 PM</span>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Gradient Transition */}
            <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-background/80 to-transparent z-10 pointer-events-none" />
        </section>
    );
}
