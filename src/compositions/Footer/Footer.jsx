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
        {/* Contact */}
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
        </section>

        {/* Opening Times */}
        <section className="footer-opening">
          <h3>{openingTimes.title}</h3>

          <div className="footer-opening-days">
            {openingTimes.days.map((day, index) => (
              <div key={index} className="footer-opening-day">
                <span>{day.day}:</span>
                <span>
                  {day.isClosed ? "Zárva" : `${day.from} – ${day.to}`}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Map & Directions */}
        <section className="footer-map">
          <h3>Megtalálsz minket</h3>

          <address className="footer-address">
            {address.postCode} {address.city},
            <br />
            {address.street}
          </address>

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
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12 22s8-7.5 8-13a8 8 0 1 0-16 0c0 5.5 8 13 8 13Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="9"
                r="2.5"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>

            <span className="footer-directions-text">
              <span>Google Maps</span>
              <span>Útvonaltervezés</span>
            </span>
          </a>
        </section>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="footer-copyright">
          © 2026 Maros Étterem. Minden jog fenntartva.
        </div>

        <div className="footer-credit">
          <span>Coded with</span>
          <span aria-label="love">♥</span>
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
  );
};

export default Footer;
