import Price from "./price";

const Dish = ({ dish, lang }) => {
  return (
    <>
      <div className="dish">{dish[lang]}</div>
      <Price dish={dish} lang={lang} />
      <div className="divider-line" />
    </>
  );
};

export default Dish;
