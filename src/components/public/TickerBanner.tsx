// Orange scrolling ticker banner — matches conway_v2.html
const ITEMS = [
    "Panipat → Mumbai",
    "Panipat → Bangalore",
    "Panipat → Chennai",
    "Panipat → Hyderabad",
    "All North India",
    "All South India",
    "All East India",
    "32ft Containers",
    "22ft Open Trucks",
];

function TickerBanner() {
    // Duplicate items so the scroll loop is seamless
    const doubled = [...ITEMS, ...ITEMS];

    return (
        <div className="ticker-wrap">
            <div className="ticker-track">
                {doubled.map((item, i) => (
                    <span key={i} className="ticker-item">
                        {item}
                        <span className="ticker-sep">◆</span>
                    </span>
                ))}
            </div>
        </div>
    );
}

export default TickerBanner;
