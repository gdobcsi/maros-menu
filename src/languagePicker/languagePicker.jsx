import LanguageBox from "./languageBox";

const languages = [
  {
    language: "hu",
    title: "Téli étlap",
    year: 2022,
    flagUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/1920px-Flag_of_Hungary.svg.png",
    backgroundSize: "cover",
  },
  {
    language: "eng",
    title: "Winter Menu",
    year: 2022,
    flagUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_the_United_States_%281776%E2%80%931777%29.svg/1280px-Flag_of_the_United_States_%281776%E2%80%931777%29.svg.png",
    backgroundSize: "cover",
  },
  {
    language: "de",
    title: "DE Menu",
    year: 2022,
    flagUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1920px-Flag_of_Germany.svg.png",
    backgroundSize: "cover",
  },
  {
    language: "fr",
    title: "FR Menu",
    year: 2022,
    flagUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/1280px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png",
    backgroundSize: "contain",
  },
];

const LanguagePicker = ({ setLanguage }) => {
  return (
    <div className="language-picker">
      {languages.map((lang) => (
        <LanguageBox
          setLanguage={setLanguage}
          language={lang.language}
          title={lang.title}
          year={lang.year}
          flagUrl={lang.flagUrl}
          backgroundSize={lang.backgroundSize}
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
