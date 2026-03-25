"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

    return (
        <section id="pricing" className="relative w-full py-20 overflow-hidden font-fira bg-black">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/pricing-background.png"
                    alt="Pricing Background"
                    fill
                    className="object-cover object-center opacity-80"
                    quality={100}
                />
                {/* Subtle gradient overlay to blend top/bottom if needed, or just dark overlay */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Top Gradient Transition (Pricing -> Hero) */}
            <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 flex flex-col items-center">
                {/* Title */}
                <h2 className="text-white text-[24px] md:text-[32px] font-fira tracking-tight text-center mb-10">
                    Simple and transparent pricing
                </h2>

                {/* Toggle */}
                <div className="flex justify-center w-full mb-16">
                    <div className="flex items-center bg-white/10 rounded-full p-1 backdrop-blur-sm border border-white/5">
                        <button
                            onClick={() => setBillingCycle("monthly")}
                            className={`px-8 py-2 rounded-full text-sm transition-all duration-300 ${billingCycle === "monthly"
                                ? "bg-white text-black font-semibold shadow-lg"
                                : "text-white/70 hover:text-white"
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle("yearly")}
                            className={`px-8 py-2 rounded-full text-sm transition-all duration-300 ${billingCycle === "yearly"
                                ? "bg-white text-black font-semibold shadow-lg"
                                : "text-white/70 hover:text-white"
                                }`}
                        >
                            Yearly
                        </button>
                    </div>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-4 md:px-0">

                    {/* Card 1: Starter */}
                    <div className="bg-white/10 backdrop-blur-md rounded-[30px] border border-white/10 p-10 flex flex-col items-center text-center h-[500px] hover:bg-white/15 transition-colors duration-500 group">
                        <span className="text-white/80 text-lg mb-8 font-fira tracking-wide">Starter</span>
                        <div className="flex items-baseline gap-2 mb-12">
                            <span className="text-4xl md:text-5xl font-bold text-white font-fira">
                                {billingCycle === "monthly" ? "5" : "50"}
                            </span>
                            <span className="text-xl text-white/60 font-fira">
                                / {billingCycle === "monthly" ? "month" : "year"}
                            </span>
                        </div>

                        {/* Visual Placeholder Lines for "Info Ficticia" */}
                        <div className="w-full flex flex-col gap-4 items-center opacity-60">
                            <div className="w-3/4 h-2 bg-white/20 rounded-full" />
                            <div className="w-1/2 h-2 bg-white/20 rounded-full" />
                            <div className="w-2/3 h-2 bg-white/20 rounded-full" />
                        </div>
                    </div>

                    {/* Card 2: Pro */}
                    <div className="bg-white/15 backdrop-blur-md rounded-[30px] border border-white/20 p-10 flex flex-col items-center text-center h-[500px] hover:bg-white/20 transition-colors duration-500 group relative overflow-hidden">
                        {/* Shine effect hint */}
                        <div className="absolute top-0 right-0 p-10 opacity-20 pointer-events-none">
                            <div className="w-32 h-32 bg-white blur-3xl rounded-full translate-x-10 -translate-y-10" />
                        </div>

                        <span className="text-white/90 text-lg mb-8 font-fira tracking-wide">Pro</span>
                        <div className="flex items-baseline gap-2 mb-12">
                            <span className="text-4xl md:text-5xl font-bold text-white font-fira">
                                {billingCycle === "monthly" ? "15" : "150"}
                            </span>
                            <span className="text-xl text-white/60 font-fira">
                                / {billingCycle === "monthly" ? "month" : "year"}
                            </span>
                        </div>

                        {/* Visual Placeholder Lines */}
                        <div className="w-full flex flex-col gap-4 items-center opacity-70">
                            <div className="w-3/4 h-2 bg-white/30 rounded-full" />
                            <div className="w-full h-2 bg-white/30 rounded-full" />
                            <div className="w-5/6 h-2 bg-white/30 rounded-full" />
                            <div className="w-2/3 h-2 bg-white/30 rounded-full" />
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Gradient Transition (Pricing -> Get Started) */}
            <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
        </section>
    );
}
