// dish.jsx

import Price from "./price";

const Dish = ({ dish, lang }) => {
  let currency = dish.currency.find((currency) => lang in currency);
  return (
    <>
      <div className="dish">{dish[lang]}</div>
      <Price price={dish.price} currency={currency[lang]} />
      <div className="divider-line" />
    </>
  );
};

export default Dish;
