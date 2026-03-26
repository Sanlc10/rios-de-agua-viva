"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function AboutUsSection() {
    return (
        <section id="about" className="relative w-full py-24 overflow-hidden font-fira bg-background">
            {/* Background Image (Topography) */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background.png"
                    alt="Background"
                    fill
                    className="object-cover object-center opacity-50"
                    quality={100}
                />
                {/* Subtle overlay for better text contrast */}
                <div className="absolute inset-0 bg-background/80" />
            </div>

            {/* Top Gradient Transition */}
            <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-background/80 to-transparent z-10 pointer-events-none" />

            {/* Bottom Gradient Transition */}
            <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-background/80 to-transparent z-10 pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 flex flex-col items-center">
                {/* Header content */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-foreground text-[48px] md:text-[56px] font-seasons italic font-normal mb-6">
                        Nuestra <span className="font-seasons text-foreground not-italic">visión</span>
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg mx-auto font-fira">
                        Somos una comunidad cristiana fundada en el amor de Cristo, dedicada a transformar vidas a través de la esperanza, la adoración genuina y el servicio compasivo hacia los demás.
                    </p>
                </div>

                {/* Main UI Container: Floating Image Placeholders */}
                <div className="relative w-full max-w-5xl rounded-[40px] md:rounded-[65px] overflow-hidden shadow-lg aspect-auto md:h-[600px] bg-background/40 backdrop-blur-sm border border-border/50 flex items-center justify-center p-6 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full h-full">
                        {/* Image Placeholder 1 */}
                        <div className="relative col-span-1 h-[250px] md:h-full rounded-[25px] overflow-hidden shadow-lg border border-border/50 transform md:-translate-y-6 hover:scale-105 transition-transform duration-500 bg-muted/60 flex flex-col items-center justify-center group">
                            <span className="text-muted-foreground font-fira text-lg font-medium group-hover:text-foreground transition-colors">Congregación</span>
                            <span className="text-muted-foreground/60 text-xs mt-2">(Placeholder: Imagen vertical)</span>
                        </div>

                        {/* Image Placeholder 2 */}
                        <div className="relative col-span-1 h-[250px] md:h-full rounded-[25px] overflow-hidden shadow-lg border border-border/50 transform md:translate-y-8 hover:scale-105 transition-transform duration-500 bg-muted/60 flex flex-col items-center justify-center group">
                            <span className="text-muted-foreground font-fira text-lg font-medium group-hover:text-foreground transition-colors">Adoración</span>
                            <span className="text-muted-foreground/60 text-xs mt-2">(Placeholder: Imagen centrada)</span>
                        </div>

                        {/* Image Placeholder 3 */}
                        <div className="relative col-span-1 h-[250px] md:h-full rounded-[25px] overflow-hidden shadow-lg border border-border/50 transform md:-translate-y-2 hover:scale-105 transition-transform duration-500 bg-muted/60 flex flex-col items-center justify-center group">
                            <span className="text-muted-foreground font-fira text-lg font-medium group-hover:text-foreground transition-colors">Comunidad</span>
                            <span className="text-muted-foreground/60 text-xs mt-2">(Placeholder: Imagen de familia)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
