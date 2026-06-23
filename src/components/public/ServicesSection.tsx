import { useEffect, useRef } from "react";

// From reference: Routes section (what was previously "Services")
const ROUTES = [
    { icon: "🏛️", from: "From Panipat", dest: "Mumbai",          detail: "West India — Maharashtra\nCommercial & Industrial Cargo",  d: "d1" },
    { icon: "💻", from: "From Panipat", dest: "Bangalore",        detail: "South India — Karnataka\nTech & Manufacturing Hub",          d: "d2" },
    { icon: "⚓", from: "From Panipat", dest: "Chennai",          detail: "South India — Tamil Nadu\nPort & Export Logistics",          d: "d3" },
    { icon: "🏭", from: "From Panipat", dest: "Hyderabad",        detail: "South India — Telangana\nAll-India Gateway City",            d: "d1" },
    { icon: "🌊", from: "Special Zone", dest: "All East India",   detail: "Kolkata, Bhubaneswar\nNorth-East States & More",            d: "d2" },
    { icon: "🗺️", from: "Special Zone", dest: "All South India",  detail: "Kerala, Andhra Pradesh\nGoa & Coastal Routes",              d: "d3" },
];

function ServicesSection() {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll(".rev,.revl,.revr").forEach(el => el.classList.add("vis")); });
        }, { threshold: 0.1 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="routes" ref={ref} style={{ background: "var(--bg2)", padding: "7rem 3rem", scrollMarginTop: 68 }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                {/* Header */}
                <div style={{ marginBottom: "4rem" }}>
                    <div className="eyebrow rev" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: "var(--or)", marginBottom: "0.9rem" }}>
                        <span style={{ width: 28, height: 1, background: "var(--or)", display: "inline-block" }} />
                        Our Routes
                    </div>
                    <h2 className="sec-title rev d1" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(40px,5.5vw,66px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.95, letterSpacing: -1, marginBottom: "0.9rem" }}>
                        We Cover <em style={{ color: "var(--or)", fontStyle: "normal" }}>Every Corner</em><br />of India
                    </h2>
                    <p className="rev d2" style={{ color: "var(--mu2)", fontSize: 15, lineHeight: 1.85, maxWidth: 520 }}>
                        From our Panipat hub, we connect your cargo to major destinations across all four directions with reliable schedules and competitive rates.
                    </p>
                </div>

                {/* Route cards grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--bd)" }}>
                    {ROUTES.map(r => (
                        <RouteCard key={r.dest} {...r} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function RouteCard({ icon, from, dest, detail, d }: typeof ROUTES[0]) {
    return (
        <div className={`rev ${d}`}
            style={{ background: "var(--bg2)", padding: "2.5rem", position: "relative", overflow: "hidden", transition: "background .3s", cursor: "default" }}
            onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--bg3)";
                (el.querySelector(".rc-before") as HTMLElement | null)!.style.transform = "scaleX(1)";
                (el.querySelector(".rc-after") as HTMLElement | null)!.style.opacity = "1";
                (el.querySelector(".rc-arrow") as HTMLElement | null)!.style.color = "var(--or)";
                (el.querySelector(".rc-arrow") as HTMLElement | null)!.style.transform = "translate(3px,-3px)";
            }}
            onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--bg2)";
                (el.querySelector(".rc-before") as HTMLElement | null)!.style.transform = "scaleX(0)";
                (el.querySelector(".rc-after") as HTMLElement | null)!.style.opacity = "0";
                (el.querySelector(".rc-arrow") as HTMLElement | null)!.style.color = "var(--bd2)";
                (el.querySelector(".rc-arrow") as HTMLElement | null)!.style.transform = "none";
            }}>
            {/* Top bar */}
            <div className="rc-before" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--or), var(--or2))", transform: "scaleX(0)", transformOrigin: "left", transition: "transform .4s cubic-bezier(.22,1,.36,1)" }} />
            {/* Radial glow */}
            <div className="rc-after" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 90% 90% at 50% 110%, rgba(255,82,0,.07), transparent)", opacity: 0, transition: "opacity .3s", pointerEvents: "none" }} />
            {/* Arrow */}
            <div className="rc-arrow" style={{ position: "absolute", top: "2.5rem", right: "2.5rem", fontSize: 18, color: "var(--bd2)", transition: "color .3s, transform .3s" }}>↗</div>

            <div style={{ width: 50, height: 50, background: "rgba(255,82,0,.1)", border: "1px solid rgba(255,82,0,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: "1.5rem" }}>
                {icon}
            </div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--or)", marginBottom: "0.5rem" }}>{from}</div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 34, fontWeight: 900, textTransform: "uppercase", letterSpacing: -0.5, marginBottom: "0.5rem", lineHeight: 1 }}>{dest}</div>
            <div style={{ fontSize: 13, color: "var(--mu2)", lineHeight: 1.65, whiteSpace: "pre-line" }}>{detail}</div>
        </div>
    );
}

export default ServicesSection;