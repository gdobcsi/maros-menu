import menu from "../menu.json";
import { useEffect, useRef, useState } from "react";

const ShowMenu = ({ lang, setScrollTo }) => {
  // eslint-disable-next-line no-unused-vars
  const [scrollPos, setScrollPos] = useState(0);

  let menuRef = useRef();

  useEffect(() => {
    setScrollTo(menuRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onScrollHandler = (ev) => {
    // console.log(menuRef.current.scrollTop);
    // setScrollPos(menuRef.current.clientHeight);
    // console.log(window.innerHeight);
    // console.log(menuRef.current);
  };

  return (
    <div className="show-menu-wrapper">
      <div id="show-menu" ref={menuRef} onWheel={(ev) => onScrollHandler(ev)}>
        {lang === false ? null : lang === "fr" ? (
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
    </div>
  );
};

export default ShowMenu;
