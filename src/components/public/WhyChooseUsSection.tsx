import { useEffect, useRef } from "react";

const WHY_ITEMS = [
    {
        n: "01",
        title: "Pan-India Reach",
        text: "North, South, East, West — our growing network covers all major industrial and commercial cities across India without detours or delays.",
    },
    {
        n: "02",
        title: "On-Time Delivery",
        text: "We respect your deadlines. Dedicated drivers and optimised routing ensure your cargo arrives exactly when expected, every single time.",
    },
    {
        n: "03",
        title: "Safe & Secure Handling",
        text: "Your cargo is treated with care from pickup to drop. Proper loading, securing, and end-to-end accountability for every shipment we carry.",
    },
    {
        n: "04",
        title: "Direct Proprietor Contact",
        text: "Speak directly with Prop. Sunny Batra for personalised service. No call centers, no intermediaries — just honest, direct communication.",
    },
];

const WCARDS = [
    { icon: "🚀", num: "Fast",  lbl: "Dispatch & Delivery",       accent: true  },
    { icon: "🛡️", num: "100%",  lbl: "Cargo Accountability",      accent: false },
    { icon: "📦", num: "All",   lbl: "Cargo Types Accepted",      accent: false },
    { icon: "📞", num: "24/7",  lbl: "Direct Phone Support",      accent: true  },
];

function WhyChooseUsSection() {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => {
                    if (e.isIntersecting)
                        e.target.querySelectorAll(".rev,.revl,.revr").forEach((el) =>
                            el.classList.add("vis")
                        );
                }),
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="why-us"
            ref={ref}
            style={{ background: "var(--bg2)", padding: "7rem 3rem", scrollMarginTop: 68 }}
        >
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "6rem",
                        alignItems: "start",
                    }}
                >
                    {/* LEFT — numbered list */}
                    <div>
                        {/* Header */}
                        <div style={{ marginBottom: "4rem" }}>
                            <div
                                className="eyebrow revl"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 10,
                                    fontSize: 10,
                                    fontWeight: 700,
                                    letterSpacing: "3.5px",
                                    textTransform: "uppercase",
                                    color: "var(--or)",
                                    marginBottom: "0.9rem",
                                }}
                            >
                                <span
                                    style={{
                                        width: 28,
                                        height: 1,
                                        background: "var(--or)",
                                        display: "inline-block",
                                    }}
                                />
                                Why Choose Us
                            </div>
                            <h2
                                className="sec-title revl d1"
                                style={{
                                    fontFamily: "'Barlow Condensed', sans-serif",
                                    fontSize: "clamp(40px,5.5vw,66px)",
                                    fontWeight: 900,
                                    textTransform: "uppercase",
                                    lineHeight: 0.95,
                                    letterSpacing: -1,
                                    marginBottom: "0.9rem",
                                }}
                            >
                                The Conway<br />
                                <em style={{ color: "var(--or)", fontStyle: "normal" }}>
                                    Commitment
                                </em>
                            </h2>
                            <p
                                className="revl d2"
                                style={{ color: "var(--mu2)", fontSize: 15, lineHeight: 1.85, maxWidth: 480 }}
                            >
                                Years of road experience and a dedicated team make us the trusted
                                freight partner for businesses across India.
                            </p>
                        </div>

                        {/* Numbered items */}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            {WHY_ITEMS.map((item, i) => (
                                <WhyItem key={item.n} {...item} delay={`d${i + 1}`} last={i === WHY_ITEMS.length - 1} />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT — stat cards */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "1.5rem",
                            paddingTop: "1rem",
                        }}
                    >
                        {WCARDS.map((c, i) => (
                            <WCard key={c.lbl} {...c} delay={`d${i + 1}`} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function WhyItem({
    n, title, text, delay, last,
}: { n: string; title: string; text: string; delay: string; last: boolean }) {
    return (
        <div
            className={`rev ${delay}`}
            style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1.5rem",
                padding: last ? "2rem 0 0" : "2rem 0",
                borderBottom: last ? "none" : "1px solid var(--bd)",
                cursor: "default",
                transition: "all .25s",
                position: "relative",
            }}
            onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                (el.querySelector(".wi-n") as HTMLElement).style.color = "rgba(255,82,0,0.35)";
                (el.querySelector(".wi-bg") as HTMLElement).style.width = "100%";
            }}
            onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                (el.querySelector(".wi-n") as HTMLElement).style.color = "rgba(255,82,0,0.12)";
                (el.querySelector(".wi-bg") as HTMLElement).style.width = "0";
            }}
        >
            {/* Hover background */}
            <div
                className="wi-bg"
                style={{
                    position: "absolute",
                    left: 0, top: 0, bottom: 0,
                    width: 0,
                    background: "rgba(255,82,0,0.025)",
                    transition: "width .3s",
                    pointerEvents: "none",
                }}
            />
            <div
                className="wi-n"
                style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 56,
                    fontWeight: 900,
                    color: "rgba(255,82,0,0.12)",
                    lineHeight: 1,
                    minWidth: 60,
                    flexShrink: 0,
                    transition: "color .3s",
                }}
            >
                {n}
            </div>
            <div>
                <div
                    style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: 22,
                        fontWeight: 800,
                        textTransform: "uppercase",
                        marginBottom: "0.5rem",
                        letterSpacing: 0.5,
                    }}
                >
                    {title}
                </div>
                <div style={{ fontSize: 14, color: "var(--mu2)", lineHeight: 1.75 }}>
                    {text}
                </div>
            </div>
        </div>
    );
}

function WCard({
    icon, num, lbl, accent, delay,
}: { icon: string; num: string; lbl: string; accent: boolean; delay: string }) {
    return (
        <div
            className={`rev ${delay}`}
            style={{
                background: accent
                    ? "linear-gradient(135deg, var(--bg3), rgba(255,82,0,0.06))"
                    : "var(--bg3)",
                border: accent
                    ? "1px solid rgba(255,82,0,0.2)"
                    : "1px solid var(--bd2)",
                padding: "2rem 1.5rem",
                textAlign: "center",
                transition: "border-color .3s, transform .35s",
                cursor: "default",
            }}
            onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,82,0,0.35)";
                el.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = accent ? "rgba(255,82,0,0.2)" : "var(--bd2)";
                el.style.transform = "none";
            }}
        >
            <span style={{ fontSize: 32, marginBottom: "0.9rem", display: "block" }}>{icon}</span>
            <div
                style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 46,
                    fontWeight: 900,
                    color: "var(--or)",
                    lineHeight: 1,
                }}
            >
                {num}
            </div>
            <div
                style={{
                    fontSize: 10,
                    color: "var(--mu)",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    marginTop: 4,
                }}
            >
                {lbl}
            </div>
        </div>
    );
}

export default WhyChooseUsSection;