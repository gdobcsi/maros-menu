import "./languageSelector.css";

import LanguageOption from "./languageOption";
import LanguagesSetup from "../languages.json";

const LanguageSelector = ({ setLanguage }) => {
  return (
    <div className="language-picker">
      {LanguagesSetup.map((language) => (
        <LanguageOption
          key={language.title}
          setLanguage={setLanguage}
          language={language.language}
          title={language.title}
          year={language.year}
          flagUrl={language.flagUrl}
          backgroundSize={language.backgroundSize}
        />
      ))}
    </div>
  );
};

export default LanguageSelector;
