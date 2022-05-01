import React from "react";
import "../styles/khamphakieutoc.css";

// icon style
import iconheart from "../assets/img/PageKhamPhaKieuToc/heart.b3ffd2ea.svg";
import iconshare from "../assets/img/PageKhamPhaKieuToc/share.64b8ac3b.svg";

// col 1
import khampha1 from "../assets/img/PageKhamPhaKieuToc/small_side_part_vuot_ru_6dce22fce7.jpg";
import khampha2 from "../assets/img/PageKhamPhaKieuToc/2.jpg";
import khampha3 from "../assets/img/PageKhamPhaKieuToc/3.jpg";
import khampha4 from "../assets/img/PageKhamPhaKieuToc/4.jpg";
import khampha5 from "../assets/img/PageKhamPhaKieuToc/5.jpg";
import khampha6 from "../assets/img/PageKhamPhaKieuToc/6.jpg";
import khampha7 from "../assets/img/PageKhamPhaKieuToc/7.jpg";
import khampha8 from "../assets/img/PageKhamPhaKieuToc/8.jpg";

// col 2
import khampha9 from "../assets/img/PageKhamPhaKieuToc/9.jpg";
import khampha10 from "../assets/img/PageKhamPhaKieuToc/10.png";
import khampha11 from "../assets/img/PageKhamPhaKieuToc/11.jpg";
import khampha12 from "../assets/img/PageKhamPhaKieuToc/12.jpg";
import khampha13 from "../assets/img/PageKhamPhaKieuToc/13.jpg";
import khampha14 from "../assets/img/PageKhamPhaKieuToc/14.jpg";
import khampha15 from "../assets/img/PageKhamPhaKieuToc/15.jpg";
import khampha16 from "../assets/img/PageKhamPhaKieuToc/16.png";

// col 3
import khampha17 from "../assets/img/PageKhamPhaKieuToc/17.jpg";
import khampha18 from "../assets/img/PageKhamPhaKieuToc/18.jpg";
import khampha19 from "../assets/img/PageKhamPhaKieuToc/19.jpg";
import khampha20 from "../assets/img/PageKhamPhaKieuToc/20.jpg";
import khampha21 from "../assets/img/PageKhamPhaKieuToc/21.png";
import khampha22 from "../assets/img/PageKhamPhaKieuToc/22.png";
import khampha23 from "../assets/img/PageKhamPhaKieuToc/23.png";

// col 4
import khampha24 from "../assets/img/PageKhamPhaKieuToc/24.png";
import khampha25 from "../assets/img/PageKhamPhaKieuToc/25.png";
import khampha26 from "../assets/img/PageKhamPhaKieuToc/26.png";
import khampha27 from "../assets/img/PageKhamPhaKieuToc/27.png";
import khampha28 from "../assets/img/PageKhamPhaKieuToc/28.png";
import khampha29 from "../assets/img/PageKhamPhaKieuToc/29.png";
import khampha30 from "../assets/img/PageKhamPhaKieuToc/30.png";

// col 5
import khampha31 from "../assets/img/PageKhamPhaKieuToc/31.png";
import khampha32 from "../assets/img/PageKhamPhaKieuToc/31.jpg";

import khampha33 from "../assets/img/PageKhamPhaKieuToc/32.jpg";
import khampha34 from "../assets/img/PageKhamPhaKieuToc/33.jpg";
import khampha35 from "../assets/img/PageKhamPhaKieuToc/34.jpg";
import khampha36 from "../assets/img/PageKhamPhaKieuToc/35.jpg";
import khampha37 from "../assets/img/PageKhamPhaKieuToc/36.jpg";

const KhamPhaKieuToc = () => {
  return (
    <>
      <div className="discover">
        <div className="container">
          {/* header */}
          <div className="discover__header">
            <div className="discover__header-btn">
              <div className="discover__button">
                <div className="discover__col">
                  <button
                    type="button"
                    class="discover_btn--active discover_btn "
                  >
                    Discover
                  </button>
                </div>
                <div className="discover__col">
                  <button type="button" class="discover_btn">
                    Style Master
                  </button>
                </div>
                <div className="discover__col">
                  <button type="button" class="discover_btn">
                    Lookbook
                  </button>
                </div>
              </div>
            </div>
            <div className="discover__title">
              CÙNG 30SHINE KHÁM PHÁ <span>XU HƯỚNG TÓC HOT NHẤT</span>
            </div>
          </div>
          {/* content */}
          <div className="discover__content">
            <div className="discover__content-row">
              {/* col 1 */}
              <div className="discover__column">
                {/* col 1 item 1 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha1} alt="" height="315px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Phá cách với kiểu tóc nam Side Part vuốt rủ và học cách
                        vuốt trong tích tắc
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 2 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha2} alt="" height="305.525px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        4 Mẹo Giữ Form Tóc Khi Đội Mũ Bảo Hiểm
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 3 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha3} alt="" height="331.138px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Tóc Hai Mái Hàn Quốc Hợp Gương Mặt Nào?
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 4 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha4} alt="" height="331.138px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Bao Lâu Gội Đầu Một Lần Để Giữ Kiểu Tóc Đẹp?
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 5 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha5} alt="" height="331.138px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Mẹo Vuốt Tóc Mohican Tại Nhà
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 6 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha6} alt="" height="331.138px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Đàn Ông Bao Lâu Nên Cắt Tóc Một Lần?
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 7 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha7} alt="" height="331.138px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        3 Lý Do Không Thể Bỏ Lỡ Tóc Uốn Con Sâu
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 8 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha8} alt="" height="331.138px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Top Màu Tóc Đẹp Không Cần Tẩy Cho Nam
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* col 2 */}
              <div className="discover__column">
                {/* col 1 item 9 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha9} alt="" height="337.195px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Top 3 Màu Nhuộm Tóc Lý Tưởng Cho Học Sinh
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 10 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha10} alt="" height="221.2px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Mẹo Để Tóc Hết Chỉa Và Bết Dính
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 11 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha11} alt="" height="333.133px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Những Ai Nên Tránh Xa Kiểu Tóc Mohican???
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 12 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha12} alt="" height="333.133px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Nhuộm Tóc Màu Khói Phải Tẩy Tóc Mấy Lần?
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 13 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha13} alt="" height="331.138px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Tuyệt Chiêu Duỗi Tóc Thẳng Không Cần Dùng Nhiệt
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 14 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha14} alt="" height="331.138px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Lý Do Khiến Nâu Khói Là Màu Nhuộm Hot Nhất 2020
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 15 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha15} alt="" height="129.623px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Hành Trình Đi Tìm Trend Tóc Cho Nam Giới Việt
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 16 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha16} alt="" height="332.132px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Anh Chàng "Chưa Nhuộm Tóc Bao Giờ" Lột Xác Với Màu Nhuộm
                        Xám Khói
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* col 3 */}
              <div className="discover__column">
                {/* col 1 item 17 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha17} alt="" height="331.138px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Biến Hoá Đa Phong Cách Với Kiểu Tóc Middle Part
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 18 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha18} alt="" height="331.138px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Tự Làm Tóc Dreadlock Tại Nhà
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 19 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha19} alt="" height="297.312px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        30Shine Concept Mới - Đỉnh như Starbucks
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 20 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha20} alt="" height="314.205px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Kiểu Tóc Khiến LK Thoát Ly "Chiếc Mũ Huyền Thoại"
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 21 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha21} alt="" height="332.132px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Chán Side Part Cổ Điển Thì Phải Làm Gì?
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 22 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha22} alt="" height="315.1px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Mặt Tròn Có Để Được Kiểu Tóc Layer Không?
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 23 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha23} alt="" height="336.17px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Theo Chân Khách Ruột Của 30Shine Đi Cắt Kiểu Tóc Sport
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* col 4 */}
              <div className="discover__column">
                {/* col 1 item 24 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha24} alt="" height="331.138px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Sport - Kiểu Tóc Dành Cho Đàn Ông Chuẩn Men
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 25 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha25} alt="" height="229.729px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Thử Đổi Kiểu Tóc Cho Cậu Bạn Hot Boy Trường Y
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 26 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha26} alt="" height="332.132px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Side Part Violet Cho Dân Văn Phòng
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 27 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha27} alt="" height="333.133px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Lột Xác Giám Đốc Thiết Kế Của 30Shine
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 28 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha28} alt="" height="331.138px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Side Part - Kiểu tóc lịch lãm "cứ để là đẹp"
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 29 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha29} alt="" height="312.429px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Kiểu Tóc "Cộp Mác" Ca Sĩ Lê Bảo Bình
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 30 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha30} alt="" height="333.133px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Đồng Nghiệp Phải Trầm Trồ Trước Màu Tóc Mới Của Anh Bạn
                        Phó Giám Đốc
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* col 5 */}
              <div className="discover__column">
                {/* col 1 item 31 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha31} alt="" height="331.138px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Sport - Kiểu Tóc Dành Cho Đàn Ông Chuẩn Men
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 32 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha32} alt="" height="229.729px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Kiểu Tóc Đẹp Cho Gương Mặt Vuông
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 33 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha33} alt="" height="332.132px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Tóc Bò Liếm Vẫn Đẹp Trai Như Binz
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 34 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha34} alt="" height="333.133px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Sport Nhuộm Khói Xanh Như Sơn Tùng MTP
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 35 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha35} alt="" height="331.138px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Mặt Béo Và Tròn Để Tóc Gì Cho Đẹp?
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 36 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha36} alt="" height="312.429px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Top 4 Kiểu tóc cưng muốn xỉu cho các bé trai
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* item 37 */}
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha37} alt="" height="333.133px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Diễn viên Thanh Sơn Và Câu Chuyện Chinh Phục Vai Diễn
                        "Chẳng Ai Mong Muốn"
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="discover__content-item">
                  <a href="#">
                    <div className="discover__item-image">
                      <img src={khampha37} alt="" height="333.133px" />
                    </div>
                  </a>
                  <div className="tag__hair">
                    <a href="#">
                      <p className="tag__hair-text">
                        Diễn viên Thanh Sơn Và Câu Chuyện Chinh Phục Vai Diễn
                        "Chẳng Ai Mong Muốn"
                      </p>
                    </a>
                    <div className="tag__hair-icons">
                      <div className="tag__icon">
                        <img src={iconheart} alt="" />
                      </div>
                      <div className="tag__icon">
                        <a href="#">
                          <img src={iconshare} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KhamPhaKieuToc;
