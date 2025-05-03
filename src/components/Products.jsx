import React, { useContext } from "react";
import { Link, useLocation } from "react-router";
import { Shop_By_Category } from "./Shop_By_Category";
import { DataContext } from "../context/DataContext";

import { ToastContainer, toast, Bounce } from "react-toastify";

export const Products = ({ items }) => {
  const { pathname } = useLocation();

  const { addToCart } = useContext(DataContext);

  return (
    <>
      <ToastContainer />
      {pathname === "/" && <Shop_By_Category />}

      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          {items.map((products) => (
            <div
              key={products.id}
              className="col-lg-4 col-md-6 my-3 d-flex justify-content-center"
            >
              <div
                className="card product-card text-center"
                style={{ width: "18rem" }}
              >
                <Link to={`product/${products.id}`} className="image-container">
                  <img
                    src={products.imgSrc}
                    alt={products.title}
                    className="card-img-top"
                  />
                </Link>

                <div className="card-body text-center">
                  <h5 className="card-title">{products.title}</h5>
                  <p className="product-price"> ₹ {products.price}</p>
                  <div className="button-container">
                    <button
                      className="btn add-to-cart"
                      onClick={() =>
                        addToCart(
                          products.id,
                          products.title,
                          products.price,
                          products.imgSrc
                        )
                      }
                    >
                      🛒 Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
