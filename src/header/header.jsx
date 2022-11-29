// import ClockIcon from "./icons/clock";
import ClockIcon from "../header/icons/clock";
import PhoneIcon from "../header/icons/phone";
const Header = () => {
  return (
    <header className="header">
      <h2>Maros Étterem</h2>
      <div className="city">NAGYMAROS</div>
      <div className="phone">
        <PhoneIcon />
        <div className="phone-number">+36 27 354 576</div>
      </div>
      <div className="opening-time">
        <ClockIcon />
        <div className="opening-text">
          <div>Péntek, Szombat:</div>
          <div>12:00 - 20:00</div>
          <div>Vasárnap:</div>
          <div>12:00 - 19:00</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
