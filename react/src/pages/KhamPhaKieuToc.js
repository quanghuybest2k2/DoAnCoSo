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
              C??NG 30SHINE KH??M PH?? <span>XU H?????NG T??C HOT NH???T</span>
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
                        Ph?? c??ch v???i ki???u t??c nam Side Part vu???t r??? v?? h???c c??ch
                        vu???t trong t??ch t???c
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
                        4 M???o Gi??? Form T??c Khi ?????i M?? B???o Hi???m
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
                        T??c Hai M??i H??n Qu???c H???p G????ng M???t N??o?
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
                        Bao L??u G???i ?????u M???t L???n ????? Gi??? Ki???u T??c ?????p?
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
                        M???o Vu???t T??c Mohican T???i Nh??
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
                        ????n ??ng Bao L??u N??n C???t T??c M???t L???n?
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
                        3 L?? Do Kh??ng Th??? B??? L??? T??c U???n Con S??u
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
                        Top M??u T??c ?????p Kh??ng C???n T???y Cho Nam
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
                        Top 3 M??u Nhu???m T??c L?? T?????ng Cho H???c Sinh
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
                        M???o ????? T??c H???t Ch???a V?? B???t D??nh
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
                        Nh???ng Ai N??n Tr??nh Xa Ki???u T??c Mohican???
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
                        Nhu???m T??c M??u Kh??i Ph???i T???y T??c M???y L???n?
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
                        Tuy???t Chi??u Du???i T??c Th???ng Kh??ng C???n D??ng Nhi???t
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
                        L?? Do Khi???n N??u Kh??i L?? M??u Nhu???m Hot Nh???t 2020
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
                        H??nh Tr??nh ??i T??m Trend T??c Cho Nam Gi???i Vi???t
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
                        Anh Ch??ng "Ch??a Nhu???m T??c Bao Gi???" L???t X??c V???i M??u Nhu???m
                        X??m Kh??i
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
                        Bi???n Ho?? ??a Phong C??ch V???i Ki???u T??c Middle Part
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
                        T??? L??m T??c Dreadlock T???i Nh??
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
                        30Shine Concept M???i - ?????nh nh?? Starbucks
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
                        Ki???u T??c Khi???n LK Tho??t Ly "Chi???c M?? Huy???n Tho???i"
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
                        Ch??n Side Part C??? ??i???n Th?? Ph???i L??m G???
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
                        M???t Tr??n C?? ????? ???????c Ki???u T??c Layer Kh??ng?
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
                        Theo Ch??n Kh??ch Ru???t C???a 30Shine ??i C???t Ki???u T??c Sport
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
                        Sport - Ki???u T??c D??nh Cho ????n ??ng Chu???n Men
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
                        Th??? ?????i Ki???u T??c Cho C???u B???n Hot Boy Tr?????ng Y
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
                        Side Part Violet Cho D??n V??n Ph??ng
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
                        L???t X??c Gi??m ?????c Thi???t K??? C???a 30Shine
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
                        Side Part - Ki???u t??c l???ch l??m "c??? ????? l?? ?????p"
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
                        Ki???u T??c "C???p M??c" Ca S?? L?? B???o B??nh
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
                        ?????ng Nghi???p Ph???i Tr???m Tr??? Tr?????c M??u T??c M???i C???a Anh B???n
                        Ph?? Gi??m ?????c
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
                        Sport - Ki???u T??c D??nh Cho ????n ??ng Chu???n Men
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
                        Ki???u T??c ?????p Cho G????ng M???t Vu??ng
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
                        T??c B?? Li???m V???n ?????p Trai Nh?? Binz
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
                        Sport Nhu???m Kh??i Xanh Nh?? S??n T??ng MTP
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
                        M???t B??o V?? Tr??n ????? T??c G?? Cho ?????p?
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
                        Top 4 Ki???u t??c c??ng mu???n x???u cho c??c b?? trai
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
                        Di???n vi??n Thanh S??n V?? C??u Chuy???n Chinh Ph???c Vai Di???n
                        "Ch???ng Ai Mong Mu???n"
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
