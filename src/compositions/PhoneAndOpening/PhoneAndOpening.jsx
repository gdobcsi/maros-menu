import "./PhoneAndOpening.css";

import OpeningTimes from "../../components/OpeningTimes/OpeningTimes";
import Phone from "../../components/Phone/Phone";

const PhoneAndOpening = ({ phone, openingTimes }) => {
  return (
    <div className="phone-and-opening-wrapper">
      <div className="phone-and-opening">
        <Phone phoneNumber={phone} />
        <OpeningTimes openingTimes={openingTimes} />
      </div>
    </div>
  );
};

export default PhoneAndOpening;
