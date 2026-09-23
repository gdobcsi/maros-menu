import "./languageSelector.css";

import languages from "../data/languages.json";

const LanguageSelector = ({ setLanguage }) => {
  return (
    <div className="language-picker">
      {languages.map((language) => (
        <div
          key={language.uid}
          onClick={() => setLanguage(language.languageCode)}
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
        </div>
      ))}
    </div>
  );
};

export default LanguageSelector;
