import currentMenu from "../../data/menu/current/menu.json";

const menu = currentMenu[0];
const categories = menu.categories;

const getLanguageMenu = (language) => {
  if (language !== null) {
    const currency = menu.currency[language];
    const transformedMenu = categories.map((category) => {
      const title = category.title[language];

      const dishes = category.dishes.map((dish) => {
        return {
          uid: dish.uid,
          name: dish[language],
          price: dish.price,
          currency,
        };
      });

      return { uid: category.uid, title, dishes };
    });
    return transformedMenu;
  }
};

export default getLanguageMenu;
