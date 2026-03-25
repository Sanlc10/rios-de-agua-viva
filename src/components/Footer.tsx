"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

export default function Footer() {
    return (
        <footer className="relative w-full bg-black py-16 md:py-24 text-white font-fira overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 opacity-40">
                <Image
                    src="/canon-background.png"
                    alt="Footer Background"
                    fill
                    className="object-cover object-center"
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/90" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
                <ScrollAnimationWrapper>
                    <div className="flex flex-col gap-24 md:gap-32">
                        {/* Main Content Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
                            {/* Brand Column */}
                            <div className="col-span-1 md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
                                <h3 className="font-seasons text-xl mb-6 tracking-wide">CANON & CO.</h3>
                                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                                    Your personal AI organization advisor. Manage tasks, create events, save time.
                                </p>
                            </div>

                            {/* Links Column 1 */}
                            <div className="col-span-1 md:col-span-2 md:col-start-7 flex flex-col items-center md:items-start">
                                <h4 className="font-fira text-base font-medium mb-6 text-white/90">QUICK LINKS</h4>
                                <ul className="flex flex-col gap-3 text-white/60 text-sm">
                                    <li className="hover:text-white cursor-pointer transition-colors">Home</li>
                                    <li className="hover:text-white cursor-pointer transition-colors">Features</li>
                                    <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
                                    <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                                </ul>
                            </div>

                            {/* Links Column 2 */}
                            <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
                                <h4 className="font-fira text-base font-medium mb-6 text-white/90">LEGAL</h4>
                                <ul className="flex flex-col gap-3 text-white/60 text-sm">
                                    <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                                    <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
                                    <li className="hover:text-white cursor-pointer transition-colors">Cookie Policy</li>
                                </ul>
                            </div>

                            {/* Social Icons */}
                            <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-end">
                                <h4 className="font-fira text-base font-medium mb-6 text-white/90">FOLLOW US</h4>
                                <div className="flex gap-4">
                                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                                        <svg className="h-5 w-5 text-white/80" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                    </div>
                                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                                        <svg className="h-5 w-5 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                                    </div>
                                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                                        <svg className="h-5 w-5 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Copyright */}
                        <div className="w-full flex flex-col md:flex-row items-center justify-between text-white/40 text-xs border-t border-white/10 pt-8 mt-8">
                            <p>© 2026 Canon & Co. All rights reserved.</p>
                            <p className="mt-2 md:mt-0">Designed with precision.</p>
                        </div>
                    </div>
                </ScrollAnimationWrapper>
            </div>
        </footer>
    );
}
