import Stat from './Stat';
import './Stats.css';

export default function Stats({ stats }) {
    return (
        <div className="stats">
            {stats.map((stat, index) => (
                <Stat key={index} name={stat.name} value={stat.value} />
            ))}
        </div>
    );
}