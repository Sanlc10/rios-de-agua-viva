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
                throw new Error(data.error || "Algo salió mal. Por favor intenta de nuevo.");
            }

            setStatus("success");
            setMessage("¡Gracias por contactarnos!");
            setEmail("");
            // Close modal after 2.5 seconds
            setTimeout(() => {
                closeWaitlist();
                setStatus("idle");
            }, 2500);
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
                        className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 transition-opacity"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-md overflow-hidden rounded-[24px] border border-border bg-background p-0 shadow-2xl"
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeWaitlist}
                                className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted transition-colors z-10"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="p-8 pt-12 text-center relative">
                                {/* Subtle decorative gradient */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

                                {status === "success" ? (
                                    <div className="flex flex-col items-center justify-center space-y-4 py-8 relative z-10">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 border border-green-200">
                                            <Check className="h-8 w-8" />
                                        </div>
                                        <h3 className="text-2xl font-seasons italic text-foreground tracking-wide">¡Mensaje Enviado!</h3>
                                        <p className="text-muted-foreground font-fira">Pronto nos pondremos en contacto contigo.</p>
                                    </div>
                                ) : (
                                    <div className="relative z-10">
                                        <h3 className="mb-3 text-3xl font-seasons italic text-foreground tracking-wide">Conéctate</h3>
                                        <p className="mb-8 text-muted-foreground font-fira text-sm leading-relaxed px-4">
                                            Déjanos tu correo para recibir más información, solicitar oración o integrarte a un grupo.
                                        </p>

                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div>
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="Ingresa tu correo electrónico"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3.5 font-fira text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors shadow-inner"
                                                />
                                            </div>

                                            {status === "error" && (
                                                <p className="text-sm text-destructive font-fira">{message}</p>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={status === "loading"}
                                                className={cn(
                                                    "w-full rounded-full px-4 py-3.5 font-fira text-sm font-semibold transition-all duration-300 shadow-md",
                                                    "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02]",
                                                    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                                )}
                                            >
                                                {status === "loading" ? "Enviando..." : "Enviar Información"}
                                            </button>
                                        </form>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
