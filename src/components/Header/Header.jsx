import "./Header.css";

import logo from "../../assets/maros_logo_web2.svg";

const Header = () => {
  return (
    <header className="header">
      <h1 style={{ margin: 0 }}>
        <img className="header-logo" src={logo} alt="Maros Menu" />
      </h1>
    </header>
  );
};

export default Header;
