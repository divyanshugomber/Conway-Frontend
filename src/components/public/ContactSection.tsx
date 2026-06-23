import { useState, useRef, useEffect } from "react";

interface FormData {
    name: string;
    phone: string;
    route: string;
    truckType: string;
    message: string;
}

const ROUTES = [
    "Panipat → Mumbai",
    "Panipat → Bangalore",
    "Panipat → Chennai",
    "Panipat → Hyderabad",
    "All South India",
    "All East India",
    "Other / Custom Route",
];

const TRUCK_TYPES = [
    "32ft Container",
    "22ft Open Truck",
    "Other / Discuss",
];

function ContactSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [form, setForm] = useState<FormData>({
        name: "", phone: "", route: ROUTES[0], truckType: TRUCK_TYPES[0], message: "",
    });
    const [toast, setToast] = useState<{ msg: string; ok: boolean; show: boolean }>({ msg: "", ok: true, show: false });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) e.target.querySelectorAll(".rev,.revl,.revr").forEach(el => el.classList.add("vis"));
            }),
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const showToast = (msg: string, ok = true) => {
        setToast({ msg, ok, show: true });
        setTimeout(() => setToast(t => ({ ...t, show: false })), 3400);
    };

    const update = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
        setForm(f => ({ ...f, [k]: e.target.value }));

    const sendWA = () => {
        if (!form.name.trim()) { showToast("Please enter your name.", false); return; }
        if (!form.phone.trim()) { showToast("Please enter your phone number.", false); return; }
        const txt = `Hello Con Way Freight Carrier!\n\nName: ${form.name}\nPhone: ${form.phone}\nRoute: ${form.route}\nTruck: ${form.truckType}${form.message ? "\nMessage: " + form.message : ""}`;
        window.open("https://wa.me/918950140919?text=" + encodeURIComponent(txt), "_blank");
        showToast("Opening WhatsApp with your enquiry…");
    };

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name.trim()) { showToast("Please enter your name.", false); return; }
        if (!form.phone.trim()) { showToast("Please enter your phone.", false); return; }
        sendWA();
        setForm(f => ({ ...f, name: "", phone: "", message: "" }));
    };

    const S: React.CSSProperties = {
        width: "100%",
        background: "var(--bg)",
        border: "1px solid var(--bd2)",
        color: "var(--tx)",
        fontFamily: "'Barlow', sans-serif",
        fontSize: "14px",
        padding: "12px 15px",
        outline: "none",
        boxSizing: "border-box",
        transition: "border-color .2s, box-shadow .2s",
    };

    return (
        <>
            <section
                id="contact"
                ref={sectionRef}
                style={{ background: "var(--bg)", padding: "7rem 3rem", scrollMarginTop: "68px" }}
            >
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    {/* Section header */}
                    <div style={{ marginBottom: "3rem" }}>
                        <div className="eyebrow rev" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: "var(--or)", marginBottom: "0.9rem" }}>
                            <span style={{ display: "inline-block", width: 28, height: 1, background: "var(--or)" }} />
                            Contact Us
                        </div>
                        <h2 className="rev d1" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(40px, 5.5vw, 66px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.95, letterSpacing: -1, marginBottom: "0.9rem" }}>
                            Let's Move Your<br />
                            <em style={{ color: "var(--or)", fontStyle: "normal" }}>Cargo Today</em>
                        </h2>
                    </div>

                    {/* Two-column split */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "5rem", alignItems: "start" }}>

                        {/* LEFT — Contact info */}
                        <div className="revl">
                            <p style={{ color: "var(--mu2)", fontSize: 15, lineHeight: 1.85, marginBottom: 0 }}>
                                Reach out to book a truck, get a quote, or ask anything about our services.
                                We respond fast — usually within minutes on WhatsApp.
                            </p>

                            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "2.5rem" }}>
                                {/* Company */}
                                <InfoRow icon="🏢" label="Company" value="Con Way Freight Carrier" />
                                {/* Proprietor */}
                                <InfoRow icon="👤" label="Proprietor" value="Sunny Batra" />
                                {/* Address */}
                                <InfoRow icon="📍" label="Address" value={<>Shop No. 295, Sector 25<br />Transport Nagar, Panipat<br />Haryana — 132103</>} />
                                {/* WhatsApp */}
                                <div style={{ display: "flex", alignItems: "flex-start", gap: "1.2rem" }}>
                                    <div style={{ width: 46, height: 46, flexShrink: 0, background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, color: "var(--wg)" }}>
                                        📱
                                    </div>
                                    <div>
                                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "var(--mu)", marginBottom: 4 }}>WhatsApp / Call</div>
                                        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 6 }}>
                                            <a href="https://wa.me/918950140919?text=Hello%20Con%20Way%20Freight%2C%20I%20need%20a%20freight%20quote." target="_blank" rel="noreferrer"
                                                style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(37,211,102,0.09)", border: "1px solid rgba(37,211,102,0.2)", color: "var(--wg)", fontSize: 15, fontWeight: 600, textDecoration: "none", padding: "10px 16px", transition: "all .2s" }}>
                                                📱 +91 89501 40919
                                            </a>
                                            <a href="https://wa.me/918708520360?text=Hello%20Con%20Way%20Freight%2C%20I%20need%20a%20freight%20quote." target="_blank" rel="noreferrer"
                                                style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(37,211,102,0.09)", border: "1px solid rgba(37,211,102,0.2)", color: "var(--wg)", fontSize: 15, fontWeight: 600, textDecoration: "none", padding: "10px 16px", transition: "all .2s" }}>
                                                📱 +91 87085 20360
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT — Quick Enquiry Form */}
                        <div className="revr" style={{ background: "var(--bg3)", border: "1px solid var(--bd2)", padding: "2.5rem", position: "relative", overflow: "hidden" }}>
                            {/* Orange top bar */}
                            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, var(--or), var(--or2), #FFB800)" }} />

                            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 24, fontWeight: 900, textTransform: "uppercase", marginBottom: "1.75rem", letterSpacing: 0.5 }}>
                                Quick Enquiry
                            </div>

                            <form onSubmit={submitForm}>
                                {/* Name + Phone */}
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.1rem" }}>
                                    <FormField label="Your Name">
                                        <input type="text" placeholder="Enter your name" value={form.name} onChange={update("name")} required style={S}
                                            onFocus={e => (e.target.style.borderColor = "var(--or)")}
                                            onBlur={e => (e.target.style.borderColor = "var(--bd2)")} />
                                    </FormField>
                                    <FormField label="Phone Number">
                                        <input type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={update("phone")} required style={S}
                                            onFocus={e => (e.target.style.borderColor = "var(--or)")}
                                            onBlur={e => (e.target.style.borderColor = "var(--bd2)")} />
                                    </FormField>
                                </div>

                                {/* Route */}
                                <FormField label="Route Required">
                                    <select value={form.route} onChange={update("route")} style={{ ...S, cursor: "pointer", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='7'%3E%3Cpath fill='%23FF5200' d='M1 1l5 5 5-5'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 15px center", appearance: "none", paddingRight: 40 }}>
                                        {ROUTES.map(r => <option key={r} value={r} style={{ background: "var(--bg2)" }}>{r}</option>)}
                                    </select>
                                </FormField>

                                {/* Truck Type */}
                                <FormField label="Truck Type">
                                    <select value={form.truckType} onChange={update("truckType")} style={{ ...S, cursor: "pointer", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='7'%3E%3Cpath fill='%23FF5200' d='M1 1l5 5 5-5'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 15px center", appearance: "none", paddingRight: 40 }}>
                                        {TRUCK_TYPES.map(t => <option key={t} value={t} style={{ background: "var(--bg2)" }}>{t}</option>)}
                                    </select>
                                </FormField>

                                {/* Message */}
                                <FormField label="Message (optional)">
                                    <textarea placeholder="Describe your cargo or special requirements…" value={form.message} onChange={update("message")} rows={3}
                                        style={{ ...S, minHeight: 85, resize: "vertical" }}
                                        onFocus={e => (e.target.style.borderColor = "var(--or)")}
                                        onBlur={e => (e.target.style.borderColor = "var(--bd2)")} />
                                </FormField>

                                {/* Actions */}
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: "0.75rem" }}>
                                    <button type="submit" style={{ background: "var(--or)", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", border: "none", padding: "14px", cursor: "pointer", clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)", transition: "all .2s", position: "relative", overflow: "hidden" }}
                                        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "var(--ord)"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
                                        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "var(--or)"; (e.currentTarget as HTMLButtonElement).style.transform = "none"; }}>
                                        Send Enquiry
                                    </button>
                                    <button type="button" onClick={sendWA} style={{ background: "var(--wg)", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", border: "none", padding: "14px", cursor: "pointer", clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)", transition: "all .2s", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
                                        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "var(--wd)"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
                                        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "var(--wg)"; (e.currentTarget as HTMLButtonElement).style.transform = "none"; }}>
                                        📱 Via WhatsApp
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Toast notification */}
            <div style={{
                position: "fixed", bottom: 28, left: "50%",
                transform: toast.show ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(80px)",
                background: "rgba(7,9,15,0.96)",
                border: toast.ok ? "1px solid rgba(37,211,102,0.4)" : "1px solid rgba(239,68,68,0.4)",
                color: toast.ok ? "#4ade80" : "#f87171",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 15, fontWeight: 700, letterSpacing: 1,
                padding: "13px 26px", zIndex: 9999,
                display: "flex", alignItems: "center", gap: 10,
                boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
                transition: "transform .4s cubic-bezier(.34,1.56,.64,1), opacity .3s",
                opacity: toast.show ? 1 : 0,
                whiteSpace: "nowrap", borderRadius: 2, pointerEvents: "none"
            }}>
                {toast.ok ? "✅" : "❌"} {toast.msg}
            </div>
        </>
    );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div style={{ marginBottom: "1.1rem" }}>
            <label style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "var(--mu)", marginBottom: 7 }}>{label}</label>
            {children}
        </div>
    );
}

function InfoRow({ icon, label, value }: { icon: string; label: string; value: React.ReactNode }) {
    return (
        <div style={{ display: "flex", alignItems: "flex-start", gap: "1.2rem" }}>
            <div style={{ width: 46, height: 46, flexShrink: 0, background: "rgba(255,82,0,0.1)", border: "1px solid rgba(255,82,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, color: "var(--or)" }}>
                {icon}
            </div>
            <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "var(--mu)", marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 15, color: "var(--tx)", lineHeight: 1.6 }}>{value}</div>
            </div>
        </div>
    );
}

export default ContactSection;