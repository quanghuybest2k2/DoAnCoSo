import React from "react";
import "../styles/trainghiemdichvu.css";

import shine10buoc from "../assets/img/PageTraiNghiemDichVu/20220104-30shine-banner-shine-combo.jpg";
import dichvu1 from "../assets/img/PageTraiNghiemDichVu/mat-na-sui-bot-tay-da-chet-3.jpg";
import dichvu2 from "../assets/img/PageTraiNghiemDichVu/20220105-massage-co-vai-gay.jpg";
import dichvu3 from "../assets/img/PageTraiNghiemDichVu/30shine-lot-mun-cam-3.jpg";
import dichvu4 from "../assets/img/PageTraiNghiemDichVu/30shine-detox-3.jpg";
import vipcombo from "../assets/img/PageTraiNghiemDichVu/combo-cat-goi-s-vip-5.jpg";
import uon from "../assets/img/PageTraiNghiemDichVu/20220104-banner-uon-1.jpg";
// dịch vụ nhuộm
import dichvunhuom1 from "../assets/img/PageTraiNghiemDichVu/20211217-nhuom-den-phu-bac-pc-2.jpg";
import dichvunhuom2 from "../assets/img/PageTraiNghiemDichVu/20211217-nhuom-thoi-trang-milano-pc-2.jpg";
import dichvunhuom3 from "../assets/img/PageTraiNghiemDichVu/20211217-nhuom-tay-toc-pc-2.jpg";
// dưỡng phục hồi
import duongphuchoi1 from "../assets/img/PageTraiNghiemDichVu/20211217-phuc-hoi.jpg";
import duongphuchoi2 from "../assets/img/PageTraiNghiemDichVu/20211217-hap-duong-oliu-2.jpg";
// dịch vụ khác
import dichvukhac1 from "../assets/img/PageTraiNghiemDichVu/20220105-30shine-cat-xa-tao-kieu.jpg";
import dichvukhac2 from "../assets/img/PageTraiNghiemDichVu/30shine-kid-combo-cho-be-2.jpg";
import dichvukhac3 from "../assets/img/PageTraiNghiemDichVu/20220104-dich-vu-lay-ray-tai.jpg";
import dichvukhac4 from "../assets/img/PageTraiNghiemDichVu/30shine-goi-masage-duong-sinh-2.jpg";

// image responsive
import trainghiemdichvu2 from "../assets/img/PageTraiNghiemDichVu/combo-cat-goi-s-vip-6.jpg";
import banneruon2 from "../assets/img/PageTraiNghiemDichVu/20220104-banner-uon-2.jpg";
import phuchoi from "../assets/img/PageTraiNghiemDichVu/30shine-phuc-hoi-amino-matrix-6-buoc-2.jpg";

const TraiNghiemDichVu = () => {
  return (
    <>
      <div className="service">
        <div className="container containercolor">
          {/* shine commbo cắt gội 10 bước */}
          <div className="service__block">
            <div className="service__tile">Shine Combo cắt gội 10 bước</div>
            <div className="service__list">
              <div className="service-row service-row__margin">
                <a href="">
                  <div className="service_img col-xl-12">
                    <img src={shine10buoc} width="100%" alt="" />
                  </div>
                </a>
              </div>
              <div className="service__text">
                Dịch vụ chăm sóc tóc đặc biệt dùng kèm <span>Shine Combo</span>
              </div>
              <div className="service-row">
                <div className="service_image col-xl-3 col-6">
                  <a href="">
                    <div>
                      <img src={dichvu1} alt="" />
                    </div>
                  </a>
                </div>
                <div className="service_image col-xl-3 col-6">
                  <a href="">
                    <div>
                      <img src={dichvu2} alt="" />
                    </div>
                  </a>
                </div>
                <div className="service_image col-xl-3 col-6">
                  <a href="">
                    <div>
                      <img src={dichvu3} alt="" />
                    </div>
                  </a>
                </div>
                <div className="service_image col-xl-3 col-6">
                  <a href="">
                    <div>
                      <img src={dichvu4} alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* vipcombo */}
          <div className="service__block">
            <div className="service__tile">Vip Combo</div>
            <div className="responsive-pc">
              <div className="service__list">
                <div className="service-row service-row__margin">
                  <a href="">
                    <div className="service_img col-xl-12">
                      <img src={vipcombo} width="100%" alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="responsive-mobile">
              <div className="service__list">
                <div className="service-row service-row__margin">
                  <a href="">
                    <div className="service_img col-xl-12">
                      <img src={trainghiemdichvu2} width="100%" alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Uon */}
          <div className="service__block">
            <div className="service__tile">Uốn</div>
            <div className="responsive-pc">
              <div className="service__list">
                <div className="service-row service-row__margin">
                  <a href="">
                    <div className="service_img col-xl-12">
                      <img src={uon} width="100%" alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="responsive-mobile">
              <div className="service__list">
                <div className="service-row service-row__margin">
                  <a href="">
                    <div className="service_img col-xl-12">
                      <img src={banneruon2} width="100%" alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* dịch vụ nhuộm */}
          <div className="service__block">
            <div className="service__tile">Dịch vụ nhuộm</div>
            <div className="service__list">
              <div className="service-row">
                <div className="service_image col-xl-4 col-6">
                  <a href="">
                    <div>
                      <img src={dichvunhuom1} alt="" />
                    </div>
                  </a>
                </div>
                <div className="service_image col-xl-4 col-6">
                  <a href="">
                    <div>
                      <img src={dichvunhuom2} alt="" />
                    </div>
                  </a>
                </div>
                <div className="service_image col-xl-4 col-6">
                  <a href="">
                    <div>
                      <img src={dichvunhuom3} alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* dưỡng phục hồi */}
          <div className="service__block">
            <div className="service__tile">Dưỡng - Phục hồi</div>
            <div className="service__list">
              <div className="service-row">
                <div className="responsive-pc ">
                  <div className="service_image col-xl-9">
                    <a href="">
                      <div>
                        <img src={duongphuchoi1} alt="" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="responsive-mobile">
                  <div className="service_image col-xl-12 service_image-phuchoi">
                    <a href="">
                      <div>
                        <img src={phuchoi} alt="" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="service_image col-xl-3 col-6">
                  <a href="">
                    <div>
                      <img src={duongphuchoi2} alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* dịch vụ khác */}
          <div className="service__block">
            <div className="service__tile">Dịch vụ khác</div>
            <div className="service__list">
              <div className="service-row">
                <div className="service_image col-xl-3 col-6">
                  <a href="">
                    <div>
                      <img src={dichvukhac1} alt="" />
                    </div>
                  </a>
                </div>
                <div className="service_image col-xl-3 col-6">
                  <a href="">
                    <div>
                      <img src={dichvukhac2} alt="" />
                    </div>
                  </a>
                </div>
                <div className="service_image col-xl-3 col-6">
                  <a href="">
                    <div>
                      <img src={dichvukhac3} alt="" />
                    </div>
                  </a>
                </div>
                <div className="service_image col-xl-3 col-6">
                  <a href="">
                    <div>
                      <img src={dichvukhac4} alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end container service */}
      </div>
    </>
  );
};

export default TraiNghiemDichVu;
