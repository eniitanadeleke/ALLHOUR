import './Layout.css';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const titles = {
  '/': 'All Hours', '/about':'About · All Hours', '/formats':'Store formats · All Hours',
  '/stock':'Stock supply · All Hours', '/franchise':'Franchise · All Hours', '/services':'What we do · All Hours',
  '/partners':'Partners · All Hours', '/contact':'Contact · All Hours'
};

export default function Layout() {
  const location = useLocation();
  useEffect(() => {
    document.title = titles[location.pathname] || 'All Hours';
    requestAnimationFrame(() => {
      if (location.hash) document.querySelector(location.hash)?.scrollIntoView({ behavior:'smooth', block:'start' });
      else window.scrollTo({ top:0, behavior:'auto' });
    });
  }, [location]);

  useEffect(() => {
    const handler = (event) => {
      const form = event.target.closest?.('.js-form');
      if (!form) return;
      event.preventDefault();
      const done = form.parentElement?.querySelector('.form-done');
      form.style.display = 'none';
      if (done) { done.classList.add('on'); done.setAttribute('tabindex','-1'); done.focus({ preventScroll:true }); }
    };
    document.addEventListener('submit', handler);
    return () => document.removeEventListener('submit', handler);
  }, []);

  return <><Navbar/><main id="main"><Outlet/></main><Footer/></>;
}
