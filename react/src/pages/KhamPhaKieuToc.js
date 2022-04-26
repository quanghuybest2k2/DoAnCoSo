import React from "react";
import "../styles/khamphakieutoc.css";

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
                  <button type="button" class="discover_btn--active discover_btn ">
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
        </div>
      </div>
    </>
  );
};

export default KhamPhaKieuToc;
