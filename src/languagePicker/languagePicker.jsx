const LanguagePicker = ({ setLanguage }) => {
  return (
    <div className="language-picker">
      <div onClick={() => setLanguage("hu")} className="menu-button">
        <div className="hun"></div>
        <div className="darker-bg">
          <p>Téli étlap</p>
          <span>2022</span>
        </div>
      </div>

      <div onClick={() => setLanguage("eng")} className="menu-button">
        <div className="eng"></div>
        <div className="darker-bg">
          <p>Winter Menu</p>
          <span>2022</span>
        </div>
      </div>
      <div onClick={() => setLanguage("de")} className="menu-button">
        <div className="de"></div>
        <div className="darker-bg">
          <p>DE Menu</p>
          <span>2022</span>
        </div>
      </div>
      <div onClick={() => setLanguage("fr")} className="menu-button">
        <div className="fr"></div>
        <div className="darker-bg">
          <p>FR Menu</p>
          <span>2022</span>
        </div>
      </div>
    </div>
  );
};

export default LanguagePicker;
