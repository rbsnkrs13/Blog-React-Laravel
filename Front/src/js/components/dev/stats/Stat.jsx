export default function Stat({name, value}) {
    return (
        <div className="stat">
            <div className="stat-value">{value}</div>
            <div className="stat-name">{name}</div>
        </div>
    );
}