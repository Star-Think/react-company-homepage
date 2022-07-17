import React, { useEffect } from "react";

const BusinessImageTop = ({ ImageAll }) => {
  useEffect(() => {
    console.log(ImageAll);
  }, []);

  return (
    <>
      <div className="doc-cnt bg">
        <div className="bsns-info">
          <div className="contain">
            <ImageAll />
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessImageTop;
