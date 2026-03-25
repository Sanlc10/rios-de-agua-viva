import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
}

export default function Logo({ className }: LogoProps) {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("w-10 h-10", className)}
        >
            {/* Outer Circle */}
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="8" />
            {/* Middle Circle */}
            <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="8" />
            {/* Inner Dot/Circle */}
            <circle cx="50" cy="50" r="12" fill="currentColor" />
        </svg>
    );
}
