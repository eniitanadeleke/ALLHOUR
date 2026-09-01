import './Partners.css';
export default function Partners() {
  return (
    <div className="view on page-shell page-partners" id="partners">
<section className="hero shell">
<div className="hero-grid">
<div><span className="label">Partners</span><h1 className="display">Suppliers, brands, banks and capital.</h1></div>
<div><p className="lede">Four kinds of partner, each getting something different out of the same network.</p></div>
</div>
</section>
<section className="band shell">
<div className="g2" style={{gridTemplateColumns: 'repeat(auto-fit,minmax(420px,1fr))'}}>
<div className="card">
<span className="label">Partner 01</span>
<h4>Suppliers</h4>
<p>If you produce food, household goods, personal care or health products, our stores and our independent shop network are volume you can plan around.</p>
<p>Our grocery range is sourced through a vetted agricultural supply network, which keeps the chain between farm and shelf short and the quality traceable.</p>
<ul>
<li>Volume across every format we operate</li>
<li>Supplier development fund for capacity building</li>
<li>Payment terms agreed in writing and kept</li>
</ul>
</div>
<div className="card">
<span className="label">Partner 02</span>
<h4>Brands</h4>
<p>Launch a product, test a new pack format, or push an existing line into markets you do not currently reach. Our shelf gives a brand visibility and sales in the same move.</p>
<ul>
<li>Placement across mall, hypermarket and neighbourhood formats</li>
<li>Sales data back from the till</li>
<li>In store activation space</li>
</ul>
</div>
<div className="card">
<span className="label">Partner 03</span>
<h4>Banks and financial institutions</h4>
<p>Our stock supply scheme is a lending book with real inventory behind it and repayment tied to daily trading. Our stores are also a physical distribution network for cards, terminals and agency banking.</p>
<ul>
<li>Stock finance for vetted independent shop owners</li>
<li>Point of sale and agency banking footprint</li>
<li>Card issuing and payment infrastructure</li>
<li>Customer acquisition at the counter</li>
</ul>
</div>
<div className="card">
<span className="label">Partner 04</span>
<h4>Capital partners</h4>
<p>Debt or equity into store rollout, distribution infrastructure or the stock supply book, with defined terms, a defined exit and reporting on the same schedule every quarter.</p>
<ul>
<li>Named projects rather than a general fund</li>
<li>Quarterly reporting, good news and bad news at the same speed</li>
<li>Structures to suit the partner</li>
</ul>
</div>
</div>
</section>
<section className="band night">
<div className="shell split">
<div><span className="label">Why the network works</span><h2 className="display">Three things a partner should check before believing any of this.</h2></div>
<div className="body-col">
<ul className="plain">
<li>Repayment on the stock scheme is tied to sales that pass through our own supply chain, so we can see the movement rather than take a borrower's word for it</li>
<li>Our formats are sized to their locations, which keeps occupancy costs proportionate to what the site can actually earn</li>
<li>Supply comes before scale, so a new store is never opened against a supply chain that cannot serve it</li>
</ul>
<div className="callout">
<p><b>For due diligence.</b> Audited accounts, store performance data and the stock scheme repayment record are available to serious partners on request. Add the contact for data room access before launch.</p>
</div>
</div>
</div>
</section>
<section className="band shell">
<div className="split">
<div><span className="label">Get in touch</span><h2 className="display">Tell us what you bring.</h2></div>
<div className="form-wrap">
<form className="js-form" noValidate>
<div className="fgrid">
<div className="field"><label htmlFor="p-name">Name</label><input id="p-name" type="text" /></div>
<div className="field"><label htmlFor="p-org">Organisation</label><input id="p-org" type="text" /></div>
<div className="field"><label htmlFor="p-role">Role</label><input id="p-role" type="text" /></div>
<div className="field">
<label htmlFor="p-type">Partner type</label>
<select id="p-type"><option>Supplier</option><option>Brand</option><option>Bank or financial institution</option><option>Capital partner</option></select>
</div>
<div className="field"><label htmlFor="p-em">Email</label><input id="p-em" type="email" /></div>
<div className="field"><label htmlFor="p-ph">Phone</label><input id="p-ph" type="tel" /></div>
<div className="field full"><label htmlFor="p-mkt">Markets you cover</label><input id="p-mkt" type="text" /></div>
<div className="field full"><label htmlFor="p-desc">What are you proposing</label><textarea id="p-desc"></textarea></div>
<div className="field full"><label htmlFor="p-file">Upload a document, optional</label><input id="p-file" type="file" /></div>
</div>
<div className="btn-row"><button className="btn sun" type="submit">Send it to us</button></div>
</form>
<div className="form-done">
<h4>Received.</h4>
<p>We will come back to you within five working days with a yes, a no, or a question.</p>
</div>
</div>
</div>
</section>
    </div>
  );
}
