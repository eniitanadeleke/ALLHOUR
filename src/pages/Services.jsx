import './Services.css';
import { Link } from 'react-router-dom';
export default function Services() {
  return (
    <div className="view on page-shell page-services" id="services">
<section className="hero shell">
<div className="hero-grid">
<div><span className="label">What we do</span><h1 className="display">Seven jobs that keep the network running.</h1></div>
<div><p className="lede">Retail looks like a shop. Behind the shop there are seven operations, and each one has to work for the shelf to be full.</p></div>
</div>
</section>
<section className="band shell">
<div className="svc">
<div className="svc-row">
<div><span className="label">Service 01</span><h3 className="display">Franchising</h3></div>
<div className="body-col">
<p>A franchise system that puts retail skills and retail income into local hands across markets, ethnic groups and gender. We handle the administration that gives a franchise holder market exposure and a fair shot at performance.</p>
<Link className="tlink" to="/franchise">Franchise details <span className="arrow">→</span></Link>
</div>
</div>
<div className="svc-row">
<div><span className="label">Service 02</span><h3 className="display">Shelf platform</h3></div>
<div className="body-col">
<p>For a brand, our shelf is a route to market. New products, improved versions, and format changes such as moving from a tub to a sachet all get tested and sold across a network that reaches from the mall down to the neighbourhood store.</p>
</div>
</div>
<div className="svc-row">
<div><span className="label">Service 03</span><h3 className="display">Digital distribution</h3></div>
<div className="body-col">
<p>Airtime, utility payments, pin based services, gaming, ticketing and basic financial services sold at the counter. It saves the customer a journey, and it brings people into the store who came for something else.</p>
</div>
</div>
<div className="svc-row">
<div><span className="label">Service 04</span><h3 className="display">Asset management</h3></div>
<div className="body-col">
<p>Refrigeration, generators, shelving, vehicles and point of sale hardware are the difference between a store that trades and one that closes at noon. We buy direct from manufacturers, keep warranties valid, and replace equipment before it fails rather than after.</p>
</div>
</div>
<div className="svc-row">
<div><span className="label">Service 05</span><h3 className="display">Financial services</h3></div>
<div className="body-col">
<p>We take financial services out of the banking hall and into the street corner. Card products, point of sale terminals and platforms operated for banks and other providers, using our stores as the physical network they do not have.</p>
</div>
</div>
<div className="svc-row">
<div><span className="label">Service 06</span><h3 className="display">Supply chain</h3></div>
<div className="body-col">
<p>Moving goods from source to customer across many stores, many partners and difficult roads. This is the operation everything else depends on, so we run it as a strategic function rather than a cost line.</p>
</div>
</div>
<div className="svc-row">
<div><span className="label">Service 07</span><h3 className="display">Supplier development</h3></div>
<div className="body-col">
<p>Suppliers make the business work. We identify and build small and large suppliers whose offering fits our standard, and we invest in their capacity through a dedicated supplier development fund rather than only pressing on price.</p>
<Link className="tlink" to="/partners">Become a supplier <span className="arrow">→</span></Link>
</div>
</div>
</div>
</section>
    </div>
  );
}
