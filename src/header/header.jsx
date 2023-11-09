import "./header.css";

const Header = ({ selectedLanguage }) => {
  //
  console.log("header: ", selectedLanguage);
  return (
    <header className="header">
      <h2>Maros Étterem</h2>
      <div className="city">NAGYMAROS</div>
    </header>
  );
};

export default Header;
