import PhoneIcon from "./PhoneIcon";

const Phone = ({ phoneNumber }) => {
  return (
    <div className="phone">
      <div className="phone-box">
        <PhoneIcon />
      </div>
      <div className="phone-number">{phoneNumber}</div>
    </div>
  );
};

export default Phone;
