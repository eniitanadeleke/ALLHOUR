// Stroke icons on a 24px grid. They inherit colour from the parent and size from font-size.
const paths = {
  'arrow-right': ['M4.5 12h15', 'M13.5 6l6 6-6 6'],
  'file-check': ['M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z', 'M14 3v5h5', 'M9 14.5l2.2 2.2 4.3-4.4'],
  'shield-check': ['M12 3l7.5 3v5.5c0 4.4-3.1 8.1-7.5 9.5-4.4-1.4-7.5-5.1-7.5-9.5V6z', 'M8.8 12.2l2.3 2.3 4.3-4.4'],
  ban: ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z', 'M5.7 5.7l12.6 12.6'],
  check: ['M5 12.5l4.5 4.5L19 7.5'],
  x: ['M6.5 6.5l11 11', 'M17.5 6.5l-11 11'],
  question: ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z', 'M9.4 9.4a2.7 2.7 0 1 1 3.9 2.4c-.8.4-1.3 1-1.3 1.9v.4', 'M12 17.2v.1'],
  plus: ['M12 5v14', 'M5 12h14'],
};

export default function Icon({ name, className = '', strokeWidth = 2.25 }) {
  return (
    <svg
      className={`icon ${className}`.trim()}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name].map((d) => <path key={d} d={d} />)}
    </svg>
  );
}
