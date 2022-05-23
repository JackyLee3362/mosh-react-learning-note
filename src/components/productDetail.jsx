import React, { Component } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

function ProductDetails() {
  // Navigate to /products
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const handleSave = () => {
    console.log("handleSave called.");
    console.log(params);
    console.log(location);
    // 带历史记录的跳转
    return navigate("/products");
  };
  const handleWithoutSave = () => {
    // 不带历史记录的跳转（常用于登录页）
    return navigate("/products", { replace: true });
  };

  return (
    <div>
      <h1>Product Details - </h1>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleWithoutSave}>without Save</button>
    </div>
  );
}

export default ProductDetails;
