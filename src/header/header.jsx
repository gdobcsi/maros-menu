import "./header.css";

// import ClockIcon from "./icons/clock";
import ClockIcon from "../header/icons/clock";
import PhoneIcon from "../header/icons/phone";
const Header = ({ selectedLanguage }) => {
  //
  console.log("header: ", selectedLanguage);
  return (
    <header className="header">
      <h2>Maros Étterem</h2>
      <div className="city">NAGYMAROS</div>
      <div className="contact-details">
        <div className="phone">
          <div className="phone-box">
            <PhoneIcon />
          </div>
          <div className="phone-number">+36 27 354 576</div>
        </div>
        <div className="opening-time">
          <div className="opening-time-box">
            <ClockIcon />
          </div>
          <div className="opening-text">
            <div>Péntek, Szombat:</div>
            <div className="bottom-space">
              <i>12:00 - 20:00</i>
            </div>

            <div>Vasárnap:</div>
            <div>
              <i>12:00 - 19:00</i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
