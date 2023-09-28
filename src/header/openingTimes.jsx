const OpeningTimes = ({ selectedLanguage, info }) => {
  console.log(info);
  return (
    <div className="flex-column">
      {info.map((el) =>
        Object.keys(el).toString() === selectedLanguage
          ? el[selectedLanguage].map((line) => <div>{line}</div>)
          : null
      )}
    </div>
  );
};

export default OpeningTimes;
