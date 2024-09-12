import { Product } from "@/models/product.model";
import { useEffect, useRef, useState } from "react";
import ProductCard from "../../components/ProductCard";
import axiosInstance from "../../lib/api";

type ItemBoxListProps = {
  name: string;
  data: Product[] | null;
  link: string;
};

function Home() {
  const [iPhoneList, setIPhoneList] = useState(null);
  const [iPadList, setIPadList] = useState(null);

  const images = [
    "https://shopdunk.com/images/uploaded/iPhone%2016/banner%20iphone%2016%20pro-KCTA_PC.png",
    "https://shopdunk.com/images/uploaded/banner/banner%202024/Thang_9/thang9_2/15prmpc.png",
    "https://shopdunk.com/images/uploaded/iPhone%2016/banner%20iphone%2016%20pro-KCTA_PC.png",
    "https://shopdunk.com/images/uploaded/banner/banner%202024/Thang_9/thang9_2/15prmpc.png",
    "https://shopdunk.com/images/uploaded/iPhone%2016/banner%20iphone%2016%20pro-KCTA_PC.png",
    "https://shopdunk.com/images/uploaded/banner/banner%202024/Thang_9/thang9_2/15prmpc.png",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null); // Chỉnh kiểu cho slideInterval

  // Hàm start lại interval
  const startSlideShow = () => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // Chuyển sau 3 giây
  };

  // Hàm dừng interval
  const pauseSlideShow = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startSlideShow();
    return () => pauseSlideShow();
    // eslint-disable-next-line
  }, [images.length]);

  const handlePrev = () => {
    pauseSlideShow();
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    startSlideShow();
  };

  const handleNext = () => {
    pauseSlideShow();
    setCurrentSlide((prev) => (prev + 1) % images.length);
    startSlideShow();
  };

  const getData = async () => {
    try {
      const [response1, response2] = await Promise.all([
        axiosInstance.get(
          `/products?populate=images&pagination[page]=1&pagination[pageSize]=4&filters[type][$eqi]=iPhone&sort[0]=updatedAt:desc`
        ),
        axiosInstance.get(
          `/products?populate=images&pagination[page]=1&pagination[pageSize]=4&filters[type][$eqi]=iPad&sort[0]=updatedAt:desc`
        ),
      ]);

      setIPhoneList(response1.data.data);
      setIPadList(response2.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="dark:bg-slate-400">
      <div className="w-full dark:bg-gray-800">
        <div className="carousel relative">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item w-full transition-transform duration-500 ease-in-out transform ${
                index === currentSlide
                  ? "translate-x-0"
                  : "translate-x-full hidden"
              }`}
            >
              <img src={image} className="w-full" alt={`Slide ${index + 1}`} />
            </div>
          ))}

          {/* Nút mũi tên bên trái */}
          <button
            className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-[#515154] bg-opacity-10 hover:bg-opacity-100 text-white w-12 h-12 rounded-full"
            onClick={handlePrev}
          >
            &#xF053;
          </button>

          {/* Nút mũi tên bên phải */}
          <button
            className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-[#515154] bg-opacity-10 hover:bg-opacity-100 text-white w-12 h-12 rounded-full"
            onClick={handleNext}
          >
            &#xF054;
          </button>
        </div>

        <div className="mx-auto max-w-[1200px]">
          <ItemBoxList
            name="iPhone"
            data={iPhoneList}
            link="/product-list/iPhone"
          ></ItemBoxList>

          <ItemBoxList
            name="iPad"
            data={iPadList}
            link="/product-list/iPad"
          ></ItemBoxList>
        </div>

        <div className="footer_newletter bg-gray-200 w-full mx-auto py-12 mt-5">
          <div className="heading_newletter text-center font-bold text-2xl text-gray-900 leading-9">
            Đăng ký nhận tin từ ShopDunk
          </div>
          <p className="font-normal text-sm leading-6 text-gray-600 text-center py-2 m-0">
            Thông tin sản phẩm mới nhất và chương trình khuyến mãi
          </p>
          <div className="newsletter flex flex-col justify-center items-center p-4 px-5 pb-2 w-full">
            <div
              className="newsletter-subscribe"
              id="newsletter-subscribe-block"
            >
              <div className="newsletter-email inline-flex items-center justify-center w-full">
                <input
                  id="newsletter-email"
                  className="newsletter-subscribe-text h-10 rounded-l-full leading-5 pl-6 text-gray-600 w-full border-0 max-w-[470px]"
                  placeholder="Email của bạn"
                  aria-label="Đăng ký nhận bản tin của chúng tôi"
                  type="email"
                  name="NewsletterEmail"
                />
                <button
                  type="button"
                  id="newsletter-subscribe-button"
                  className="button-1 newsletter-subscribe-button rounded-full bg-[#0066CC] text-xs ml-[-52px] z-20 h-10 min-w-[100px] px-[5px] text-white"
                >
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ItemBoxList: React.FC<ItemBoxListProps> = ({ name, data, link }) => {
  if (!data) return <></>;

  return (
    <div className="item-box-list pt-10">
      <div className="category-item">
        <h2 className="title font-bold text-[30px] leading-[45px] pb-6 mb-5 text-center">
          {name}
        </h2>

        <div className="page category-page grid grid-cols-4 gap-5 mb-3 auto-rows-[minmax(min-content,_max-content)]">
          {data.map((product, index) => {
            return (
              <ProductCard
                key={product.id}
                image={
                  product.attributes.images.data?.[0].attributes.url
                    ? `${process.env.REACT_APP_API_URL}${product.attributes.images.data?.[0].attributes.url}`
                    : "/logo512.png"
                }
                id={product.id}
                name={product.attributes.name}
                currentPrice={product.attributes.price}
              />
            );
          })}
        </div>
      </div>
      <div className="show-all text-center">
        <a
          className="border border-[#0066CC] rounded-lg px-[45px] py-[5.5px] text-[#0066CC] font-normal text-[14px] leading-[27px] inline-block align-middle"
          href={link}
        >
          {`Xem tất cả ${name}`}
        </a>
      </div>
    </div>
  );
};

export default Home;
