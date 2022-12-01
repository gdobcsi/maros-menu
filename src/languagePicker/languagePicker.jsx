import LanguageBox from "./languageBox";
import LanguagesSetup from "../languages.json";

const LanguagePicker = ({ setLanguage }) => {
  return (
    <div className="language-picker">
      {LanguagesSetup.map((language) => (
        <LanguageBox
          setLanguage={setLanguage}
          language={language.language}
          title={language.title}
          year={language.year}
          flagUrl={language.flagUrl}
          backgroundSize={language.backgroundSize}
        />
      ))}

      {/* <div onClick={() => setLanguage("hu")} className="menu-button">
        <div className="flag-box">
          <div className="hu flag"></div>
        </div>
        <div className="darker-bg">
          <p>Téli étlap</p>
          <span>
            <i>2022</i>
          </span>
        </div>
      </div>

      <div onClick={() => setLanguage("eng")} className="menu-button">
        <div className="flag-box">
          <div className="eng flag"></div>
        </div>
        <div className="darker-bg">
          <p>Winter Menu</p>
          <span>
            <i>2022</i>
          </span>
        </div>
      </div>
      <div onClick={() => setLanguage("de")} className="menu-button">
        <div className="flag-box">
          <div className="de flag"></div>
        </div>
        <div className="darker-bg">
          <p>DE Menu</p>
          <span>
            <i>2022</i>
          </span>
        </div>
      </div>
      <div onClick={() => setLanguage("fr")} className="menu-button">
        <div className="flag-box">
          <div className="fr flag"></div>
        </div>
        <div className="darker-bg">
          <p>FR Menu</p>
          <span>
            <i>2022</i>
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default LanguagePicker;
