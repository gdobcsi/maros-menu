const { getUID, createPrefix } = require("./uidGenerator");

const fs = require("fs");
const path = require("path");

const rawdata = fs.readFileSync(
  path.resolve(
    __dirname,
    "../src/data/menu/archive/migrated/2026_summer/source-winter-2026.json",
  ),
);
const menu = JSON.parse(rawdata);

const newMenu = [
  {
    currency: null,
    categories: [],
  },
];

let categoryCounter = 1;
let dishCounter = 1;

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
    const dishPrefix = createPrefix(titleForUID, "dish");
    newDish.uid = getUID(dishPrefix, dishCounter);
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
    dishCounter++;
  });

  const categoryPrefix = createPrefix(titleForUID, "category");
  const uid = getUID(categoryPrefix, categoryCounter);
  categories.push({ uid, title: title, dishes: dishes });
  categoryCounter++;
});

fs.writeFileSync(
  path.resolve(
    __dirname,
    "./outputs/new_datastructure_menu_with_UIDs_2026_winter.json",
  ),
  JSON.stringify(newMenu, null, 2),
);
