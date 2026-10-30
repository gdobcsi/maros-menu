import "./Header.css";

import logo from "../../assets/maros_logo_web2.svg";

const Header = () => {
  return (
    <header className="header">
      <img className="header-logo" src={logo} alt="Restaurant Logo" />
    </header>
  );
};

export default Header;
