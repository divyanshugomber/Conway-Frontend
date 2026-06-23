function Footer() {
    const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    const styles: Record<string, React.CSSProperties> = {
        footer: {
            background: "var(--bg2)",
            borderTop: "1px solid var(--bd)",
            padding: "5rem 3rem 2rem",
        },
        inner: { maxWidth: 1200, margin: "0 auto" },
        top: { display: "flex", gap: "4rem", flexWrap: "wrap" as const, marginBottom: "3rem", justifyContent: "space-between" },
        brand: { flex: "1 1 260px", minWidth: 220 },
        logo: {
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 28, fontWeight: 900, textTransform: "uppercase" as const,
            letterSpacing: 2, color: "#fff", marginBottom: "1rem", display: "block",
        },
        tagline: { fontSize: 14, color: "var(--mu2)", lineHeight: 1.85 },
        group: { flex: "0 0 auto", minWidth: 140 },
        groupTitle: {
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 12, fontWeight: 800, letterSpacing: "3px",
            textTransform: "uppercase" as const, color: "var(--or)", marginBottom: "1.2rem", display: "block",
        },
        link: {
            display: "block", fontSize: 13, color: "var(--mu2)", textDecoration: "none",
            marginBottom: 8, transition: "color .2s", cursor: "pointer" as const,
        },
        bot: {
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap" as const, gap: "1rem",
            paddingTop: "2rem", borderTop: "1px solid var(--bd)",
        },
        copy: { fontSize: 12, color: "var(--mu)" },
        waLink: { display: "inline-flex", alignItems: "center", gap: 8, color: "var(--wg)", fontSize: 13, fontWeight: 600, textDecoration: "none" },
    };

    const routes = ["Panipat → Mumbai", "Panipat → Bangalore", "Panipat → Chennai", "All South India", "All East India"];
    const quickLinks = [
        { label: "Our Routes", id: "routes" },
        { label: "Our Fleet", id: "fleet" },
        { label: "Why Us", id: "why-us" },
        { label: "Location", id: "location" },
        { label: "Contact", id: "contact" },
    ];

    return (
        <footer style={styles.footer}>
            <div style={styles.inner}>
                <div style={styles.top}>
                    {/* Brand */}
                    <div style={styles.brand}>
                        <span style={styles.logo}>
                            Con<span style={{ color: "var(--or)" }}>Way</span> Freight
                        </span>
                        <p style={styles.tagline}>
                            Pan-India freight solutions from Panipat to every corner of the country. Reliable. Direct. On time.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div style={styles.group}>
                        <span style={styles.groupTitle}>Quick Links</span>
                        {quickLinks.map(l => (
                            <a key={l.id} style={styles.link} onClick={() => scroll(l.id)}
                                onMouseEnter={e => (e.currentTarget.style.color = "var(--or)")}
                                onMouseLeave={e => (e.currentTarget.style.color = "var(--mu2)")}>{l.label}</a>
                        ))}
                    </div>

                    {/* Routes */}
                    <div style={styles.group}>
                        <span style={styles.groupTitle}>Routes</span>
                        {routes.map(r => (
                            <a key={r} style={styles.link} onClick={() => scroll("routes")}
                                onMouseEnter={e => (e.currentTarget.style.color = "var(--or)")}
                                onMouseLeave={e => (e.currentTarget.style.color = "var(--mu2)")}>{r}</a>
                        ))}
                    </div>

                    {/* Contact */}
                    <div style={styles.group}>
                        <span style={styles.groupTitle}>Contact</span>
                        <a href="https://wa.me/918950140919" target="_blank" rel="noreferrer" style={styles.link}
                            onMouseEnter={e => (e.currentTarget.style.color = "var(--wg)")}
                            onMouseLeave={e => (e.currentTarget.style.color = "var(--mu2)")}>+91 89501 40919</a>
                        <a href="https://wa.me/918708520360" target="_blank" rel="noreferrer" style={styles.link}
                            onMouseEnter={e => (e.currentTarget.style.color = "var(--wg)")}
                            onMouseLeave={e => (e.currentTarget.style.color = "var(--mu2)")}>+91 87085 20360</a>
                        <a style={styles.link} onClick={() => scroll("location")}
                            onMouseEnter={e => (e.currentTarget.style.color = "var(--or)")}
                            onMouseLeave={e => (e.currentTarget.style.color = "var(--mu2)")}>Shop No. 295, Sector 25</a>
                        <a style={styles.link} onClick={() => scroll("location")}
                            onMouseEnter={e => (e.currentTarget.style.color = "var(--or)")}
                            onMouseLeave={e => (e.currentTarget.style.color = "var(--mu2)")}>Transport Nagar, Panipat</a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={styles.bot}>
                    <div style={styles.copy}>© 2025 Con Way Freight Carrier. All rights reserved. Prop. Sunny Batra.</div>
                    <a href="https://wa.me/918950140919?text=Hello%20Con%20Way%20Freight!" target="_blank" rel="noreferrer" style={styles.waLink}>
                        📱 Chat with us on WhatsApp
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;