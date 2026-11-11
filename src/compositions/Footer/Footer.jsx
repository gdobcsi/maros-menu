import "./Footer.css";

const Footer = ({
  footerRef,
  facebookUrl,
  phone,
  address,
  openingTimes,
  googleMapsUrl,
}) => {
  return (
    <div className="footer" ref={footerRef}>
      <div className="footer-main">
        <div className="footer-top">
          {/* Contact */}
          <section className="footer-contact">
            <h3>Kapcsolat</h3>

            <a href={`tel:${phone}`} className="footer-contact-button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2
        19.79 19.79 0 0 1-8.63-3.07
        19.5 19.5 0 0 1-6-6
        19.79 19.79 0 0 1-3.07-8.67
        A2 2 0 0 1 4.11 2h3
        a2 2 0 0 1 2 1.72
        c.12.96.36 1.9.72 2.8
        a2 2 0 0 1-.45 2.11L8.11 9.91
        a16 16 0 0 0 6 6l1.27-1.27
        a2 2 0 0 1 2.11-.45
        c.9.36 1.84.6 2.8.72
        A2 2 0 0 1 22 16.92Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>{phone}</span>
            </a>

            <a
              href={facebookUrl}
              className="footer-contact-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.02 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.975h-1.514c-1.49 0-1.955.93-1.955 1.885v2.261h3.328l-.532 3.49h-2.796V24C19.612 23.093 24 18.092 24 12.073Z" />
              </svg>

              <span>Facebook</span>
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
        </div>

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

        {/*         <div className="footer-credit">
          <span>Coded with</span>
          <span aria-label="love">♥</span>
          <a
            href="https://github.com/gaborwebdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            @gaborwebdev
          </a>
        </div> */}

        <div className="footer-credit">
          <span className="footer-credit-text">
            Made with <span aria-label="love">♥</span> by
          </span>
          <a
            href="https://github.com/gaborwebdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.71-1.48-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.43-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
            <span>gaborwebdev</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
