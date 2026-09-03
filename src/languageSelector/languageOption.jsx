import "./languageOption.css";

const LanguageOption = ({
  setLanguage,
  scrollTo,
  language,
  title,
  year,
  flagUrl,
  backgroundSize,
}) => {
  //
  const onClickHandler = (language) => {
    setLanguage(language);
    //
    if (scrollTo !== null) {
      scrollTo.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div onClick={() => onClickHandler(language)} className="menu-button">
      <div className="flag-box">
        <div
          className="flag"
          style={{
            backgroundImage: `url(${flagUrl})`,
            backgroundSize: backgroundSize,
          }}
        ></div>
      </div>
      <div className="darker-bg">
        <p>{title}</p>
      </div>
      <span>
        <i>{year}</i>
      </span>
    </div>
  );
};

export default LanguageOption;
