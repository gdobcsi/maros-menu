import "./header.css";

import logo from "../components/micro&macro/logo/maros_logo_web2.svg";

const Header = ({ selectedLanguage }) => {
  //
  console.log("header: ", selectedLanguage);
  return (
    <header className="header">
      {/* <Logo className="header-logo" /> */}
      <img className="header-logo" src={logo} alt="Restaurant Logo" />
      {/*       <h2>Maros Étterem</h2>
      <div className="city">NAGYMAROS</div> */}
    </header>
  );
};

export default Header;
