import React from "react";
import ProductDetailsComponent from "../../components/ProductDetailsComponent/ProductDetailsComponent";

const ProductDetailsPage = () => {
  return (
    <div
      style={{
        padding: "0 120px",
        backgroundColor: "#efefef",
        height: "1000px",
      }}
    >
      <h5>Trang chu</h5>
      <ProductDetailsComponent />
    </div>
  );
};

export default ProductDetailsPage;
