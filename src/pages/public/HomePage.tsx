import { useEffect } from "react";
import Navbar             from "../../components/public/Navbar";
import HeroSection        from "../../components/public/HeroSection";
import TickerBanner       from "../../components/public/TickerBanner";
import StatsSection       from "../../components/public/StatsSection";
import ServicesSection    from "../../components/public/ServicesSection";
import FleetSection       from "../../components/public/FleetSection";
import WhyChooseUsSection from "../../components/public/WhyChooseUsSection";
import CoverageSection    from "../../components/public/CoverageSection";
import ContactSection     from "../../components/public/ContactSection";
import Footer             from "../../components/public/Footer";
import WhatsAppButton     from "../../components/public/WhatsAppButton";
import Chatbot            from "../../components/public/Chatbot";
import LoadingScreen      from "../../components/public/LoadingScreen";
import TestimonialsSection from "../../components/public/TestimonialsSection";
import FaqSection         from "../../components/public/FaqSection";

function HomePage() {
    // Global scroll-reveal IntersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("vis");
                        observer.unobserve(e.target);
                    }
                }),
            { threshold: 0.1 }
        );

        // Observe all reveal elements after a short delay (let DOM settle)
        const t = setTimeout(() => {
            document
                .querySelectorAll(".rev, .revl, .revr")
                .forEach((el) => observer.observe(el));
        }, 100);

        return () => {
            clearTimeout(t);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {/* Full-page orange loading splash */}
            <LoadingScreen />

            {/* Page content */}
            <Navbar />
            <HeroSection />
            <TickerBanner />
            <StatsSection />
            <ServicesSection />
            <FleetSection />
            <WhyChooseUsSection />
            <CoverageSection />
            <TestimonialsSection />
            <FaqSection />
            <ContactSection />
            <Footer />

            {/* Floating widgets */}
            <WhatsAppButton />
            <Chatbot />
        </>
    );
}

export default HomePage;