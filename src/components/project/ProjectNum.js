import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProjectNum = ({ pageNumObj, type }) => {
  const navigate = useNavigate();
  const [numTag, setNumTag] = useState([]);

  const numMake = () => {
    let list = [];
    for (
      let iCount = pageNumObj.startPage;
      iCount <= pageNumObj.endPage;
      iCount++
    ) {
      if (iCount === pageNumObj.page) {
        list.push(<strong>{pageNumObj.page}</strong>);
      } else {
        list.push(
          <a
            href
            onClick={() => {
              navigate(`/project${parseInt(type) >= 0 ? "/" + type : ""}`, {
                state: { page: iCount },
              });
            }}
            title={iCount}
          >
            {iCount}
          </a>
        );
      }
    }
    setNumTag(list);
  };

  useEffect(() => {
    numMake();
  }, [pageNumObj]);

  return (
    <>
      <div className="paginate">
        {pageNumObj.startPage > 1 ? (
          <a
            className="direction first disabled"
            href
            title="처음페이지"
            onClick={() => {
              navigate(`/project${parseInt(type) >= 0 ? "/" + type : ""}`, {
                state: { page: 1 },
              });
            }}
          >
            <span>처음페이지</span>
          </a>
        ) : null}
        {pageNumObj.blockBegin > 1 ? (
          <a
            className="direction prev"
            href
            title="이전페이지"
            onClick={() => {
              navigate(`/project${parseInt(type) >= 0 ? "/" + type : ""}`, {
                state: { page: pageNumObj.blockBegin - 1 },
              });
            }}
          >
            <span>이전페이지</span>
          </a>
        ) : null}
        {numTag.map((it) => {
          return it;
        })}
        {pageNumObj.blockEnd < pageNumObj.totalPage ? (
          <a
            className="direction next"
            href
            title="다음페이지"
            onClick={() => {
              navigate(`/project${parseInt(type) >= 0 ? "/" + type : ""}`, {
                state: { page: pageNumObj.blockEnd + 1 },
              });
            }}
          >
            <span>다음페이지</span>
          </a>
        ) : null}
        {pageNumObj.endPage < pageNumObj.totalPage ? (
          <a
            className="direction next"
            href
            title="마지막페이지"
            onClick={() => {
              navigate(`/project${parseInt(type) >= 0 ? "/" + type : ""}`, {
                state: { page: pageNumObj.totalPage },
              });
            }}
          >
            <span>마지막페이지</span>
          </a>
        ) : null}
      </div>
    </>
  );
};
ProjectNum.defaultProps = {
  pageNumObj: {},
};

export default ProjectNum;
