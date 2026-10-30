import "./LanguageSelector.css";

const LanguageSelector = ({ languages, setLanguage, setScrollTrigger }) => {
  return (
    <div className="language-picker">
      {languages.map((language) => (
        <button
          type="button"
          key={language.uid}
          onClick={() => {
            setLanguage(language.languageCode);
            setScrollTrigger((prev) => prev + 1);
          }}
          className="menu-button"
        >
          <div className="flag-box">
            <div
              className="flag"
              style={{
                backgroundImage: `url(${language.flagUrl})`,
                backgroundSize: language.backgroundSize,
              }}
            ></div>
          </div>
          <div className="darker-bg">
            <p>{language.title}</p>
          </div>
          <span>
            <i>{language.year}</i>
          </span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
