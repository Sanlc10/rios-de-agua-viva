"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";
import { useWaitlist } from "@/context/WaitlistContext";

export default function Navbar() {
    const { openWaitlist } = useWaitlist();
    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[98%] max-w-7xl flex items-center justify-between px-4 py-2 rounded-[20px] bg-white/20 backdrop-blur-sm z-50">
            {/* Left: Logo + Text */}
            <div className="ml-4 z-10 select-none flex items-center gap-3">
                <Logo className="text-white w-6 h-6" />
                <span className="text-white text-xl font-fira tracking-wide">CANON</span>
            </div>

            {/* Center: Navigation Buttons - Absolutely Centered */}
            <div className="hidden md:flex gap-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {[
                    { label: "HOME", id: "home" },
                    { label: "FEATURES", id: "features" },
                    { label: "PRICING", id: "pricing" },
                    { label: "TESTIMONIALS", id: "testimonials" }
                ].map((item) => (
                    <Button
                        key={item.label}
                        variant="ghost"
                        onClick={() => {
                            const element = document.getElementById(item.id);
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="h-8 rounded-[15px] bg-white/30 px-4 lg:px-6 text-[12px] lg:text-[13.6px] text-white hover:bg-white/50 transition-all duration-300 hover:scale-105 font-fira"
                    >
                        {item.label}
                    </Button>
                ))}
            </div>

            {/* Right: Sign Up Button */}
            <div className="z-10">
                <Button
                    onClick={openWaitlist}
                    className="h-9 rounded-[15px] bg-white px-4 md:px-6 text-[13px] md:text-[15px] text-black hover:bg-white/90 hover:scale-105 transition-all duration-300 font-fira whitespace-nowrap">
                    SIGN UP
                </Button>
            </div>
        </div>
    );
}
