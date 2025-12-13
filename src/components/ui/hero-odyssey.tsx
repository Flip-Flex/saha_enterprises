import React from "react";
import Hero from "@/components/ui/animated-shader-hero";

export const HeroSection: React.FC = () => {
    return (
        <Hero
            trustBadge={{
                text: "Trusted End-to-End Manpower Solutions",
                icons: ["✨", "🚀", "🤝"]
            }}
            headline={{
                line1: "Saha Enterprises",
                line2: "Connecting Talent"
            }}
            subtitle="Quality, reliability, and customer satisfaction across every project. We specialize in connecting industry leaders with skilled professionals who drive results."
            buttons={{
                primary: {
                    text: "Request Manpower",
                    onClick: () => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                },
                secondary: {
                    text: "View Industries",
                    onClick: () => {
                        const industriesSection = document.getElementById('sectors');
                        if (industriesSection) industriesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }}
        />
    );
};
