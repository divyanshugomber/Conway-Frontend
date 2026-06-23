import { useEffect } from "react";

function HeroSection() {
    useEffect(() => {
        // Trigger scroll reveal for elements that are already in view
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("vis"); observer.unobserve(e.target); } }),
            { threshold: 0.1 }
        );
        document.querySelectorAll(".rev,.revl,.revr").forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const cityTags = ["Bangalore", "Chennai", "Hyderabad", "Kolkata"];

    return (
        <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 68 }}>
            {/* Background */}
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 90% 70% at 65% 45%, rgba(255,82,0,.07) 0%, transparent 65%), radial-gradient(ellipse 60% 100% at 10% 20%, rgba(255,82,0,.04) 0%, transparent 60%), var(--bg)" }} />
            {/* Grid overlay */}
            <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px)", backgroundSize: "80px 80px", maskImage: "radial-gradient(ellipse 100% 100% at 50% 50%, black 20%, transparent 75%)" }} />
            {/* Streaks */}
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
                {[
                    { left: "8%",  h: 100, dur: 4,   delay: 0.3 },
                    { left: "22%", h: 70,  dur: 6,   delay: 1.5 },
                    { left: "48%", h: 130, dur: 5,   delay: 0.8 },
                    { left: "67%", h: 90,  dur: 4.5, delay: 2   },
                    { left: "83%", h: 120, dur: 5.5, delay: 0.5 },
                    { left: "93%", h: 80,  dur: 7,   delay: 3   },
                ].map((s, i) => (
                    <div key={i} style={{ position: "absolute", left: s.left, width: 1, height: s.h, background: "linear-gradient(to bottom, transparent, rgba(255,82,0,.7), transparent)", opacity: 0, animation: `sdown ${s.dur}s linear ${s.delay}s infinite` }} />
                ))}
            </div>
            {/* Orbs */}
            <div style={{ position: "absolute", width: 400, height: 400, background: "rgba(255,82,0,.07)", borderRadius: "50%", filter: "blur(80px)", right: -80, top: "20%", pointerEvents: "none" }} />
            <div style={{ position: "absolute", width: 300, height: 300, background: "rgba(255,82,0,.05)", borderRadius: "50%", filter: "blur(80px)", left: "5%", bottom: "15%", pointerEvents: "none" }} />

            {/* Inner grid */}
            <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "0 3rem", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "5rem", alignItems: "center", width: "100%" }}>
                {/* LEFT */}
                <div>
                    {/* Eyebrow */}
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(255,82,0,.1)", border: "1px solid rgba(255,82,0,.25)", color: "var(--or)", fontSize: 10, fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", padding: "7px 16px", marginBottom: "1.5rem", clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)", animation: "fup .7s ease both" }}>
                        <span style={{ width: 6, height: 6, background: "var(--or)", borderRadius: "50%", animation: "blink 2s ease-in-out infinite", flexShrink: 0 }} />
                        Panipat, Haryana &nbsp;·&nbsp; Pan-India Coverage
                    </div>

                    {/* Headline */}
                    <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(58px,7.5vw,96px)", fontWeight: 900, lineHeight: 0.92, textTransform: "uppercase", letterSpacing: -2, marginBottom: "1.5rem", animation: "fup .8s ease .1s both" }}>
                        Move
                        <em style={{ color: "var(--or)", fontStyle: "normal", display: "block" }}>Anything.</em>
                        <small style={{ display: "block", fontSize: "0.38em", color: "var(--mu2)", fontWeight: 300, letterSpacing: 6, marginTop: 10, lineHeight: 1 }}>
                            Freight Solutions Across India
                        </small>
                    </h1>

                    {/* Description */}
                    <p style={{ fontSize: 16, color: "var(--mu2)", lineHeight: 1.85, maxWidth: 460, marginBottom: "2.5rem", animation: "fup .8s ease .2s both" }}>
                        From Panipat to every corner of India — full container loads, open trucks, and express freight. Trusted by businesses across North, South, East &amp; West.
                    </p>

                    {/* Buttons */}
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem", animation: "fup .8s ease .3s both" }}>
                        <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                            style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--or)", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", padding: "15px 34px", textDecoration: "none", clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)", transition: "all .25s", position: "relative", overflow: "hidden" }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 36px rgba(255,82,0,.45)"; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                            📦 Book a Shipment
                        </a>
                        <a href="https://wa.me/918950140919?text=Hello%20Con%20Way%20Freight%2C%20I%20need%20a%20freight%20quote." target="_blank" rel="noreferrer"
                            style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--wg)", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", padding: "15px 32px", textDecoration: "none", clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)", transition: "all .25s" }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--wd)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 36px rgba(37,211,102,.35)"; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--wg)"; (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                            📱 WhatsApp Now
                        </a>
                    </div>

                    {/* Mini stats */}
                    <div style={{ display: "flex", alignItems: "center", animation: "fup .8s ease .4s both" }}>
                        {[
                            { num: "6", sfx: "+", lbl: "Major Routes" },
                            { num: "20", sfx: "+", lbl: "Cities Served" },
                            { num: "24", sfx: "/7", lbl: "Support" },
                        ].map((s, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center" }}>
                                <div style={{ padding: "0 2rem 0 0", paddingLeft: i === 0 ? 0 : undefined }}>
                                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 34, fontWeight: 900, color: "#fff", lineHeight: 1 }}>
                                        {s.num}<sup style={{ fontSize: "0.55em", color: "var(--or)", verticalAlign: "super" }}>{s.sfx}</sup>
                                    </div>
                                    <div style={{ fontSize: 10, color: "var(--mu)", letterSpacing: 2, textTransform: "uppercase", marginTop: 3 }}>{s.lbl}</div>
                                </div>
                                {i < 2 && <div style={{ width: 1, height: 44, background: "var(--bd2)", marginRight: "2rem" }} />}
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT — Live Route Card */}
                <div style={{ background: "var(--bg3)", border: "1px solid var(--bd2)", overflow: "hidden", animation: "fleft .9s ease .3s both" }}>
                    {/* Card top */}
                    <div style={{ padding: "1.75rem", borderBottom: "1px solid var(--bd)" }}>
                        <div style={{ height: 2, background: "linear-gradient(90deg, var(--or), var(--or2), #FFB800)", marginBottom: "1.5rem" }} />
                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--mu)", marginBottom: 12 }}>Live Route — Active Shipment</div>

                        {/* Animated truck route */}
                        <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem", position: "relative", padding: "0.8rem 0" }}>
                            <div style={{ background: "var(--bg4)", border: "2px solid var(--or)", padding: "8px 16px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: 17, fontWeight: 900, textTransform: "uppercase", letterSpacing: 1, position: "relative", zIndex: 1, whiteSpace: "nowrap" }}>Panipat</div>
                            <div style={{ flex: 1, height: 2, background: "rgba(255,82,0,.15)", position: "relative", overflow: "hidden" }}>
                                <div style={{ position: "absolute", top: 0, left: "-100%", height: "100%", width: "100%", background: "linear-gradient(90deg, transparent, var(--or), transparent)", animation: "rsweep 2.2s ease-in-out infinite" }} />
                                <div style={{ position: "absolute", fontSize: 22, top: "50%", transform: "translateY(-60%)", animation: "tmove 4s linear infinite", zIndex: 2 }}>🚛</div>
                            </div>
                            <div style={{ background: "var(--bg4)", border: "2px solid var(--or)", padding: "8px 16px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: 17, fontWeight: 900, textTransform: "uppercase", letterSpacing: 1, position: "relative", zIndex: 1, whiteSpace: "nowrap" }}>Mumbai</div>
                        </div>

                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--mu)", marginBottom: 12 }}>Also delivering to</div>
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                            {cityTags.map(c => (
                                <span key={c} style={{ background: "rgba(255,82,0,.1)", border: "1px solid rgba(255,82,0,.2)", color: "var(--or)", fontFamily: "'Barlow Condensed', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 1, padding: "4px 12px" }}>{c}</span>
                            ))}
                        </div>
                    </div>

                    {/* Card grid */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--bd)" }}>
                        {[
                            { icon: "🚛", lbl: "Fleet Type",    val: "32ft + 22ft" },
                            { icon: "🛡️", lbl: "Cargo Safety",  val: "Secured"     },
                            { icon: "👤", lbl: "Proprietor",    val: "Sunny Batra" },
                            { icon: "📱", lbl: "Direct Line",   val: "+91 89501 40919" },
                        ].map((cell, i) => (
                            <div key={i} style={{ background: "var(--bg3)", padding: "1.2rem 1.4rem", display: "flex", alignItems: "flex-start", gap: 12, transition: "background .2s", cursor: "default" }}
                                onMouseEnter={e => (e.currentTarget.style.background = "var(--bg4)")}
                                onMouseLeave={e => (e.currentTarget.style.background = "var(--bg3)")}>
                                <span style={{ color: "var(--or)", fontSize: 18, flexShrink: 0, marginTop: 2 }}>{cell.icon}</span>
                                <div>
                                    <div style={{ fontSize: 10, color: "var(--mu)", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 3 }}>{cell.lbl}</div>
                                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 17, fontWeight: 800, color: "#fff" }}>{cell.val}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;