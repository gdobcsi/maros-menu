const LanguageBox = ({
  setLanguage,
  language,
  title,
  year,
  flagUrl,
  backgroundSize,
}) => {
  return (
    <div onClick={() => setLanguage(language)} className="menu-button">
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
        <span>
          <i>{year}</i>
        </span>
      </div>
    </div>
  );
};

export default LanguageBox;
