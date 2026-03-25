"use client";

import React, { useState, useEffect } from "react";

const TypewriterText = ({ phrases }: { phrases: string[] }) => {
    const [displayText, setDisplayText] = useState("");
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0); // Kept for potential future use if logic changes
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        const i = loopNum % phrases.length;
        const fullText = phrases[i];

        const handleTyping = () => {
            setDisplayText(
                isDeleting
                    ? fullText.substring(0, displayText.length - 1)
                    : fullText.substring(0, displayText.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 100);

            if (!isDeleting && displayText === fullText) {
                // Finished typing full phrase
                setTimeout(() => setIsDeleting(true), 2000); // Wait before deleting
            } else if (isDeleting && displayText === "") {
                // Finished deleting
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(500); // Pause before next phrase
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, loopNum, phrases, typingSpeed]);

    return <span>{displayText}</span>;
};

export default TypewriterText;
