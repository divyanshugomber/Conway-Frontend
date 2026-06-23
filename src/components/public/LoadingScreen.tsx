import { useState, useEffect } from "react";

function LoadingScreen() {
    const [hidden, setHidden] = useState(false);
    const [gone, setGone] = useState(false);

    useEffect(() => {
        // Hide after 2s (page is ready)
        const t1 = setTimeout(() => setHidden(true), 2000);
        // Remove from DOM after fade completes
        const t2 = setTimeout(() => setGone(true), 2650);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, []);

    if (gone) return null;

    return (
        <div className={`loader-screen${hidden ? " hidden" : ""}`}>
            {/* Progress bar */}
            <div className="loader-progress" />

            {/* Brand */}
            <div className="loader-brand">
                Con<span>Way</span>
            </div>
            <div className="loader-tagline">Pan-India Freight Solutions</div>

            {/* Animated truck on track */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
                <div className="loader-truck">🚛</div>
                <div className="loader-track" />
            </div>

            {/* Bouncing dots */}
            <div className="loader-dots">
                <div className="loader-dot" />
                <div className="loader-dot" />
                <div className="loader-dot" />
            </div>
        </div>
    );
}

export default LoadingScreen;
