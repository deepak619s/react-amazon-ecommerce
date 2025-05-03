import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaAmazon, FaShoppingCart, FaSearch } from "react-icons/fa";

import { DataContext } from "../context/DataContext";

export const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { cart } = useContext(DataContext);

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/product/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <>
      <div className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-2 sticky-top shadow">
        <div className="container-fluid">
          {/* Left Section - Logo */}
          <Link to={"/"} className="navbar-brand d-flex align-items-center">
            <FaAmazon className="text-warning fs-2 me-2" />
            <span className="fs-4 fw-bold">Amazon</span>
          </Link>

          {/* Middle Section - Search Product */}
          <form
            onSubmit={handleFormSubmit}
            className="d-flex mx-auto search-container"
          >
            <input
              type="seach"
              className="form-control search-input"
              placeholder="search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button className="btn btn-warning search-button">
              <FaSearch />
            </button>
          </form>

          {/* Right Section - Categories */}
          <ul className="navbar-nav mx-auto d-flex gap-3">
            {["Mobiles", "Laptops", "Tablets", "Watches"].map(
              (category, index) => (
                <li key={index} className="nav-item">
                  <Link
                    to={`/product/category/${category}`}
                    className="nav-link category-link"
                  >
                    {category}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Right Section - Cart Button */}
          <Link
            to="/cart"
            type="button"
            className="btn btn-warning position-relative cart-btn"
          >
            <FaShoppingCart className="fs-4" />

            {cart.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </>
  );
};
