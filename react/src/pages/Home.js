// import img
import Mocaw1 from '../assets/img/20220210_Banner_30Shine_Moca_w1.jpg'
import BannerSC100w2 from '../assets/img/20220119_BannerSC100_w2.jpg'
import Mocaw3 from '../assets/img/20220210_Banner_30Shine_Moca_w3.jpg'
import vqmmw4 from '../assets/img/20220316_banner_vqmm_w4.jpg'
import ToaSangw5 from '../assets/img/210814_Banner_toa_sang_w5.jpg'
import Antoanw6 from '../assets/img/210814_Banner_an_toan_w6.jpg'
import chevronRight from '../assets/img/chevronRight.0f447c60.svg'
import bannercombo1 from '../assets/img/20220104-30shine-banner-shine-combo-1.jpg'
import CatGoi2 from '../assets/img/30shine-cat-goi-massage-2.jpg'
import uon2 from '../assets/img/30shine-uon-2.jpg'
import nhuon2 from '../assets/img/30shine-nhuom-2.jpg'
import dichvukhac2 from '../assets/img/30shine-dich-vu-khac-2.jpg'
import khoiuonpc from '../assets/img/30shine-banner-khoi-uon-pc.jpg'
import uon1 from '../assets/img/30shine-uon-1.jpg'
import uon3 from '../assets/img/30shine-uon-3.jpg'
import uon4 from '../assets/img/30shine-uon-4.jpg'
import tantam1 from '../assets/img/lang-nghe-tan-tam-1.jpg'
import tantam2 from '../assets/img/lang-nghe-tan-tam-2.jpg'
import tantam3 from '../assets/img/lang-nghe-tan-tam-3.jpg'




import React from "react";

const Home = () => {
    return (
        // <!-- home start -->
        <div className="home">
            {/* <!-- slider auto scroll --> */}
            <div className="home-swiper">
                {/* <!-- Additional required wrapper --> */}
                <div className="swiper-wrapper">
                    {/* <!-- Slides --> */}
                    <div className="swiper-slide">
                        <a href="">
                            <img src={Mocaw1} alt="" />
                        </a>
                    </div>
                    <div className="swiper-slide">
                        <a href="">
                            <img src={BannerSC100w2} alt="" />
                        </a>
                    </div>
                    <div className="swiper-slide">
                        <a href="">
                            <img src={Mocaw3} alt="" />
                        </a>
                    </div>
                    <div className="swiper-slide">
                        <a href="">
                            <img src={vqmmw4} alt="" />
                        </a>
                    </div>
                    <div className="swiper-slide">
                        <a href="">
                            <img src={ToaSangw5} alt="" />
                        </a>
                    </div>
                    <div className="swiper-slide">
                        <a href="">
                            <img src={Antoanw6} alt="" />
                        </a>
                    </div>
                </div>
                {/* <!-- If we need pagination --> */}
                <div className="swiper-pagination"></div>
                {/* <!-- If we need navigation buttons --> */}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
            {/* <!-- service trải nghiệm dịch vụ --> */}
            <div className="layout layout__service">
                <div className="container">
                    <a href="">
                        <div className="layout__head">
                            <div>
                                <div className="head__title">Trải nghiệm dịch vụ</div>
                                <div className="head__title head__sub-title">Thư giãn 30 phút và bạn sẽ tỏa sáng</div>
                            </div>
                            <div className="layout__head-view-all">
                                <span>Xem tất cả</span>
                                <img src={chevronRight} alt="" />
                            </div>
                        </div>
                    </a>
                    <div className="layout__banner">
                        <a href="">
                            <div className="layout__banner-media">
                                <img src={bannercombo1} alt="" />
                            </div>
                        </a>
                    </div>
                    <div className="layout__list ">
                        <div className="layout__list-wraper row">
                            <div className="col-xl-3">
                                <a href="">
                                    <div className="layout__list-item">
                                        <div className="layout__item-img">
                                            <img src={CatGoi2} alt="" />
                                        </div>
                                        <div className="item__content">
                                            <div className="item__title">Cắt gội masage</div>
                                            <div className="item__subTitle">Bảng giá 2022 (hấp dẫn)</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3">
                                <a href="">
                                    <div className="layout__list-item">
                                        <div className="layout__item-img">
                                            <img src={uon2} alt="" />
                                        </div>
                                        <div className="item__content">
                                            <div className="item__title">Uốn nhập khẩu Hàn</div>
                                            <div className="item__subTitle">Chỉ từ 287k</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3">
                                <a href="">
                                    <div className="layout__list-item">
                                        <div className="layout__item-img">
                                            <img src={nhuon2} alt="" />
                                        </div>
                                        <div className="item__content">
                                            <div className="item__title">Nhuộm nhập khẩu ý</div>
                                            <div className="item__subTitle">Chỉ từ 206k</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3">
                                <a href="">
                                    <div className="layout__list-item">
                                        <div className="layout__item-img">
                                            <img src={dichvukhac2} alt="" />
                                        </div>
                                        <div className="item__content">
                                            <div className="item__title">Dịch vụ khác</div>
                                            <div className="item__subTitle">4 dịch vụ</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- layout list menu--> */}
            </div>
            {/* <!-- service top 1 dịch được yêu thích nhất --> */}
            <div className="layout layout__service">
                <div className="container">
                    <a href="">
                        <div className="layout__head">
                            <div>
                                <div className="head__title">Top 1 dịch vụ được yêu thích nhất</div>
                                <div className="head__title head__sub-title">30Shine - Tự hào lan tỏa phong cách uốn tóc Hàn Quốc tới
                                    nam giới Việt</div>
                            </div>
                        </div>
                    </a>
                    <div className="layout__banner">
                        <a href="">
                            <div className="layout__banner-media">
                                <img src={khoiuonpc} alt="" />
                            </div>
                        </a>
                    </div>
                    {/* <!-- layout list menu--> */}
                    <div className="layout__list ">
                        <div className="layout__list-wraper row">
                            <div className="col-xl-3">
                                <a href="">
                                    <div className="layout__list-item">
                                        <div className="layout__item-img">
                                            <img src={uon1} alt="" />
                                        </div>
                                        <div className="item__content">
                                            <div className="item__title">Thuốc uốn cao cấp nhất</div>
                                            <div className="item__subTitle">Được sao Hàn tin dùng</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3">
                                <a href="">
                                    <div className="layout__list-item">
                                        <div className="layout__item-img">
                                            <img src={uon2} alt="" />
                                        </div>
                                        <div className="item__content">
                                            <div className="item__title">Stylist tay nghề cao</div>
                                            <div className="item__subTitle">100% áp dụng công nghệ chuyển giao từ chuyên gia Hàn</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3">
                                <a href="">
                                    <div className="layout__list-item">
                                        <div className="layout__item-img">
                                            <img src={uon3} alt="" />
                                        </div>
                                        <div className="item__content">
                                            <div className="item__title">Đa dạng phong cách</div>
                                            <div className="item__subTitle">Bao đẹp trai với mọi khuôn mặt</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3">
                                <a href="">
                                    <div className="layout__list-item">
                                        <div className="layout__item-img">
                                            <img src={uon4} alt="" />
                                        </div>
                                        <div className="item__content">
                                            <div className="item__title">Công nghệ hiện đại</div>
                                            <div className="item__subTitle">Kết hợp nhiều thành phẩm dưỡng tóc</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- blog lắng nghe và tận tâm --> */}
            <div className="layout layout__blog">
                <div className="container">
                    <div className="layout__head">
                        <div>
                            <div className="head__title">Lắng nghe & tận tâm</div>
                            <div className="head__title head__sub-title">Thấu hiểu nhua cầu, hỗ trợ nhiệt tình</div>
                        </div>
                    </div>
                    <div className="layout__blog">
                        <div className="swiper__container">
                            {/* <!--slide2: nếu nhiều hình ảnh sử dụng class này slide2 sau class swiper__wrapper--> */}
                            <div className="swiper__wrapper ">
                                <div className="swiper__slide" style="width: 312.857px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src={tantam1} alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">Nói gì với stylist để anh có kiểu tóc ưng ý</div>
                                    </a>
                                </div>
                                <div className="swiper__slide" style="width: 312.857px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src={tantam2} alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">Supporter thân thiện - Đón tiếp, lắng nghe và hỗ trợ bạn mọi lúc</div>
                                    </a>
                                </div>
                                <div className="swiper__slide" style="width: 312.857px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src={tantam3} alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">Những câu hỏi thường gặp</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <!-- layout blog hành trình tỏa sáng --> */}
            <div className="layout layout__blog">
                <div className="container">
                    <a href="">
                        <div className="layout__head">
                            <div>
                                <div className="head__title">Hành trình tỏa sáng</div>
                                <div className="head__title head__sub-title">Câu chuyện chân thực từ hàng chục ngàn khách hàng</div>
                            </div>
                            <div className="layout__head-view-all">
                                <span>Xem tất cả</span>
                                <img src="./assets/img/chevronRight.0f447c60.svg" alt="" />
                            </div>
                        </div>
                    </a>
                    <div className="layout__blog">
                        <div className="swiper__container">
                            <div className="swiper__wrapper slider">
                                {/* <!-- 1 --> */}
                                <div className="swiper__slide" style="width: 570px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/30shine-thay-doi-ngoai-hinh.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">
                                            Thay đổi ngoại hình, chàng trai lạnh lùng, ít nói khiến cô hoa khôi rung động
                                        </div>
                                    </a>
                                </div>
                                {/* <!-- 2 --> */}
                                <div className="swiper__slide" style="width: 570px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/30shine-toc-mullet.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">
                                            Phúc lột xác mái tóc để suốt bao năm giúp ngoại hình mới cực cuốn hút
                                        </div>
                                    </a>
                                </div>
                                {/* <!-- 3 --> */}
                                <div className="swiper__slide" style="width: 570px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/30shine-lot-xac-thanh-hot-boy.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">
                                            Bạn sinh viên IT lột xác thành hot boy vạn người mê
                                        </div>
                                    </a>
                                </div>
                                {/* <!-- 4 --> */}
                                <div className="swiper__slide" style="width: 570px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/30shine-nam-sinh-kien-truc-lot-xac.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">
                                            Can đảm thay đổi mái tóc 7 năm, nam sinh Kiến Trúc lột xác kiểu tóc mới cực đẹp
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- gril beautyfull  --> */}
            <div className="layout layout__blog">
                <div className="container">
                    <div className="layout__head">
                        <div>
                            <div className="head__title">30 Shine's Angels</div>
                            <div className="head__title head__sub-title">Những thiên thần xinh đẹp hết lòng vì khách hàng</div>
                        </div>
                    </div>
                    <div className="layout__blog">
                        <div className="swiper__container">
                            <div className="swiper__wrapper slide2">
                                {/* <!-- 1 --> */}
                                <div className="swiper__slide" style="width: 312.857px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/9773.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">Tú Anh - 255 Nguyễn An Ninh, Bình Dương</div>
                                        <div className="item__subTitle">Vui vẻ, Thân thiện, Sẵn sàng</div>
                                    </a>
                                </div>
                                {/* <!-- 2 --> */}
                                <div className="swiper__slide" style="width: 312.857px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/7423.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">Trà My (Mina) - 152 Thống Nhất, Nha Trang</div>
                                        <div className="item__subTitle">Vui vẻ, Nhiệt Tình, Cẩn Thận</div>
                                    </a>
                                </div>
                                {/* <!-- 3 --> */}
                                <div className="swiper__slide" style="width: 312.857px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/5950.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">Khánh Hằng - 152 Thống Nhất, Nha Trang</div>
                                        <div className="item__subTitle">Vui vẻ</div>
                                    </a>
                                </div>
                                {/* <!-- 4 --> */}
                                <div className="swiper__slide" style="width: 312.857px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/9298.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">Ái Hiền - 113 Trần Hưng Đạo, An Giang</div>
                                        <div className="item__subTitle">Vui vẻ, hòa nhã, tư vấn khéo</div>
                                    </a>
                                </div>
                                {/* <!-- 5 --> */}
                                <div className="swiper__slide" style="width: 312.857px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/1949.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">Thanh Hồng - 12 Lạc Trung, Hà Nội</div>
                                        <div className="item__subTitle">Xinh xắn, tư vấn khéo, tận tâm</div>
                                    </a>
                                </div>
                                {/* <!-- 6 --> */}
                                <div className="swiper__slide" style="width: 312.857px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/4801.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">Thu Trang - 36 Phan Huy Ích, TP.HCM</div>
                                        <div className="item__subTitle">Hòa đồng, dể thương, vui vẻ</div>
                                    </a>
                                </div>
                                {/* <!-- 7 --> */}
                                <div className="swiper__slide" style="width: 312.857px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/9984.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">Như Ý - 168 Đặng Văn Bi, TP.HCM</div>
                                        <div className="item__subTitle">Vui vẻ, hoà đồng, hoạt bát</div>
                                    </a>
                                </div>
                                {/* <!-- 8 --> */}
                                <div className="swiper__slide" style="width: 312.857px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/8076.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">Ngọc Liên - 1361 Phạm Văn Thuận, Biên Hòa</div>
                                        <div className="item__subTitle">Vui vẻ, khéo léo, tự tin</div>
                                    </a>
                                </div>
                                {/* <!-- 9 --> */}
                                <div className="swiper__slide" style="width: 312.857px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/9687.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">Quỳnh Nhi - 194 Lê Văn Việt, TP.HCM</div>
                                        <div className="item__subTitle">Vui vẻ, chăm sóc khách, luôn hỏi ý khách</div>
                                    </a>
                                </div>
                                {/* <!-- 10 --> */}
                                <div className="swiper__slide" style="width: 312.857px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/10089.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">Hương Giang - 702 Đường Láng, Hà Nội</div>
                                        <div className="item__subTitle">Vui vẻ, hòa đồng, nhẹ nhàng</div>
                                    </a>
                                </div>
                                {/* <!-- 11 --> */}
                                <div className="swiper__slide" style="width: 312.857px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/6943.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">Thu Huyền - 175 Phùng Hưng, Hà Nội</div>
                                        <div className="item__subTitle">Vui vẻ, nhiệt tình, xinh gái</div>
                                    </a>
                                </div>
                                {/* <!-- 12 --> */}
                                <div className="swiper__slide" style="width: 312.857px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/5760.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">Huế (Mít) - 407 Trường Chinh, Hà Nội</div>
                                        <div className="item__subTitle">Vui vẻ, biết quan tâm, thân thiện</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ko gian và thiết bị --> */}
            <div className="layout layout__service">
                <div className="container">
                    <div className="layout__head">
                        <div>
                            <div className="head__title">30 Shine's Angels</div>
                            <div className="head__title head__sub-title">Những thiên thần xinh đẹp hết lòng vì khách hàng</div>
                        </div>
                    </div>
                    <div className="layout__banner2">
                        <div>
                            <div className="layout__banner2-media">
                                <img src="./assets/img/30shine-banner-khong-gian-salon.jpg" alt="" />
                            </div>
                        </div>
                        <div className="banner__wrapper">
                            <div className="banner__text">
                                Phá vỡ giới hạn của một tiệm tóc truyền thống, 30Shine mang đến không gian trải nghiệm hoàn toàn mới
                                với diện tích lớn trên 200m2/ 16 ghế cắt. Tất cả đều được đặt tại vị trí dễ tìm trên những con phố
                                lớn, hòa vào cuộc sống sôi động của người đàn ông hiện đại.
                            </div>
                        </div>
                    </div>
                    <div className="layout__list ">
                        <div className="layout__list-wraper row">
                            <div className="col-xl-3">
                                <a href="">
                                    <div className="layout__list-item">
                                        <div className="layout__item-img">
                                            <img src="./assets/img/30shinecon-cept-khong-gian-rong-lon-1.jpg" alt="" />
                                        </div>
                                        <div className="item__content">
                                            <div className="item__title">Salon rộng lớn dễ tìm</div>
                                            <div className="item__subTitle">Không gian mở & kết nối</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3">
                                <a href="">
                                    <div className="layout__list-item">
                                        <div className="layout__item-img">
                                            <img src="./assets/img/30shinecon-cept-khong-gian-rong-lon-2.jpg" alt="" />
                                        </div>
                                        <div className="item__content">
                                            <div className="item__title">Trang thiết bị 30Shine SET™</div>
                                            <div className="item__subTitle">Nâng cấp trải nghiệm làm đẹp</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3">
                                <a href="">
                                    <div className="layout__list-item">
                                        <div className="layout__item-img">
                                            <img src="./assets/img/30shinecon-cept-khong-gian-rong-lon-3.jpg" alt="" />
                                        </div>
                                        <div className="item__content">
                                            <div className="item__title">Làm chủ thời gian</div>
                                            <div className="item__subTitle">Đặt lịch & các tiện ích 30Shine App</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3">
                                <a href="">
                                    <div className="layout__list-item">
                                        <div className="layout__item-img">
                                            <img src="./assets/img/30shine-concept-khong-gian-rong-lon-6.jpg" alt="" />
                                        </div>
                                        <div className="item__content">
                                            <div className="item__title">Trải nghiệm âm nhạc</div>
                                            <div className="item__subTitle">Năng lượng và cảm xúc</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Người truyền cảm hứng --> */}
            <div className="layout layout__blog">
                <div className="container">
                    <a href="">
                        <div className="layout__head">
                            <div>
                                <div className="head__title">Người truyền cảm hứng và 30Shine</div>
                                <div className="head__title head__sub-title">Cùng lan tỏa thông điệp thay đổi để tỏa sáng</div>
                            </div>
                            <div className="layout__head-view-all">
                                <span>Xem tất cả</span>
                                <img src="./assets/img/chevronRight.0f447c60.svg" alt="" />
                            </div>
                        </div>
                    </a>
                    <div className="layout__blog">
                        <div className="swiper__container">
                            <div className="swiper__wrapper slider">
                                {/* <!-- 1 --> */}
                                <div className="swiper__slide" style="width: 570px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/30shine-ca-si-le-bao-binh.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">
                                            Ca sĩ Lê Bảo Bình: Thay đổi để không phải "Bỏ lỡ một người"
                                        </div>
                                    </a>
                                </div>
                                {/* <!-- 2 --> */}
                                <div className="swiper__slide" style="width: 570px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/30shine-ca-si-lk.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">
                                            Kiểu tóc khiến LK Thoát ly chiếc mũ huyền thoại
                                        </div>
                                    </a>
                                </div>
                                {/* <!-- 3 --> */}
                                <div className="swiper__slide" style="width: 570px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/30shine-ca-si-hoang-dung.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">
                                            Hoàng Dũng: "Ngoại hình hết sức quan trọng, chỉ sau tài năng"
                                        </div>
                                    </a>
                                </div>
                                {/* <!-- 4 --> */}
                                <div className="swiper__slide" style="width: 570px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/30shine-dien-vien-thanh-son.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">
                                            Diễn viên Thanh Sơn "Cả Một Đời Ân Oán" tìm lại phong cách trẻ trung đúng tuổi thật
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Khám phá kiểu tóc --> */}
            <div className="layout layout__blog">
                <div className="container">
                    <a href="">
                        <div className="layout__head">
                            <div>
                                <div className="head__title">Khám phá kiểu tóc</div>
                                <div className="head__title head__sub-title">Nguồn cảm hứng cho kiểu tóc mới của bạn</div>
                            </div>
                            <div className="layout__head-view-all">
                                <span>Xem tất cả</span>
                                <img src="./assets/img/chevronRight.0f447c60.svg" alt="" />
                            </div>
                        </div>
                    </a>
                    <div className="layout__banner2">
                        <div>
                            <a href="">
                                <div className="layout__banner2-media">
                                    <img src="./assets/img/30shine-banner-kham-pha-kieu-to.jpg" alt="" />
                                </div>
                            </a>
                        </div>
                        <div className="banner__wrapper">
                            <div className="banner__title">KHÁM PHÁ KIỂU TÓC</div>
                            <div className="banner__text">
                                Nguồn cảm hứng cho kiểu tóc mới của bạn từ hàng ngàn mẫu tóc hot trend do 30Shine thiết kế
                            </div>
                        </div>
                    </div>

                    <div className="layout__list ">
                        <div className="layout__list-wraper row">
                            <div className="col-xl-6">
                                <a href="">
                                    <div className="layout__list-item">
                                        <div className="layout__item-img">
                                            <img src="./assets/img/30shine-kham-pha-kieu-toc-style-mater.png" alt="" />
                                        </div>
                                        <div className="item__content">
                                            <div className="item__title">Khám phá kiểu tóc</div>
                                            <div className="item__subTitle">Tìm cảm hứng đổi mới cho mái tóc</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-6">
                                <a href="">
                                    <div className="layout__list-item">
                                        <div className="layout__item-img">
                                            <img src="./assets/img/30shine-kham-pha-kieu-toc.png" alt="" />
                                        </div>
                                        <div className="item__content">
                                            <div className="item__title">Style Master</div>
                                            <div className="item__subTitle">BXH các kiểu tóc hot trong tháng</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- An tâm và tin tưởng --> */}
            <div className="layout layout__blog">
                <div className="container">
                    <div className="layout__head">
                        <div>
                            <div className="head__title">An tâm & tin tưởng</div>
                            <div className="head__title head__sub-title">Cam kết phòng dịch tối đa & mỹ phẩm chính hãng</div>
                        </div>
                    </div>
                    <div className="layout__blog">
                        <div className="swiper__container">
                            {/* <!--slide2: nếu nhiều hình ảnh sử dụng class này slide2 sau class swiper__wrapper--> */}
                            <div className="swiper__wrapper ">
                                {/* <!-- 1 --> */}
                                <div className="swiper__slide" style="width: 312.857px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/30shine-so-1-ve-an-toan-3.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">Phòng chống Covid-19 - Vì sức khoẻ khách hàng, nhân viên và cộng đồng
                                        </div>
                                    </a>
                                </div>
                                {/* <!-- 2 --> */}
                                <div className="swiper__slide" style="width: 312.857px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/30shine-so-1-ve-an-toan-4.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">Mỹ phẩm & sản phẩm - Cam kết chất lượng - Đảm bảo xuất xứ</div>
                                    </a>
                                </div>
                                {/* <!-- 3 --> */}
                                <div className="swiper__slide" style="width: 312.857px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/30shine-so-1-ve-an-toan-5.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">Bảo quản xe cộ, đồ đạc</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <!-- ưu đãi --> */}
            <div className="layout layout__blog">
                <div className="container">
                    <a href="">
                        <div className="layout__head">
                            <div>
                                <div className="head__title">Ưu đãi</div>
                                <div className="head__title head__sub-title">Quà tặng, chiết khấu đặc biệt cập nhật liên tục</div>
                            </div>
                            <div className="layout__head-view-all">
                                <span>Xem tất cả</span>
                                <img src="./assets/img/chevronRight.0f447c60.svg" alt="" />
                            </div>
                        </div>
                    </a>
                    <div className="layout__blog">
                        <div className="swiper__container">
                            <div className="swiper__wrapper slide2">
                                {/* <!-- 1 --> */}
                                <div className="swiper__slide" style="width: 312.857px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/small_Renewal_Shine_Box_52e0afdf59.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">Renewal Shine Box</div>
                                    </a>
                                </div>
                                {/* <!-- 2 --> */}
                                <div className="swiper__slide" style="width: 312.857px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/small_Balance_Skin_Shine_Box_663898d441.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">Balance Skin Shine Box</div>
                                    </a>
                                </div>
                                {/* <!-- 3 --> */}
                                <div className="swiper__slide" style="width: 312.857px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/small_Firming_Shine_Box_697f959a69.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">Firming Shine Box </div>
                                    </a>
                                </div>
                                {/* <!-- 4 --> */}
                                <div className="swiper__slide" style="width: 312.857px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/small_Brightening_Shine_Box_c57e154415.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">Brightening Shine Box</div>
                                    </a>
                                </div>
                                <div className="swiper__slide" style="width: 312.857px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/small_Smoothing_Shine_Box_148913eb8e.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">Smoothing Shine Box </div>
                                    </a>
                                </div>
                                <div className="swiper__slide" style="width: 312.857px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/small_Shimmering_Shine_Box_efc516076e.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">Shimmering Shine Box </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- 30 shine shop  --> */}
            <div className="layout layout__service">
                <div className="container">
                    <a href="">
                        <div className="layout__head">
                            <div>
                                <div className="head__title">30Shine Shop</div>
                                <div className="head__title head__sub-title">Mỹ phẩm nam cao cấp chính hãng</div>
                            </div>
                            <div className="layout__head-view-all">
                                <span>Xem tất cả</span>
                                <img src="./assets/img/chevronRight.0f447c60.svg" alt="" />
                            </div>
                        </div>
                    </a>
                    <div className="layout__banner">
                        <a href="">
                            <div className="layout__banner-media">
                                <img src="./assets/img/banner-shop.jpg" alt="" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            {/* <!-- shine member --> */}
            <div className="layout layout__blog">
                <div className="container">
                    <div className="layout__head">
                        <div>
                            <div className="head__title">Shine Member</div>
                            <div className="head__title head__sub-title">Tham gia ngay cùng 700.000 hội viên với quyền lợi đặc biệt
                            </div>
                        </div>
                    </div>
                    <div className="layout__blog">
                        <div className="swiper__container">
                            {/* <!--slide2: nếu nhiều hình ảnh sử dụng class này slide2 sau class swiper__wrapper--> */}
                            <div className="swiper__wrapper ">
                                {/* <!-- 1 --> */}
                                <div className="swiper__slide" style="width: 312.857px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/20220103-ShineMember2022-v2.jpg" alt="" />
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="blog__title">Silver/Gold Member và hàng ngàn quyền lợi</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <!-- shine moment --> */}
            <div className="layout layout__media">
                <div className="container">
                    <div className="layout__head">
                        <div>
                            <div className="head__title">Shine Moment</div>
                            <div className="head__title head__sub-title">Cùng lan tỏa những phút giây tỏa sáng tại 30Shine
                            </div>
                        </div>
                    </div>
                    <div className="layout__blog">
                        <div className="swiper__container">
                            <div className="swiper__wrapper slide3">
                                {/* <!-- 1 --> */}
                                <div className="swiper__slide" style="width: 270px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/A1.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>
                                {/* <!-- 2 --> */}
                                <div className="swiper__slide" style="width: 270px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/A2.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>
                                {/* <!-- 3 --> */}
                                <div className="swiper__slide" style="width: 270px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/A3.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>
                                {/* <!-- 4 --> */}
                                <div className="swiper__slide" style="width: 270px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/A4.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>
                                {/* <!-- 5 --> */}
                                <div className="swiper__slide" style="width: 270px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/A5.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>
                                {/* <!-- 6 --> */}
                                <div className="swiper__slide" style="width: 270px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/A6.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>
                                {/* <!-- 7 --> */}
                                <div className="swiper__slide" style="width: 270px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/A7.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>
                                {/* <!-- 8 --> */}
                                <div className="swiper__slide" style="width: 270px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/A8.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>
                                {/* <!-- 9 --> */}
                                <div className="swiper__slide" style="width: 270px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/A9.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>
                                {/* <!-- 10 --> */}
                                <div className="swiper__slide" style="width: 270px; margin-right: 30px;">
                                    <a href="">
                                        <div className="blog__media">
                                            <img src="./assets/img/A10.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- cam kết 30shine care --> */}
            <div className="layout layout__blog">
                <div className="container">
                    <a href="">
                        <div className="layout__head">
                            <div>
                                <div className="head__title">Cam kết 30Shine Care</div>
                                <div className="head__title head__sub-title">Sự hài lòng của bạn là ưu tiên hàng đầu của 30Shine</div>
                            </div>
                            <div className="layout__head-view-all">
                                <span>Xem tất cả</span>
                                <img src="./assets/img/chevronRight.0f447c60.svg" alt="" />
                            </div>
                        </div>
                    </a>
                    <div className="layout__banner2">
                        <div>
                            <a href="">
                                <div className="layout__banner2-media">
                                    <img src="./assets/img/banner-30shine-care-5.jpg" alt="" />
                                </div>
                            </a>
                        </div>
                        <div className="banner__wrapper">
                            <div className="banner__title">VÌ CHẤT LƯỢNG PHỤC VỤ LÀ HÀNG ĐẦU</div>
                            <div className="banner__text">Áp dụng tại salon bất kỳ trên toàn hệ thống 30Shine</div>
                        </div>
                    </div>
                    <div className="layout__list ">
                        <div className="layout__list-wraper row">
                            <div className="col-xl-3">
                                <a href="">
                                    <div className="layout__list-item">
                                        <div className="layout__item-img">
                                            <img src="./assets/img/care/2-care.png" alt="" />
                                        </div>
                                        <div className="item__content">
                                            <div className="item__title">7 ngày</div>
                                            <div className="item__subTitle">Chỉnh sửa tóc miễn phí</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3">
                                <a href="">
                                    <div className="layout__list-item">
                                        <div className="layout__item-img">
                                            <img src="./assets/img/care/30days-care.jpg" alt="" />
                                        </div>
                                        <div className="item__content">
                                            <div className="item__title">30 ngày</div>
                                            <div className="item__subTitle">Dổi trả hàng miễn phí</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3">
                                <a href="">
                                    <div className="layout__list-item">
                                        <div className="layout__item-img">
                                            <img src="./assets/img/care/3-care.png" alt="" />
                                        </div>
                                        <div className="item__content">
                                            <div className="item__title">15 ngày</div>
                                            <div className="item__subTitle">Bảo hành Uốn Nhuộm</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3">
                                <a href="">
                                    <div className="layout__list-item">
                                        <div className="layout__item-img">
                                            <img src="./assets/img/care/4-care.png" alt="" />
                                        </div>
                                        <div className="item__content">
                                            <div className="item__title">Giảm 20%</div>
                                            <div className="item__subTitle">Nếu chờ đợi quá lâu</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Tìm 30Shine gần nhất --> */}
            <div className="layout layout__blog">
                <div className="container">
                    <a href="">
                        <div className="layout__head">
                            <div>
                                <div className="head__title">Tìm 30Shine gần nhất</div>
                                <div className="head__title head__sub-title">Để xe thuận tiện an toàn, bản đồ dẫn đường chi tiết (79
                                    salon)</div>
                            </div>
                            <div className="layout__head-view-all">
                                <span>Xem tất cả</span>
                                <img src="./assets/img/chevronRight.0f447c60.svg" alt="" />
                            </div>
                        </div>
                    </a>
                    <div className="layout__list ">
                        <div className="layout__list-wraper row">
                            <div className="col-xl-3">
                                <a href="">
                                    <div className="layout__list-item">
                                        <div className="layout__item-img">
                                            <img src="./assets/img/maps/salon-hcm.png" alt="" />
                                        </div>
                                        <div className="item__content">
                                            <div className="item__title">TP.Hồ Chí Minh</div>
                                            <div className="item__subTitle">40 Salon</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3">
                                <a href="">
                                    <div className="layout__list-item">
                                        <div className="layout__item-img">
                                            <img src="./assets/img/maps/salon-hanoi.png" alt="" />
                                        </div>
                                        <div className="item__content">
                                            <div className="item__title">Hà Nội</div>
                                            <div className="item__subTitle">18 Salon</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3">
                                <a href="">
                                    <div className="layout__list-item">
                                        <div className="layout__item-img">
                                            <img src="./assets/img/maps/salon-danang.png" alt="" />
                                        </div>
                                        <div className="item__content">
                                            <div className="item__title">Đà Năng</div>
                                            <div className="item__subTitle">1 Salon</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-3">
                                <a href="">
                                    <div className="layout__list-item">
                                        <div className="layout__item-img">
                                            <img src="./assets/img/maps/salon-other.png" alt="" />
                                        </div>
                                        <div className="item__content">
                                            <div className="item__title">Thành phố khác</div>
                                            <div className="item__subTitle">20 Salon</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );

};

export default Home;
