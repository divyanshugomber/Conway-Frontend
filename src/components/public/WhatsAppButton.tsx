// WhatsApp floating button — matches reference wafloat style
function WhatsAppButton() {
    return (
        <div style={{ position: "fixed", bottom: 28, right: 28, zIndex: 999, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
            <div style={{ background: "var(--bg2)", border: "1px solid rgba(37,211,102,0.25)", color: "#fff", fontSize: 12, fontWeight: 600, padding: "6px 12px", whiteSpace: "nowrap", opacity: 0, transform: "translateX(10px)", transition: "all .25s", pointerEvents: "none" }}
                id="wa-lbl">Chat on WhatsApp</div>
            <a
                href="https://wa.me/918950140919?text=Hello%20Con%20Way%20Freight%2C%20I%20need%20a%20freight%20quote."
                target="_blank"
                rel="noreferrer"
                style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--wg)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 25, textDecoration: "none", boxShadow: "0 4px 24px rgba(37,211,102,.45)", transition: "transform .2s, box-shadow .2s" }}
                onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "scale(1.1)";
                    el.style.boxShadow = "0 6px 32px rgba(37,211,102,.6)";
                    const lbl = document.getElementById("wa-lbl");
                    if (lbl) { lbl.style.opacity = "1"; lbl.style.transform = "translateX(0)"; }
                }}
                onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "none";
                    el.style.boxShadow = "0 4px 24px rgba(37,211,102,.45)";
                    const lbl = document.getElementById("wa-lbl");
                    if (lbl) { lbl.style.opacity = "0"; lbl.style.transform = "translateX(10px)"; }
                }}
                aria-label="WhatsApp"
            >
                📱
            </a>
        </div>
    );
}

export default WhatsAppButton;