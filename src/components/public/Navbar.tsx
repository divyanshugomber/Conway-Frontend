import { useState, useEffect } from "react";

const NAV_LINKS = [
    { label: "Routes",   id: "routes"   },
    { label: "Fleet",    id: "fleet"    },
    { label: "Why Us",   id: "why-us"   },
    { label: "Location", id: "location" },
    { label: "Contact",  id: "contact"  },
];

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mOpen, setMOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMOpen(false);
    };

    return (
        <>
            {/* ── Main Nav ── */}
            <nav style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
                height: 68, display: "flex", alignItems: "center",
                justifyContent: "space-between", padding: "0 3rem",
                transition: "all .4s",
                background: scrolled ? "rgba(7,9,15,0.96)" : "transparent",
                backdropFilter: scrolled ? "blur(20px)" : "none",
                borderBottom: scrolled ? "1px solid var(--bd2)" : "1px solid transparent",
                boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.5)" : "none",
            }}>
                {/* Logo */}
                <a href="#" onClick={e => { e.preventDefault(); scrollTo("hero"); }}
                    style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                    <div style={{
                        width: 36, height: 36, background: "var(--or)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 17, clipPath: "polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%)"
                    }}>🚛</div>
                    <div style={{
                        fontFamily: "'Barlow Condensed', sans-serif", fontSize: 22,
                        fontWeight: 900, letterSpacing: 2, color: "#fff", textTransform: "uppercase"
                    }}>
                        Con<span style={{ color: "var(--or)" }}>Way</span>
                    </div>
                </a>

                {/* Desktop links */}
                <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none", margin: 0, padding: 0 }}>
                    {NAV_LINKS.map(item => (
                        <li key={item.id}>
                            <NavLink label={item.label} onClick={() => scrollTo(item.id)} />
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <a href="https://wa.me/918950140919?text=Hello%20Con%20Way%20Freight%2C%20I%20need%20a%20quote."
                    target="_blank" rel="noreferrer"
                    style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        background: "var(--or)", color: "#fff",
                        fontFamily: "'Barlow Condensed', sans-serif", fontSize: 12,
                        fontWeight: 800, letterSpacing: 2, textTransform: "uppercase",
                        padding: "10px 22px", textDecoration: "none",
                        clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                        transition: "all .2s",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--ord)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--or)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}>
                    📱 Get a Quote
                </a>

                {/* Mobile burger */}
                <button
                    onClick={() => setMOpen(!mOpen)}
                    style={{ display: "none", background: "none", border: "none", color: "#fff", fontSize: 22, cursor: "pointer", padding: 4 }}
                    className="nav-burger"
                    aria-label="Menu"
                >
                    {mOpen ? "✕" : "☰"}
                </button>
            </nav>

            {/* ── Mobile nav ── */}
            <div style={{
                position: "fixed", top: 68, left: 0, right: 0,
                background: "rgba(7,9,15,0.98)", backdropFilter: "blur(20px)",
                borderBottom: "1px solid var(--bd2)", zIndex: 999,
                padding: mOpen ? "1rem 2rem 1.5rem" : "0 2rem",
                opacity: mOpen ? 1 : 0,
                transform: mOpen ? "translateY(0)" : "translateY(-8px)",
                pointerEvents: mOpen ? "all" : "none",
                transition: "all .25s",
                maxHeight: mOpen ? 400 : 0, overflow: "hidden",
            }}>
                {NAV_LINKS.map(item => (
                    <a key={item.id}
                        onClick={() => scrollTo(item.id)}
                        style={{
                            display: "block", fontSize: 13, fontWeight: 700, color: "var(--mu2)",
                            textDecoration: "none", letterSpacing: 2, textTransform: "uppercase",
                            padding: "13px 0", borderBottom: "1px solid var(--bd)", cursor: "pointer",
                            transition: "color .2s",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--or)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "var(--mu2)")}
                    >{item.label}</a>
                ))}
                <a href="https://wa.me/918950140919" target="_blank" rel="noreferrer"
                    style={{
                        marginTop: "1rem", background: "var(--or)", color: "#fff",
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                        padding: 13, textDecoration: "none",
                        fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14,
                        fontWeight: 800, letterSpacing: 2,
                        clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                    }}>
                    📱 WhatsApp Us
                </a>
            </div>
        </>
    );
}

function NavLink({ label, onClick }: { label: string; onClick: () => void }) {
    return (
        <button onClick={onClick} style={{
            background: "none", border: "none", cursor: "pointer",
            fontSize: 11, fontWeight: 700, color: "var(--mu2)",
            letterSpacing: "2.5px", textTransform: "uppercase",
            transition: "color .2s", padding: "4px 0", position: "relative",
        }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--mu2)")}>
            {label}
        </button>
    );
}

export default Navbar;