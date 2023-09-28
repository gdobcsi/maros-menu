const Price = ({ dish, lang }) => {
  return (
    <div className="price">
      <i>
        {dish["price"]}
        {dish["currency"].map((curr, index) => (
          <span key={index}> {curr[lang]}</span>
        ))}
      </i>
    </div>
  );
};

export default Price;
