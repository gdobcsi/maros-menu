import "./Phone.css";

import PhoneIcon from "./PhoneIcon";

const Phone = ({ phoneNumber }) => {
  return (
    <a
      href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
      className="phone-button"
      aria-label={`Telefonhívás: ${phoneNumber}`}
    >
      <PhoneIcon />
      <span>{phoneNumber}</span>
    </a>
  );
};

export default Phone;
