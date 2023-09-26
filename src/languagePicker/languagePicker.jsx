import LanguageBox from "./languageBox";
import LanguagesSetup from "../languages.json";

const LanguagePicker = ({
  setLanguage,
  setShowSelectedMenu,
  setScrollTo,
  scrollTo,
}) => {
  return (
    <div className="language-picker">
      {LanguagesSetup.map((language) => (
        <LanguageBox
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

export default LanguagePicker;
