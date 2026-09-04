import './Contact.css';

export default function Contact() {
  return (
    <div className="view on page-shell page-contact" id="contact">

      {/* HERO */}
      <section className="hero shell contact-hero">
        <span className="ct-hero-orbit ct-orbit-one" aria-hidden="true"></span>
        <span className="ct-hero-orbit ct-orbit-two" aria-hidden="true"></span>
        <span className="ct-hero-dots" aria-hidden="true"></span>

        <div className="ct-hero-layout">
          <div className="ct-hero-copy">
            <span className="ct-gold-rule" aria-hidden="true"></span>

            <h1 className="display">
              Call, message, or walk in.
            </h1>
          </div>

          <div className="ct-hero-side">
            <span className="ct-side-line" aria-hidden="true"></span>

            <p className="lede">
              Pick what your message is about and it goes straight to the right team.
            </p>
          </div>
        </div>

        <div className="ct-colour-line" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>


      {/* CONTACT DETAILS */}
      <section className="band shell ct-details">
        <span className="ct-details-glow" aria-hidden="true"></span>

        <div className="ct-card-grid">

          <article className="ct-card ct-card-office">
            <div className="ct-card-head">
              <span className="ct-card-symbol" aria-hidden="true">
                <span></span>
              </span>

              <span className="ct-card-rule" aria-hidden="true"></span>
            </div>

            <h4>Corporate office</h4>

            <ul className="spec ct-spec">
              <li>
                <span className="k">Address</span>
                <span className="v">To supply</span>
              </li>

              <li>
                <span className="k">Phone</span>
                <span className="v">To supply</span>
              </li>

              <li>
                <span className="k">Email</span>
                <span className="v">To supply</span>
              </li>

              <li>
                <span className="k">Weekdays</span>
                <span className="v">To supply</span>
              </li>
            </ul>
          </article>


          <article className="ct-card ct-card-stock">
            <div className="ct-card-head">
              <span className="ct-card-symbol" aria-hidden="true">
                <span></span>
              </span>

              <span className="ct-card-rule" aria-hidden="true"></span>
            </div>

            <h4>Stock supply team</h4>

            <ul className="spec ct-spec">
              <li>
                <span className="k">Phone</span>
                <span className="v">To supply</span>
              </li>

              <li>
                <span className="k">WhatsApp</span>
                <span className="v">To supply</span>
              </li>

              <li>
                <span className="k">Email</span>
                <span className="v">To supply</span>
              </li>
            </ul>
          </article>


          <article className="ct-card ct-card-partner">
            <div className="ct-card-head">
              <span className="ct-card-symbol" aria-hidden="true">
                <span></span>
              </span>

              <span className="ct-card-rule" aria-hidden="true"></span>
            </div>

            <h4>Franchise and partnerships</h4>

            <ul className="spec ct-spec">
              <li>
                <span className="k">Phone</span>
                <span className="v">To supply</span>
              </li>

              <li>
                <span className="k">Email</span>
                <span className="v">To supply</span>
              </li>
            </ul>
          </article>

        </div>


        {/* MAP */}
        <div className="plate wide ct-map">
          <span className="ct-map-grid" aria-hidden="true"></span>

          <span className="ct-map-ring ct-map-ring-one" aria-hidden="true"></span>
          <span className="ct-map-ring ct-map-ring-two" aria-hidden="true"></span>

          <span className="ct-map-pin" aria-hidden="true">
            <span></span>
          </span>

          <span className="cap">
            <b>Map</b> · Embed a map for each office once addresses are confirmed
          </span>
        </div>
      </section>


      {/* MESSAGE FORM */}
      <section className="band sunk ct-message">
        <span className="ct-message-orbit ct-message-orbit-one" aria-hidden="true"></span>
        <span className="ct-message-orbit ct-message-orbit-two" aria-hidden="true"></span>
        <span className="ct-message-dots" aria-hidden="true"></span>

        <div className="shell ct-message-layout">

          <div className="ct-message-copy">
            <span className="ct-gold-rule" aria-hidden="true"></span>

            <h2 className="display">
              Send it here and it lands with the right team.
            </h2>

            <span className="ct-copy-tail" aria-hidden="true"></span>
          </div>


          <div className="form-wrap ct-form-wrap">
            <span className="ct-form-accent" aria-hidden="true"></span>

            <form className="js-form" noValidate>
              <div className="fgrid">

                <div className="field full ct-topic-field">
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

                <div className="field">
                  <label htmlFor="c-name">Name</label>
                  <input id="c-name" type="text" />
                </div>

                <div className="field">
                  <label htmlFor="c-co">Organisation</label>
                  <input id="c-co" type="text" />
                </div>

                <div className="field">
                  <label htmlFor="c-em">Email</label>
                  <input id="c-em" type="email" />
                </div>

                <div className="field">
                  <label htmlFor="c-ph">Phone</label>
                  <input id="c-ph" type="tel" />
                </div>

                <div className="field full">
                  <label htmlFor="c-msg">Message</label>
                  <textarea id="c-msg"></textarea>
                </div>

              </div>

              <div className="ct-form-bottom">
                <div className="btn-row">
                  <button className="btn sun" type="submit">
                    Send message
                  </button>
                </div>

                <p className="fnote">
                  We reply within two working days.
                </p>
              </div>
            </form>

            <div className="form-done">
              <h4>Thank you.</h4>

              <p>
                We have your message and will come back to you within two working days.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}