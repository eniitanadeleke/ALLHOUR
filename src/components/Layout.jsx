import './Layout.css';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { SITE_URL, pages, notFound } from '../seo';

// Creates the tag on first use so route changes can keep head metadata in sync.
function setHead(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(selector.startsWith('link') ? 'link' : 'meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
}

function applySeo(pathname) {
  const page = pages[pathname];
  const { title, description } = page || notFound;
  const url = SITE_URL + (pathname === '/' ? '/' : pathname);
  document.title = title;
  setHead('meta[name="description"]', { name: 'description', content: description });
  setHead('meta[name="robots"]', { name: 'robots', content: page ? 'index, follow' : 'noindex, follow' });
  setHead('link[rel="canonical"]', { rel: 'canonical', href: url });
  setHead('meta[property="og:title"]', { property: 'og:title', content: title });
  setHead('meta[property="og:description"]', { property: 'og:description', content: description });
  setHead('meta[property="og:url"]', { property: 'og:url', content: url });
  setHead('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
  setHead('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
}

export default function Layout() {
  const location = useLocation();
  useEffect(() => {
    applySeo(location.pathname);
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
