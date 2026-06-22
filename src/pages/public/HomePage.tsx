import Navbar
from "../../components/public/Navbar";

import HeroSection
from "../../components/public/HeroSection";

import StatsSection
from "../../components/public/StatsSection";

import ServicesSection
from "../../components/public/ServicesSection";

import FleetSection
from "../../components/public/FleetSection";

import WhyChooseUsSection
from "../../components/public/WhyChooseUsSection";

import CoverageSection
from "../../components/public/CoverageSection";

import ContactSection
from "../../components/public/ContactSection";

import Footer
from "../../components/public/Footer";

import TestimonialsSection
from "../../components/public/TestimonialsSection";

import FaqSection
from "../../components/public/FaqSection";

import WhatsAppButton
from "../../components/public/WhatsAppButton";

function HomePage() {

    return (

        <>

            <Navbar />

            <HeroSection />

            <StatsSection />

            <ServicesSection />

            <FleetSection />

            <WhyChooseUsSection />

            <CoverageSection />

            <TestimonialsSection />

            <FaqSection />

            <ContactSection />

            <WhatsAppButton />

            <Footer />

        </>

    );
}

export default HomePage;