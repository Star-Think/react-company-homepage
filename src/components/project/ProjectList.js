import React, { useEffect, useReducer, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { projectList } from "../../utils/ProjectData";
import ProjectItem from "./ProjectItem";
import ProjectNum from "./ProjectNum";

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    default:
      return state;
  }
};

const ProjectList = ({ type }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const page = location.state !== null ? location.state.page : 1;
  const [data, dispatch] = useReducer(reducer, []);
  const [pageNumObj, setPageNumObj] = useState();

  const getData = () => {
    const pageParam = parseInt(page) ? parseInt(page) : 1;
    const row = 12;

    const fIndex = (pageParam - 1) * (row + 1);
    const eIndex = fIndex + row;

    const dataList = projectList.filter((it) => {
      if (parseInt(type) >= 0) {
        return parseInt(type) === it.type;
      } else {
        return 1;
      }
    });
    pageNumMake(pageParam, row, dataList.length);
    dispatch({ type: "INIT", data: [...dataList.slice(fIndex, eIndex)] });
  };

  const pageNumMake = (pageParam, countList, totalCount) => {
    const countPage = 9;

    let totalPage = totalCount / countList;

    if (totalCount % countList > 0) {
      totalPage++;
    }

    if (totalPage < pageParam) {
      pageParam = totalPage;
    }

    let startPage = parseInt((pageParam - 1) / countPage) * countPage + 1;

    let endPage = startPage + countPage - 1;

    if (endPage > totalPage) {
      endPage = totalPage;
    }

    let curBlock = parseInt(Math.floor((pageParam - 1) / countPage) + 1);
    // *현재 페이지 블록의 시작, 끝 번호 계산
    let blockBegin = (curBlock - 1) * countPage + 1;
    // 페이지 블록의 끝번호
    let blockEnd = blockBegin + countPage - 1;

    setPageNumObj({
      page: pageParam,
      countList,
      totalCount,
      countPage,
      totalPage,
      startPage,
      endPage,
      blockBegin,
      blockEnd,
    });
  };

  useEffect(() => {
    getData();
  }, [type, page]);

  return (
    <>
      <div className="project-list">
        <ul>
          {data.map((pData) => {
            return <ProjectItem key={pData.idx} project={pData} />;
          })}
        </ul>
      </div>
      <ProjectNum pageNumObj={pageNumObj} type={type} />
    </>
  );
};

export default ProjectList;
