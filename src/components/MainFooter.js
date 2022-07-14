import React from "react";

const MainFooter = () => {
  return (
    <div id="footer">
      <h2 className="hide">하단영역</h2>
      <div className="contain">
        <div className="foot-logo ff-nf">(주) 별생각</div>
        <div className="foot-info">
          <address>
            <span>주소 </span>
            <span>TEL : 00-000-0000</span>
            <span>FAX : 00-000-0000</span>
            <div className="copy">
              Copyright &copy; 2022 by (주) 별생각. All rights reserved.
            </div>
            <span style={{ opacity: 0 }}>
              <a
                href
                onClick={(e) => e.preventDefault}
                target="_blank"
                style={{ opacity: 0 }}
              >
                홈페이지제작
              </a>
              <a
                href
                onClick={(e) => e.preventDefault}
                target="_blank"
                style={{ opacity: 0 }}
              >
                website.co.kr
              </a>
            </span>
          </address>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
