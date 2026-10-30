import "./Footer.css";

const Footer = ({ restaurantData }) => {
  return (
    <div className="footer">
      <div className="footer-line">
        <div className="footer-fb">
          <a href={restaurantData.socialMedia.fb}>Facebook</a>
        </div>
        <div className="footer-phone">{restaurantData.phone}</div>
      </div>
      <div className="footer-text">Maros Étterem ©2026</div>
    </div>
  );
};

export default Footer;
