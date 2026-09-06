const fs = require("fs");

const rawdata = fs.readFileSync("../src/menu_2026_summer.json");
const menu = JSON.parse(rawdata);

const newMenu = [
  {
    currency: null,
    categories: [],
  },
];

const categories = newMenu[0].categories;

menu.forEach((category) => {
  const title = {};
  const localizedTitles = category.category;

  localizedTitles.forEach((localizedTitle) => {
    for (const [key, value] of Object.entries(localizedTitle)) {
      if (key === "eng") {
        title["en"] = value;
      } else {
        title[key] = value;
      }
    }
  });

  /// ITEMS aka dishes
  const dishes = [];
  const sourceDishes = category.items;

  sourceDishes.forEach((dish) => {
    const newDish = {};
    for (const [key, value] of Object.entries(dish)) {
      if (key === "currency") {
        if (newMenu[0].currency === null) {
          newMenu[0].currency = {};
          value.forEach((currency) => {
            for (const [currencyKey, currencyValue] of Object.entries(
              currency,
            )) {
              if (currencyKey === "eng") {
                newMenu[0].currency["en"] = currencyValue;
              } else {
                newMenu[0].currency[currencyKey] = currencyValue;
              }
            }
          });
        }
      } else {
        if (key === "eng") {
          //   console.log("ENG TALÁLAT");
          newDish["en"] = value;
        } else {
          newDish[key] = value;
        }
      }
    }

    dishes.push(newDish);
  });

  categories.push({ title: title, dishes: dishes });
});

fs.writeFileSync(
  "new_datastructure_menu_2026_summer.json",
  JSON.stringify(newMenu, null, 2),
);
