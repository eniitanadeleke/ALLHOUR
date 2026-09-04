import './Services.css';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="view on page-shell page-services" id="services">

      {/* HERO */}
      <section className="hero shell services-hero">
        <span className="sv-hero-orbit sv-orbit-one" aria-hidden="true"></span>
        <span className="sv-hero-orbit sv-orbit-two" aria-hidden="true"></span>
        <span className="sv-hero-dots" aria-hidden="true"></span>

        <div className="sv-hero-layout">

          <div className="sv-hero-copy">
            <span className="sv-hero-rule" aria-hidden="true"></span>

            <h1 className="display">
              Seven jobs that keep the network running.
            </h1>
          </div>

          <div className="sv-hero-side">
            <span className="sv-side-rail" aria-hidden="true"></span>

            <p className="lede">
              Retail looks like a shop. Behind the shop there are seven operations, and each one has to work for the shelf to be full.
            </p>
          </div>

        </div>

        <div className="sv-spectrum" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>


      {/* SERVICES */}
      <section className="sv-services">

        {/* FRANCHISING */}
        <article className="svc-row sv-row sv-franchise">
          <span className="sv-row-orbit" aria-hidden="true"></span>

          <div className="shell sv-row-inner">

            <div className="sv-title">
              <span className="sv-title-rule" aria-hidden="true"></span>
              <h3 className="display">Franchising</h3>
            </div>

            <div className="body-col sv-body">
              <p>
                A franchise system that puts retail skills and retail income into local hands across markets, ethnic groups and gender. We handle the administration that gives a franchise holder market exposure and a fair shot at performance.
              </p>

              <Link className="tlink sv-link" to="/franchise">
                Franchise details <span className="arrow">→</span>
              </Link>
            </div>

          </div>
        </article>


        {/* SHELF PLATFORM */}
        <article className="svc-row sv-row sv-shelf">
          <span className="sv-row-dots" aria-hidden="true"></span>

          <div className="shell sv-row-inner sv-row-reverse">

            <div className="sv-title">
              <span className="sv-title-rule" aria-hidden="true"></span>
              <h3 className="display">Shelf platform</h3>
            </div>

            <div className="body-col sv-body">
              <p>
                For a brand, our shelf is a route to market. New products, improved versions, and format changes such as moving from a tub to a sachet all get tested and sold across a network that reaches from the mall down to the neighbourhood store.
              </p>
            </div>

          </div>
        </article>


        {/* DIGITAL DISTRIBUTION */}
        <article className="svc-row sv-row sv-digital">
          <span className="sv-digital-glow" aria-hidden="true"></span>
          <span className="sv-digital-grid" aria-hidden="true"></span>

          <div className="shell sv-row-inner">

            <div className="sv-title">
              <span className="sv-title-rule" aria-hidden="true"></span>
              <h3 className="display">Digital distribution</h3>
            </div>

            <div className="body-col sv-body">
              <p>
                Airtime, utility payments, pin based services, gaming, ticketing and basic financial services sold at the counter. It saves the customer a journey, and it brings people into the store who came for something else.
              </p>
            </div>

          </div>
        </article>


        {/* ASSET MANAGEMENT */}
        <article className="svc-row sv-row sv-assets">
          <span className="sv-asset-circle sv-asset-circle-one" aria-hidden="true"></span>
          <span className="sv-asset-circle sv-asset-circle-two" aria-hidden="true"></span>

          <div className="shell sv-row-inner sv-row-reverse">

            <div className="sv-title">
              <span className="sv-title-rule" aria-hidden="true"></span>
              <h3 className="display">Asset management</h3>
            </div>

            <div className="body-col sv-body">
              <p>
                Refrigeration, generators, shelving, vehicles and point of sale hardware are the difference between a store that trades and one that closes at noon. We buy direct from manufacturers, keep warranties valid, and replace equipment before it fails rather than after.
              </p>
            </div>

          </div>
        </article>


        {/* FINANCIAL SERVICES */}
        <article className="svc-row sv-row sv-finance">
          <span className="sv-finance-line sv-finance-line-one" aria-hidden="true"></span>
          <span className="sv-finance-line sv-finance-line-two" aria-hidden="true"></span>

          <div className="shell sv-row-inner">

            <div className="sv-title">
              <span className="sv-title-rule" aria-hidden="true"></span>
              <h3 className="display">Financial services</h3>
            </div>

            <div className="body-col sv-body">
              <p>
                We take financial services out of the banking hall and into the street corner. Card products, point of sale terminals and platforms operated for banks and other providers, using our stores as the physical network they do not have.
              </p>
            </div>

          </div>
        </article>


        {/* SUPPLY CHAIN */}
        <article className="svc-row sv-row sv-supply">
          <span className="sv-supply-ring sv-supply-ring-one" aria-hidden="true"></span>
          <span className="sv-supply-ring sv-supply-ring-two" aria-hidden="true"></span>

          <div className="shell sv-row-inner sv-row-reverse">

            <div className="sv-title">
              <span className="sv-title-rule" aria-hidden="true"></span>
              <h3 className="display">Supply chain</h3>
            </div>

            <div className="body-col sv-body">
              <p>
                Moving goods from source to customer across many stores, many partners and difficult roads. This is the operation everything else depends on, so we run it as a strategic function rather than a cost line.
              </p>
            </div>

          </div>
        </article>


        {/* SUPPLIER DEVELOPMENT */}
        <article className="svc-row sv-row sv-development">
          <span className="sv-development-glow" aria-hidden="true"></span>

          <div className="shell sv-row-inner">

            <div className="sv-title">
              <span className="sv-title-rule" aria-hidden="true"></span>
              <h3 className="display">Supplier development</h3>
            </div>

            <div className="body-col sv-body">
              <p>
                Suppliers make the business work. We identify and build small and large suppliers whose offering fits our standard, and we invest in their capacity through a dedicated supplier development fund rather than only pressing on price.
              </p>

              <Link className="tlink sv-link" to="/partners">
                Become a supplier <span className="arrow">→</span>
              </Link>
            </div>

          </div>
        </article>

      </section>

    </div>
  );
}