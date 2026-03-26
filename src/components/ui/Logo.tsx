import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
}

export default function Logo({ className }: LogoProps) {
    return (
        <div className={cn("relative w-10 h-10", className)}>
            <Image
                src="/logo.png"
                alt="Logo"
                fill
                priority
                className="object-contain"
            />
        </div>
    );
}
