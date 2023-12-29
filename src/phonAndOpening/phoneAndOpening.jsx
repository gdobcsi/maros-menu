import "./phoneAndOpening.css";

// import ClockIcon from "./icons/clock";
// import ClockIcon from "../header/icons/clock";
import PhoneIcon from "../header/icons/phone";
import OpeningTimes from "../openingTimes/openingTimes";

const PhoneAndOpeningTime = () => {
  return (
    <div className="phone-and-opening-wrapper">
      <div className="phone-and-opening">
        <div className="phone">
          <div className="phone-box">
            <PhoneIcon />
          </div>
          <div className="phone-number">+36 27 354 576</div>
        </div>
        <OpeningTimes />
      </div>
    </div>
  );
};

export default PhoneAndOpeningTime;
