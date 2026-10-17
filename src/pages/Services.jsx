import './Services.css';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

export default function Services() {
  return (
    <div className="view on page-shell page-services" id="services">

      {/* HERO */}
      <section className="hero shell services-hero">




        <div className="sv-hero-layout">

          <div className="sv-hero-copy">

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


          <div className="shell sv-row-inner">

            <div className="sv-title">
              <Icon name="store" className="card-icon sv-icon" />
              <h3 className="display">Franchising</h3>
            </div>

            <div className="body-col sv-body">
              <p>
                A franchise system that puts retail skills and retail income into local hands across markets, ethnic groups and gender. We handle the administration that gives a franchise holder market exposure and a fair shot at performance.
              </p>

              <Link className="tlink sv-link" to="/franchise">
                Franchise details <span className="arrow"><Icon name="arrow-right" /></span>
              </Link>
            </div>

          </div>
        </article>


        {/* SHELF PLATFORM */}
        <article className="svc-row sv-row sv-shelf">


          <div className="shell sv-row-inner sv-row-reverse">

            <div className="sv-title">
              <Icon name="grid" className="card-icon sv-icon" />
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



          <div className="shell sv-row-inner">

            <div className="sv-title">
              <Icon name="phone" className="card-icon sv-icon" />
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

          <div className="shell sv-row-inner sv-row-reverse">

            <div className="sv-title">
              <Icon name="wrench" className="card-icon sv-icon" />
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

          <div className="shell sv-row-inner">

            <div className="sv-title">
              <Icon name="card" className="card-icon sv-icon" />
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

          <div className="shell sv-row-inner sv-row-reverse">

            <div className="sv-title">
              <Icon name="truck" className="card-icon sv-icon" />
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


          <div className="shell sv-row-inner">

            <div className="sv-title">
              <Icon name="sprout" className="card-icon sv-icon" />
              <h3 className="display">Supplier development</h3>
            </div>

            <div className="body-col sv-body">
              <p>
                Suppliers make the business work. We identify and build small and large suppliers whose offering fits our standard, and we invest in their capacity through a dedicated supplier development fund rather than only pressing on price.
              </p>

              <Link className="tlink sv-link" to="/partners">
                Become a supplier <span className="arrow"><Icon name="arrow-right" /></span>
              </Link>
            </div>

          </div>
        </article>

      </section>

    </div>
  );
}