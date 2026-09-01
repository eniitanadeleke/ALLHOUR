import './Franchise.css';
import { Link } from 'react-router-dom';
export default function Franchise() {
  return (
    <div className="view on page-shell page-franchise" id="franchise">
<section className="hero shell">
<div className="hero-grid">
<div><span className="label">Franchise</span><h1 className="display">Run the store. We run everything behind it.</h1></div>
<div>
<p className="lede">A franchise puts a working retail business in your hands, with the supply chain, the systems and the brand already built.</p>
<div className="btn-row"><Link className="btn sun" to="/franchise#fr-form">Apply for a franchise <span className="arrow">→</span></Link></div>
</div>
</div>
<div className="plate wide" style={{marginTop: 'clamp(40px,5vw,64px)'}}>
<span className="cap"><b>Photograph</b> · Franchise holder at their store entrance on opening day</span>
</div>
</section>
<section className="band shell">
<div className="head-block"><span className="label">What you get</span><h2 className="display">A business, not a licence to use a name.</h2></div>
<div className="g3">
<div className="card"><h4>Format and fit out</h4><p>The store design, layout, equipment specification and opening plan for the format your site can carry.</p></div>
<div className="card"><h4>Supply chain</h4><p>Access to our buying power, our approved product range and our distribution schedule from day one.</p></div>
<div className="card"><h4>Retail systems</h4><p>Point of sale, stock control, reporting and the payment infrastructure that runs across the network.</p></div>
<div className="card"><h4>Training</h4><p>Store management, customer service, pharmacy compliance where relevant, and ongoing refreshers for your team.</p></div>
<div className="card"><h4>Marketing</h4><p>The brand is marketed as a network. You are not left to build recognition on your own street alone.</p></div>
<div className="card"><h4>Support</h4><p>A named contact, scheduled visits, and help when a supplier, a licence or a season causes trouble.</p></div>
</div>
</section>
<section className="band night">
<div className="shell">
<div className="head-block"><span className="label">What we look for</span><h2 className="display">The four things that decide an application.</h2></div>
<div className="g4">
<div className="item"><span className="step">01</span><h4>The site</h4><p>Footfall first, floor area second. The location has to carry the format.</p></div>
<div className="item"><span className="step">02</span><h4>The capital</h4><p>Enough to fit out, stock and run the store past the point where it turns.</p></div>
<div className="item"><span className="step">03</span><h4>The operator</h4><p>Someone who will be in the store, not someone who will hire it out and visit monthly.</p></div>
<div className="item"><span className="step">04</span><h4>The compliance</h4><p>Willingness to run to our standards, including pharmacy regulation where the format includes one.</p></div>
</div>
</div>
</section>
<section className="band shell">
<div className="split">
<div>
<span className="label">The process</span>
<h2 className="display">From application to opening.</h2>
<p style={{color: 'var(--ink-2)', marginTop: '18px', maxWidth: '44ch'}}>We come back on every application, including the ones we turn down, and we tell you why.</p>
</div>
<div>
<ul className="spec">
<li><span className="k">Application</span><span className="v">You send the form</span></li>
<li><span className="k">First response</span><span className="v">Within five working days</span></li>
<li><span className="k">Site assessment</span><span className="v">We visit and assess</span></li>
<li><span className="k">Terms</span><span className="v">Written offer, one document</span></li>
<li><span className="k">Fit out</span><span className="v">Timeline to supply</span></li>
<li><span className="k">Training</span><span className="v">Before opening</span></li>
<li><span className="k">Opening</span><span className="v">Supported by our team</span></li>
<li><span className="k">Investment range</span><span className="v">To supply</span></li>
<li><span className="k">Franchise fee</span><span className="v">To supply</span></li>
</ul>
</div>
</div>
</section>
<section className="band sunk">
<div className="shell split">
<div><span className="label">Apply</span><h2 className="display">Send us your site.</h2></div>
<div className="form-wrap" id="fr-form">
<form className="js-form" noValidate>
<div className="fgrid">
<div className="field"><label htmlFor="f-name">Name</label><input id="f-name" type="text" /></div>
<div className="field"><label htmlFor="f-org">Company, if any</label><input id="f-org" type="text" /></div>
<div className="field"><label htmlFor="f-em">Email</label><input id="f-em" type="email" /></div>
<div className="field"><label htmlFor="f-ph">Phone</label><input id="f-ph" type="tel" /></div>
<div className="field"><label htmlFor="f-city">City and country</label><input id="f-city" type="text" /></div>
<div className="field">
<label htmlFor="f-fmt">Format you have in mind</label>
<select id="f-fmt">
<option>Supermarket and pharmacy</option>
<option>Supermarket only</option>
<option>Pharmacy only</option>
<option>Mini mart</option>
<option>Neighbourhood store</option>
<option>Not sure yet</option>
</select>
</div>
<div className="field"><label htmlFor="f-site">Do you have a site</label><select id="f-site"><option>Yes, I own it</option><option>Yes, leased</option><option>Identified, not secured</option><option>No, not yet</option></select></div>
<div className="field"><label htmlFor="f-exp">Retail experience</label><select id="f-exp"><option>None</option><option>Some</option><option>Extensive</option></select></div>
<div className="field full"><label htmlFor="f-desc">Tell us about the site and your plan</label><textarea id="f-desc"></textarea></div>
<div className="field full"><label htmlFor="f-file">Upload a document, optional</label><input id="f-file" type="file" /></div>
</div>
<div className="btn-row"><button className="btn sun" type="submit">Send application</button></div>
</form>
<div className="form-done">
<h4>Application received.</h4>
<p>We come back on every application within five working days, with a yes, a no, or a question.</p>
</div>
</div>
</div>
</section>
    </div>
  );
}
