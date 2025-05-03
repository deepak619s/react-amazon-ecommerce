import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import {
  FaMobileAlt,
  FaLaptop,
  FaTabletAlt,
  FaClock,
  FaHeadphones,
  FaThLarge,
  FaRupeeSign,
} from "react-icons/fa";
import { items } from "../context/Data";

const categories = [
  { name: "All Products", icons: <FaThLarge /> },
  { name: "Mobiles", icons: <FaMobileAlt /> },
  { name: "Laptops", icons: <FaLaptop /> },
  { name: "Tablets", icons: <FaTabletAlt /> },
  { name: "Watches", icons: <FaClock /> },
];

const priceRanges = [30000, 40000, 50000, 60000, 70000, 80000];

export const Shop_By_Category = () => {
  const { setProducts } = useContext(DataContext);
  const [selectedPrice, setSelectedPrice] = useState(80000);

  const filterByCategory = (cat) => {
    if (cat === "All Products") {
      setProducts(items);
      return;
    }

    setProducts(
      items.filter((pro) => pro.category.toLowerCase() === cat.toLowerCase())
    );
  };

  const filterByPrice = (price) => {
    setProducts(items.filter((pro) => pro.price <= price));
  };

  return (
    <>
      <div className="container bg-dark text-light my-4 p-4 rounded">
        <h3 className="text-center mb-3">Filter Products</h3>
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
          {categories.map(({ name, icons }) => (
            <div
              key={name}
              className="d-flex align-items-center gap-2 px-3 py-2 rounded bg-secondary text-light fw-bold"
              style={{ cursor: "pointer" }}
              onClick={() => filterByCategory(name)}
            >
              {icons}
              <span>{name}</span>
            </div>
          ))}
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-3">
          {priceRanges.map((value, index) => (
            <span
              key={index}
              style={{
                cursor: "pointer",
                fontSize: "1rem",
                borderRadius: "10px",
              }}
              onClick={() => filterByPrice(value)}
              className={`badge p-3 fw-bold ${
                selectedPrice === value
                  ? "bg-warning text-dark"
                  : "bg-light text-dark"
              }`}
            >
              <FaRupeeSign /> {value}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
