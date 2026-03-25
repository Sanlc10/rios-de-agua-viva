"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight, Plus } from "lucide-react";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import { motion } from "framer-motion";

export default function ManageTasksSection() {
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

            <div className="relative z-10 mx-auto max-w-7xl px-4 flex flex-col items-center">
                <ScrollAnimationWrapper>
                    {/* Header content */}
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-white text-[48px] md:text-[56px] font-seasons italic font-normal mb-6 leading-tight"
                        >
                            Build <span className="font-seasons text-white not-italic">your future</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg mx-auto font-fira"
                        >
                            Stay organized with intelligent task management that proactively plans your day for you.
                        </motion.p>
                    </div>

                    {/* Main UI Container */}
                    <div className="relative w-full max-w-6xl rounded-[30px] overflow-hidden shadow-2xl aspect-[16/10] md:h-[700px] border border-white/10 group">
                        {/* Tasks UI Background Image - Full Cover */}
                        <Image
                            src="/tasks-ui.png"
                            alt="Tasks UI Background"
                            fill
                            className="object-cover object-center"
                            quality={100}
                        />

                        {/* Overlay Card Container - The "Card" */}
                        <div className="absolute inset-4 md:inset-8 rounded-[25px] overflow-hidden border border-black/10 flex flex-col md:flex-row shadow-xl">

                            {/* LEFT SIDE: Opaque/Glass Task List */}
                            <div className="relative w-full md:w-[45%] h-full bg-[#F2F2EB]/60 backdrop-blur-xl p-8 md:p-10 flex flex-col border-r border-black/5">
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="h-9 w-9 rounded-full bg-[#A3906D] flex items-center justify-center text-white shadow-sm">
                                        <Plus className="h-5 w-5" />
                                    </div>
                                    <h3 className="font-seasons text-4xl text-black/90">
                                        <span className="italic">New</span> <span className="not-italic">task</span>
                                    </h3>
                                </div>

                                <div className="w-full h-px bg-black/10 mb-8" />

                                {/* List */}
                                <div className="flex flex-col gap-6">
                                    {[
                                        { label: "Go for a hike", time: "6:00 AM", color: "bg-green-600" },
                                        { label: "Meeting with the marketing team", time: "11:00 AM", color: "bg-red-600" },
                                        { label: "Buy the food for tomorrow", time: "6:00 PM", color: "bg-yellow-400" },
                                        { label: "Send weekly report to the stakeholders", time: "4:00 PM", color: "bg-red-600" },
                                    ].map((task, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                                            viewport={{ once: true }}
                                            className="flex items-center gap-4 group/item"
                                        >
                                            {/* Indicator */}
                                            <div className={`w-1.5 h-6 rounded-full ${task.color}`} />

                                            {/* Checkbox */}
                                            <div className="h-5 w-5 border border-black/40 rounded-[4px] bg-transparent" />

                                            {/* Text */}
                                            <span className="flex-1 font-fira text-sm md:text-[15px] text-black/80 font-medium tracking-wide">
                                                {task.label}
                                            </span>

                                            {/* Time */}
                                            <span className="font-fira text-xs md:text-sm text-black/60 font-medium tabular-nums">
                                                {task.time}
                                            </span>
                                        </motion.div>
                                    ))}

                                    {/* Empty slots visual */}
                                    {[1, 2, 3].map((item, i) => (
                                        <motion.div
                                            key={`empty-${i}`}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 0.2 }}
                                            transition={{ duration: 0.5, delay: 1 + (i * 0.1) }}
                                            viewport={{ once: true }}
                                            className={`flex items-center gap-4 ${i === 0 ? 'mt-2' : ''}`}
                                        >
                                            <div className="h-5 w-5 border border-black/40 rounded-[4px]" />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* RIGHT SIDE: Semi-Transparent + AI Chat */}
                            <div className="relative flex-1 h-full flex flex-col justify-end p-8 md:p-10 bg-[#F2F2EB]/15 backdrop-blur-md">
                                {/* Dummy Chat Messages - Floating */}
                                <div className="flex flex-col gap-4 mb-24 w-full md:max-w-md ml-auto mask-linear-fade-top">
                                    {[
                                        { text: "You have a gap between 2 PM and 4 PM. Should I schedule deep work?", isUser: false },
                                        { text: "Yes, block it for the report.", isUser: true },
                                        { text: "I've blocked 4 PM for the report. Want me to draft an outline?", isUser: false },
                                        { text: "Yes, include the Q3 projections.", isUser: true },
                                        { text: "On it. I've pulled the data from Salesforce. Draft is ready for review.", isUser: false }
                                    ].map((msg, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                            transition={{ duration: 0.5, delay: 0.8 + (idx * 0.6) }} // Slow staggered conversation
                                            viewport={{ once: true }}
                                            className={`${msg.isUser
                                                ? "self-start bg-[#1C1C1C] rounded-tl-none border-white/10 text-white/95"
                                                : "self-end bg-[#E8E8E3] rounded-tr-none border-white/40 text-black/80"} 
                                                px-5 py-4 rounded-2xl shadow-md max-w-[90%] border text-sm font-fira`}
                                        >
                                            <p>{msg.text}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Chat Input Pill - Full Width */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    viewport={{ once: true }}
                                    className="absolute bottom-8 left-8 right-8 md:bottom-10 md:left-10 md:right-10 flex items-center justify-between bg-[#E8E8E3] w-auto h-[56px] rounded-full px-2 pl-6 shadow-lg border border-white/50"
                                >
                                    <span className="text-black/40 text-sm font-fira italic">Ask Canon...</span>
                                    <button className="h-[44px] w-[44px] bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-105 transition-transform">
                                        <ChevronRight className="w-5 h-5 text-black" />
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimationWrapper>
            </div>
        </section>
    );
}
