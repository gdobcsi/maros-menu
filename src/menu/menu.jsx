// import menu from "../menu_2023_winter.json";
// import menu from "../menu_2024_winter.json";
import menu from "../menu_2026_summer.json";

import "./menu.css";

import { useEffect, useRef } from "react";
import Dish from "./dish";
import StickyUpButton from "../stickyUpButton/stickyUpButton";

const Menu = ({ lang, setScrollTo, appRef }) => {
  let menuRef = useRef();

  useEffect(() => {
    setScrollTo(menuRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const categoryHeader = (titles, lang) => {
    const title = titles.find((title) => lang in title);
    return title[lang];
  };

  return (
    <div className="show-menu-wrapper">
      <StickyUpButton setScrollTo={setScrollTo} appRef={appRef} />
      <div id="show-menu" ref={menuRef}>
        {menu.map((category, index) => (
          <div key={index} className="category">
            <h2 className="category-title">
              {categoryHeader(category.category, lang)}
            </h2>
            <div>
              {category.items.map((dish, index) => (
                <div key={index}>
                  <Dish dish={dish} lang={lang} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
