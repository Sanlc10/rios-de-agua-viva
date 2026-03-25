"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScrollAnimationWrapperProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function ScrollAnimationWrapper({
    children,
    className = "",
    delay = 0
}: ScrollAnimationWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
