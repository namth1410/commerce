import { Button, Card } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { generateSlug } from "../lib/utils";

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  currentPrice: string;
  oldPrice: string;
  discount: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  name,
  currentPrice,
  oldPrice,
  discount,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const slug = generateSlug(name);
    navigate(`/product-details/${id}/${slug}`);
  };

  return (
    <Card
      className="max-w-[300px] border transition duration-150 hover:border-[rgba(2,1,1,0)] hover:shadow-[1px_1px_28px_0px_rgba(0,0,0,0.12)] cursor-pointer"
      imgSrc={image}
      onClick={handleClick}
    >
      <div className="">
        <h2 className="text-lg font-bold">{name}</h2>
        <div className="flex items-center justify-between mt-2">
          <span className="font-bold text-[15px] leading-[24px] text-[#0066CC]">
            {Number(currentPrice).toLocaleString("vi-VN")}₫
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
