import React from "react";

const BusinessImageItem = ({ imageSrc, title, content }) => {
  return (
    <>
      <div className="col">
        <div className="ico">
          <img src={imageSrc} alt="" />
        </div>
        <div className="tit">{title}</div>
        <div className="txt">
          {content.split("\n").map((txt) => (
            <>
              {txt}
              <br />
            </>
          ))}
        </div>
      </div>
    </>
  );
};
BusinessImageItem.defaultProps = {
  content: "",
};

export default BusinessImageItem;
