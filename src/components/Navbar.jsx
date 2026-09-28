import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/all-hours-orange-blue-logo-transparent.png';

const links = [
  ['/about', 'About'],
  ['/formats', 'Store formats'],
  ['/stock', 'Stock supply'],
  ['/franchise', 'Franchise'],
  ['/services', 'What we do'],
  ['/partners', 'Partners']
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="nav-in">
        <NavLink className="mark" to="/" onClick={close} aria-label="All Hours home">
          <span className="brand-logo-wrap">
            <img className="brand-logo" src={logo} alt="All Hours" />
          </span>
        </NavLink>

        <button
          className={`nav-toggle ${open ? 'active' : ''}`}
          type="button"
          aria-expanded={open}
          aria-controls="navLinks"
          aria-label="Toggle navigation"
          onClick={() => setOpen(v => !v)}
        >
          <span></span><span></span><span></span>
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`} id="navLinks" aria-label="Main navigation">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>
              {label}
            </NavLink>
          ))}

          <NavLink className="nav-cta" to="/contact" onClick={close}>
            Contact us <span>→</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
