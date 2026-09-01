import './HourSpine.css';
export default function HourSpine() {
  return (
    <div className="spine-bar">
      {Array.from({ length: 24 }, (_, hour) => (
        <span
          key={hour}
          className={hour >= 6 && hour < 19 ? 'day' : 'night-h'}
          style={{ animationDelay: `${hour * 26}ms` }}
        />
      ))}
    </div>
  );
}
