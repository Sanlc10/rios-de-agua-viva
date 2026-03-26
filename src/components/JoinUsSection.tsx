"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import { useWaitlist } from "@/context/WaitlistContext";

export default function JoinUsSection() {
    const { openWaitlist } = useWaitlist();
    return (
        <section className="relative w-full h-[600px] md:h-[700px] flex flex-col items-center justify-center overflow-hidden font-fira bg-background">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background.png"
                    alt="Únete a Nosotros Background"
                    fill
                    className="object-cover object-center opacity-70"
                    quality={100}
                />
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-background/60" />
            </div>

            {/* Top Gradient Transition (Pricing -> Get Started) */}
            <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />

            {/* Bottom Gradient Transition (Get Started -> Footer) */}
            <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

            {/* Main Content */}
            <div className="relative z-10 mx-auto max-w-4xl px-4 flex flex-col items-center text-center">
                <ScrollAnimationWrapper>
                    <div className="flex flex-col items-center">
                        {/* Title */}
                        <h2 className="text-foreground text-[48px] md:text-[80px] leading-tight mb-8">
                            <span className="font-seasons italic text-primary">Únete</span>{" "}
                            <span className="font-seasons text-foreground">a la familia</span>
                        </h2>

                        {/* Subtitle */}
                        <p className="text-muted-foreground text-sm md:text-xl font-fira tracking-wide mb-12 max-w-2xl">
                            Te invitamos a ser parte de lo que Dios está haciendo. Conéctate, crece espiritualmente y descubre tu propósito con nosotros.
                        </p>

                        {/* CTA Button */}
                        <Button
                            onClick={openWaitlist}
                            className="h-14 px-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 font-fira text-sm md:text-base font-semibold shadow-lg uppercase tracking-wide"
                        >
                            Contáctanos
                        </Button>
                    </div>
                </ScrollAnimationWrapper>
            </div>
        </section>
    );
}
