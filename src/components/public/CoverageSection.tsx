import { useEffect, useRef, useState } from "react";

/* ─── Con Way Freight office coordinates ─── */
const PLACE_NAME = "Transport Nagar, Sector 25, Panipat, Haryana 132103";
const MAP_EMBED_URL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3488.9!2d76.9699!3d29.3909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ddc4b2fbb7455%3A0x65ea67a3c59de85c!2sTransport%20Nagar%2C%20Sector%2025%2C%20Panipat%2C%20Haryana%20132103!5e0!3m2!1sen!2sin!4v1700000000000";

const DIRECTIONS_URL =
    "https://www.google.com/maps/dir/?api=1&destination=Transport+Nagar+Sector+25+Panipat+Haryana+132103";

const PLACE_URL =
    "https://maps.google.com/?q=Transport+Nagar+Sector+25+Panipat+Haryana+132103";

/* Trust badges from reference */
const TRUST_ITEMS = [
    "Industrial Goods",
    "FMCG & Retail",
    "Construction Materials",
    "Machinery & Equipment",
    "Textile & Garments",
    "Export Consignments",
];

function CoverageSection() {
    const ref = useRef<HTMLElement>(null);
    const [mapLoaded, setMapLoaded] = useState(false);
    const [pinVisible, setPinVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        // Trigger scroll reveals
                        e.target.querySelectorAll(".rev,.revl,.revr").forEach((el) =>
                            el.classList.add("vis")
                        );
                        // Delay pin animation
                        setTimeout(() => setPinVisible(true), 400);
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* ── Trust bar ── */}
            <div
                style={{
                    background: "var(--bg)",
                    borderTop: "1px solid var(--bd)",
                    borderBottom: "1px solid var(--bd)",
                    padding: "1.5rem 3rem",
                }}
            >
                <div
                    style={{
                        maxWidth: 1200,
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        gap: "3rem",
                        flexWrap: "wrap",
                    }}
                >
                    <div
                        style={{
                            fontSize: 10,
                            fontWeight: 700,
                            letterSpacing: "2.5px",
                            textTransform: "uppercase",
                            color: "var(--mu)",
                            whiteSpace: "nowrap",
                        }}
                    >
                        Trusted For
                    </div>
                    <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
                        {TRUST_ITEMS.map((item) => (
                            <div
                                key={item}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    fontSize: 13,
                                    fontWeight: 600,
                                    color: "var(--mu2)",
                                }}
                            >
                                <span style={{ color: "var(--or)", fontSize: 14 }}>✔</span>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Map Section ── */}
            <section
                id="location"
                ref={ref}
                style={{
                    background: "var(--bg2)",
                    padding: 0,
                    scrollMarginTop: 68,
                }}
            >
                {/* Header */}
                <div className="rev" style={{ padding: "5rem 3rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
                    <div
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
                        Find Us
                    </div>
                    <h2
                        style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontSize: "clamp(40px,5.5vw,66px)",
                            fontWeight: 900,
                            textTransform: "uppercase",
                            lineHeight: 0.95,
                            letterSpacing: -1,
                        }}
                    >
                        Our{" "}
                        <em style={{ color: "var(--or)", fontStyle: "normal" }}>
                            Location
                        </em>
                    </h2>
                </div>

                {/* Map wrapper */}
                <div style={{ position: "relative" }}>
                    {/* Animated pin overlay */}
                    <div
                        style={{
                            position: "absolute",
                            top: 18,
                            left: "50%",
                            background: "var(--bg)",
                            border: "1px solid var(--or)",
                            color: "#fff",
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontSize: 13,
                            fontWeight: 800,
                            letterSpacing: 2,
                            textTransform: "uppercase",
                            padding: "10px 22px",
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            whiteSpace: "nowrap",
                            zIndex: 10,
                            clipPath:
                                "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                            opacity: pinVisible ? 1 : 0,
                            transform: pinVisible
                                ? "translateX(-50%) translateY(0)"
                                : "translateX(-50%) translateY(-12px)",
                            transition: "opacity 0.5s ease, transform 0.5s ease",
                        }}
                    >
                        <span style={{ color: "var(--or)" }}>📍</span>
                        Transport Nagar, Panipat — 132103
                    </div>

                    {/* Map loading skeleton */}
                    {!mapLoaded && (
                        <div
                            style={{
                                width: "100%",
                                height: 440,
                                background: "var(--bg3)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                gap: "1rem",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                zIndex: 2,
                            }}
                        >
                            {/* Skeleton shimmer */}
                            <div
                                style={{
                                    width: "60%",
                                    height: 8,
                                    background: "linear-gradient(90deg, var(--bg4) 25%, var(--bg2) 50%, var(--bg4) 75%)",
                                    backgroundSize: "200% 100%",
                                    animation: "loader-sweep 1.4s infinite",
                                    borderRadius: 4,
                                }}
                            />
                            <div style={{ fontSize: 24, animation: "float-y 2s ease-in-out infinite" }}>🗺️</div>
                            <div
                                style={{
                                    fontSize: 12,
                                    color: "var(--mu)",
                                    letterSpacing: 2,
                                    textTransform: "uppercase",
                                    fontWeight: 700,
                                }}
                            >
                                Loading map…
                            </div>
                        </div>
                    )}

                    {/* Google Maps iframe */}
                    <iframe
                        src={MAP_EMBED_URL}
                        title="Con Way Freight Location — Transport Nagar, Panipat"
                        style={{
                            display: "block",
                            width: "100%",
                            height: 440,
                            border: "none",
                            filter:
                                "grayscale(40%) contrast(1.1) brightness(0.82) hue-rotate(0deg)",
                            opacity: mapLoaded ? 1 : 0,
                            transition: "opacity 0.6s ease",
                        }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        onLoad={() => setMapLoaded(true)}
                    />
                </div>

                {/* Bottom action bar */}
                <div
                    style={{
                        background: "var(--bg2)",
                        borderTop: "1px solid var(--bd)",
                        padding: "1.5rem 3rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "1.5rem",
                    }}
                >
                    {/* Address + quick-open link */}
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem", flexWrap: "wrap" }}>
                        {/* Full address */}
                        <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--mu2)" }}>
                            <span style={{ color: "var(--or)", fontSize: 16 }}>📍</span>
                            Shop No. 295, Sector 25, Transport Nagar, Panipat, Haryana — 132103
                        </div>

                        {/* Open in Google Maps link */}
                        <a
                            href={PLACE_URL}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 7,
                                fontSize: 12,
                                fontWeight: 700,
                                color: "var(--or)",
                                textDecoration: "none",
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                                transition: "opacity .2s",
                                borderBottom: "1px solid rgba(255,82,0,0.35)",
                                paddingBottom: 1,
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                        >
                            🗺️ View on Google Maps
                        </a>
                    </div>

                    {/* Action buttons */}
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                        {/* Get Directions */}
                        <a
                            href={DIRECTIONS_URL}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                background: "var(--or)",
                                color: "#fff",
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontSize: 12,
                                fontWeight: 800,
                                letterSpacing: 2,
                                textTransform: "uppercase",
                                padding: "11px 22px",
                                textDecoration: "none",
                                clipPath:
                                    "polygon(7px 0%, 100% 0%, calc(100% - 7px) 100%, 0% 100%)",
                                transition: "background .2s, transform .2s, box-shadow .2s",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.background = "var(--ord)";
                                el.style.transform = "translateY(-2px)";
                                el.style.boxShadow = "0 8px 28px rgba(255,82,0,0.4)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.background = "var(--or)";
                                el.style.transform = "none";
                                el.style.boxShadow = "none";
                            }}
                        >
                            🧭 Get Directions
                        </a>

                        {/* Share Location via WhatsApp */}
                        <a
                            href={`https://wa.me/918950140919?text=Please%20share%20your%20Google%20Maps%20location%20to%20reach%20Transport%20Nagar%2C%20Panipat%20(${encodeURIComponent(PLACE_NAME)})`}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                background: "rgba(37,211,102,0.1)",
                                border: "1px solid rgba(37,211,102,0.25)",
                                color: "var(--wg)",
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontSize: 12,
                                fontWeight: 800,
                                letterSpacing: 2,
                                textTransform: "uppercase",
                                padding: "11px 22px",
                                textDecoration: "none",
                                clipPath:
                                    "polygon(7px 0%, 100% 0%, calc(100% - 7px) 100%, 0% 100%)",
                                transition: "background .2s, transform .2s",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.background = "rgba(37,211,102,0.18)";
                                el.style.transform = "translateY(-2px)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.background = "rgba(37,211,102,0.1)";
                                el.style.transform = "none";
                            }}
                        >
                            📱 Ask on WhatsApp
                        </a>
                    </div>
                </div>

                {/* Quick info strip */}
                <div
                    style={{
                        background: "var(--bg3)",
                        borderTop: "1px solid var(--bd)",
                        padding: "1rem 3rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "3rem",
                        flexWrap: "wrap",
                    }}
                >
                    {[
                        { icon: "🕐", label: "Mon – Sat", value: "8 AM – 8 PM" },
                        { icon: "📞", label: "Call / WhatsApp", value: "+91 89501 40919" },
                        { icon: "📍", label: "Nearest Landmark", value: "Transport Nagar Hub" },
                    ].map((item) => (
                        <div
                            key={item.label}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                            }}
                        >
                            <span style={{ fontSize: 20 }}>{item.icon}</span>
                            <div>
                                <div
                                    style={{
                                        fontSize: 9,
                                        fontWeight: 700,
                                        letterSpacing: "2px",
                                        textTransform: "uppercase",
                                        color: "var(--mu)",
                                        marginBottom: 2,
                                    }}
                                >
                                    {item.label}
                                </div>
                                <div
                                    style={{
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                        fontSize: 15,
                                        fontWeight: 800,
                                        color: "#fff",
                                    }}
                                >
                                    {item.value}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default CoverageSection;