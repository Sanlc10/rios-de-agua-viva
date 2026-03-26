"use client";

import React from "react";
import Image from "next/image";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";

// Custom Testimonial Content
const TESTIMONIALS_DATA = [
    {
        quote: "Llegué buscando un lugar donde congregarme y encontré una verdadera familia. Dios ha restaurado cada área de mi vida desde que me conecté con esta iglesia.",
        author: "Carlos Mendoza",
        role: "Miembro desde 2021",
        initials: "CM",
        image: "" // Placeholder
    },
    {
        quote: "El ministerio me ayudó a encontrar mi propósito. Antes me sentía perdido, pero ahora sé que estoy llamado a cosas grandes y sirvo con pasión.",
        author: "Andrea Gómez",
        role: "Ministerio de Jóvenes",
        initials: "AG",
        image: "" // Placeholder
    },
    {
        quote: "A través de las células de oración y el discipulado, nuestro matrimonio fue sanado por completo. Ahora juntos servimos para edificar a otros.",
        author: "Familia Rodríguez",
        role: "Red de Matrimonios",
        initials: "FR",
        image: "" // Placeholder
    }
];

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="relative w-full py-32 overflow-hidden font-fira bg-background">
            {/* Main Section Background */}
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
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
            {/* Bottom Gradient Transition */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />


            <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 flex flex-col items-center">
                <ScrollAnimationWrapper>
                    {/* Header */}
                    <div className="text-center mb-20 md:mb-32">
                        <h2 className="text-foreground text-[48px] md:text-[64px] font-seasons italic font-normal mb-8 leading-tight">
                            Vidas <span className="font-seasons text-foreground not-italic">transformadas</span>
                        </h2>
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg mx-auto font-fira tracking-wide">
                            Descubre lo que Dios está haciendo en medio de nosotros. Cada testimonio es una muestra del amor y el poder de Jesús.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
                        {TESTIMONIALS_DATA.map((item, index) => (
                            <div
                                key={index}
                                className="group relative p-8 md:p-10 rounded-3xl overflow-hidden border border-border/50 transition-all duration-500 hover:border-foreground/20 hover:-translate-y-2 flex flex-col h-full min-h-[380px] shadow-sm hover:shadow-md bg-background/50 backdrop-blur-sm"
                            >
                                {/* Card Background Image / Placeholder */}
                                <div className="absolute inset-0 z-0">
                                    {item.image ? (
                                        <Image
                                            src={item.image}
                                            alt=""
                                            fill
                                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-primary/5 transition-colors duration-700 group-hover:bg-primary/10 flex items-center justify-center">
                                            {/* Placeholder texture/icon */}
                                            <User className="h-32 w-32 text-primary/10 -rotate-12 scale-150" />
                                        </div>
                                    )}
                                    {/* Light Overlay for readability */}
                                    <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px] transition-colors duration-500 group-hover:bg-background/60" />
                                </div>

                                {/* Content Container - Relative z-10 to sit above image */}
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Quote Icon */}
                                    <div className="mb-8 opacity-20">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-foreground">
                                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                                        </svg>
                                    </div>

                                    {/* Content */}
                                    <p className="text-foreground font-fira text-base md:text-lg leading-relaxed mb-8 flex-grow drop-shadow-sm font-medium">
                                        "{item.quote}"
                                    </p>

                                    {/* Footer */}
                                    <div className="flex items-center gap-4 mt-auto">
                                        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center font-seasons font-bold text-primary border border-primary/20 backdrop-blur-sm">
                                            {item.initials}
                                        </div>
                                        <div>
                                            <h4 className="text-foreground font-seasons text-lg md:text-xl drop-shadow-md">{item.author}</h4>
                                            <p className="text-muted-foreground text-xs uppercase tracking-wider font-fira bg-muted/50 px-2 py-0.5 rounded-md inline-block mt-1">{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollAnimationWrapper>
            </div>
        </section>
    );
}
