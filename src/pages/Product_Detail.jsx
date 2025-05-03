import React, { useContext } from "react";
import { useParams } from "react-router";
import { items } from "../context/Data";
import { Products } from "../components/Products";

import { DataContext } from "../context/DataContext";

import { ToastContainer, toast, Bounce } from "react-toastify";

import "./Product_Detail.css";

export const Product_Detail = () => {
  const { id } = useParams();

  const { addToCart } = useContext(DataContext);

  const product = items.find((pro) => pro.id.toString() === id);

  const relatedProduct = items.filter(
    (pro) => pro.category.toLowerCase() === product.category.toLowerCase()
  );

  return (
    <>
      <ToastContainer />
      <div className="container my-5">
        <div className="product-detail-card">
          <div className="image-section">
            <img
              src={product.imgSrc}
              alt={product.title}
              className="product-image"
            />
          </div>

          <div className="info-section">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price"> ₹ {product.price}</p>
            <button
              className="btn add-to-cart"
              onClick={() =>
                addToCart(
                  product.id,
                  product.title,
                  product.price,
                  product.imgSrc
                )
              }
            >
              🛒 Add To Cart
            </button>
          </div>
        </div>

        <h2 className="text-center my-5">Related Products</h2>
        <Products items={relatedProduct} />
      </div>
    </>
  );
};
