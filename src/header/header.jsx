// import ClockIcon from "./icons/clock";
import ClockIcon from "../header/icons/clock";
import PhoneIcon from "../header/icons/phone";

//
import info from "../info.json";
import OpeningTimes from "./openingTimes";

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

        <div>
          <h3 className="margin-bottom-1rem">Nyitvatartás:</h3>
          <div className="opening-time">
            <div className="opening-time-box">
              <ClockIcon />
            </div>
            <div className="opening-text">
              {/* Opening times */}
              <OpeningTimes selectedLanguage={selectedLanguage} info={info} />
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </header>
  );
};

export default Header;
