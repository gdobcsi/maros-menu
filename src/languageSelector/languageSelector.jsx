import "./languageSelector.css";

import LanguagesSetup from "../languages.json";

const LanguageSelector = ({ setLanguage }) => {
  return (
    <div className="language-picker">
      {LanguagesSetup.map((language, index) => (
        <div
          key={index}
          onClick={() => setLanguage(language.language)}
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
