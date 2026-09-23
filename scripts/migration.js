const getUID = require("./uidGenerator");

const fs = require("fs");

const rawdata = fs.readFileSync(
  "../src/data/menu/archive/migrated/2026_summer/source.json",
);
const menu = JSON.parse(rawdata);

const newMenu = [
  {
    currency: null,
    categories: [],
  },
];

let idCounter = 1;

const categories = newMenu[0].categories;

menu.forEach((category) => {
  let titleForUID = "";
  const title = {};
  const localizedTitles = category.category;

  localizedTitles.forEach((localizedTitle) => {
    for (const [key, value] of Object.entries(localizedTitle)) {
      if (key === "eng") {
        title["en"] = value;
        titleForUID = value;
      } else {
        title[key] = value;
      }
    }
  });

  const dishes = [];
  const sourceDishes = category.items;

  sourceDishes.forEach((dish) => {
    const newDish = {};
    newDish.uid = getUID(titleForUID, idCounter);
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
          newDish["en"] = value;
        } else {
          newDish[key] = value;
        }
      }
    }

    dishes.push(newDish);
    idCounter++;
  });

  categories.push({ title: title, dishes: dishes });
});

fs.writeFileSync(
  "./outputs/new_datastructure_menu_with_UIDs_2026_summer.json",
  JSON.stringify(newMenu, null, 2),
);
