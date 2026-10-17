import './Partners.css';
import Icon from '../components/Icon';

export default function Partners() {
  return (
    <div className="view on page-shell page-partners" id="partners">

      {/* HERO */}
      <section className="hero shell partners-hero">


        <div className="pt-hero-layout">
          <div className="pt-hero-copy">

            <h1 className="display">
              Suppliers, brands, banks and capital.
            </h1>
          </div>

          <div className="pt-hero-side">
            <span className="pt-hero-rail" aria-hidden="true"></span>

            <p className="lede">
              Four kinds of partner, each getting something different out of the same network.
            </p>
          </div>
        </div>

        <div className="pt-hero-band" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>


      {/* PARTNER TYPES */}
      <section className="band shell pt-types">
        <div className="pt-types-grid">

          <article className="pt-partner pt-supplier">
            <div className="pt-partner-top">
            </div>

            <div className="pt-partner-content">
              <Icon name="truck" className="card-icon" />
              <h4>Suppliers</h4>

              <p>
                If you produce food, household goods, personal care or health products, our stores and our independent shop network are volume you can plan around.
              </p>

              <p>
                Our grocery range is sourced through a vetted agricultural supply network, which keeps the chain between farm and shelf short and the quality traceable.
              </p>
            </div>

            <ul className="pt-partner-list">
              <li>
                <Icon name="check" className="list-check" />
                Volume across every format we operate
              </li>

              <li>
                <Icon name="check" className="list-check" />
                Supplier development fund for capacity building
              </li>

              <li>
                <Icon name="check" className="list-check" />
                Payment terms agreed in writing and kept
              </li>
            </ul>
          </article>


          <article className="pt-partner pt-brand">
            <div className="pt-partner-top">
            </div>

            <div className="pt-partner-content">
              <Icon name="tag" className="card-icon" />
              <h4>Brands</h4>

              <p>
                Launch a product, test a new pack format, or push an existing line into markets you do not currently reach. Our shelf gives a brand visibility and sales in the same move.
              </p>
            </div>

            <ul className="pt-partner-list">
              <li>
                <Icon name="check" className="list-check" />
                Placement across mall, hypermarket and neighbourhood formats
              </li>

              <li>
                <Icon name="check" className="list-check" />
                Sales data back from the till
              </li>

              <li>
                <Icon name="check" className="list-check" />
                In store activation space
              </li>
            </ul>
          </article>


          <article className="pt-partner pt-bank">
            <div className="pt-partner-top">
            </div>

            <div className="pt-partner-content">
              <Icon name="bank" className="card-icon" />
              <h4>Banks and financial institutions</h4>

              <p>
                Our stock supply scheme is a lending book with real inventory behind it and repayment tied to daily trading. Our stores are also a physical distribution network for cards, terminals and agency banking.
              </p>
            </div>

            <ul className="pt-partner-list">
              <li>
                <Icon name="check" className="list-check" />
                Stock finance for vetted independent shop owners
              </li>

              <li>
                <Icon name="check" className="list-check" />
                Point of sale and agency banking footprint
              </li>

              <li>
                <Icon name="check" className="list-check" />
                Card issuing and payment infrastructure
              </li>

              <li>
                <Icon name="check" className="list-check" />
                Customer acquisition at the counter
              </li>
            </ul>
          </article>


          <article className="pt-partner pt-capital">
            <div className="pt-partner-top">
            </div>

            <div className="pt-partner-content">
              <Icon name="growth" className="card-icon" />
              <h4>Capital partners</h4>

              <p>
                Debt or equity into store rollout, distribution infrastructure or the stock supply book, with defined terms, a defined exit and reporting on the same schedule every quarter.
              </p>
            </div>

            <ul className="pt-partner-list">
              <li>
                <Icon name="check" className="list-check" />
                Named projects rather than a general fund
              </li>

              <li>
                <Icon name="check" className="list-check" />
                Quarterly reporting, good news and bad news at the same speed
              </li>

              <li>
                <Icon name="check" className="list-check" />
                Structures to suit the partner
              </li>
            </ul>
          </article>

        </div>
      </section>


      {/* NETWORK */}
      <section className="band night pt-network">


        <div className="shell pt-network-layout">

          <div className="pt-network-copy">

            <h2 className="display">
              Three things a partner should check before believing any of this.
            </h2>
          </div>

          <div className="pt-network-content">
            <ul className="plain pt-network-list">

              <li>
                <Icon name="check" className="list-check" />
                <p>
                  Repayment on the stock scheme is tied to sales that pass through our own supply chain, so we can see the movement rather than take a borrower's word for it
                </p>
              </li>

              <li>
                <Icon name="check" className="list-check" />
                <p>
                  Our formats are sized to their locations, which keeps occupancy costs proportionate to what the site can actually earn
                </p>
              </li>

              <li>
                <Icon name="check" className="list-check" />
                <p>
                  Supply comes before scale, so a new store is never opened against a supply chain that cannot serve it
                </p>
              </li>

            </ul>

            <div className="callout pt-network-callout">
              <span className="pt-callout-edge" aria-hidden="true"></span>

              <p>
                <b>For due diligence.</b> Audited accounts, store performance data and the stock scheme repayment record are available to serious partners on request. Add the contact for data room access before launch.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* CONTACT */}
      <section className="band shell pt-contact">


        <div className="pt-contact-layout">

          <div className="pt-contact-copy">

            <h2 className="display">
              Tell us what you bring.
            </h2>
          </div>

          <div className="form-wrap pt-form-wrap">
            <span className="pt-form-edge" aria-hidden="true"></span>

            <form className="js-form" noValidate>
              <div className="fgrid">

                <div className="field">
                  <label htmlFor="p-name">Name</label>
                  <input id="p-name" type="text" />
                </div>

                <div className="field">
                  <label htmlFor="p-org">Organisation</label>
                  <input id="p-org" type="text" />
                </div>

                <div className="field">
                  <label htmlFor="p-role">Role</label>
                  <input id="p-role" type="text" />
                </div>

                <div className="field">
                  <label htmlFor="p-type">Partner type</label>

                  <select id="p-type">
                    <option>Supplier</option>
                    <option>Brand</option>
                    <option>Bank or financial institution</option>
                    <option>Capital partner</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="p-em">Email</label>
                  <input id="p-em" type="email" />
                </div>

                <div className="field">
                  <label htmlFor="p-ph">Phone</label>
                  <input id="p-ph" type="tel" />
                </div>

                <div className="field full">
                  <label htmlFor="p-mkt">Markets you cover</label>
                  <input id="p-mkt" type="text" />
                </div>

                <div className="field full">
                  <label htmlFor="p-desc">What are you proposing</label>
                  <textarea id="p-desc"></textarea>
                </div>

                <div className="field full">
                  <label htmlFor="p-file">Upload a document, optional</label>
                  <input id="p-file" type="file" />
                </div>

              </div>

              <div className="btn-row pt-form-submit">
                <button className="btn sun" type="submit">
                  Send it to us
                </button>
              </div>
            </form>

            <div className="form-done">
              <h4>Received.</h4>

              <p>
                We will come back to you within five working days with a yes, a no, or a question.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}