import React from "react";

const ProductCard = ({ title, price, onSale }) => {
  const discountedPrice = (price * 0.9).toFixed(0);

  return (
    <div className="card">
      {onSale && <span className="sale-badge">Sale!</span>}
      <h2 className="card-title">{title}</h2>
      <p className="card-text">
        {onSale ? (
          <>
            <span className="old-price">Rs. {price}/-</span>{" "}
            <span className="discounted-price">Rs. {discountedPrice}/-</span>
          </>
        ) : (
          `Price: Rs. ${price}/-`
        )}
      </p>
    </div>
  );
};

export default ProductCard;
