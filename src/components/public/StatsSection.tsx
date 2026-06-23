import { useEffect, useRef, useState } from "react";

const STATS = [
    { icon: "🛣️", target: 6,   sfx: "+",  label: "Major Routes"       },
    { icon: "🏙️", target: 20,  sfx: "+",  label: "Cities Covered"     },
    { icon: "🚛", target: 100, sfx: "+",  label: "Happy Clients"      },
    { icon: "🎧", target: 24,  sfx: "/7", label: "Support Available"  },
];

function useCountUp(target: number, active: boolean) {
    const [val, setVal] = useState(0);
    useEffect(() => {
        if (!active) return;
        let cur = 0;
        const inc = target / (1600 / 16);
        const t = setInterval(() => {
            cur = Math.min(cur + inc, target);
            setVal(Math.floor(cur));
            if (cur >= target) clearInterval(t);
        }, 16);
        return () => clearInterval(t);
    }, [active, target]);
    return val;
}

function StatItem({ icon, target, sfx, label, active, delay }: { icon: string; target: number; sfx: string; label: string; active: boolean; delay: string }) {
    const count = useCountUp(target, active);
    return (
        <div className={`rev ${delay}`} style={{ padding: "3rem 2rem", textAlign: "center", borderRight: "1px solid var(--bd)", position: "relative", overflow: "hidden", cursor: "default" }}
            onMouseEnter={e => (e.currentTarget.querySelector(".hov-bg") as HTMLElement | null)!.style.opacity = "1"}
            onMouseLeave={e => (e.currentTarget.querySelector(".hov-bg") as HTMLElement | null)!.style.opacity = "0"}>
            <div className="hov-bg" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 80% at 50% 100%, rgba(255,82,0,.05), transparent)", opacity: 0, transition: "opacity .3s", pointerEvents: "none" }} />
            <span style={{ fontSize: 22, color: "var(--or)", marginBottom: "1rem", display: "block" }}>{icon}</span>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 64, fontWeight: 900, color: "#fff", lineHeight: 1, display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
                <span>{count}</span>
                <span style={{ fontSize: 34, color: "var(--or)", marginTop: 6, marginLeft: 2 }}>{sfx}</span>
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--mu)", marginTop: 8 }}>{label}</div>
        </div>
    );
}

function StatsSection() {
    const ref = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    setActive(true);
                    e.target.querySelectorAll(".rev,.revl,.revr").forEach(el => el.classList.add("vis"));
                }
            });
        }, { threshold: 0.2 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} style={{ background: "var(--bg2)", borderTop: "1px solid var(--bd)", borderBottom: "1px solid var(--bd)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
                {STATS.map((s, i) => (
                    <StatItem key={s.label} {...s} active={active} delay={`d${i + 1}`} />
                ))}
            </div>
        </div>
    );
}

export default StatsSection;