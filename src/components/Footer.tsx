import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-center">
      <div className="footer-upper w-[90%] m-auto border-b border-[#515154] py-[64px] pb-[21px] flex">
        <div className="footer-block w-[30%] follow-us flex flex-col items-start">
          <div className="header-logo mb-4 md:mb-0">
            <a href="/">
              <img
                alt="ShopDunk"
                src="https://shopdunk.com/images/thumbs/0027333_logo-shopdunk.png"
                className="max-w-[184px] max-h-[48px]"
              />
            </a>
          </div>
          <div className="topic-block">
            <p className="text-sm text-justify font-normal leading-6 text-gray-400 py-2">
              Năm 2020, ShopDunk trở thành đại lý ủy quyền của Apple. Chúng tôi
              phát triển chuỗi cửa hàng tiêu chuẩn và Apple Mono Store nhằm mang
              đến trải nghiệm tốt nhất về sản phẩm và dịch vụ của Apple cho
              người dùng Việt Nam.
            </p>
            <div className="border border-[#cccccc] mx-auto bg-[#ecf0f1] rounded-[10px] max-w-full">
              <p className="text-left p-[8px] my-[10px] underline">
                <strong className="text-black">Tổng đài hỗ trợ :</strong>
              </p>
              <p className="my-[10px]">
                <a href="tel:19006626">
                  <strong className="text-black">
                    Mua hàng:{" "}
                    <span className="text-blue-700 text-[18px]">
                      1900.6626 (08:00 - 22:00)
                    </span>
                  </strong>
                </a>
              </p>
              <p className="my-[10px]">
                <a href="tel:19008036">
                  <strong className="text-black">
                    Bảo hành:{" "}
                    <span className="text-blue-700 text-[18px]">
                      1900.8036 (08:00 - 22:00)
                    </span>
                  </strong>
                </a>
              </p>
            </div>
          </div>
          {/* Social Media Section */}
          <div className="social mt-8 md:mt-0">
            <div className="title font-bold text-xl mb-4"> </div>
            <ul className="flex space-x-4">
              <li className="facebook">
                <a
                  href="https://www.facebook.com/shopdunk.store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://shopdunk.com/images/uploaded/icon/Face.png"
                    alt="Facebook"
                  />
                </a>
              </li>
              <li className="twitter">
                <a
                  href="https://www.youtube.com/c/ShopDunkApple"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://shopdunk.com/images/uploaded/icon/Tiktok.png"
                    alt="YouTube"
                  />
                </a>
              </li>
              <li className="rss">
                <a
                  href="https://zalo.me/3937868610324741136"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://shopdunk.com/images/uploaded/icon/Zalo.png"
                    alt="Zalo"
                  />
                </a>
              </li>
              <li className="youtube">
                <a
                  href="https://www.tiktok.com/@shopdunk_apple"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://shopdunk.com/images/uploaded/icon/Youtube.png"
                    alt="TikTok"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-block information px-4 md:px-8 mt-8 w-[25%] text-left">
          <div className="title m-0 mb-[15px] text-[#d2d2d7] text-[15px] leading-[21px] font-bold">
            Thông tin
          </div>
          <ul className="list space-y-2">
            <li className="mt-0-important">
              <a
                href="/tin-tuc"
                className="text-[#86868b] text-[13px] leading-[28px] hover:underline"
              >
                Tin Tức
              </a>
            </li>
            <li className="mt-0-important">
              <a
                href="/gioi-thieu"
                className="text-[#86868b] text-[13px] leading-[28px] hover:underline"
              >
                Giới thiệu
              </a>
            </li>
            <li className="mt-0-important">
              <a
                href="/check-imei"
                className="text-[#86868b] text-[13px] leading-[28px] hover:underline"
              >
                Check IMEI
              </a>
            </li>
            <li className="mt-0-important">
              <a
                href="/phuong-thuc-thanh-toan"
                className="text-[#86868b] text-[13px] leading-[28px] hover:underline"
              >
                Phương thức thanh toán
              </a>
            </li>
            <li className="mt-0-important">
              <a
                href="/thue-diem-ban-le"
                className="text-[#86868b] text-[13px] leading-[28px] hover:underline"
              >
                Thuê điểm bán lẻ
              </a>
            </li>
            <li className="mt-0-important">
              <a
                href="https://shopdunk.com/care"
                target="_blank"
                rel="noopener"
                className="text-[#86868b] text-[13px] leading-[28px] hover:underline"
              >
                Bảo hành và sửa chữa
              </a>
            </li>
            <li className="mt-0-important">
              <a
                href="https://vieclam.shopdunk.com/"
                target="_blank"
                rel="noopener"
                className="text-[#86868b] text-[13px] leading-[28px] hover:underline"
              >
                Tuyển dụng
              </a>
            </li>
            <li className="mt-0-important">
              <a
                href="/web-review"
                className="text-[#86868b] text-[13px] leading-[28px] hover:underline"
              >
                Đánh giá chất lượng, khiếu nại
              </a>
            </li>
            <li className="mt-0-important">
              <a
                href="/invoice"
                className="text-[#86868b] text-[13px] leading-[28px] hover:underline"
              >
                Tra cứu hoá đơn điện tử
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-block customer-service px-4 md:px-8 mt-8 w-[20%] text-left">
          <div className="title m-0 mb-[15px] text-[#d2d2d7] text-[15px] leading-[21px] font-bold">
            Chính sách
          </div>
          <ul className="list space-y-2">
            <li className="mt-0-important">
              <a
                href="/thu-cu-doi-moi"
                className="text-[#86868b] text-[13px] leading-[28px] hover:underline"
              >
                Thu cũ đổi mới
              </a>
            </li>
            <li className="mt-0-important">
              <a
                href="/chinh-sach-ship-cod"
                className="text-[#86868b] text-[13px] leading-[28px] hover:underline"
              >
                Giao hàng
              </a>
            </li>
            <li className="mt-0-important">
              <a
                href="/giao-hang-zalopay"
                className="text-[#86868b] text-[13px] leading-[28px] hover:underline"
              >
                Giao hàng (ZaloPay)
              </a>
            </li>
            <li className="mt-0-important">
              <a
                href="/chinh-sach-huy-giao-dich-va-hoan-tien"
                className="text-[#86868b] text-[13px] leading-[28px] hover:underline"
              >
                Huỷ giao dịch
              </a>
            </li>
            <li className="mt-0-important">
              <a
                href="/chinh-sach-doi-tra"
                className="text-[#86868b] text-[13px] leading-[28px] hover:underline"
              >
                Đổi trả
              </a>
            </li>
            <li className="mt-0-important">
              <a
                href="/chinh-sach-bao-hanh"
                className="text-[#86868b] text-[13px] leading-[28px] hover:underline"
              >
                Bảo hành
              </a>
            </li>
            <li className="mt-0-important">
              <a
                href="/dich-vu"
                className="text-[#86868b] text-[13px] leading-[28px] hover:underline"
              >
                Dịch vụ
              </a>
            </li>
            <li className="mt-0-important">
              <a
                href="/giai-quyet-khieu-nai"
                className="text-[#86868b] text-[13px] leading-[28px] hover:underline"
              >
                Giải quyết khiếu nại
              </a>
            </li>
            <li className="mt-0-important">
              <a
                href="/chinh-sach-bao-mat"
                className="text-[#86868b] text-[13px] leading-[28px] hover:underline"
              >
                Bảo mật thông tin
              </a>
            </li>
            <li className="mt-0-important">
              <a
                href="/huong-dan-thanh-toan-qua-qr-vnpay"
                className="text-[#86868b] text-[13px] leading-[28px] hover:underline"
              >
                Hướng dẫn thanh toán qua VNPAY
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-block my-account px-4 md:px-8 mt-8 w-[25%] text-left">
          <div className="title m-0 mb-[15px] text-[#d2d2d7] text-[15px] leading-[21px] font-bold">
            Địa chỉ & Liên hệ
          </div>
          <ul className="list space-y-2">
            <li className="mt-0-important">
              <a
                href="/customer/info"
                className="text-[#86868b] text-[13px] leading-[28px] hover:underline"
              >
                Tài khoản của tôi
              </a>
            </li>
            <li className="mt-0-important">
              <a
                href="/order/history"
                className="text-[#86868b] text-[13px] leading-[28px] hover:underline"
              >
                Đơn đặt hàng
              </a>
            </li>
            <li className="mt-0-important">
              <a
                href="/find-store"
                className="text-[#86868b] text-[13px] leading-[28px] hover:underline"
              >
                Hệ thống cửa hàng
              </a>
            </li>
            <li className="mt-0-important">
              <a
                href="https://www.google.com/maps/@/data=!3m1!4b1!4m3!11m2!2s0Vq6CiZoSh-QELJ3lKHSgQ!3e3?shorturl=1"
                target="_blank"
                rel="noopener"
                className="text-[#86868b] text-[13px] leading-[28px] hover:underline"
              >
                Tìm Store trên Google Map
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-lower flex flex-col py-[20px] pb-[32px] px-0 w-[90%] m-auto">
        <div className="footer-info float-left text-left flex w-full justify-between">
          <span className="footer-disclaimer text-[13px] leading-[20px] text-[#515154]">
            © 2016 Công ty Cổ Phần HESMAN Việt Nam GPDKKD: 0107465657 do Sở KH
            &amp; ĐT TP. Hà Nội cấp ngày 08/06/2016. <br />
            Địa chỉ: Số 76 Thái Hà, phường Trung Liệt, quận Đống Đa, thành phố
            Hà Nội, Việt Nam
            <br />
            Đại diện pháp luật: PHẠM MẠNH HÒA | ĐT: 0247.305.9999 | Email:
            lienhe@shopdunk.com
          </span>
          <a href="http://online.gov.vn/(X(1)S(jfktnnku5rui3vjf5pnk4sgc))/Home/WebDetails/34144?AspxAutoDetectCookieSupport=1">
            <img
              src="https://shopdunk.com/images/uploaded-source/Trang%20ch%E1%BB%A7/Bocongthuong.png"
              alt=""
              className="float-right w-[139px]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
