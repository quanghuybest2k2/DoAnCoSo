import React from "react";
import congthuongi from '../assets/img/footer/congthuongicon.png'
import dmca_protected from '../assets/img/footer/dmca_protected_26_120.png'
import mastercard from '../assets/img/footer/mastercard.7d32e23f.svg'
import visa from '../assets/img/footer/visa.689e1cc5.svg'
import phone2 from '../assets/img/footer/phone-2.aecf5e0a.svg'
import chplay from '../assets/img/footer/tải xuống.png'
import appstore from '../assets/img/footer/tải xuống (1).png'
import tiktok from '../assets/img/footer/tiktok.4b28e96d.svg'
import youtube from '../assets/img/footer/youtube-social.6d146642.svg'


const Footer = () => {
    return (
        // < !--footer layout-- >
        <section class="footer">
            <div class="footer__container">
                {/* <!-- footer top --> */}
                <div class="footer__top">
                    {/* <!-- column 1 --> */}
                    <div class="footer__top-col col-sm-4 ">
                        <ul class="footer__info-list">
                            <li class="footer__info-item">CÔNG TY CỔ PHẦN TMDV 30SHINE</li>
                        </ul>
                        <ul class="footer__info-list">
                            <li class="footer__info-item">82 Trần Đại Nghĩa, P.Đồng Tâm, Q. Hai Bà Trưng, HN</li>
                        </ul>
                        <ul class="footer__info-list">
                            <li class="footer__info-item">Số giấy chứng nhận kinh doanh: 010.7467.693</li>
                        </ul>
                        <ul class="footer__info-list">
                            <li class="footer__info-item">Ngày cấp: 08/06/2016</li>
                        </ul>
                        <ul class="footer__info-list">
                            <li class="footer__info-item">Nơi cấp: Sở kế hoạch đầu tư TP Hà Nội</li>
                        </ul>
                        <ul class="footer__info-list">
                            <li class="footer__info-item">
                                <a href="" class="footer__info-text">Chính sách bảo mật thông tin</a>
                            </li>
                        </ul>
                        <ul class="footer__info-list">
                            <li class="footer__info-item">
                                <a href="" class="footer__info-text">Liên hệ quảng cáo 30Shine</a>
                            </li>
                        </ul>
                        <div class="footer_ca">
                            <a href="">
                                <img class="moit-icon" src={congthuongi} alt="" />
                            </a>
                            <a href="">
                                <img class="dmca-icon" src={dmca_protected} alt="" />
                            </a>
                        </div>
                        <div class="footer_app-cash">
                            <span>Chấp nhận thanh toán</span>
                            <div class="footer__cash-list">
                                <div class="footer__app-item">
                                    <img src={mastercard} alt="" />
                                </div>
                                <div class="footer__app-item">
                                    <img src={visa} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- column 2 --> */}
                    <div class="footer__top-col col-sm-4 ">
                        <div class="footer__service-time">
                            <span class="footer__service-lable">Giờ phục vụ</span>
                            <span class="footer__service-detail">
                                Thứ 2 đến thứ 6: 8h00 - 21h00
                                <br />
                                Thứ 7, chủ nhật: 7h30 - 21h00
                            </span>
                        </div>
                        <div class="footer__hotline">
                            <a href="" class="footer__btn-hotline">
                                <img src={phone2} alt="" />
                                <span>HOTLINE: 1800.28.28.30 (Miễn phí)</span>
                            </a>
                        </div>
                    </div>
                    {/* <!-- column 3 --> */}
                    <div class="footer__top-col col-sm-4 ">
                        <div class="footer__app-info">
                            <span class="footer__service-lable">TẢI ỨNG DỤNG CỦA 30SHINE</span>
                            <span class="footer__service-detail">Trải nghiệm đặt lịch nhanh chóng và nhiều tiện ích khác với ứng
                                dụng 30Shine.</span>
                        </div>
                        <div class="footer__app-badge">
                            <a href=""><img src={chplay} width="120px" alt="" /></a>
                            <a href=""><img src={appstore} width="120px" alt="" /></a>
                        </div>
                        <div class="footer__socsial-info">
                            <div class="footer__app-info">
                                <span class="app-info__label">THAM GIA CỘNG ĐỒNG</span>
                                <span class="app-info__detail">Cùng 2.5tr thành viên 30Shine</span>
                            </div>
                            <div class="footer__app-badge">
                                <a href=""><img src={tiktok} alt="" /></a>
                                <a href=""><img src={youtube} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- footer bottom --> */}
                <div class="footer__bottom">
                    <span class="copyright">Copyright 2022 30Shine, Inc. All Rights Reserved</span>
                    <ul class="footer__nav">
                        <li class="footer-nav__item">
                            <a href="/">Về 30Shine</a>
                        </li>
                        <li class="footer-nav__item">
                            <a href="/">Tuyển dụng</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Footer;
