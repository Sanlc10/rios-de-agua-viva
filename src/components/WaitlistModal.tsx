
"use client";

import { useState } from "react";
import { useWaitlist } from "@/context/WaitlistContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function WaitlistModal() {
    const { isOpen, closeWaitlist } = useWaitlist();
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setMessage("");

        try {
            const res = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setStatus("success");
            setMessage("You've been added to the waitlist!");
            setEmail("");
            // Close modal after 2 seconds
            setTimeout(() => {
                closeWaitlist();
                setStatus("idle");
            }, 3000);
        } catch (error: any) {
            setStatus("error");
            setMessage(error.message);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeWaitlist}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-black/80 p-0 shadow-2xl backdrop-blur-xl"
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeWaitlist}
                                className="absolute right-4 top-4 rounded-full p-2 text-white/50 hover:bg-white/10 hover:text-white transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="p-8 pt-10 text-center">
                                {status === "success" ? (
                                    <div className="flex flex-col items-center justify-center space-y-4 py-8">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                                            <Check className="h-8 w-8" />
                                        </div>
                                        <h3 className="text-2xl font-medium font-serif italic text-white">Welcome</h3>
                                        <p className="text-white/70">You are on the list. We'll be in touch.</p>
                                    </div>
                                ) : (
                                    <>
                                        <h3 className="mb-2 text-3xl font-medium font-serif italic text-white">Join the Waitlist</h3>
                                        <p className="mb-8 text-white/60 font-mono text-sm">
                                            Be the first to experience the future of organization.
                                        </p>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div>
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="Enter your email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none focus:ring-0 transition-colors"
                                                />
                                            </div>

                                            {status === "error" && (
                                                <p className="text-sm text-red-400">{message}</p>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={status === "loading"}
                                                className={cn(
                                                    "w-full rounded-lg px-4 py-3 font-mono text-sm font-medium transition-all",
                                                    "bg-white text-black hover:bg-white/90",
                                                    "disabled:opacity-50 disabled:cursor-not-allowed"
                                                )}
                                            >
                                                {status === "loading" ? "Joining..." : "Join Waitlist"}
                                            </button>
                                        </form>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
