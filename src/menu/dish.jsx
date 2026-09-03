// dish.jsx

import Price from "./price";

const Dish = ({ name, price, currency }) => {
  return (
    <>
      <div className="dish">{name}</div>
      <Price price={price} currency={currency} />
      <div className="divider-line" />
    </>
  );
};

export default Dish;
