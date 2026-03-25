"use client";

import React from "react";
import Image from "next/image";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import { cn } from "@/lib/utils";

// Custom Testimonial Content
const TESTIMONIALS_DATA = [
    {
        quote: "Canon's conversational input is a lifesaver. I just tell it 'Plan my week' and it actually understands my priorities. It feels like magic.",
        author: "Jessica Lee",
        role: "Product Manager",
        initials: "JL",
        image: "/testimonials-ui.png"
    },
    {
        quote: "Finally, a calendar that doesn't feel like a spreadsheet. The AI conflict detection saved me from double-booking twice this week alone.",
        author: "David Kim",
        role: "Senior Developer",
        initials: "DK",
        image: "/testimonials-ui-2.png"
    },
    {
        quote: "The UI is just stunning. It feels like the future of organization. Managing tasks and events in one place is exactly what I needed.",
        author: "Emily Chen",
        role: "Freelance Designer",
        initials: "EC",
        image: "/testimonials-ui-3.png"
    }
];

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="relative w-full py-32 overflow-hidden font-fira bg-black">
            {/* Main Section Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/track-everything-background.png"
                    alt="Background"
                    fill
                    className="object-cover object-center opacity-70"
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Top Gradient Transition */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
            {/* Bottom Gradient Transition */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />


            <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 flex flex-col items-center">
                <ScrollAnimationWrapper>
                    {/* Header */}
                    <div className="text-center mb-20 md:mb-32">
                        <h2 className="text-white text-[48px] md:text-[64px] font-seasons italic font-normal mb-8 leading-tight">
                            Loved by <span className="font-seasons text-white not-italic">high performers</span>
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto font-fira tracking-wide">
                            From founders to freelancers, discover why productivity obsessed users are switching to Canon.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
                        {TESTIMONIALS_DATA.map((item, index) => (
                            <div
                                key={index}
                                className="group relative p-8 md:p-10 rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-white/20 hover:-translate-y-2 flex flex-col h-full min-h-[320px]"
                            >
                                {/* Card Background Image */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={item.image}
                                        alt=""
                                        fill
                                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Dark Overlay for readability */}
                                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-colors duration-500 group-hover:bg-black/50" />
                                </div>

                                {/* Content Container - Relative z-10 to sit above image */}
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Quote Icon */}
                                    <div className="mb-8 opacity-50">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                                        </svg>
                                    </div>

                                    {/* Content */}
                                    <p className="text-white/95 font-fira text-base md:text-lg leading-relaxed mb-8 flex-grow drop-shadow-sm">
                                        "{item.quote}"
                                    </p>

                                    {/* Footer */}
                                    <div className="flex items-center gap-4 mt-auto">
                                        <div className="size-10 rounded-full bg-white/10 flex items-center justify-center font-seasons font-bold text-white border border-white/20 backdrop-blur-sm">
                                            {item.initials}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-seasons text-lg md:text-xl drop-shadow-md">{item.author}</h4>
                                            <p className="text-white/70 text-xs uppercase tracking-wider font-fira">{item.role}</p>
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
