import React, { useState, useEffect } from "react";
import { getProducts, getProductDescription } from "./db.js";

function ProductList() {
  const [productToShow, setProductToShow] = useState(0);
  const [productItems, setproductItems] = useState([]);
  const showProductDescription = (i) => {
    setProductToShow(getProductDescription(productItems, i));
  };

  useEffect(() => {
    const fetchData = async () => {
      getProducts().then((productItems) => {
        setproductItems(productItems);
      });
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="productList">
        {productItems.map((itemInfo) => (
          <div>{itemInfo.itemName}</div>
        ))}
      </div>
      {/*productToShow ? (
        <div>
          <ProductDetails productDetail={productToShow} />
          {productToShow.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>
      ) : (
        <></>
      )*/}
    </>
  );
}
export default ProductList;
