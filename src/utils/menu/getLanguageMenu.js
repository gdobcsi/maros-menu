import menu from "../../menu_2026_summer.json";

const getLanguageMenu = (language) => {
  if (language !== null) {
    let transformedMenu = menu.map((sections) => {
      // titles of categories
      let foundTitle = sections.category.find((title) => language in title);
      // category items
      let foundDishes = sections.items.map((dish) => {
        let dishName = dish[language];
        let dishPrice = dish.price;
        let dishCurrency = dish.currency.find(
          (currencyMatch) => language in currencyMatch,
        );

        return {
          name: dishName,
          price: dishPrice,
          currency: dishCurrency[language],
        };
      });
      return { category: foundTitle[language], items: foundDishes };
    });
    return transformedMenu;
  }
};

export default getLanguageMenu;
