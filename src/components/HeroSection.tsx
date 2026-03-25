"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

// Rotating text content
const TYPING_PHRASES = [
    "What are my plans for tomorrow?",
    "Schedule a meeting with the team.",
    "Remind me to call John at 5 PM.",
    "Draft a proposal for the new project.",
];

import TypewriterText from "@/components/TypewriterText";
import { useWaitlist } from "@/context/WaitlistContext";

export default function HeroSection() {
    const { openWaitlist } = useWaitlist();
    return (
        <div id="home" className="relative h-screen w-full overflow-hidden font-fira bg-black">
            {/* Background Image */}
            <Image
                src="/canon-background.png"
                alt="Canon Background"
                fill
                priority
                className="object-cover object-center opacity-90"
                quality={100}
            />



            {/* Bottom Gradient Transition */}
            <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none" />

            {/* Main Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
                <ScrollAnimationWrapper>
                    <div className="flex flex-col items-center">
                        <div className="mb-4 md:mb-6 rounded-[15px] bg-white/10 backdrop-blur-md px-4 py-1.5 shadow-lg scale-90 md:scale-100 border border-white/10">
                            <span className="text-[13px] md:text-[15px] tracking-wide text-white font-fira">
                                CANON CALENDAR
                            </span>
                        </div>

                        {/* Main Title */}
                        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-white leading-none">
                            {/* "Own" */}
                            <span className="font-seasons italic font-bold text-[55px] md:text-[90px]">
                                Own
                            </span>
                            {/* "your time" */}
                            <span className="font-seasons font-normal text-[55px] md:text-[95px]">
                                your time
                            </span>
                        </div>

                        {/* Subtitle */}
                        <div className="mt-4 flex flex-col gap-0 p-2 text-center">
                            <p className="font-fira text-[15px] md:text-[21px] text-white leading-tight opacity-90">
                                Canon is your personal AI organization advisor.
                            </p>
                            <p className="font-fira text-[15px] md:text-[21px] text-[#d9d9d9] leading-tight hidden md:block">
                                Manage tasks, create events, save time
                            </p>
                            <p className="font-fira text-[15px] md:text-[21px] text-[#d9d9d9] leading-tight md:hidden">
                                Manage tasks, create events, save time. Organize your future – in one place.
                            </p>
                            <p className="font-fira text-[15px] md:text-[21px] text-[#d9d9d9] leading-tight hidden md:block">
                                Organize your future – in one place
                            </p>
                        </div>

                        <div className="mt-8 md:mt-12">
                            <Button
                                onClick={openWaitlist}
                                className="h-[50px] md:h-[60px] rounded-[15px] bg-white px-6 md:px-8 text-[14px] md:text-[15.4px] text-black hover:bg-white/90 hover:scale-105 transition-all duration-300 font-fira uppercase tracking-wider">
                                GET STARTED -{">"}
                            </Button>
                        </div>

                        {/* AI Chat Bubble Component */}
                        <div className="mt-10 md:mt-16 w-full max-w-[90%] md:max-w-2xl px-0">
                            <div className="relative flex h-[60px] md:h-[70px] w-full items-center rounded-full bg-white/20 px-6 md:px-8 backdrop-blur-md">
                                <span className="text-[16px] md:text-[21px] text-white/90 font-fira text-left w-full pr-12 truncate">
                                    <TypewriterText phrases={TYPING_PHRASES} />
                                    <span className="animate-pulse">|</span>
                                </span>

                                {/* Send Button */}
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 flex h-[48px] w-[48px] md:h-[54px] md:w-[54px] items-center justify-center rounded-full bg-white/30 hover:bg-white/40 transition-colors">
                                    <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </ScrollAnimationWrapper>
            </div>
        </div >
    );
}
