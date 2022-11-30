import menu from "../menu.json";

const ShowMenu = ({ lang }) => {
  return (
    <div id="show-menu">
      {lang === false ? null : lang === "fr" || lang === "de" ? (
        <div className="coming-soon">Coming Soon.</div>
      ) : (
        <>
          {menu.map((category, index) => (
            <div key={index} className="category">
              {category.category.map((language, index) =>
                Object.keys(language).toString() === lang ? (
                  <h2 key={index} className="category-title">
                    {language[lang]}
                  </h2>
                ) : null
              )}
              <div>
                {category.items.map((dish, index) => (
                  <div key={index}>
                    <div className="dish">{dish[lang]}</div>
                    <div className="price">
                      <i>
                        {dish["price"]}
                        {dish["currency"].map((curr, index) => (
                          <span key={index}> {curr[lang]}</span>
                        ))}
                      </i>
                      <div className="divider-line" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ShowMenu;
