"use client";

import React from "react";
import Image from "next/image";
import { Mic, ShieldAlert, RefreshCw, Search, ChevronRight } from "lucide-react";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import TypewriterText from "@/components/TypewriterText";

export default function AIFeaturesSection() {
    return (
        <section className="relative w-full py-24 overflow-hidden font-fira bg-black">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/track-everything-background.png"
                    alt="Background"
                    fill
                    className="object-cover object-center opacity-100"
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Top Gradient Transition */}
            <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

            {/* Bottom Gradient Transition */}
            <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
                <ScrollAnimationWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        {/* LEFT COLUMN: Text & Cards */}
                        <div className="flex flex-col gap-12">
                            {/* Headings */}
                            <div>
                                <h2 className="text-white text-[48px] md:text-[56px] font-seasons italic font-normal mb-4 leading-tight">
                                    Built <span className="font-seasons text-white not-italic">with intelligence</span>
                                </h2>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg font-fira">
                                    Stop managing your calendar. Let Canon do it for you with conversational AI that adapts to your life.
                                </p>
                            </div>

                            {/* Feature Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Card 1 */}
                                <div className="bg-white/10 backdrop-blur-md rounded-[20px] p-6 border border-white/10 flex flex-col gap-4 hover:bg-white/15 transition-colors">
                                    <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <Mic className="h-5 w-5 text-white/90" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-sm mb-2">Natural Language</h3>
                                        <p className="text-white/60 text-xs leading-relaxed">
                                            Just say it. Canon schedules it. Create events and tasks as fast as you can speak or type.
                                        </p>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="bg-white/10 backdrop-blur-md rounded-[20px] p-6 border border-white/10 flex flex-col gap-4 hover:bg-white/15 transition-colors">
                                    <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <ShieldAlert className="h-5 w-5 text-white/90" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-sm mb-2">Conflict Detection</h3>
                                        <p className="text-white/60 text-xs leading-relaxed">
                                            Never double-book again. Canon proactively spots overlaps and suggests the best alternatives.
                                        </p>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className="bg-white/10 backdrop-blur-md rounded-[20px] p-6 border border-white/10 flex flex-col gap-4 hover:bg-white/15 transition-colors">
                                    <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <RefreshCw className="h-5 w-5 text-white/90" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-sm mb-2">Adaptive Reorg</h3>
                                        <p className="text-white/60 text-xs leading-relaxed">
                                            Plans change? No problem. Automatically reshuffle your day based on priorities and deadlines.
                                        </p>
                                    </div>
                                </div>

                                {/* Card 4 */}
                                <div className="bg-white/10 backdrop-blur-md rounded-[20px] p-6 border border-white/10 flex flex-col gap-4 hover:bg-white/15 transition-colors">
                                    <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <Search className="h-5 w-5 text-white/90" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-sm mb-2">Instant Query</h3>
                                        <p className="text-white/60 text-xs leading-relaxed">
                                            Ask anything. "When is my next free slot?" Get immediate answers without searching.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Image & Overlay */}
                        <div className="flex justify-center w-full">
                            <div className="relative w-full max-w-[380px] h-[650px] rounded-[65px] overflow-hidden shadow-2xl border border-white/10">
                                {/* Main Image */}
                                <Image
                                    src="/ai-ui.png"
                                    alt="AI Interface"
                                    fill
                                    className="object-cover object-center"
                                    quality={100}
                                />

                                {/* Large Glass Overlay Frame (Inner Border) */}
                                <div className="absolute inset-x-4 top-12 bottom-4 bg-white/10 backdrop-blur-md rounded-[45px] border border-white/10 flex flex-col justify-end p-6">

                                    {/* Chat Messages */}
                                    <div className="flex-1 flex flex-col gap-3 mb-4 justify-end overflow-hidden mask-linear-fade">
                                        {/* User Message 1 */}
                                        <div className="self-end bg-white/20 backdrop-blur-md px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm border border-white/5">
                                            <p className="text-white text-xs md:text-sm font-fira">How's my week looking?</p>
                                        </div>

                                        {/* AI Response 1 */}
                                        <div className="self-start bg-black/40 backdrop-blur-md px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm border border-white/5">
                                            <p className="text-white/90 text-xs md:text-sm font-fira">Busy. You have 12 meetings and 3 deadlines approaching.</p>
                                        </div>

                                        {/* User Message 2 */}
                                        <div className="self-end bg-white/20 backdrop-blur-md px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm border border-white/5">
                                            <p className="text-white text-xs md:text-sm font-fira">Clear my afternoon.</p>
                                        </div>

                                        {/* AI Response 2 */}
                                        <div className="self-start bg-black/40 backdrop-blur-md px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm border border-white/5">
                                            <p className="text-white/90 text-xs md:text-sm font-fira">Rescheduled "Strategy Review" to tomorrow at 10 AM. You're free until 5 PM.</p>
                                        </div>
                                    </div>

                                    {/* Input Area */}
                                    <div className="relative w-full h-[60px] bg-white/70 backdrop-blur-md rounded-full flex items-center px-6 shadow-inner">
                                        <span className="text-black/70 text-sm font-fira flex-1 truncate">
                                            <TypewriterText phrases={[
                                                "Reschedule my morning meeting...",
                                                "Find a time for lunch with Sarah.",
                                                "Clear my afternoon for deep work.",
                                                "What's on my agenda today?"
                                            ]} />
                                            <span className="animate-pulse">|</span>
                                        </span>
                                        <button className="h-[40px] w-[40px] bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-105 transition-transform">
                                            <ChevronRight className="w-5 h-5 text-black" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </ScrollAnimationWrapper>
            </div>
        </section>
    );
}
