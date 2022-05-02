import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";
// images
import Logo1 from "../assets/img/logo1.jpg";
import Star from "../assets/img/30shine.38a2a504.svg";

const Header = () => {
  const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const ctaClickHandler = () => {
    menuToggleHandler();
    history.push("/login");
  };

  return (
    // header start
    <section class="new__header">
      <div class="header__container">
        <div class="header__navbar">
          {/* logo */}
          <div class="header__navbar-logo">
            <Link to="/">
              <a href="">
                <img src={Logo1} alt="" class="header__nav-logo" />
              </a>
            </Link>
          </div>
          {/* menu list */}
          <div class="header__navbar-menu">
            {/* <!-- .... resonsive ...--> */}
            <ul class="header__menu-list">
              <li class="header__menu-item">
                <Link to="/trai-nghiem-dich-vu" onClick={menuToggleHandler}>
                  <a href="">
                    <div class="header__menu-text">TRẢI NGHIỆM DỊCH VỤ</div>
                  </a>
                </Link>
              </li>
              <li class="header__menu-item">
                <Link to="/hanh-trinh-toa-sang" onClick={menuToggleHandler}>
                  <a href="">
                    <div class="header__menu-text">HÀNH TRÌNH TỎA SÁNG</div>
                  </a>
                </Link>
              </li>
              <li class="header__menu-item">
                <Link to="/kham-pha-kieu-toc" onClick={menuToggleHandler}>
                  <a href="">
                    <div class="header__menu-text">KHÁM PHÁ KIỂU TÓC</div>
                  </a>
                </Link>
              </li>
              <li class="header__menu-item">
                <Link to="#" onClick={menuToggleHandler}>
                  <a href="https://shop.30shine.com/" target="_blank">
                    <div class="header__menu-text">30SHINE SHOP</div>
                  </a>
                </Link>
              </li>
              <li class="header__menu-item">
                <Link to="/tuyen-dung" onClick={menuToggleHandler}>
                  <a href="">
                    <div class="header__menu-text">TUYỂN DỤNG</div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          {/* <!-- login --> */}

          <div class="header__navbar-action">
            <div class="header__login-btn">
              <button onClick={ctaClickHandler}>
                <img src={Star} alt="" />
                <span>ĐĂNG NHẬP</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
