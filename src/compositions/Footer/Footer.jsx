import "./Footer.css";

const Footer = ({ facebookUrl, phone }) => {
  return (
    <div className="footer">
      <div className="footer-line">
        <div className="footer-fb">
          <a href={facebookUrl}>Facebook</a>
        </div>
        <div className="footer-phone">{phone}</div>
      </div>
      <div className="footer-text">Maros Étterem ©2026</div>
    </div>
  );
};

export default Footer;
