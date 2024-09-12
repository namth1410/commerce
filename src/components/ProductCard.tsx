import React from "react";
import { useNavigate } from "react-router-dom";
import { generateSlug } from "../lib/utils";

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  currentPrice: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  name,
  currentPrice,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const slug = generateSlug(name);
    navigate(`/product-details/${id}/${slug}`);
  };

  return (
    <div
      className="item-box group bg-white dark:bg-[#181a1b] shadow-[0_1px_8px_rgba(0,0,0,0.04)] rounded-lg p-6 pb-4 px-5 hover:border-[rgba(2,1,1,0)] hover:shadow-[1px_1px_28px_0px_rgba(0,0,0,0.12)] cursor-pointer dark:hover:border-[rgba(255,255,255,0.2)] dark:hover:shadow-[1px_1px_28px_0px_rgba(255,255,255,0.2)]"
      onClick={handleClick}
    >
      <div
        className="product_tag flex justify-end"
        style={{
          transform: "translateY(-15px) translateX(10px)",
        }}
      >
        <img alt="tag" src="https://shopdunk.com/images/uploaded/icon/new.png"></img>
      </div>
      <div className="picture mb-5">
        <a href={`/product-details/${id}/${generateSlug(name)}`}>
          <img
            src={image}
            alt={name}
            className="transition-all duration-500 dark:brightness-75 group-hover:brightness-100"
          />
        </a>
      </div>
      <div className="details">
        <div className="product-title font-bold text-[18px] leading-[27px] min-h-[54px]">
          {name}
        </div>
        <div className="add-info">
          <div className="price font-bold text-[16px] leading-[24px] text-[#0066CC]">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(parseFloat(currentPrice))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
