import React, { useState, useEffect, useRef } from "react";

import "../../../styles/components/productList/Product-Item/Product-Item.scss";
import classNames from "classnames";

const ProductItem = ({ image, info, price, expire, more, gridRows }) => {
  const [showMore, setShowMore] = useState(false);
  const detailsRef = useRef(null);

  const toggleReadmore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    const closeDetailsOnScroll = () => {
      if (detailsRef.current) {
        detailsRef.current.open = false;
        setShowMore(false);
      }
    };

    window.addEventListener("scroll", closeDetailsOnScroll);

    return () => {
      window.removeEventListener("scroll", closeDetailsOnScroll);
    };
  }, []);

  return (
    <ul className="product">
      <div
        className={classNames("product__content", {
          "inline-content": gridRows,
        })}
      >
        <li className="product__item product__image">
          <img src={image} alt="product-image" />
        </li>

        <div className={gridRows && "grid-rows-info"}>
          <li className="product__item product__info">{info}</li>

          <li
            className=" product__item product__expire"
            style={{ color: expire ? "#ff5c00" : "#00a046" }}
          >
            {expire ? "Expires" : "In stock"}
          </li>
          <li className="product__item product__price">{price}₴</li>
        </div>
      </div>

      <details className="description" ref={detailsRef}>
        <summary onClick={() => toggleReadmore()}>
          {showMore ? "Less" : "More"}
        </summary>
        <div className="description__hidden">
          <p className="description__hidden-inner">
            <span>{more.processor}</span> / <span>{more.ram}</span> /{" "}
            <span>{more.storage}</span> / <span>{more.display}</span>
          </p>
        </div>
      </details>
    </ul>
  );
};

export default ProductItem;
