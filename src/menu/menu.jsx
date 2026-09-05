import "./menu.css";

import { useEffect, useRef } from "react";

const Menu = ({ menu }) => {
  const menuRef = useRef();

  useEffect(() => {
    menuRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [menu]);

  return (
    <div className="show-menu-wrapper">
      <div id="show-menu" ref={menuRef}>
        {menu.map((section, index) => (
          <div key={index} className="category">
            <h2 className="category-title">{section.category}</h2>
            <div>
              {section.items.map((dish, index) => (
                <div key={index}>
                  <div className="dish">{dish.name}</div>
                  <div className="price">
                    <i>
                      {dish.price} <span>{dish.currency}</span>
                    </i>
                  </div>
                  <div className="divider-line" />
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
