import './Home.css';
import { Link } from 'react-router-dom';
import HourSpine from '../components/HourSpine';

export default function Home() {
  return (
    <div className="view on page-shell page-home" id="home">

      {/* HERO SECTION */}
<section className="hero shell">

  <div className="hero-orb orb-one" aria-hidden="true"></div>
  <div className="hero-orb orb-two" aria-hidden="true"></div>

  <div className="hero-grid">

    <div className="hero-copy">
      <span className="label">Retail across emerging markets</span>

      <h1 className="display">
        Extraordinary.
        <br />
        All Day.
      </h1>

      <span className="hero-line" aria-hidden="true"></span>
    </div>

    <div className="hero-content">

      <div className="hero-glass">
        <p className="lede">
          We build and run retail that stays open, stays stocked and stays
          close to the people who need it. Supermarkets, pharmacies,
          hypermarkets, mini marts and neighbourhood stores.
        </p>

        <div className="btn-row">
          <Link className="btn" to="/stock">
            Stock your shop <span className="arrow">→</span>
          </Link>

          <Link className="btn ghost" to="/franchise">
            Own a franchise
          </Link>
        </div>
      </div>

    </div>

  </div>


  {/* 24 HOUR STRIP */}
  <div className="spine hero-spine" aria-hidden="true">

    <div className="spine-glow"></div>

    <HourSpine />

    <div className="spine-key">
      <span>
        <b>00:00</b> Night trading
      </span>

      <span>
        <b>All hours</b>
      </span>

      <span>
        Day trading <b>23:59</b>
      </span>
    </div>

  </div>


  {/* HERO PHOTOGRAPH */}
  <div className="plate wide hero-photo">

    <div className="hero-photo-overlay"></div>

    <div className="photo-grid" aria-hidden="true"></div>

    <div className="hero-photo-badge">
      Open longer. Stocked better.
    </div>


    {/* FLOATING DECORATIVE PANELS */}
    <div className="float-panel float-one" aria-hidden="true">
      <span className="float-ring"></span>
      <span className="float-bar"></span>
    </div>

    <div className="float-panel float-two" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div className="float-panel float-three" aria-hidden="true">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>


    <div className="hero-photo-content">

      <span className="cap">
        <b>Photograph</b>

        <span>
          A busy All Hours store at dusk, lit inside, customers at the till
          and the pharmacy counter visible
        </span>
      </span>

      <Link className="hero-photo-link" to="/about">
        Discover All Hours <span className="arrow">→</span>
      </Link>

    </div>

  </div>

</section>


{/* INTRO SECTION */}
<section className="band shell intro-section">

  <div className="intro-bg-number" aria-hidden="true">
    24
  </div>

  <div className="intro-orbit" aria-hidden="true">
    <span></span>
  </div>

  <div className="split">

    <div className="intro-heading">

      <h2 className="display">
        A shop is only useful when it is open and it has what you came for.
      </h2>

      <span className="intro-line" aria-hidden="true"></span>

    </div>

    <div className="body-col">

      <p>
        Most retail in emerging markets fails on one of two things. It
        closes when people are free to shop, or the shelf is empty when
        they arrive. We built the business around fixing both.
      </p>

      <p>
        That means longer trading hours, formats sized to the street they
        sit on, and a supply chain that keeps stock moving from source to
        shelf without a gap. It also means extending the same supply
        strength to independent shop owners who are not part of our network
        but sell to the same customers.
      </p>

      <Link className="tlink" to="/about">
        How we work <span className="arrow">→</span>
      </Link>

    </div>

  </div>

</section>

      {/* FOUR WAYS SECTION */}
      <section className="band sunk">
        <div className="shell">

          <div className="head-block">
            <span className="label">Four ways to work with us</span>
            <h2 className="display">Pick the door that fits you.</h2>
          </div>

          <div className="g4">

            <div className="item">
              <span className="step">01</span>
              <h4>Stock your shop</h4>
              <p>
                Independent shop owners receive stock from an approved list and
                pay for it as they sell, backed by our banking partner.
              </p>
            </div>

            <div className="item">
              <span className="step">02</span>
              <h4>Take a franchise</h4>
              <p>
                Run an All Hours store under our brand, systems, supply chain and
                training.
              </p>
            </div>

            <div className="item">
              <span className="step">03</span>
              <h4>Sell through us</h4>
              <p>
                Suppliers and brands reach customers across our stores and our
                independent shop network.
              </p>
            </div>

            <div className="item">
              <span className="step">04</span>
              <h4>Fund the growth</h4>
              <p>
                Banks and capital partners fund store rollout, stock finance and
                payment infrastructure.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* STORE FORMATS */}
      <section className="band shell formats-section">

        <div className="head-block">
          <span className="label">Store formats</span>

          <h2 className="display">
            Six formats, one standard.
          </h2>

          <p>
            A full All Hours store carries a supermarket section and a pharmacy.
            Smaller shops carry one or the other, depending on the site.
          </p>
        </div>

        <div className="g3">

          <div className="card">
            <h4>Supermarket</h4>
            <p>
              Everyday groceries and household supplies at neighbourhood scale,
              with fresh produce and a full grocery range.
            </p>
          </div>

          <div className="card">
            <h4>Pharmacy</h4>
            <p>
              A licensed pharmacy counter inside the store. Prescriptions, over
              the counter medicines and basic health checks.
            </p>
          </div>

          <div className="card">
            <h4>Hypermarket</h4>
            <p>
              Bulk buying at the best available price, and the wholesale point
              that feeds our smaller stores.
            </p>
          </div>

          <div className="card">
            <h4>Mini mart</h4>
            <p>
              Convenience where people pass through. Fuel stations, car parks,
              campuses, terminals.
            </p>
          </div>

          <div className="card">
            <h4>Neighbourhood store</h4>
            <p>
              Small formats and small pack sizes for customers who buy daily
              rather than monthly.
            </p>
          </div>

          <div className="card">
            <h4>Shopping mall</h4>
            <p>
              Anchor developments that hold the full format range under one roof,
              with space for other retailers.
            </p>
          </div>

        </div>

        <div className="btn-row">
          <Link className="btn ghost" to="/formats">
            See all formats in detail <span className="arrow">→</span>
          </Link>
        </div>
      </section>

      {/* STOCK SUPPLY SECTION */}
<section className="band night stock-section">

  <div className="stock-glow" aria-hidden="true"></div>
  <div className="stock-grid-pattern" aria-hidden="true"></div>

  <div className="shell stock-layout">

    <div className="stock-copy">

      <span className="label">
        For independent shop owners
      </span>

      <span className="stock-accent-line" aria-hidden="true"></span>

      <h2 className="display">
        Get stocked now.
        <br />
        Pay as you sell.
      </h2>

      <div className="stock-ghost-number" aria-hidden="true">
        24
      </div>

      <div className="stock-seal" aria-hidden="true">
        <span className="seal-ring">
          <strong>24</strong>
          <small>All Hours</small>
        </span>
      </div>

    </div>


    <div className="stock-panel">

      <div className="stock-panel-glow" aria-hidden="true"></div>

      <div className="stock-info-row">

        <div className="stock-icon">
          <span className="icon-doc"></span>
        </div>

        <p>
          You choose from our approved product list. Our banking partner settles
          the invoice with us up front, so your shelves fill immediately. You then
          repay from sales, on an agreed schedule, as the stock moves.
        </p>

      </div>


      <div className="stock-divider"></div>


      <div className="stock-info-row">

        <div className="stock-icon">
          <span className="icon-shield"></span>
        </div>

        <p>
          No large cash outlay at the start. No hunting for suppliers. No buying at
          retail price and hoping to make a margin.
        </p>

      </div>


      <Link className="btn on-night stock-btn" to="/stock">
        See how it works <span className="arrow">→</span>
      </Link>

    </div>

  </div>

</section>

      {/* FRANCHISE */}
<section className="band shell franchise-section">

  <div className="franchise-dots" aria-hidden="true"></div>

  <div className="franchise-layout">

    <div className="franchise-copy">

      <span className="label">
        Franchise
      </span>

      <span className="franchise-copy-line" aria-hidden="true"></span>

      <h2 className="display">
        Run the store. We run everything behind it.
      </h2>

    </div>


    <div className="franchise-panel">

      <div className="body-col">

        <p>
          A franchise gives you a proven store format, a supply chain that is already
          moving, staff training, retail systems and a brand customers recognise. You
          bring the site, the capital and the commitment to run it properly.
        </p>

        <div className="franchise-divider" aria-hidden="true"></div>

        <div className="btn-row">
          <Link className="btn" to="/franchise">
            Apply for a franchise <span className="arrow">→</span>
          </Link>
        </div>

      </div>

    </div>

  </div>

</section>

      {/* PARTNERS */}
<section className="band shell partners-section">

  <div className="partners-dots" aria-hidden="true"></div>

  <div className="partners-layout">

    <div className="partners-copy">

      <span className="label">
        Suppliers, brands and banks
      </span>

      <h2 className="display">
        Our shelf is a route to market.
      </h2>

      <span className="partners-copy-line" aria-hidden="true"></span>

    </div>


    <div className="partners-panel">

      <div className="body-col">

        <p>
          For a producer or a brand, All Hours is distribution and visibility in one
          move. For a bank, it is a lending book with real inventory behind it and a
          repayment stream tied to daily sales.
        </p>

        <p>
          Our grocery range is sourced through a vetted agricultural supply network,
          which shortens the chain between farm and shelf and keeps quality
          traceable.
        </p>

        <div className="partners-divider" aria-hidden="true"></div>

        <div className="btn-row">
          <Link className="btn" to="/partners">
            Partner with us <span className="arrow">→</span>
          </Link>
        </div>

      </div>

    </div>

  </div>

</section>

     {/* NUMBERS */}
<section className="band shell numbers-section">

  <div className="numbers-orbit numbers-orbit-one" aria-hidden="true"></div>
  <div className="numbers-orbit numbers-orbit-two" aria-hidden="true"></div>

  <div className="proof">

    <div className="proof-card">
      <span className="proof-line" aria-hidden="true"></span>
      <span className="n">120</span>
      <span className="t">Stores trading and in development</span>
      <span className="proof-shine" aria-hidden="true"></span>
    </div>

    <div className="proof-card">
      <span className="proof-line" aria-hidden="true"></span>
      <span className="n">1,400</span>
      <span className="t">Independent shops on the stock supply scheme</span>
      <span className="proof-shine" aria-hidden="true"></span>
    </div>

    <div className="proof-card">
      <span className="proof-line" aria-hidden="true"></span>
      <span className="n">6</span>
      <span className="t">Markets we operate in</span>
      <span className="proof-shine" aria-hidden="true"></span>
    </div>

    <div className="proof-card">
      <span className="proof-line" aria-hidden="true"></span>
      <span className="n">18hrs</span>
      <span className="t">Average daily trading window</span>
      <span className="proof-shine" aria-hidden="true"></span>
    </div>

  </div>

</section>

      {/* ENQUIRY */}
<section className="band shell enquiry-section">

  <div className="enquiry-orbit" aria-hidden="true"></div>
  <div className="enquiry-dots" aria-hidden="true"></div>

  <div className="enquiry-layout">

    <div className="enquiry-copy">

      <span className="label">Enquiries</span>

      <span className="enquiry-line" aria-hidden="true"></span>

      <h2 className="display">
        Tell us what you need.
      </h2>

      <p className="enquiry-lede">
        Send this and someone from our team replies within two working days.
      </p>

    </div>


    <div className="form-wrap">

      <div className="form-glow" aria-hidden="true"></div>

      <form className="js-form">

        <div className="fgrid">

          <div className="field">
            <label>Name</label>
            <input type="text" name="name" required />
          </div>

          <div className="field">
            <label>Business name</label>
            <input type="text" name="business" />
          </div>

          <div className="field">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>

          <div className="field">
            <label>Phone</label>
            <input type="tel" name="phone" />
          </div>

          <div className="field">
            <label>City and country</label>
            <input type="text" name="location" />
          </div>

          <div className="field">
            <label>What is this about</label>

            <select name="subject">
              <option>Stock supply for my shop</option>
            </select>
          </div>

          <div className="field full">
            <label>Tell us a little more</label>
            <textarea name="message"></textarea>
          </div>

        </div>

        <div className="enquiry-submit">

          <button className="btn enquiry-btn" type="submit">
            Send enquiry <span className="arrow">→</span>
          </button>

          <p className="fnote">
            We reply within two working days.
          </p>

        </div>

      </form>

    </div>

  </div>

</section>

    </div>
  );
}