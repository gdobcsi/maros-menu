import "./languageSelector.css";

import LanguageOption from "./languageOption";
import LanguagesSetup from "../languages.json";

const LanguageSelector = ({ setLanguage, setScrollTo, scrollTo }) => {
  return (
    <div className="language-picker">
      {LanguagesSetup.map((language) => (
        <LanguageOption
          key={language.title}
          setLanguage={setLanguage}
          language={language.language}
          scrollTo={scrollTo}
          setScrollTo={setScrollTo}
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
