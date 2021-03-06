import React from "react";
import "../styles/hanhtrinhtoasang.css";

// icon youtube
import iconyt from "../assets/img/Pagehanhtrinhtoasang/icon-youtube.svg";
// image hanh trinh
import hanhtrinh1 from "../assets/img/Pagehanhtrinhtoasang/30shine-lot-xac-thanh-hot-boy.jpg";
import hanhtrinh2 from "../assets/img/Pagehanhtrinhtoasang/30shine-toc-mullet.jpg";
// row 2
import hanhtrinh3 from "../assets/img/Pagehanhtrinhtoasang/30shine-dien-vien-chung-super.jpg";
import hanhtrinh4 from "../assets/img/Pagehanhtrinhtoasang/30shine-rapper-rtee-lot-xac.jpg";
import hanhtrinh5 from "../assets/img/Pagehanhtrinhtoasang/30shine-toc-faux-hawk.jpg";
import hanhtrinh6 from "../assets/img/Pagehanhtrinhtoasang/30shine-dien-vien-hoang-phi-kha.jpg";
// row 3
import hanhtrinh7 from "../assets/img/Pagehanhtrinhtoasang/30shine-thay-doi-ngoai-hinh.jpg";
import hanhtrinh8 from "../assets/img/Pagehanhtrinhtoasang/30shine-nam-sinh-kien-truc-lot-xac.jpg";
import hanhtrinh9 from "../assets/img/Pagehanhtrinhtoasang/30shine-mat-tron-de-dau-nam.jpg";
import hanhtrinh10 from "../assets/img/Pagehanhtrinhtoasang/30shine-mat-tron-nhu-mam-vi-de-sai-kieu-toc.jpg";
// row 4 in column 2
import hanhtrinh11 from "../assets/img/Pagehanhtrinhtoasang/30shine-nam-sinh-dai-hoc-van-hoa.jpg";
import hanhtrinh12 from "../assets/img/Pagehanhtrinhtoasang/30shine-lot-xac-tao-kieu-side-part.jpg";
// row 5 in column 4
import hanhtrinh13 from "../assets/img/Pagehanhtrinhtoasang/30shine-tro-thanh-hot-boy-ru-bo-mai-toc-xu.jpg";
import hanhtrinh14 from "../assets/img/Pagehanhtrinhtoasang/30shine-hieu-xu.jpg";
import hanhtrinh15 from "../assets/img/Pagehanhtrinhtoasang/30shine-cau-sinh-vien-dep-trai-nhu-chu-re.jpg";
import hanhtrinh16 from "../assets/img/Pagehanhtrinhtoasang/30shine-sinh-vien-ngan-hang-lot-xac-voi-side-part.jpg";
import hanhtrinh17 from "../assets/img/Pagehanhtrinhtoasang/30shine-sinh-vien-cao-dang-y-lot-xac.jpg";

const HanhTrinhToaSang = () => {
  return (
    <div className="article">
      <div className="container">
        <div className="article_page-title">H??nh tr??nh t???a s??ng</div>
        <div className="article_page-subtile">
          Qu?? tr??nh t??m ki???m v?? ho??n thi???n b???n th??n l?? b???t t???n. M???i ki???u t??c m???i
          ?????i di???n m???t tinh th???n m???i m?? ng?????i ????n ??ng lu??n h?????ng ?????n ????? t??m th???y
          phi??n b???n t???t nh???t c???a ch??nh m??nh. H??y c??ng l???ng nghe nh???ng c??u chuy???n
          h??nh tr??nh l???t x??c d?????i ????y ????? t??m th???y ni???m c???m h???ng ?????i m???i cho b???n.
        </div>
        {/* article_row 1 */}
        <div className="article_row">
          {/* 1 row 6 col / 12 col => 2 col*/}
          <div className="article_col col-xl-6">
            <a
              href="https://www.youtube.com/watch?v=m23tHreFffA"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh1} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title">
                    B???n sinh vi??n IT l???t x??c th??nh hot boy v???n ng?????i m??
                  </div>
                  <div className="article__body">
                    Ai ngh?? sinh vi??n IT l?? ng?????i xu??? xo??, kh??ng qu?? quan t??m
                    ?????n ngo???i h??nh th?? xem ngay m??n l???t x??c m??i t??c, thay ?????i
                    ngo???i h??nh c???c ???n t?????ng n??y nh??
                  </div>
                  <div className="article__tag">
                    <span>425k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="article_col col-xl-6">
            <a
              href="https://www.youtube.com/watch?v=S2bVJbLCUQk"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh2} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title">
                    B???n sinh vi??n IT l???t x??c th??nh hot boy v???n ng?????i m??
                  </div>
                  <div className="article__body">
                    Ai ngh?? sinh vi??n IT l?? ng?????i xu??? xo??, kh??ng qu?? quan t??m
                    ?????n ngo???i h??nh th?? xem ngay m??n l???t x??c m??i t??c, thay ?????i
                    ngo???i h??nh c???c ???n t?????ng n??y nh??
                  </div>
                  <div className="article__tag">
                    <span>425k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* article_row 2 */}
        <div className="article_row">
          {/* 1 row 4 col */}
          <div className="article_col col-xl-3">
            <a
              href="https://www.youtube.com/watch?v=UYYE-c6LLXo"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh3} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title article__title_sizeM">
                    Di???n vi??n Chung Super l???t x??c ????? chu???n b??? b??? phim s???p ra m???t
                  </div>
                  <div className="article__body article__body_sizeM">
                    Vai di???n m???i ????i h???i Chung Super m???t t???o h??nh m???i. V???i ki???u
                    t??c m???i t???o ki???u n??y, ch???c ch???n anh Chung s??? c?? vai di???n r???t
                    th??nh c??ng
                  </div>
                  <div className="article__tag">
                    <span>425k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="article_col col-xl-3">
            <a
              href="https://www.youtube.com/watch?v=gpWkrf7FzDA"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh4} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title article__title_sizeM">
                    Ki???u t??c m???i cho t??c ph???m solo ?????u tay c???a rapper RTEE
                  </div>
                  <div className="article__body article__body_sizeM">
                    Rapper tr??? RTEE s???p ra m???t t??c ph???m solo ?????u tay. Anh c???n
                    m???t h??nh ???nh m???i, m???t ki???u t??c m???i ????? ????nh d???u b?????c chuy???n
                    m??nh n??y.
                  </div>
                  <div className="article__tag">
                    <span>133k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="article_col col-xl-3">
            <a
              href="https://www.youtube.com/watch?v=BUFSmCsOXeE"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh5} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title article__title_sizeM">
                    Top nh???ng ki???u t??c kinh ??i???n c???a Tronie Ng??, c??? ????? l?? n??ng
                    ?????ng v?? kho??? kho???n
                  </div>
                  <div className="article__body article__body_sizeM">
                    Ngo???i h??nh kh???e kho???n v?? n??ng ?????ng c???a Tronie Ng?? 365Daband
                    c??ng ???????c t??n l??n nh??? ki???u t??c Faux Hawk n??y.
                  </div>
                  <div className="article__tag">
                    <span>80k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="article_col col-xl-3">
            <a
              href="https://www.youtube.com/watch?v=bagH7DpydZ0"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh6} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title article__title_sizeM">
                    Di???n vi??n Ho??ng Phi Kha l???t x??c cho vai di???n m???i
                  </div>
                  <div className="article__body article__body_sizeM">
                    V??? nam th???n ??i???n trai c???a Ho??ng Phi Kha ???????c th??? hi???n si??u
                    n??t qua ki???u t??c n??y. Ch???c ch???n anh Kha s??? c?? nh???ng vai di???n
                    ???n t?????ng v?? ghi d???u trong l??ng kh??n gi???
                  </div>
                  <div className="article__tag">
                    <span>80k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* article_row 3 */}
        <div className="article_row">
          {/* 2 row 4 column */}
          <div className="article_col col-xl-3">
            <a href="" target="__blank">
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh7} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title article__title_sizeM">
                    Thay ?????i ngo???i h??nh, ch??ng trai l???nh l??ng, ??t n??i khi???n c??
                    hoa kh??i rung ?????ng
                  </div>
                  <div className="article__body article__body_sizeM">
                    Hi???u t???ng ngh?? ????n ??ng kh??ng c???n qu?? quan t??m ?????n ngo???i h??nh
                    cho ?????n khi thay ?????i ki???u t??c m???i, nh???ng c?? h???i, m???i quan h???
                    ch???t r???ng m???.
                  </div>
                  <div className="article__tag">
                    <span>5 ph??t ?????c | L??m ?????p</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="article_col col-xl-3">
            <a
              href="https://www.youtube.com/watch?v=MccG8Gf6Oc4"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh8} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title article__title_sizeM">
                    Can ?????m thay ?????i m??i t??c 7 n??m, nam sinh Ki???n Tr??c l???t x??c
                    ki???u t??c m???i c???c ?????p
                  </div>
                  <div className="article__body article__body_sizeM">
                    Anh b???n sinh vi??n Ki???n Tr??c ?????n ??o r???t nhi???u v??? vi???c c???t b???
                    m??i t??c ???? ????? 7 n??m, g???n li???n v???i nhi???u k??? ni???m. V?? anh
                    quy???t ?????nh ph???i thay ?????i.
                  </div>
                  <div className="article__tag">
                    <span>84k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="article_col col-xl-3">
            <a
              href="https://www.youtube.com/watch?v=XBwFe2REmIw"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh9} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title article__title_sizeM">
                    M???t tr??n ????? ki???u t??c n??y nh?? An Nguy???n th?? si??u h???p v?? t??n
                    g????ng m???t
                  </div>
                  <div className="article__body article__body_sizeM">
                    Nhi???u ng?????i ngh?? m???t tr??n kh?? t???o ki???u nh??ng b???n s??? ph???i
                    ngh?? kh??c khi xem clip l???t x??c n??y c???a An Nguy???n ?????y
                  </div>
                  <div className="article__tag">
                    <span>126k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="article_col col-xl-3">
            <a
              href="https://www.youtube.com/watch?v=jSMy1NDt2Og"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh10} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title article__title_sizeM">
                    B???n sinh vi??n ?????i h???c QGHN ?????i ki???u t??c c??i t???o ngay ??i???m
                    nh???n m???i cho g????ng m???t
                  </div>
                  <div className="article__body article__body_sizeM">
                    Nam sinh ?????i h???c QGHN ???? c?? m??n l???t x??c c???c k?? ???n t?????ng v???i
                    ki???u t??c m???i t???i 30Shine. Ai b???o m???t tr??n kh??ng t???o ki???u ?????p
                    ???????c th?? n??n xem video n??y ngay nh??
                  </div>
                  <div className="article__tag">
                    <span>53k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* article_row 4 */}
        <div className="article_row">
          {/* 1 row 6 col / 12 col => 2 col*/}
          <div className="article_col col-xl-6">
            <a
              href="https://www.youtube.com/watch?v=egROLFiv_2U&list=PLbplMzmYtClCBJro6DyptCoufDO2v6P3S&index=86"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh11} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title">
                    Kh??i Nguy??n t??m ngay ???????c m???nh gh??p c??n thi???u k??? t??? khi thay
                    ?????i ki???u t??c n??y
                  </div>
                  <div className="article__body">
                    ???T??? tr?????c ?????n nay, em ch??a bao gi??? quan t??m ?????n ngo???i h??nh
                    cho ?????n khi g???p Ki???u Anh??? - Kh??i Nguy??n chia s???
                  </div>
                  <div className="article__tag">
                    <span>328k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="article_col col-xl-6">
            <a
              href="https://www.youtube.com/watch?v=7xnB6MgNMk0&list=PLbplMzmYtClCBJro6DyptCoufDO2v6P3S&index=84"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh12} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title">
                    ?????t ???? thay ?????i ki???u t??c g?? khi???n c?? h???i ng??y c??ng r???ng m???
                    h??n v???i b???n ???y?
                  </div>
                  <div className="article__body">
                    V?? c??ng vi???c m???i ????i h???i giao ti???p v???i kh??ch h??ng th?????ng
                    xuy??n n??n ?????t ???? quy???t ?????nh ch???n ki???u t??c n??y. N?? gi??p ?????t
                    g??y ???????c ???n t?????ng c???c m???nh v???i ?????i t??c
                  </div>
                  <div className="article__tag">
                    <span>367k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* article_row 5 */}
        <div className="article_row">
          {/* 1 row 4 col */}
          <div className="article_col col-xl-3">
            <a
              href="https://www.youtube.com/watch?v=KMMOsLug8EM&list=PLbplMzmYtClCBJro6DyptCoufDO2v6P3S&index=83"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh13} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title article__title_sizeM">
                    L???t x??c anh b???n nghi???n h???c qu??n m??nh th??nh hotboy m?? c??c b???n
                    n??? ph???i ao ?????c
                  </div>
                  <div className="article__body article__body_sizeM">
                    Qu?? ch?? t??m v??o vi???c h???c n??n Minh Qu???c qu??n m???t vi???c ph???i
                    ch??m s??c b???n th??n. V???a r???i c???u b???n ???? ?????t th??nh t??ch cao
                    trong k?? tuy???n sinh ?????i h???c n??n quy???t ?????nh l???t x??c m??i t??c
                    cho d???u m???c quan tr???ng n??y.
                  </div>
                  <div className="article__tag">
                    <span>1,4M views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="article_col col-xl-3">
            <a
              href="https://www.youtube.com/watch?v=UOC2YhchyVQ&list=PLbplMzmYtClCBJro6DyptCoufDO2v6P3S&index=82"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh14} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title article__title_sizeM">
                    Hi???u X?? t??? b??? bi???t danh sau m??n l???t x??c c???c k?? ngo???n m???c n??y
                  </div>
                  <div className="article__body article__body_sizeM">
                    Hi???u ???? bi???t m??nh ph???i l??m g?? k??? t??? khi g???p Kim Anh. Vi???c
                    ?????u ti??n l?? ph???i b??? ngay h??nh ???nh Hi???u x?? b???ng m???t ki???u t??c
                    m???i
                  </div>
                  <div className="article__tag">
                    <span>191k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="article_col col-xl-3">
            <a
              href="https://www.youtube.com/watch?v=0vbwMJtljrg&list=PLbplMzmYtClCBJro6DyptCoufDO2v6P3S&index=81"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh15} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title article__title_sizeM">
                    Chu???n b??? ????n th??? th??ch m???i, Ng???c Th??? l???t x??c v???i ki???u t??c
                    c???c t??? tin
                  </div>
                  <div className="article__body article__body_sizeM">
                    ????? thu???n l???i xin vi???c sau khi ra tr?????ng, Th??? c???n chu???n b???
                    cho m??nh m???t ngo???i h??nh th???t ch???n chu. C???u sinh vi??n n??m
                    cu???i quy???t ?????nh l???t x??c
                  </div>
                  <div className="article__tag">
                    <span>127k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="article_col col-xl-3">
            <a
              href="https://www.youtube.com/watch?v=bagH7DpydZ0"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh16} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title article__title_sizeM">
                    Qu?? th??ng minh khi l???a ch???n ki???u t??c n??y ????? chu???n b??? cho v???
                    tr?? giao d???ch vi??n
                  </div>
                  <div className="article__body article__body_sizeM">
                    L??m ng??n h??ng y??u c???u m???t ngo???i h??nh l???ch s???, t??? tin v?? h??m
                    nay Ph????ng Nam ???? ?????n 30Shine
                  </div>
                  <div className="article__tag">
                    <span>227k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* 6 */}
        <div className="article_row">
          <div className="article_col col-xl-3">
            <a
              href="https://www.youtube.com/watch?v=yTE2cAs6rmc&list=PLbplMzmYtClCBJro6DyptCoufDO2v6P3S&index=80"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh17} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title article__title_sizeM">
                    B??? suy ngh?? kh??ng quan t??m ?????n ngo???i h??nh, nam sinh C?? Y t???
                    B???ch Mai l???t x??c v???i ki???u t??c m???i
                  </div>
                  <div className="article__body article__body_sizeM">
                    T??? khi l??n ?????i h???c m??nh ???? b??? h???n suy ngh?? ????n ??ng kh??ng c???n
                    quan t??m ?????n ngo???i h??nh. ??i???u ?????u ti??n m??nh thay ?????i ch??nh
                    l?? m??i t??c.
                  </div>
                  <div className="article__tag">
                    <span>174k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HanhTrinhToaSang;
