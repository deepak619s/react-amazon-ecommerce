import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { Products } from "./Products";
import { Video_Player } from "./Video_Player";

export const All_Products = () => {
  const { products } = useContext(DataContext);
  // console.log("🚀 ~ constAll_Products= ~ products:", products);

  return (
    <>
      <Video_Player src="https://www.apple.com/105/media/ww/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome3/xlarge_2x.mp4"></Video_Player>
      <Products items={products} />
    </>
  );
};
