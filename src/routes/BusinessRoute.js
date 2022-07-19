/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Route, Routes } from "react-router-dom";
import SubTemplate from "../pages/business/SubTemplate";
import Sub1_1 from "../components/business/sub1/Sub1_1";
import Sub1_2 from "../components/business/sub1/Sub1_2";
import Sub1_3 from "../components/business/sub1/Sub1_3";
import BusinessSub1 from "../components/business/BusinessSub1";
import Sub1 from "../components/business/sub1/Sub1";
import Sub1_4 from "../components/business/sub1/Sub1_4";
import Sub1_5 from "../components/business/sub1/Sub1_5";
import Sub1_6 from "../components/business/sub1/Sub1_6";
import Sub1_7 from "../components/business/sub1/Sub1_7";
import Sub1_8 from "../components/business/sub1/Sub1_8";
import Sub1_9 from "../components/business/sub1/Sub1_9";
import BusinessSub2 from "../components/business/BusinessSub2";
import Sub2 from "../components/business/sub2/Sub2";
import BusinessSub3 from "../components/business/BusinessSub3";
import Sub3 from "../components/business/sub3/Sub3";
import BusinessSub4 from "../components/business/BusinessSub4";
import Sub4 from "../components/business/sub4/Sub4";
import Sub5 from "../components/business/sub5/Sub5";
import Sub6 from "../components/business/sub6/Sub6";

const BusinessRoute = () => {
  const contentObj = {
    title: "내진 준불연 단열일체형 패널",
    content: `단열재와 외장재가 일체화된 패널형 제품으로, 외단열 공법으로 단열
    공간을 절약하여 실내공간 확보에 유리하고, 공사기간을 단축 시킬 수
    있습니다.`,
  };

  const contentObj2 = {
    title: "SATIS(화장실 칸막이)",
    content: `SATIS는 STAR WALL의 기술과 경험을 기반으로 만들어진 화장실 칸막이 시스템으로 지난 10여 년간 학교 및 공공 화장실 문화를 개선해왔습니다.`,
  };

  const contentObj3 = {
    title: "SATIS 항균 불연패널",
    content: `주변과 조화를 이루면서 단조롭지 않은 분위기를 완성하는 인테리어 시스템, 석고보드의 장점과 퍼스탑의 아름다움을 결합하여 빠른 시공성을 보장합니다.`,
  };

  const contentObj4 = {
    title: "PF단열재",
    content: `내열성과 내구성이 우수한 열경화성 수지를 90% 이상의 독립기포율로 (Closed Cell) 발포시킨 고성능 건축용 단열재`,
  };

  const contentObj5 = {
    title: "동화자연마루스쿨",
    content: `친환경 기능성마루 동화자연마루 스쿨은  뛰어난 품질과 가격, 환경친화성으로 전국 학교에서 가장 인기를 끌고 있는 중보행용 마루입니다.`,
  };

  const contentObj6 = {
    title: "동화자연마루 에코스택",
    content: `공간의 용도에 맞는 최상의 흡음기능과 함께 고급 인테리어 마감효과를 동시에 연출할 수 있는 고품격 인테리어 흡음판넬입니다.`,
  };

  return (
    <>
      <Routes>
        <Route
          exact
          path="/sub1"
          element={
            <SubTemplate
              contentObj={contentObj}
              subTabCheck={true}
              BusinessSubImage={BusinessSub1}
              Content={Sub1}
            />
          }
        />
        <Route
          exact
          path="/sub1/1"
          element={
            <SubTemplate
              contentObj={contentObj}
              subTabCheck={true}
              subMidTop={1}
              BusinessSubImage={BusinessSub1}
              Content={Sub1_1}
            />
          }
        />
        <Route
          exact
          path="/sub1/2"
          element={
            <SubTemplate
              contentObj={contentObj}
              subTabCheck={true}
              subMidTop={2}
              BusinessSubImage={BusinessSub1}
              Content={Sub1_2}
            />
          }
        />
        <Route
          exact
          path="/sub1/3"
          element={
            <SubTemplate
              contentObj={contentObj}
              subTabCheck={true}
              subMidTop={3}
              BusinessSubImage={BusinessSub1}
              Content={Sub1_3}
            />
          }
        />
        <Route
          exact
          path="/sub1/4"
          element={
            <SubTemplate
              contentObj={contentObj}
              subTabCheck={true}
              subMidTop={4}
              BusinessSubImage={BusinessSub1}
              Content={Sub1_4}
            />
          }
        />
        <Route
          exact
          path="/sub1/5"
          element={
            <SubTemplate
              contentObj={contentObj}
              subTabCheck={true}
              subMidTop={5}
              BusinessSubImage={BusinessSub1}
              Content={Sub1_5}
            />
          }
        />
        <Route
          exact
          path="/sub1/6"
          element={
            <SubTemplate
              contentObj={contentObj}
              subTabCheck={true}
              subMidTop={6}
              BusinessSubImage={BusinessSub1}
              Content={Sub1_6}
            />
          }
        />
        <Route
          exact
          path="/sub1/7"
          element={
            <SubTemplate
              contentObj={contentObj}
              subTabCheck={true}
              subMidTop={7}
              BusinessSubImage={BusinessSub1}
              Content={Sub1_7}
            />
          }
        />
        <Route
          exact
          path="/sub1/8"
          element={
            <SubTemplate
              contentObj={contentObj}
              subTabCheck={true}
              subMidTop={8}
              BusinessSubImage={BusinessSub1}
              Content={Sub1_8}
            />
          }
        />
        <Route
          exact
          path="/sub1/9"
          element={
            <SubTemplate
              contentObj={contentObj}
              subTabCheck={true}
              subMidTop={9}
              BusinessSubImage={BusinessSub1}
              Content={Sub1_9}
            />
          }
        />

        <Route
          path="/sub2"
          element={
            <SubTemplate
              topActive={2}
              contentObj={contentObj2}
              BusinessSubImage={BusinessSub2}
              Content={Sub2}
            />
          }
        />

        <Route
          path="/sub3"
          element={
            <SubTemplate
              topActive={3}
              contentObj={contentObj3}
              BusinessSubImage={BusinessSub3}
              Content={Sub3}
            />
          }
        />

        <Route
          path="/sub4"
          element={
            <SubTemplate
              topActive={4}
              contentObj={contentObj4}
              BusinessSubImage={BusinessSub4}
              Content={Sub4}
            />
          }
        />

        <Route
          path="/sub5"
          element={
            <SubTemplate
              topActive={5}
              contentObj={contentObj5}
              imageTopCheck={false}
              Content={Sub5}
            />
          }
        />

        <Route
          path="/sub6"
          element={
            <SubTemplate
              topActive={6}
              contentObj={contentObj6}
              imageTopCheck={false}
              Content={Sub6}
            />
          }
        />
      </Routes>
    </>
  );
};

export default BusinessRoute;
