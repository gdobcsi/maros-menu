import "./languageSelector.css";

import LanguageOption from "./languageOption";
import LanguagesSetup from "../languages.json";

const LanguageSelector = ({
  setLanguage,
  setShowSelectedMenu,
  setScrollTo,
  scrollTo,
}) => {
  return (
    <div className="language-picker">
      {LanguagesSetup.map((language) => (
        <LanguageOption
          key={language.title}
          setLanguage={setLanguage}
          setShowSelectedMenu={setShowSelectedMenu}
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
