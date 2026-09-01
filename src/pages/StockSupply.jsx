import './StockSupply.css';
import { Link } from 'react-router-dom';
export default function StockSupply() {
  return (
    <div className="view on page-shell page-stock" id="stock">
<section className="hero shell">
<div className="hero-grid">
<div><span className="label">For independent shop owners</span><h1 className="display">Get stocked now.<br />Pay as you sell.</h1></div>
<div>
<p className="lede">Fill your shelves without paying for the stock up front.</p>
<p style={{color: 'var(--ink-2)', maxWidth: '50ch'}}>You pick from our approved product list. Our banking partner settles with us immediately, so the goods reach you straight away. You repay from sales, on an agreed schedule, as the stock moves.</p>
<div className="btn-row"><Link className="btn sun" to="/stock#stock-form">Apply to join <span className="arrow">→</span></Link></div>
</div>
</div>
<div className="plate wide" style={{marginTop: 'clamp(40px,5vw,64px)'}}>
<span className="cap"><b>Photograph</b> · Independent shop owner in front of a full shelf, All Hours delivery crate visible</span>
</div>
</section>
<section className="band shell">
<div className="head-block"><span className="label">How it works</span><h2 className="display">Four steps, start to shelf.</h2></div>
<div className="g4">
<div className="item"><span className="step">Step 01</span><h4>Apply</h4><p>Tell us where your shop is, what you sell and roughly what you turn over. We visit and confirm the details.</p></div>
<div className="item"><span className="step">Step 02</span><h4>Get approved</h4><p>Our banking partner reviews the application and sets your stock limit and repayment terms.</p></div>
<div className="item"><span className="step">Step 03</span><h4>Order from the list</h4><p>You choose from our approved product list. The bank settles the invoice with us and we deliver.</p></div>
<div className="item"><span className="step">Step 04</span><h4>Repay as you sell</h4><p>Repayment comes out of sales on an agreed schedule. Clear the balance and order again at a higher limit.</p></div>
</div>
</section>
<section className="band night">
<div className="shell split">
<div><span className="label">What you get</span><h2 className="display">The advantages of a large buyer, on a small shop.</h2></div>
<div className="body-col">
<ul className="plain">
<li>Stock on your shelf without a large cash outlay</li>
<li>Wholesale pricing you would not reach on your own</li>
<li>An approved product list, so you are not guessing what sells</li>
<li>Delivery to your shop, on a schedule</li>
<li>A repayment plan tied to sales rather than a fixed monthly bill</li>
<li>A credit record with a bank, built from real trading</li>
</ul>
<div className="callout">
<p><b>Terms to confirm.</b> Stock limits, repayment period, interest or service charge, and security requirements are set by the banking partner. Publish the exact terms here before launch.</p>
</div>
</div>
</div>
</section>
<section className="band shell">
<div className="split">
<div>
<span className="label">Who it is for</span>
<h2 className="display">If you already run a shop, this is for you.</h2>
<p style={{color: 'var(--ink-2)', marginTop: '18px', maxWidth: '44ch'}}>We are looking for shop owners who are trading, who know their customers, and who want to carry more stock than their cash allows.</p>
</div>
<div className="g2">
<div className="card">
<h4>What we need from you</h4>
<ul>
<li>A trading shop with a fixed address</li>
<li>Business registration where required</li>
<li>Valid identification</li>
<li>A bank account</li>
<li>An idea of your monthly sales</li>
<li>Requirements to confirm with the bank</li>
</ul>
</div>
<div className="card">
<h4>What we do not ask for</h4>
<ul>
<li>Payment for the stock before it arrives</li>
<li>A minimum order that empties your account</li>
<li>Exclusive supply, you can still buy elsewhere</li>
<li>Your shop signage or your shop name</li>
</ul>
</div>
</div>
</div>
</section>
<section className="band sunk">
<div className="shell split">
<div><span className="label">Questions</span><h2 className="display">What shop owners ask first.</h2></div>
<div className="faq">
<details><summary>Do I pay anything to apply?</summary><div className="ans"><p>Application fee position to be confirmed by All Hours before launch. State it plainly here either way.</p></div></details>
<details><summary>What happens if the stock does not sell?</summary><div className="ans"><p>Return and restocking policy to be confirmed with the banking partner. This is the question every applicant will ask, so the answer needs to be exact.</p></div></details>
<details><summary>How is the repayment collected?</summary><div className="ans"><p>Collection method to be confirmed. State whether it is a standing instruction on the account, a point of sale deduction, or scheduled transfers.</p></div></details>
<details><summary>Can I choose any product I want?</summary><div className="ans"><p>You order from our approved list. The list is built from products that move in shops like yours, and it is reviewed regularly.</p></div></details>
<details><summary>How long does approval take?</summary><div className="ans"><p>Approval timeline to be confirmed by the banking partner.</p></div></details>
</div>
</div>
</section>
<section className="band shell" id="stock-form">
<div className="split">
<div>
<span className="label">Apply</span>
<h2 className="display">Start your application.</h2>
<p className="lede" style={{marginTop: '20px'}}>Fill this in and a member of our field team will contact you to arrange a shop visit.</p>
</div>
<div className="form-wrap">
<form className="js-form" noValidate>
<div className="fgrid">
<div className="field"><label htmlFor="k-name">Your name</label><input id="k-name" type="text" /></div>
<div className="field"><label htmlFor="k-shop">Shop name</label><input id="k-shop" type="text" /></div>
<div className="field"><label htmlFor="k-ph">Phone</label><input id="k-ph" type="tel" /></div>
<div className="field"><label htmlFor="k-em">Email</label><input id="k-em" type="email" /></div>
<div className="field full"><label htmlFor="k-addr">Shop address</label><input id="k-addr" type="text" /></div>
<div className="field">
<label htmlFor="k-type">What do you mainly sell</label>
<select id="k-type">
<option>Groceries and provisions</option>
<option>Medicines and health items</option>
<option>Household supplies</option>
<option>A mix of the above</option>
<option>Something else</option>
</select>
</div>
<div className="field">
<label htmlFor="k-sales">Rough monthly sales</label>
<select id="k-sales">
<option>Prefer not to say</option>
<option>Small</option>
<option>Medium</option>
<option>Large</option>
</select>
</div>
<div className="field"><label htmlFor="k-years">Years trading</label><input id="k-years" type="number" min="0" /></div>
<div className="field"><label htmlFor="k-bank">Do you have a business bank account</label><select id="k-bank"><option>Yes</option><option>No</option><option>Not sure</option></select></div>
<div className="field full"><label htmlFor="k-msg">Anything else we should know</label><textarea id="k-msg"></textarea></div>
</div>
<div className="btn-row"><button className="btn sun" type="submit">Send application</button></div>
<p className="fnote">Sending this does not commit you to anything. Approval and terms are set by our banking partner.</p>
</form>
<div className="form-done">
<h4>Application received.</h4>
<p>A member of our field team will call you to arrange a shop visit. Keep your identification and business registration ready.</p>
</div>
</div>
</div>
</section>
    </div>
  );
}
