import "./LanguageSelector.css";

const LanguageSelector = ({
  languages,
  selectedLanguage,
  setLanguage,
  setScrollTrigger,
}) => {
  return (
    <div className="language-selector">
      {languages.map((language) => (
        <button
          type="button"
          aria-pressed={language.languageCode === selectedLanguage}
          key={language.uid}
          onClick={() => {
            setLanguage(language.languageCode);
            setScrollTrigger((prev) => prev + 1);
          }}
          className={`language-button ${
            language.languageCode === selectedLanguage ? "is-active" : ""
          }`}
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
          <div className="language-info">
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
