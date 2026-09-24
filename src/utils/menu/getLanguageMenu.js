import currentMenu from "../../data/menu/current/menu.json";

const menu = currentMenu[0];
const categories = menu.categories;

const getLanguageMenu = (language) => {
  if (language !== null) {
    const currency = menu.currency[language];
    let transformedMenu = categories.map((category) => {
      let title;
      for (const [titleLanguage, titleText] of Object.entries(category.title)) {
        if (language === titleLanguage) {
          title = titleText;
        }
      }

      let dishes = [];
      category.dishes.forEach((dish) => {
        const currentDish = {
          name: dish[language],
          uid: dish.uid,
          price: dish.price,
          currency,
        };

        dishes.push(currentDish);
      });

      return { uid: category.uid, title, dishes };
    });
    return transformedMenu;
  }
};

export default getLanguageMenu;
