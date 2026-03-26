"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";
import { useWaitlist } from "@/context/WaitlistContext";

export default function Navbar() {
    const { openWaitlist } = useWaitlist();
    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[98%] max-w-7xl flex items-center justify-between px-4 py-2 rounded-[20px] bg-background/80 border border-border backdrop-blur-sm z-50">
            {/* Left: Logo */}
            <div className="ml-4 z-10 select-none flex items-center">
                <Logo className="text-foreground w-28 h-8" />
            </div>

            {/* Center: Navigation Buttons - Absolutely Centered */}
            <div className="hidden md:flex gap-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {[
                    { label: "INICIO", id: "home" },
                    { label: "NOSOTROS", id: "about" },
                    { label: "MINISTERIOS", id: "ministries" },
                    { label: "EVENTOS", id: "events" }
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
                        className="h-8 rounded-[15px] bg-muted px-4 lg:px-6 text-[12px] lg:text-[13.6px] text-foreground hover:bg-accent transition-all duration-300 hover:scale-105 font-fira"
                    >
                        {item.label}
                    </Button>
                ))}
            </div>

            {/* Right: Sign Up Button */}
            <div className="z-10">
                <Button
                    onClick={openWaitlist}
                    className="h-9 rounded-[15px] bg-primary px-4 md:px-6 text-[13px] md:text-[15px] text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 font-fira whitespace-nowrap">
                    VISÍTANOS
                </Button>
            </div>
        </div>
    );
}
