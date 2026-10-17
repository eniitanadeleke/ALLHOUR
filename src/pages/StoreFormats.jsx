import './StoreFormats.css';
import groceryPhoto from '../assets/photos/format-grocery.jpg';
import hyperPhoto from '../assets/photos/format-hypermarket.jpg';
import minimartPhoto from '../assets/photos/format-minimart.jpg';
import neighbourPhoto from '../assets/photos/format-neighbourhood.jpg';
import mallPhoto from '../assets/photos/format-mall.jpg';

export default function StoreFormats() {
  return (
    <div className="view on page-shell page-formats" id="formats">

      <section className="hero shell formats-hero">

        <div className="hero-grid formats-hero-grid">
          <div className="formats-hero-copy">
            <h1 className="display">Five formats, sized to the street they sit on.</h1>
          </div>

          <div className="formats-hero-lede">
            <span className="lede-rail" aria-hidden="true"></span>
            <p className="lede">Every All Hours store runs on the same supply chain and standards. What changes is the size, set by the site and the street it serves.</p>
          </div>
        </div>
      </section>

      <section className="band shell formats-main">

        <div className="callout formats-callout">

          <p><b>The standard store.</b> A full supermarket under one roof: fresh produce, groceries and household supplies in the same trip. Everyday essentials are the things people cannot postpone, so we keep them close to home.</p>
        </div>

        <div className="formats-grid">

          <article className="fmt">
            <div className="plate strip">

              <img className="plate-photo" src={groceryPhoto} alt="A supermarket aisle with packed shelves on both sides" loading="lazy" />
            </div>
            <div className="fbody">
              <span className="ftag">Format 01</span>
              <h4>Supermarket</h4>
              <p>Everyday groceries, fresh produce and household supplies in wide variety. Designed to sit inside the community it serves rather than pull people out of it.</p>
              <ul className="spec">
                <li><span className="k">Typical size</span><span className="v">To supply</span></li>
                <li><span className="k">Range</span><span className="v">Full grocery</span></li>
              </ul>
            </div>
          </article>

          <article className="fmt">
            <div className="plate strip">

              <img className="plate-photo" src={hyperPhoto} alt="A long, brightly lit hypermarket aisle" loading="lazy" />
            </div>
            <div className="fbody">
              <span className="ftag">Format 02</span>
              <h4>Hypermarket</h4>
              <p>Quality in quantity at the best available price. It serves bulk buyers directly, and it is also the wholesale point that feeds our smaller stores and our independent shop network.</p>
              <ul className="spec">
                <li><span className="k">Serves</span><span className="v">Public and trade</span></li>
                <li><span className="k">Role</span><span className="v">Network supply point</span></li>
              </ul>
            </div>
          </article>

          <article className="fmt">
            <div className="plate strip">

              <img className="plate-photo" src={minimartPhoto} alt="Chilled drinks and packaged food on mini mart shelving" loading="lazy" />
            </div>
            <div className="fbody">
              <span className="ftag">Format 03</span>
              <h4>Mini mart</h4>
              <p>Convenience where people are already moving. Fuel stations, car parks, campuses, camp grounds, airports and rail terminals.</p>
              <ul className="spec">
                <li><span className="k">Typical siting</span><span className="v">Transit points</span></li>
                <li><span className="k">Carries</span><span className="v">Core grocery range</span></li>
              </ul>
            </div>
          </article>

          <article className="fmt">
            <div className="plate strip">

              <img className="plate-photo" src={neighbourPhoto} alt="A neighbourhood store packed floor to ceiling with everyday goods" loading="lazy" />
            </div>
            <div className="fbody">
              <span className="ftag">Format 04</span>
              <h4>Neighbourhood store</h4>
              <p>Small formats and small pack sizes for customers who buy for today rather than for the month. Value, quality and affordability within walking distance of home.</p>
              <ul className="spec">
                <li><span className="k">Typical siting</span><span className="v">Residential and rural</span></li>
                <li><span className="k">Carries</span><span className="v">Core grocery range</span></li>
              </ul>
            </div>
          </article>

          <article className="fmt">
            <div className="plate strip">

              <img className="plate-photo" src={mallPhoto} alt="A multi-level shopping mall atrium with escalators" loading="lazy" />
            </div>
            <div className="fbody">
              <span className="ftag">Format 05</span>
              <h4>Shopping mall</h4>
              <p>Anchor developments holding the full format range under one roof, with leasable space for other retailers, food and services.</p>
              <ul className="spec">
                <li><span className="k">Role</span><span className="v">Anchor development</span></li>
                <li><span className="k">Leasable space</span><span className="v">Yes</span></li>
              </ul>
            </div>
          </article>

        </div>
      </section>

      <section className="band sunk formats-faq-section">

        <div className="shell formats-faq-layout">
          <div className="formats-faq-title">
            <h2 className="display">What people ask about the formats.</h2>
          </div>

          <div className="faq">
            <details>
              <summary>Does every store carry the full range?</summary>
              <div className="ans"><p>Supermarkets and hypermarkets do. Mini marts and neighbourhood stores carry a focused range chosen for the site and for what the area already has.</p></div>
            </details>

            <details>
              <summary>Can I buy in bulk as a shop owner?</summary>
              <div className="ans"><p>Yes. The hypermarket serves trade buyers, and shop owners on our stock supply scheme are served through the same network.</p></div>
            </details>

            <details>
              <summary>What are the trading hours?</summary>
              <div className="ans"><p>Hours to be confirmed by All Hours for each format. State opening and closing times per format before launch.</p></div>
            </details>
          </div>
        </div>
      </section>

    </div>
  );
}