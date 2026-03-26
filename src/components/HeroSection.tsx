"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

// Rotating text content
const TYPING_PHRASES = [
    "Busco paz y esperanza...",
    "¿A qué hora es el servicio el domingo?",
    "Quiero aprender más de Dios.",
    "¿Tienen ministerios para jóvenes?",
];

import TypewriterText from "@/components/TypewriterText";
import { useWaitlist } from "@/context/WaitlistContext";

export default function HeroSection() {
    const { openWaitlist } = useWaitlist();
    return (
        <div id="home" className="relative h-screen w-full overflow-hidden font-fira bg-background">
            {/* Background Image */}
            <Image
                src="/hero-temporal.png"
                alt="Canon Background"
                fill
                priority
                className="object-cover object-center opacity-90"
                quality={100}
            />



            {/* Bottom Gradient Transition */}
            <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-background/80 to-transparent z-20 pointer-events-none" />

            {/* Main Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
                <ScrollAnimationWrapper>
                    <div className="flex flex-col items-center">
                        <div className="mb-4 md:mb-6 rounded-[15px] bg-background/60 backdrop-blur-md px-4 py-1.5 shadow-lg scale-90 md:scale-100 border border-border/50">
                            <span className="text-[13px] md:text-[15px] tracking-wide text-foreground font-fira">
                                ÚNETE A NUESTRA FAMILIA
                            </span>
                        </div>

                        {/* Main Title */}
                        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-foreground leading-none">
                            {/* "Own" */}
                            <span className="font-seasons italic font-bold text-[55px] md:text-[75px] lg:text-[90px]">
                                Bienvenido a
                            </span>
                            {/* "your time" */}
                            <span className="font-seasons font-normal text-[55px] md:text-[75px] lg:text-[85px] leading-tight">
                                Ríos de Agua Viva
                            </span>
                        </div>

                        {/* Subtitle */}
                        <div className="mt-4 flex flex-col gap-0 p-2 text-center">
                            <p className="font-fira text-[15px] md:text-[21px] text-muted-foreground leading-tight">
                                Una familia de fe, esperanza y amor.
                            </p>
                            <p className="font-fira text-[15px] md:text-[21px] text-muted-foreground leading-tight hidden md:block">
                                Ven tal como eres y experimenta la presencia de Dios.
                            </p>
                            <p className="font-fira text-[15px] md:text-[21px] text-muted-foreground leading-tight md:hidden">
                                Ven tal como eres y experimenta la presencia de Dios en comunidad.
                            </p>
                            <p className="font-fira text-[15px] md:text-[21px] text-muted-foreground leading-tight hidden md:block">
                                Un lugar para crecer juntos.
                            </p>
                        </div>

                        <div className="mt-8 md:mt-12">
                            <Button
                                onClick={openWaitlist}
                                className="h-[50px] md:h-[60px] rounded-[15px] bg-primary px-6 md:px-8 text-[14px] md:text-[15.4px] text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 font-fira uppercase tracking-wider">
                                CONÓCENOS -{">"}
                            </Button>
                        </div>

                        {/* AI Chat Bubble Component */}
                        <div className="mt-10 md:mt-16 w-full max-w-[90%] md:max-w-2xl px-0">
                            <div className="relative flex h-[60px] md:h-[70px] w-full items-center rounded-full bg-background/60 backdrop-blur-md border border-border/50 px-6 md:px-8 shadow-xl">
                                <span className="text-[16px] md:text-[21px] text-foreground font-fira text-left w-full pr-12 truncate">
                                    <TypewriterText phrases={TYPING_PHRASES} />
                                    <span className="animate-pulse">|</span>
                                </span>

                                {/* Send Button */}
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 flex h-[48px] w-[48px] md:h-[54px] md:w-[54px] items-center justify-center rounded-full bg-background hover:bg-background/80 transition-colors shadow-sm">
                                    <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                                </button>
                            </div>
                        </div>
                    </div>
                </ScrollAnimationWrapper>
            </div>
        </div >
    );
}
