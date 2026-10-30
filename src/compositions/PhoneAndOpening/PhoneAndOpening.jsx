import "./PhoneAndOpening.css";

import OpeningTimes from "../../components/OpeningTimes/OpeningTimes";
import Phone from "../../components/Phone/Phone";

const PhoneAndOpeningTime = ({ restaurantData }) => {
  const { phone, openingTimes } = restaurantData;
  return (
    <div className="phone-and-opening-wrapper">
      <div className="phone-and-opening">
        <Phone phoneNumber={phone} />
        <OpeningTimes openingTimes={openingTimes} />
      </div>
    </div>
  );
};

export default PhoneAndOpeningTime;
