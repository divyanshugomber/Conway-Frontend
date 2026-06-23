import { useEffect, useRef } from "react";

const FLEET = [
    { emoji: "🚛", name: "32ft Container", desc: "Full enclosed containers for large-volume cargo. Ideal for industrial goods, packaged products, and sensitive shipments requiring weather protection.", tags: ["Heavy Load", "Enclosed", "Weather Safe"] },
    { emoji: "🚚", name: "22ft Open Truck", desc: "Open flatbed trucks for oversized, construction, or bulky materials. Flexible loading from any side with no height restrictions. Perfect for steel, timber, machinery.", tags: ["Versatile", "Flatbed", "No Height Limit"] },
    { emoji: "🚐", name: "All Sizes Available", desc: "Mini trucks, medium trucks, and express vehicles available on demand. Whether your shipment is small or massive, we match the right vehicle to your requirements.", tags: ["On Demand", "Mini Trucks", "Express"] },
];

function FleetSection() {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll(".rev,.revl,.revr").forEach(el => el.classList.add("vis")); });
        }, { threshold: 0.1 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="fleet" ref={ref} style={{ background: "var(--bg)", padding: "7rem 3rem", scrollMarginTop: 68 }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "5rem", alignItems: "start" }}>
                    {/* LEFT — Sticky info */}
                    <div className="revl" style={{ position: "sticky", top: 100 }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: "var(--or)", marginBottom: "0.9rem" }}>
                            <span style={{ width: 28, height: 1, background: "var(--or)", display: "inline-block" }} />
                            Our Fleet
                        </div>
                        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(48px,6vw,72px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.95, letterSpacing: -1, marginBottom: "1.5rem" }}>
                            Right Truck<br />For Every<br /><em style={{ color: "var(--or)", fontStyle: "normal" }}>Load.</em>
                        </h2>
                        <p style={{ fontSize: 15, color: "var(--mu2)", lineHeight: 1.85, marginBottom: "2rem" }}>
                            We maintain a diverse fleet to handle any cargo size — from bulk full-container loads to open flatbeds for oversized materials.
                        </p>
                        <a href="https://wa.me/918950140919?text=Hello%2C%20I%20need%20help%20selecting%20a%20truck." target="_blank" rel="noreferrer"
                            style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--or)", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", padding: "15px 34px", textDecoration: "none", clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)", transition: "all .25s", marginTop: "0.5rem" }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 36px rgba(255,82,0,.45)"; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                            📱 Ask About Fleet
                        </a>

                        <div style={{ background: "var(--bg3)", border: "1px solid var(--bd2)", padding: "1.75rem", borderLeft: "3px solid var(--or)", marginTop: "2rem" }}>
                            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 800, textTransform: "uppercase", marginBottom: "0.4rem" }}>Custom sizes available</div>
                            <div style={{ fontSize: 13, color: "var(--mu2)", lineHeight: 1.7 }}>
                                Need something specific? We source the right vehicle for your cargo. Contact Prop. Sunny Batra directly — no middlemen, no delays.
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — Fleet cards */}
                    <div className="revr" style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--bd)" }}>
                        {FLEET.map((truck, i) => (
                            <div key={i}
                                style={{ background: "var(--bg2)", padding: "2rem 2.25rem", display: "flex", alignItems: "flex-start", gap: "1.5rem", borderLeft: "3px solid transparent", transition: "all .3s", cursor: "default", position: "relative", overflow: "hidden" }}
                                onMouseEnter={e => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.background = "var(--bg3)";
                                    el.style.borderLeftColor = "var(--or)";
                                    (el.querySelector(".fc-glow") as HTMLElement)!.style.opacity = "1";
                                }}
                                onMouseLeave={e => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.background = "var(--bg2)";
                                    el.style.borderLeftColor = "transparent";
                                    (el.querySelector(".fc-glow") as HTMLElement)!.style.opacity = "0";
                                }}>
                                <div className="fc-glow" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 100% 100% at 0% 50%, rgba(255,82,0,.04), transparent)", opacity: 0, transition: "opacity .3s", pointerEvents: "none" }} />
                                <div style={{ fontSize: 38, lineHeight: 1, flexShrink: 0 }}>{truck.emoji}</div>
                                <div>
                                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 28, fontWeight: 900, textTransform: "uppercase", letterSpacing: -0.5, marginBottom: "0.4rem" }}>{truck.name}</div>
                                    <div style={{ fontSize: 13, color: "var(--mu2)", lineHeight: 1.7 }}>{truck.desc}</div>
                                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: "1rem" }}>
                                        {truck.tags.map(tag => (
                                            <span key={tag} style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--or)", background: "rgba(255,82,0,.08)", border: "1px solid rgba(255,82,0,.2)", padding: "4px 12px" }}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FleetSection;