import "./Menu.css";

const Menu = ({ menu, menuRef }) => {
  return (
    <div className="show-menu-wrapper">
      <div id="show-menu" ref={menuRef}>
        {menu.map((category) => (
          <div key={category.uid} className="category">
            <h2 className="category-title">{category.title}</h2>
            <div>
              {category.dishes.map((dish) => (
                <div key={dish.uid}>
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
