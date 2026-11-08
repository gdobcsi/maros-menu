import "./Footer.css";

const Footer = ({
  facebookUrl,
  phone,
  address,
  openingTimes,
  googleMapsUrl,
}) => {
  return (
    <div className="footer">
      <div className="footer-main">
        <section className="footer-contact">
          <h3>Kapcsolat</h3>

          <a href={`tel:${phone}`} className="footer-phone">
            {phone}
          </a>

          <a
            href={facebookUrl}
            className="footer-facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>

          <address className="footer-address">
            {address.postCode} {address.city},
            <br />
            {address.street}
          </address>
        </section>

        <section className="footer-opening">
          <h3>{openingTimes.title}</h3>

          <div className="footer-opening-days">
            {openingTimes.days.map((day, index) => (
              <div key={index} className="footer-opening-day">
                <span>{day.day}</span>
                <span>
                  {day.isClosed ? "Zárva" : `${day.from} – ${day.to}`}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="footer-map">
          <h3>Megtalálsz minket</h3>

          <iframe
            src={googleMapsUrl}
            title="Maros Étterem térkép"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />

          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
              `${address.postCode} ${address.city}, ${address.street}`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-directions"
          >
            Útvonaltervezés
          </a>
        </section>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2026 Maros Étterem. Minden jog fenntartva.
          </div>

          <div className="footer-credit">
            Coded with <span aria-label="love">♥</span> by{" "}
            <a
              href="https://github.com/gaborwebdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              @gaborwebdev
            </a>
          </div>
        </div>
      </div>
      <div className="footer-text">Maros Étterem ©2026</div>
    </div>
  );
};

export default Footer;
