import './Contact.css';
export default function Contact() {
  return (
    <div className="view on page-shell page-contact" id="contact">
<section className="hero shell">
<div className="hero-grid">
<div><span className="label">Contact</span><h1 className="display">Call, message, or walk in.</h1></div>
<div><p className="lede">Pick what your message is about and it goes straight to the right team.</p></div>
</div>
</section>
<section className="band shell">
<div className="g3">
<div className="card">
<h4>Corporate office</h4>
<ul className="spec">
<li><span className="k">Address</span><span className="v">To supply</span></li>
<li><span className="k">Phone</span><span className="v">To supply</span></li>
<li><span className="k">Email</span><span className="v">To supply</span></li>
<li><span className="k">Weekdays</span><span className="v">To supply</span></li>
</ul>
</div>
<div className="card">
<h4>Stock supply team</h4>
<ul className="spec">
<li><span className="k">Phone</span><span className="v">To supply</span></li>
<li><span className="k">WhatsApp</span><span className="v">To supply</span></li>
<li><span className="k">Email</span><span className="v">To supply</span></li>
</ul>
</div>
<div className="card">
<h4>Franchise and partnerships</h4>
<ul className="spec">
<li><span className="k">Phone</span><span className="v">To supply</span></li>
<li><span className="k">Email</span><span className="v">To supply</span></li>
</ul>
</div>
</div>
<div className="plate wide" style={{marginTop: 'clamp(28px,3.6vw,42px)'}}><span className="cap"><b>Map</b> · Embed a map for each office once addresses are confirmed</span></div>
</section>
<section className="band sunk">
<div className="shell split">
<div><span className="label">Message us</span><h2 className="display">Send it here and it lands with the right team.</h2></div>
<div className="form-wrap">
<form className="js-form" noValidate>
<div className="fgrid">
<div className="field full">
<label htmlFor="c-topic">What is this about</label>
<select id="c-topic">
<option>Stock supply for my shop</option>
<option>Franchise enquiry</option>
<option>Supplying products to All Hours</option>
<option>Brand placement</option>
<option>Banking or finance partnership</option>
<option>Investment</option>
<option>Customer service or a complaint</option>
<option>Careers</option>
<option>Press</option>
</select>
</div>
<div className="field"><label htmlFor="c-name">Name</label><input id="c-name" type="text" /></div>
<div className="field"><label htmlFor="c-co">Organisation</label><input id="c-co" type="text" /></div>
<div className="field"><label htmlFor="c-em">Email</label><input id="c-em" type="email" /></div>
<div className="field"><label htmlFor="c-ph">Phone</label><input id="c-ph" type="tel" /></div>
<div className="field full"><label htmlFor="c-msg">Message</label><textarea id="c-msg"></textarea></div>
</div>
<div className="btn-row"><button className="btn sun" type="submit">Send message</button></div>
<p className="fnote">We reply within two working days.</p>
</form>
<div className="form-done">
<h4>Thank you.</h4>
<p>We have your message and will come back to you within two working days.</p>
</div>
</div>
</div>
</section>
    </div>
  );
}
