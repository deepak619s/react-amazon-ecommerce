import React from "react";
import { useParams } from "react-router";
import { Video_Player } from "../components/Video_Player";
import { Products } from "../components/Products";
import { items, Videos } from "../context/Data";

export const Product_By_Category = () => {
  const { cat } = useParams();

  const videoByCategory = Videos.find(
    (vid) => vid.category.toLowerCase() === cat.toLowerCase()
  );

  const productsByCategory = items.filter(
    (pro) => pro.category.toLowerCase() === cat.toLowerCase()
  );

  return (
    <>
      <Video_Player src={videoByCategory.url} />

      <Products items={productsByCategory} />
    </>
  );
};
