// price.jsx

const Price = ({ price, currency }) => {
  return (
    <div className="price">
      <i>
        {price} <span>{currency}</span>
      </i>
    </div>
  );
};

export default Price;
