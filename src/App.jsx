import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import StoreFormats from './pages/StoreFormats';
import StockSupply from './pages/StockSupply';
import Franchise from './pages/Franchise';
import Services from './pages/Services';
import Partners from './pages/Partners';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/formats" element={<StoreFormats />} />
        <Route path="/stock" element={<StockSupply />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/services" element={<Services />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
