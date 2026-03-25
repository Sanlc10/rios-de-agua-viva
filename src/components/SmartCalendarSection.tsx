"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function SmartCalendarSection() {
    return (
        <section className="relative w-full py-24 overflow-hidden font-fira bg-black">
            {/* Background Image (Topography) */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/track-everything-background.png"
                    alt="Track Everything Background"
                    fill
                    className="object-cover object-center opacity-100" // Assuming full opacity as per image, maybe adjusted later
                    quality={100}
                />
                {/* Optional overlay if needed for contrast */}
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Top Gradient Transition (Hero -> SC) */}
            <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none" />

            {/* Bottom Gradient Transition (SC -> Pricing) */}
            <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 flex flex-col items-center">
                {/* Header content */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-white text-[48px] md:text-[56px] font-seasons italic font-normal mb-6">
                        Smart <span className="font-seasons text-white not-italic">calendar</span>
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg mx-auto font-fira">
                        AI that adapts to your schedule and helps you keep on track of all your activities so you never miss what truly matters; TIME
                    </p>
                </div>

                {/* Main UI Container */}
                <div className="relative w-full max-w-5xl rounded-[65px] overflow-hidden shadow-2xl aspect-[16/9] md:aspect-auto md:h-[600px]">
                    {/* Sunset UI Background */}
                    <Image
                        src="/track-everything-ui.png"
                        alt="UI Background"
                        fill
                        className="object-cover object-center"
                        quality={100}
                    />

                    {/* Glass Cards Overlay Container */}
                    <div className="absolute inset-0 p-8 md:p-12 flex flex-col md:flex-row gap-6">

                        {/* Left Card: Calendar */}
                        <div className="flex-1 bg-white/40 backdrop-blur-md rounded-[25px] p-6 md:p-8 flex flex-col shadow-inner border border-white/20">
                            <span className="text-black/80 font-fira text-sm tracking-widest mb-6 uppercase">January</span>

                            {/* Calendar Grid Mockup */}
                            <div className="grid grid-cols-7 gap-3 md:gap-4 flex-1 content-start">
                                {/* Days 1-31 */}
                                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                                    // Dummy logic for event indicators
                                    const hasEvent = [5, 8, 12, 16, 20, 24, 28].includes(day);

                                    return (
                                        <div
                                            key={day}
                                            className={`aspect-square rounded-[8px] md:rounded-[12px] border border-black/10 transition-colors flex flex-col items-center justify-center relative ${hasEvent ? "bg-white/40" : "hover:bg-black/5"}`}
                                        >
                                            <span className="text-black/70 font-fira text-sm md:text-base mb-1">{day}</span>

                                            {hasEvent && (
                                                <div className={`absolute bottom-2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${day % 2 === 0 ? 'bg-rose-400' : 'bg-blue-400'} shadow-sm`} />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Card: AI Chat */}
                        <div className="w-full md:w-[350px] bg-white/40 backdrop-blur-md rounded-[25px] p-6 md:p-8 flex flex-col shadow-inner border border-white/20 relative">

                            <div className="flex-1 flex flex-col gap-3 overflow-hidden mb-4 justify-end mask-linear-fade">
                                {/* User Message 1 */}
                                <div className="self-end bg-white/60 backdrop-blur-sm px-4 py-2 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm">
                                    <p className="text-black/80 text-xs md:text-sm font-fira">Any free slots on Tuesday?</p>
                                </div>

                                {/* AI Response 1 */}
                                <div className="self-start bg-black/40 backdrop-blur-sm px-4 py-2 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm border border-white/5">
                                    <p className="text-white/90 text-xs md:text-sm font-fira">You have 2 hours free between 10 AM and 12 PM.</p>
                                </div>

                                {/* User Message 2 */}
                                <div className="self-end bg-white/60 backdrop-blur-sm px-4 py-2 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm">
                                    <p className="text-black/80 text-xs md:text-sm font-fira">Schedule a lunch with the team.</p>
                                </div>

                                {/* AI Response 2 */}
                                <div className="self-start bg-black/40 backdrop-blur-sm px-4 py-2 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm border border-white/5">
                                    <p className="text-white/90 text-xs md:text-sm font-fira">Done. Added "Team Lunch" for Friday at 1 PM.</p>
                                </div>
                            </div>

                            {/* Chat Input Area */}
                            <div className="relative w-full h-[50px] bg-white/70 backdrop-blur-sm rounded-full flex items-center px-4 shadow-sm">
                                <span className="text-black/40 text-sm font-fira flex-1 truncate">Type your request...</span>

                                {/* Send Button */}
                                <button className="h-[38px] w-[38px] bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm">
                                    <ChevronRight className="w-4 h-4 text-black" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
