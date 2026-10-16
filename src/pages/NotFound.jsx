import './NotFound.css';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

const shelves = [
  { to: '/formats', label: 'Store formats' },
  { to: '/stock', label: 'Stock supply' },
  { to: '/franchise', label: 'Franchise' },
  { to: '/contact', label: 'Contact' },
];

export default function NotFound() {
  return (
    <div className="view on page-shell page-404">
      <section className="shell nf">
        <div className="nf-copy">
          <span className="label">Error 404</span>
          <h1 className="display">This aisle is empty.</h1>
          <p className="nf-lede">
            The page you were looking for has moved or never existed. The rest of the store is open as usual.
          </p>
          <div className="btn-row">
            <Link className="btn" to="/">
              Back to home <span className="arrow"><Icon name="arrow-right" /></span>
            </Link>
            <Link className="btn ghost" to="/contact">Tell us what you need</Link>
          </div>
        </div>

        <nav className="nf-shelf" aria-label="Popular pages">
          <span className="nf-shelf-head">Try one of these</span>
          {shelves.map((s) => (
            <Link key={s.to} to={s.to}>
              {s.label} <Icon name="arrow-right" />
            </Link>
          ))}
        </nav>
      </section>
    </div>
  );
}
