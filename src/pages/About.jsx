import './About.css';

export default function About() {
  return (
    <div className="view on page-shell page-about" id="about">

      {/* HERO */}
      <section className="hero shell about-hero">
        <span className="about-orbit about-orbit-one" aria-hidden="true"></span>
        <span className="about-dots" aria-hidden="true"></span>

        <div className="hero-grid about-hero-grid">
          <div className="about-hero-copy">
            <span className="label">About</span>
            <span className="about-label-line" aria-hidden="true"></span>
            <h1 className="display">Retail that shows up, every day, at a price people can meet.</h1>
          </div>

          <div className="about-hero-lede">
            <p className="lede">All Hours is a retail group. We build stores, run them, supply them, and extend that same supply to independent shop owners.</p>
          </div>
        </div>

        <div className="plate wide about-photo">
          <span className="photo-frame" aria-hidden="true"></span>
          <span className="cap"><b>Photograph</b> · Store interior mid morning, staff restocking, customers in frame</span>
        </div>
      </section>


      {/* WHY WE EXIST */}
      <section className="band shell about-why">
        <div className="split about-split">
          <div className="about-section-title">
            <span className="label">Why we exist</span>
            <span className="about-label-line" aria-hidden="true"></span>
            <h2 className="display">Shopping is the one thing everybody does.</h2>
          </div>

          <div className="body-col about-body">
            <p>Life is a collection of experiences. Most of them are ordinary, and buying food, medicine and household supplies is about as ordinary as it gets. We were founded to add something to that ordinary moment, without adding to the price.</p>
            <p>Satisfying a customer today takes more than a shelf. It takes quality worth paying for, service that respects the person, a supply chain that does not break, and suppliers who are treated as partners rather than vendors.</p>
            <p>As trade barriers fall, emerging markets are getting attention they have not had before. That attention should raise living standards where it lands. We are building to make sure it does.</p>
          </div>
        </div>
      </section>


      {/* VISION MISSION PHILOSOPHY */}
      <section className="band sunk about-pillars">
        <span className="pillar-orbit" aria-hidden="true"></span>

        <div className="shell">
          <div className="g3 pillar-grid">

            <div className="card pillar-card">
              <span className="pillar-line" aria-hidden="true"></span>
              <h4>Our vision</h4>
              <p>To be the retailer of choice for high quality, affordable products and services. All day, all night, close to you.</p>
            </div>

            <div className="card pillar-card">
              <span className="pillar-line" aria-hidden="true"></span>
              <h4>Our mission</h4>
              <p>To lead a retail culture built on excellence in what we sell, how we serve, and the experiences we deliver through channels people can actually reach.</p>
            </div>

            <div className="card pillar-card">
              <span className="pillar-line" aria-hidden="true"></span>
              <h4>Our philosophy</h4>
              <p>Extraordinary. All Day. We add the extra to everyday experiences for people who want their lives to be more enjoyable and more sustainable.</p>
            </div>

          </div>
        </div>
      </section>


      {/* VALUES */}
      <section className="band shell values-section">
        <div className="head-block values-head">
          <span className="label">Our values</span>
          <span className="about-label-line" aria-hidden="true"></span>
          <h2 className="display">Our name is the list.</h2>
          <p>Eight values, one for each letter. They decide what we do, how we do it, and why.</p>
        </div>

        <div className="mono values-grid">

          <div className="value-card">
            <span className="ch">A</span>
            <h4>Access</h4>
            <p>Reach the customer wherever they are, whatever they earn.</p>
          </div>

          <div className="value-card">
            <span className="ch">L</span>
            <h4>Lifestyle</h4>
            <p>Sell in a way that gives the customer something to be proud of.</p>
          </div>

          <div className="value-card">
            <span className="ch">L</span>
            <h4>Leadership</h4>
            <p>Set the standard in the markets we enter rather than follow it.</p>
          </div>

          <div className="value-card">
            <span className="ch">H</span>
            <h4>Happiness</h4>
            <p>The visit should be worth making, not just worth surviving.</p>
          </div>

          <div className="value-card">
            <span className="ch">O</span>
            <h4>Organic</h4>
            <p>Grow into the community, not on top of it.</p>
          </div>

          <div className="value-card">
            <span className="ch">U</span>
            <h4>Ubiquity</h4>
            <p>Be everywhere it makes sense to be, in the right format for the street.</p>
          </div>

          <div className="value-card">
            <span className="ch">R</span>
            <h4>Resilience</h4>
            <p>Keep trading when conditions are hard, because that is when it matters.</p>
          </div>

          <div className="value-card">
            <span className="ch">S</span>
            <h4>Synergy</h4>
            <p>Customers, staff, suppliers and partners all have to gain, or it does not last.</p>
          </div>

        </div>
      </section>


      {/* HOW WE OPERATE */}
      <section className="band night operate-section">
        <span className="operate-glow" aria-hidden="true"></span>
        <span className="operate-orbit" aria-hidden="true"></span>

        <div className="shell">
          <div className="head-block operate-head">
            <span className="label">How we operate</span>
            <span className="operate-line" aria-hidden="true"></span>
            <h2 className="display">Built on best practice, adapted to the street.</h2>
          </div>

          <div className="g3 operate-grid">

            <div className="card operate-card">
              <span className="operate-card-line" aria-hidden="true"></span>
              <h4>Formats before floor space</h4>
              <p>We size the shop to the location and the income around it. A terminal needs a mini mart. A residential road needs a neighbourhood store. Forcing one format everywhere is how retailers lose money.</p>
            </div>

            <div className="card operate-card">
              <span className="operate-card-line" aria-hidden="true"></span>
              <h4>Supply before scale</h4>
              <p>We do not open faster than we can keep stocked. Every new store is opened against a supply chain that can already serve it.</p>
            </div>

            <div className="card operate-card">
              <span className="operate-card-line" aria-hidden="true"></span>
              <h4>Partners before margin</h4>
              <p>Suppliers and franchise holders have to make money for the network to hold. We invest in supplier capacity rather than squeezing it.</p>
            </div>

          </div>
        </div>
      </section>


      {/* COMPANY DETAILS */}
      <section className="band sunk company-section">
        <div className="shell split company-grid">

          <div className="company-copy">
            <span className="label">Company</span>
            <span className="about-label-line" aria-hidden="true"></span>
            <h2 className="display">The details.</h2>
          </div>

          <div className="company-card">
            <ul className="spec">

              <li>
                <span className="k">Registered name</span>
                <span className="v">To supply</span>
              </li>

              <li>
                <span className="k">Retail entity, CAC registration</span>
                <span className="v">To supply</span>
              </li>

              <li>
                <span className="k">Pharmacy entity, CAC registration</span>
                <span className="v">To supply</span>
              </li>

              <li>
                <span className="k">Pharmacy regulatory licence</span>
                <span className="v">To supply</span>
              </li>

              <li>
                <span className="k">Registered office</span>
                <span className="v">To supply</span>
              </li>

              <li>
                <span className="k">Year established</span>
                <span className="v">To supply</span>
              </li>

              <li>
                <span className="k">Markets of operation</span>
                <span className="v">To supply</span>
              </li>

            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}