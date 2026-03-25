"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import { useWaitlist } from "@/context/WaitlistContext";

export default function GetStartedSection() {
    const { openWaitlist } = useWaitlist();
    return (
        <section className="relative w-full h-[600px] md:h-[700px] flex flex-col items-center justify-center overflow-hidden font-fira bg-black">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/get-started-with-canon-background.png"
                    alt="Get Started Background"
                    fill
                    className="object-cover object-center"
                    quality={100}
                />
                {/* Optional overlay for text readability if needed, though image looks clear */}
                <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Top Gradient Transition (Pricing -> Get Started) */}
            <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

            {/* Bottom Gradient Transition (Get Started -> Footer) */}
            <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

            {/* Main Content */}
            <div className="relative z-10 mx-auto max-w-4xl px-4 flex flex-col items-center text-center">
                <ScrollAnimationWrapper>
                    <div className="flex flex-col items-center">
                        {/* Title */}
                        <h2 className="text-white text-[48px] md:text-[80px] leading-tight mb-8">
                            <span className="font-seasons italic">Get started</span>{" "}
                            <span className="font-seasons">with canon</span>
                        </h2>

                        {/* Subtitle */}
                        <p className="text-white/90 text-sm md:text-lg font-fira tracking-wide mb-12">
                            Join 100k+ users for only $5 per month.
                        </p>

                        {/* CTA Button */}
                        <Button
                            onClick={openWaitlist}
                            className="h-12 px-8 rounded-[12px] bg-white text-black hover:bg-white/90 hover:scale-105 transition-all duration-300 font-fira text-xs md:text-sm tracking-widest uppercase"
                        >
                            Get Started -&gt;
                        </Button>
                    </div>
                </ScrollAnimationWrapper>
            </div>
        </section>
    );
}
