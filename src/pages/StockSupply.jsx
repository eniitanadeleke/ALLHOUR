import './StockSupply.css';
import { Link } from 'react-router-dom';

export default function StockSupply() {
  return (
    <div className="view on page-shell page-stock" id="stock">

      <section className="hero shell stock-hero">
        <span className="stock-orbit stock-orbit-one" aria-hidden="true"></span>
        <span className="stock-orbit stock-orbit-two" aria-hidden="true"></span>
        <span className="stock-dots" aria-hidden="true"></span>

        <div className="hero-grid stock-hero-grid">
          <div className="stock-hero-copy">
            <span className="stock-label-line" aria-hidden="true"></span>

            <h1 className="display">
              Get stocked now.<br />
              Pay as you sell.
            </h1>
          </div>

          <div className="stock-hero-side">
            <span className="stock-side-line" aria-hidden="true"></span>

            <p className="lede">
              Fill your shelves without paying for the stock up front.
            </p>

            <p className="stock-hero-body">
              You pick from our approved product list. Our banking partner settles with us immediately, so the goods reach you straight away. You repay from sales, on an agreed schedule, as the stock moves.
            </p>

            <div className="btn-row">
              <Link className="btn sun stock-hero-btn" to="/stock#stock-form">
                Apply to join <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="plate wide stock-hero-photo">
          <span className="stock-photo-inner" aria-hidden="true"></span>
          <span className="stock-photo-glow" aria-hidden="true"></span>

          <span className="cap">
            <b>Photograph</b> · Independent shop owner in front of a full shelf, All Hours delivery crate visible
          </span>
        </div>
      </section>


      <section className="band shell stock-process">
        <span className="process-orbit process-orbit-one" aria-hidden="true"></span>
        <span className="process-orbit process-orbit-two" aria-hidden="true"></span>

        <div className="head-block stock-process-head">
          <span className="stock-label-line" aria-hidden="true"></span>
          <h2 className="display">Four steps, start to shelf.</h2>
        </div>

        <div className="stock-steps">

          <div className="item stock-step">
            <div className="stock-step-head">
              <span className="step">Step 01</span>
              <span className="stock-step-dot" aria-hidden="true"></span>
            </div>

            <span className="stock-step-rule" aria-hidden="true"></span>

            <h4>Apply</h4>

            <p>
              Tell us where your shop is, what you sell and roughly what you turn over. We visit and confirm the details.
            </p>
          </div>


          <div className="item stock-step">
            <div className="stock-step-head">
              <span className="step">Step 02</span>
              <span className="stock-step-dot" aria-hidden="true"></span>
            </div>

            <span className="stock-step-rule" aria-hidden="true"></span>

            <h4>Get approved</h4>

            <p>
              Our banking partner reviews the application and sets your stock limit and repayment terms.
            </p>
          </div>


          <div className="item stock-step">
            <div className="stock-step-head">
              <span className="step">Step 03</span>
              <span className="stock-step-dot" aria-hidden="true"></span>
            </div>

            <span className="stock-step-rule" aria-hidden="true"></span>

            <h4>Order from the list</h4>

            <p>
              You choose from our approved product list. The bank settles the invoice with us and we deliver.
            </p>
          </div>


          <div className="item stock-step">
            <div className="stock-step-head">
              <span className="step">Step 04</span>
              <span className="stock-step-dot" aria-hidden="true"></span>
            </div>

            <span className="stock-step-rule" aria-hidden="true"></span>

            <h4>Repay as you sell</h4>

            <p>
              Repayment comes out of sales on an agreed schedule. Clear the balance and order again at a higher limit.
            </p>
          </div>

        </div>
      </section>


      <section className="band night stock-benefits">
        <span className="benefit-orbit benefit-orbit-one" aria-hidden="true"></span>
        <span className="benefit-orbit benefit-orbit-two" aria-hidden="true"></span>
        <span className="benefit-dots" aria-hidden="true"></span>

        <div className="shell stock-benefits-layout">

          <div className="stock-benefits-copy">
            <span className="benefit-label-line" aria-hidden="true"></span>

            <h2 className="display">
              The advantages of a large buyer, on a small shop.
            </h2>

            <span className="benefit-copy-line" aria-hidden="true"></span>
          </div>


          <div className="stock-benefits-content">

            <ul className="plain benefit-list">

              <li>
                <span className="benefit-marker" aria-hidden="true"></span>
                <span>Stock on your shelf without a large cash outlay</span>
              </li>

              <li>
                <span className="benefit-marker" aria-hidden="true"></span>
                <span>Wholesale pricing you would not reach on your own</span>
              </li>

              <li>
                <span className="benefit-marker" aria-hidden="true"></span>
                <span>An approved product list, so you are not guessing what sells</span>
              </li>

              <li>
                <span className="benefit-marker" aria-hidden="true"></span>
                <span>Delivery to your shop, on a schedule</span>
              </li>

              <li>
                <span className="benefit-marker" aria-hidden="true"></span>
                <span>A repayment plan tied to sales rather than a fixed monthly bill</span>
              </li>

              <li>
                <span className="benefit-marker" aria-hidden="true"></span>
                <span>A credit record with a bank, built from real trading</span>
              </li>

            </ul>


            <div className="callout benefit-callout">
              <span className="benefit-callout-line" aria-hidden="true"></span>

              <p>
                <b>Terms to confirm.</b> Stock limits, repayment period, interest or service charge, and security requirements are set by the banking partner. Publish the exact terms here before launch.
              </p>
            </div>

          </div>

        </div>
      </section>


      <section className="band shell stock-audience">
        <span className="audience-orbit audience-orbit-one" aria-hidden="true"></span>
        <span className="audience-orbit audience-orbit-two" aria-hidden="true"></span>

        <div className="stock-audience-layout">

          <div className="stock-audience-copy">
            <span className="audience-label-line" aria-hidden="true"></span>

            <h2 className="display">
              If you already run a shop, this is for you.
            </h2>

            <div className="audience-intro">
              <span className="audience-intro-line" aria-hidden="true"></span>

              <p>
                We are looking for shop owners who are trading, who know their customers, and who want to carry more stock than their cash allows.
              </p>
            </div>
          </div>


          <div className="audience-cards">

            <div className="audience-card audience-card-need">
              <span className="audience-card-rail" aria-hidden="true"></span>

              <div className="audience-card-head">
                <span className="audience-icon audience-icon-check" aria-hidden="true">
                  <span></span>
                </span>

                <div>
                  <h4>What we need from you</h4>
                  <span className="audience-heading-line" aria-hidden="true"></span>
                </div>
              </div>

              <ul>

                <li>
                  <span className="audience-list-icon check" aria-hidden="true">
                    <span></span>
                  </span>
                  <span>A trading shop with a fixed address</span>
                </li>

                <li>
                  <span className="audience-list-icon check" aria-hidden="true">
                    <span></span>
                  </span>
                  <span>Business registration where required</span>
                </li>

                <li>
                  <span className="audience-list-icon check" aria-hidden="true">
                    <span></span>
                  </span>
                  <span>Valid identification</span>
                </li>

                <li>
                  <span className="audience-list-icon check" aria-hidden="true">
                    <span></span>
                  </span>
                  <span>A bank account</span>
                </li>

                <li>
                  <span className="audience-list-icon check" aria-hidden="true">
                    <span></span>
                  </span>
                  <span>An idea of your monthly sales</span>
                </li>

                <li>
                  <span className="audience-list-icon check" aria-hidden="true">
                    <span></span>
                  </span>
                  <span>Requirements to confirm with the bank</span>
                </li>

              </ul>
            </div>


            <div className="audience-card audience-card-no">
              <span className="audience-card-rail" aria-hidden="true"></span>

              <div className="audience-card-head">
                <span className="audience-icon audience-icon-no" aria-hidden="true">
                  <span></span>
                </span>

                <div>
                  <h4>What we do not ask for</h4>
                  <span className="audience-heading-line" aria-hidden="true"></span>
                </div>
              </div>

              <ul>

                <li>
                  <span className="audience-list-icon no" aria-hidden="true">
                    <span></span>
                  </span>
                  <span>Payment for the stock before it arrives</span>
                </li>

                <li>
                  <span className="audience-list-icon no" aria-hidden="true">
                    <span></span>
                  </span>
                  <span>A minimum order that empties your account</span>
                </li>

                <li>
                  <span className="audience-list-icon no" aria-hidden="true">
                    <span></span>
                  </span>
                  <span>Exclusive supply, you can still buy elsewhere</span>
                </li>

                <li>
                  <span className="audience-list-icon no" aria-hidden="true">
                    <span></span>
                  </span>
                  <span>Your shop signage or your shop name</span>
                </li>

              </ul>
            </div>

          </div>

        </div>
      </section>


      <section className="band sunk stock-faq-section">
        <span className="stock-faq-orbit stock-faq-orbit-one" aria-hidden="true"></span>
        <span className="stock-faq-orbit stock-faq-orbit-two" aria-hidden="true"></span>
        <span className="stock-faq-dots" aria-hidden="true"></span>

        <div className="shell stock-faq-layout">

          <div className="stock-faq-copy">
            <span className="stock-faq-label-line" aria-hidden="true"></span>

            <h2 className="display">
              What shop owners ask first.
            </h2>

            <span className="stock-faq-copy-line" aria-hidden="true"></span>
          </div>


          <div className="faq stock-faq">

            <details className="stock-faq-card">
              <summary>
                <span className="stock-faq-icon" aria-hidden="true">
                  <span className="stock-faq-bubble">
                    <span className="stock-faq-mark"></span>
                  </span>
                </span>

                <span className="stock-faq-question">
                  Do I pay anything to apply?
                </span>

                <span className="stock-faq-separator" aria-hidden="true"></span>
                <span className="stock-faq-toggle" aria-hidden="true"></span>
              </summary>

              <div className="ans stock-faq-answer">
                <p>
                  Application fee position to be confirmed by All Hours before launch. State it plainly here either way.
                </p>
              </div>
            </details>


            <details className="stock-faq-card">
              <summary>
                <span className="stock-faq-icon" aria-hidden="true">
                  <span className="stock-faq-bubble">
                    <span className="stock-faq-mark"></span>
                  </span>
                </span>

                <span className="stock-faq-question">
                  What happens if the stock does not sell?
                </span>

                <span className="stock-faq-separator" aria-hidden="true"></span>
                <span className="stock-faq-toggle" aria-hidden="true"></span>
              </summary>

              <div className="ans stock-faq-answer">
                <p>
                  Return and restocking policy to be confirmed with the banking partner. This is the question every applicant will ask, so the answer needs to be exact.
                </p>
              </div>
            </details>


            <details className="stock-faq-card">
              <summary>
                <span className="stock-faq-icon" aria-hidden="true">
                  <span className="stock-faq-bubble">
                    <span className="stock-faq-mark"></span>
                  </span>
                </span>

                <span className="stock-faq-question">
                  How is the repayment collected?
                </span>

                <span className="stock-faq-separator" aria-hidden="true"></span>
                <span className="stock-faq-toggle" aria-hidden="true"></span>
              </summary>

              <div className="ans stock-faq-answer">
                <p>
                  Collection method to be confirmed. State whether it is a standing instruction on the account, a point of sale deduction, or scheduled transfers.
                </p>
              </div>
            </details>


            <details className="stock-faq-card">
              <summary>
                <span className="stock-faq-icon" aria-hidden="true">
                  <span className="stock-faq-bubble">
                    <span className="stock-faq-mark"></span>
                  </span>
                </span>

                <span className="stock-faq-question">
                  Can I choose any product I want?
                </span>

                <span className="stock-faq-separator" aria-hidden="true"></span>
                <span className="stock-faq-toggle" aria-hidden="true"></span>
              </summary>

              <div className="ans stock-faq-answer">
                <p>
                  You order from our approved list. The list is built from products that move in shops like yours, and it is reviewed regularly.
                </p>
              </div>
            </details>


            <details className="stock-faq-card">
              <summary>
                <span className="stock-faq-icon" aria-hidden="true">
                  <span className="stock-faq-bubble">
                    <span className="stock-faq-mark"></span>
                  </span>
                </span>

                <span className="stock-faq-question">
                  How long does approval take?
                </span>

                <span className="stock-faq-separator" aria-hidden="true"></span>
                <span className="stock-faq-toggle" aria-hidden="true"></span>
              </summary>

              <div className="ans stock-faq-answer">
                <p>
                  Approval timeline to be confirmed by the banking partner.
                </p>
              </div>
            </details>

          </div>

        </div>
      </section>


      <section className="band shell" id="stock-form">
        <div className="split">

          <div>
            <h2 className="display">Start your application.</h2>

            <p className="lede" style={{ marginTop: '20px' }}>
              Fill this in and a member of our field team will contact you to arrange a shop visit.
            </p>
          </div>


          <div className="form-wrap">

            <form className="js-form" noValidate>

              <div className="fgrid">

                <div className="field">
                  <label htmlFor="k-name">Your name</label>
                  <input id="k-name" type="text" />
                </div>

                <div className="field">
                  <label htmlFor="k-shop">Shop name</label>
                  <input id="k-shop" type="text" />
                </div>

                <div className="field">
                  <label htmlFor="k-ph">Phone</label>
                  <input id="k-ph" type="tel" />
                </div>

                <div className="field">
                  <label htmlFor="k-em">Email</label>
                  <input id="k-em" type="email" />
                </div>

                <div className="field full">
                  <label htmlFor="k-addr">Shop address</label>
                  <input id="k-addr" type="text" />
                </div>

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

                <div className="field">
                  <label htmlFor="k-years">Years trading</label>
                  <input id="k-years" type="number" min="0" />
                </div>

                <div className="field">
                  <label htmlFor="k-bank">Do you have a business bank account</label>

                  <select id="k-bank">
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not sure</option>
                  </select>
                </div>

                <div className="field full">
                  <label htmlFor="k-msg">Anything else we should know</label>
                  <textarea id="k-msg"></textarea>
                </div>

              </div>


              <div className="btn-row">
                <button className="btn sun" type="submit">
                  Send application
                </button>
              </div>

              <p className="fnote">
                Sending this does not commit you to anything. Approval and terms are set by our banking partner.
              </p>

            </form>


            <div className="form-done">
              <h4>Application received.</h4>
              <p>
                A member of our field team will call you to arrange a shop visit. Keep your identification and business registration ready.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}