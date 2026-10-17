import './HourSpine.css';
import { useEffect, useState } from 'react';
import { Clock3, Sun, Moon } from 'lucide-react';

// Day trading runs 06:00 to 19:00. The rest of the clock is night trading. Doors stay open throughout.
const DAY_START = 6;
const DAY_END = 19;
const TICKS = [0, 3, 6, 9, 12, 15, 18, 21, 24];

const pct = (h) => `${(h / 24) * 100}%`;
const pad = (n) => String(n).padStart(2, '0');

function useNow() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);
  return now;
}

export default function HourSpine() {
  const now = useNow();
  const hour = now.getHours() + now.getMinutes() / 60;
  const isDay = hour >= DAY_START && hour < DAY_END;
  const time = `${pad(now.getHours())}:${pad(now.getMinutes())}`;

  return (
    <div className="clock">
      <div className="clock-head">
        <p className="clock-title">Trading through the day and night</p>
        <p className="clock-now">
          <Clock3 className="clock-icon" strokeWidth={2.5} aria-hidden="true" />
          <span>
            It is <b>{time}</b> where you are.
          </span>
        </p>
      </div>

      <div className="clock-track" role="img" aria-label={`Trading day timeline. Day trading ${pad(DAY_START)}:00 to ${DAY_END}:00, night trading the rest of the day. Current time ${time}.`}>
        <span className="clock-day" style={{ left: pct(DAY_START), width: pct(DAY_END - DAY_START) }} />
        <span className={`clock-marker${hour < 1.5 ? ' start' : hour > 22.5 ? ' end' : ''}`} style={{ left: pct(hour) }}>
          <span className="clock-marker-label">Now</span>
        </span>
      </div>

      <ol className="clock-ticks" aria-hidden="true">
        {TICKS.map((t) => (
          <li key={t} className={t % 6 ? 'minor' : ''} style={{ left: pct(t) }}>
            {pad(t % 24 === 0 && t ? 24 : t)}:00
          </li>
        ))}
      </ol>

      <ul className="clock-legend">
        <li className={isDay ? 'on' : ''}>
          <Sun strokeWidth={2.5} aria-hidden="true" /> Day trading <span>06:00 to 19:00</span>
        </li>
        <li className={isDay ? '' : 'on'}>
          <Moon strokeWidth={2.5} aria-hidden="true" /> Night trading <span>19:00 to 06:00</span>
        </li>
      </ul>
    </div>
  );
}
