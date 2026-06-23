import { useState, useRef, useEffect } from "react";

/* ── Rule Engine (from reference) ── */
const INTENTS = [
    { tags: ["hello","hi","hey","namaste","hola","good morning","good afternoon","good evening","start","help"], response: "👋 Hello! Welcome to Con Way Freight Carrier. I can help you with:\n• Routes & destinations\n• Truck sizes & fleet\n• Booking & quotes\n• Transit times\n• Contact & location\n\nWhat would you like to know?", follow: ["What routes do you cover?","How to get a quote?","Truck sizes available?"] },
    { tags: ["route","routes","destination","destinations","cover","where","cities","city","deliver","from panipat","panipat to"], response: "🗺️ We operate Pan-India routes from our Panipat hub:\n\n• Panipat → Mumbai (West India)\n• Panipat → Bangalore (South India)\n• Panipat → Chennai (South India)\n• Panipat → Hyderabad (South India)\n• Panipat → All East India (Kolkata, Bhubaneswar, North-East)\n• Panipat → All South India (Kerala, Andhra, Goa)\n• All North India coverage\n\nNeed a specific route? WhatsApp us at +91 89501 40919.", follow: ["How to book?","Transit time?","Get a quote"] },
    { tags: ["mumbai","bombay","maharashtra"], response: "📦 Panipat → Mumbai: Regular freight to Mumbai covering industrial and commercial cargo. Typical transit: 3-4 days. For a quote, WhatsApp +91 89501 40919.", follow: ["What truck sizes?","Book a shipment","More routes"] },
    { tags: ["bangalore","bengaluru","karnataka"], response: "📦 Panipat → Bangalore: Regular services for tech & manufacturing cargo to Karnataka. Typical transit: 4-5 days. WhatsApp +91 89501 40919 for rates.", follow: ["What truck sizes?","Book a shipment","More routes"] },
    { tags: ["chennai","tamil","tamilnadu","madras"], response: "📦 Panipat → Chennai: Port & export logistics to Tamil Nadu. Typical transit: 4-5 days. WhatsApp +91 89501 40919 for rates.", follow: ["What truck sizes?","Book a shipment","More routes"] },
    { tags: ["hyderabad","telangana","secunderabad"], response: "📦 Panipat → Hyderabad: All-India gateway city in Telangana. Typical transit: 3-4 days. WhatsApp +91 89501 40919 for a quote.", follow: ["What truck sizes?","Book a shipment","More routes"] },
    { tags: ["kolkata","west bengal","east india","bhubaneswar","odisha","north east","northeast","assam"], response: "📦 East India Coverage: Kolkata, Bhubaneswar, North-East states and more. Typical transit: 4-6 days. WhatsApp +91 89501 40919 for specific routes.", follow: ["What truck sizes?","Book a shipment","More routes"] },
    { tags: ["kerala","andhra","goa","coastal","south india"], response: "📦 All South India: Kerala, Andhra Pradesh, Goa, and all coastal routes. Typical transit: 5-7 days. WhatsApp +91 89501 40919 for your destination.", follow: ["What truck sizes?","Book a shipment","More routes"] },
    { tags: ["truck","fleet","vehicle","size","32","22","container","open","flatbed","mini","express","small truck","big truck"], response: "🚛 Our Fleet Options:\n\n1. 32ft Container — Full enclosed, weather-safe for industrial & packaged goods\n2. 22ft Open Truck — Flatbed for oversized/construction cargo; no height limits\n3. Mini & Express Trucks — Available on demand for smaller shipments\n\nNot sure which to use? WhatsApp Prop. Sunny Batra at +91 89501 40919 for advice.", follow: ["Get a quote","Book a shipment","Transit time?"] },
    { tags: ["32ft","32 ft","container truck","closed truck","enclosed"], response: "🚛 32ft Container: Full enclosed truck, weather-safe and secure. Best for industrial goods, FMCG, textiles. Contact us at +91 89501 40919.", follow: ["22ft open truck","Get a quote","Book a shipment"] },
    { tags: ["22ft","22 ft","open truck","flatbed","open body"], response: "🚚 22ft Open Truck: Flatbed with no height restrictions. Ideal for steel, timber, machinery, construction materials. Call +91 89501 40919.", follow: ["32ft container","Get a quote","Book a shipment"] },
    { tags: ["book","booking","shipment","ship","schedule","arrange","hire","order","load"], response: "📋 Booking is simple!\n\n1️⃣ Fill the Quick Enquiry form on this page\n2️⃣ OR WhatsApp us: +91 89501 40919\n3️⃣ OR call Prop. Sunny Batra directly\n\nProvide: Origin → Destination, cargo type, weight, and preferred date.", follow: ["Get a quote","Contact details","What routes?"] },
    { tags: ["quote","price","rate","cost","charge","how much","pricing","estimate"], response: "💰 For an accurate quote, we need:\n• Route (From → To)\n• Truck type (32ft/22ft/Mini)\n• Cargo type & approximate weight\n• Pickup date\n\nWhatsApp +91 89501 40919 or +91 87085 20360 — usually replied within minutes!", follow: ["What routes?","What truck sizes?","Contact details"] },
    { tags: ["transit","time","days","how long","duration","eta","arrive","delivery time","when"], response: "⏱️ Estimated Transit Times from Panipat:\n\n• → Mumbai: 3-4 days\n• → Bangalore: 4-5 days\n• → Chennai: 4-5 days\n• → Hyderabad: 3-4 days\n• → East India: 4-6 days\n• → South India: 5-7 days\n\nWhatsApp +91 89501 40919 for a confirmed ETA.", follow: ["Book a shipment","Get a quote","Contact details"] },
    { tags: ["contact","phone","number","call","whatsapp","reach","touch","talk","speak"], response: "📞 Contact Con Way Freight Carrier:\n\n📱 WhatsApp/Call: +91 89501 40919\n📱 WhatsApp/Call: +91 87085 20360\n👤 Proprietor: Sunny Batra\n📍 Shop No. 295, Sector 25, Transport Nagar, Panipat, Haryana — 132103\n\nWe respond fast — usually within minutes on WhatsApp!", follow: ["Book a shipment","Get a quote","What routes?"] },
    { tags: ["address","location","office","where are you","transport nagar","panipat","haryana","sector 25"], response: "📍 Our Office:\nShop No. 295, Sector 25\nTransport Nagar, Panipat\nHaryana — 132103\n\nFor directions, use the map on this page or WhatsApp +91 89501 40919.", follow: ["Contact details","Book a shipment","Get a quote"] },
    { tags: ["safe","safety","secure","damage","insurance","protect","care","fragile"], response: "🛡️ Cargo safety is our top priority:\n• Proper loading & securing for every shipment\n• Weather-protected 32ft containers available\n• End-to-end accountability\n• Direct proprietor oversight — no middlemen\n\nFor fragile cargo, WhatsApp +91 89501 40919.", follow: ["What truck sizes?","Book a shipment","Contact details"] },
    { tags: ["cargo","goods","material","textile","fmcg","steel","machinery","construction","industrial","export"], response: "📦 We handle all cargo types:\n✅ Industrial Goods\n✅ FMCG & Retail\n✅ Construction Materials (steel, timber)\n✅ Machinery & Equipment\n✅ Textiles & Apparel\n✅ Export Consignments\n\nWhatsApp +91 89501 40919 to confirm your specific cargo.", follow: ["What truck sizes?","Get a quote","Book a shipment"] },
    { tags: ["sunny","batra","proprietor","owner","prop"], response: "👤 Prop. Sunny Batra is the proprietor of Con Way Freight Carrier. Speak directly with him — no call centers, no intermediaries. WhatsApp or call +91 89501 40919.", follow: ["Contact details","Book a shipment","Get a quote"] },
    { tags: ["company","about","who are you","con way","conway","freight carrier"], response: "🏢 Con Way Freight Carrier is a Pan-India freight & logistics company headquartered in Panipat, Haryana. We provide reliable road freight solutions across India. Operated by Prop. Sunny Batra with a focus on direct service and on-time delivery.", follow: ["What routes?","What truck sizes?","Contact details"] },
    { tags: ["thank","thanks","thankyou","thank you","great","awesome","perfect","helpful"], response: "😊 You're welcome! For bookings or queries, WhatsApp us at +91 89501 40919. Have a great day! 🚛", follow: ["Book a shipment","Get a quote","Contact details"] },
    { tags: ["bye","goodbye","ok","okay","see you","later","done","nothing"], response: "👋 Thank you for contacting Con Way Freight Carrier! For bookings anytime, WhatsApp us at +91 89501 40919. Safe travels! 🚛", follow: [] },
];

const DEFAULT_RESP = {
    text: "🤔 I'm not sure I understood that. I can help you with:\n• Routes & destinations\n• Truck sizes & fleet\n• Booking a shipment\n• Getting a quote\n• Transit time estimates\n• Contact information\n\nOr WhatsApp us directly: +91 89501 40919",
    follow: ["What routes do you cover?","How to book?","Get a quote","Contact details"],
};

const INITIAL_QR = ["What routes do you cover?","What truck sizes available?","How to book a shipment?","Transit time estimate?","Contact details"];



// Add google maps intent
const MAPS_INTENTS = [
    { tags: ["map","maps","google map","google maps","directions","navigate","gps","find you","how to reach","how to come","get directions"], response: "📍 You can find us on Google Maps!\n\n🗺️ View our location:\nhttps://maps.google.com/?q=Transport+Nagar+Sector+25+Panipat+Haryana+132103\n\n🧭 Get Directions:\nhttps://www.google.com/maps/dir/?api=1&destination=Transport+Nagar+Sector+25+Panipat+Haryana+132103\n\nAddress: Shop No. 295, Sector 25, Transport Nagar, Panipat, Haryana — 132103", follow: ["Contact details","Book a shipment","Get a quote"] },
];

const ALL_INTENTS = [...MAPS_INTENTS, ...INTENTS];

function getReplyFull(input: string) {
    const q = input.toLowerCase().trim();
    for (const intent of ALL_INTENTS) {
        if (intent.tags.some(tag => q.includes(tag))) return { text: intent.response, follow: intent.follow };
    }
    return DEFAULT_RESP;
}

interface Msg { id: number; text: string; isBot: boolean; }

function Chatbot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Msg[]>([]);
    const [qr, setQr] = useState<string[]>([]);
    const [input, setInput] = useState("");
    const [typing, setTyping] = useState(false);
    const [dot, setDot] = useState(false);
    const [initiated, setInitiated] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);
    const msgCounter = useRef(0);

    useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, typing]);

    useEffect(() => {
        const t = setTimeout(() => { if (!open) setDot(true); }, 3000);
        return () => clearTimeout(t);
    }, []);

    const toggle = () => {
        setOpen(o => {
            const next = !o;
            if (next) {
                setDot(false);
                if (!initiated) {
                    setInitiated(true);
                    setTimeout(() => addBot("👋 Hi! I'm the Con Way Freight Assistant. I can help with routes, fleet, bookings & more. What would you like to know?"), 400);
                    setTimeout(() => setQr(INITIAL_QR), 900);
                }
            }
            return next;
        });
    };

    const addBot = (text: string) => {
        setMessages(m => [...m, { id: ++msgCounter.current, text, isBot: true }]);
    };

    const doSend = (text: string) => {
        if (typing) return;
        setMessages(m => [...m, { id: ++msgCounter.current, text, isBot: false }]);
        setQr([]);
        setTyping(true);
        const delay = 600 + Math.random() * 600;
        setTimeout(() => {
            const reply = getReplyFull(text);
            setMessages(m => [...m, { id: ++msgCounter.current, text: reply.text, isBot: true }]);
            setTyping(false);
            if (reply.follow?.length) setTimeout(() => setQr(reply.follow), 300);
        }, delay);
    };

    const send = () => { const t = input.trim(); if (!t || typing) return; setInput(""); doSend(t); };
    const onKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } };

    // Shared styles
    const btn = (bg: string): React.CSSProperties => ({
        width: 56, height: 56, borderRadius: "50%", background: bg, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 23, border: "none", cursor: "pointer",
        boxShadow: `0 4px 24px ${bg === "var(--or)" ? "rgba(255,82,0,.5)" : "rgba(37,211,102,.45)"}`,
        transition: "transform .2s, box-shadow .2s",
    });

    return (
        <>
            {/* Chat window */}
            <div className={`chwin${open ? " open" : ""}`}>
                {/* Header */}
                <div style={{ background: "var(--bg3)", borderBottom: "1px solid var(--bd)", padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, flexShrink: 0, position: "relative" }}>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, var(--or), transparent)" }} />
                    <div style={{ width: 38, height: 38, background: "rgba(255,82,0,.15)", border: "1px solid rgba(255,82,0,.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--or)", fontSize: 16, flexShrink: 0 }}>🚛</div>
                    <div>
                        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, fontWeight: 800, textTransform: "uppercase" }}>Con Way Assistant</div>
                        <div style={{ fontSize: 11, color: "#4ade80", display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
                            <span style={{ width: 6, height: 6, background: "#4ade80", borderRadius: "50%", flexShrink: 0, animation: "ping 2s ease-in-out infinite" }} />
                            Online — Ask me anything
                        </div>
                    </div>
                    <button onClick={toggle} style={{ background: "none", border: "none", color: "var(--mu)", cursor: "pointer", fontSize: 15, padding: 4, marginLeft: "auto" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                        onMouseLeave={e => (e.currentTarget.style.color = "var(--mu)")}>✕</button>
                </div>

                {/* Messages */}
                <div style={{ flex: 1, overflowY: "auto", padding: 14, display: "flex", flexDirection: "column", gap: 10, scrollBehavior: "smooth" }}>
                    {messages.map(m => (
                        <div key={m.id} style={{
                            maxWidth: "85%", padding: "10px 14px", fontSize: "13.5px", lineHeight: 1.55,
                            background: m.isBot ? "var(--bg3)" : "var(--or)",
                            border: m.isBot ? "1px solid var(--bd)" : "none",
                            color: "var(--tx)", alignSelf: m.isBot ? "flex-start" : "flex-end",
                            borderRadius: m.isBot ? "0 8px 8px 8px" : "8px 0 8px 8px",
                            whiteSpace: "pre-line",
                        }}>{m.text}</div>
                    ))}
                    {typing && (
                        <div style={{ maxWidth: "85%", padding: "12px 16px", background: "var(--bg3)", border: "1px solid var(--bd)", alignSelf: "flex-start", borderRadius: "0 8px 8px 8px" }}>
                            <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
                                {[0, 1, 2].map(i => <span key={i} style={{ width: 6, height: 6, background: "var(--mu)", borderRadius: "50%", animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite` }} />)}
                            </div>
                        </div>
                    )}
                    <div ref={bottomRef} />
                </div>

                {/* Quick replies */}
                {qr.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, padding: "0 14px 10px" }}>
                        {qr.map(q => (
                            <button key={q} onClick={() => { setQr([]); doSend(q); }}
                                style={{ background: "transparent", border: "1px solid rgba(255,82,0,.3)", color: "var(--or)", fontFamily: "'Barlow', sans-serif", fontSize: "11.5px", fontWeight: 600, padding: "5px 10px", cursor: "pointer", transition: "all .2s", borderRadius: 2 }}
                                onMouseEnter={e => { (e.currentTarget).style.background = "rgba(255,82,0,.12)"; (e.currentTarget).style.borderColor = "var(--or)"; }}
                                onMouseLeave={e => { (e.currentTarget).style.background = "transparent"; (e.currentTarget).style.borderColor = "rgba(255,82,0,.3)"; }}>
                                {q}
                            </button>
                        ))}
                    </div>
                )}

                {/* Input */}
                <div style={{ borderTop: "1px solid var(--bd)", padding: 10, display: "flex", gap: 8, flexShrink: 0 }}>
                    <textarea rows={1} placeholder="Type your question…" value={input} onChange={e => setInput(e.target.value)} onKeyDown={onKey}
                        style={{ flex: 1, background: "var(--bg)", border: "1px solid var(--bd)", color: "var(--tx)", fontFamily: "'Barlow', sans-serif", fontSize: "13.5px", padding: "9px 12px", outline: "none", resize: "none", transition: "border-color .2s", borderRadius: 2 }}
                        onFocus={e => (e.target.style.borderColor = "var(--or)")}
                        onBlur={e => (e.target.style.borderColor = "var(--bd)")} />
                    <button onClick={send} disabled={!input.trim() || typing}
                        style={{ width: 40, background: input.trim() && !typing ? "var(--or)" : "var(--bg4)", color: "#fff", border: "none", cursor: input.trim() && !typing ? "pointer" : "not-allowed", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s", flexShrink: 0, borderRadius: 2 }}
                        onMouseEnter={e => { if (input.trim() && !typing) (e.currentTarget).style.background = "var(--ord)"; }}
                        onMouseLeave={e => { if (input.trim() && !typing) (e.currentTarget).style.background = "var(--or)"; }}>
                        ➤
                    </button>
                </div>
            </div>

            {/* Chat launcher button */}
            <div style={{ position: "fixed", bottom: 100, right: 28, zIndex: 998, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
                <div style={{ background: "var(--bg2)", border: "1px solid rgba(255,82,0,.25)", color: "#fff", fontSize: 12, fontWeight: 600, padding: "6px 12px", whiteSpace: "nowrap", opacity: 0, transform: "translateX(10px)", transition: "all .25s", pointerEvents: "none" }}
                    className="chlbl">Ask our AI Assistant</div>
                <button onClick={toggle} style={{ ...btn("var(--or)"), position: "relative" }}
                    onMouseEnter={e => { (e.currentTarget).style.transform = "scale(1.1)"; (e.currentTarget).style.boxShadow = "0 6px 32px rgba(255,82,0,.65)"; (e.currentTarget.previousElementSibling as HTMLElement)!.style.opacity = "1"; (e.currentTarget.previousElementSibling as HTMLElement)!.style.transform = "translateX(0)"; }}
                    onMouseLeave={e => { (e.currentTarget).style.transform = "none"; (e.currentTarget).style.boxShadow = "0 4px 24px rgba(255,82,0,.5)"; (e.currentTarget.previousElementSibling as HTMLElement)!.style.opacity = "0"; (e.currentTarget.previousElementSibling as HTMLElement)!.style.transform = "translateX(10px)"; }}
                    aria-label="AI Chat">
                    {open ? "✕" : "🤖"}
                    {dot && <span style={{ position: "absolute", top: 4, right: 4, width: 10, height: 10, background: "#fff", borderRadius: "50%", border: "2px solid var(--or)", animation: "ping 1.5s ease-in-out infinite" }} />}
                </button>
            </div>
        </>
    );
}

export default Chatbot;
