import React, { useEffect } from "react";
import { MapMarker, Map } from "react-kakao-maps-sdk";

const ContentMap = ({ title, locName, lan, lat }) => {
  return (
    <div className="local-cnt">
      <div className="blt-tit">{title}</div>
      <div className="local-map">
        <Map
          className="root_daum_roughmap root_daum_roughmap_landing kmap1"
          // center={{ lat: 37.48947299639476, lng: 126.7241710017216 }}
          center={{ lat: lan, lng: lat }}
        >
          <MapMarker position={{ lat: lan, lng: lat }}>
            <div style={{ padding: "5px", color: "#000", position: "unset" }}>
              부평역 <br />
              <a
                href={`https://map.kakao.com/link/map/${locName},${lan},${lat}`}
                style={{ color: "blue" }}
                target="_blank"
                rel="noreferrer"
              >
                큰지도보기
              </a>{" "}
              <a
                href={`https://map.kakao.com/link/map/${locName},${lan},${lat}`}
                style={{ color: "blue" }}
                target="_blank"
                rel="noreferrer"
              >
                길찾기
              </a>
            </div>
          </MapMarker>
        </Map>
      </div>
      <div className="local-info">
        <div className="col">
          <div className="box">
            <div className="cell ico">
              <img src="/images/sub/ico_adr.png" alt="" />
            </div>
            <div className="cell txt">
              <dl>
                <dt>ADDRESS</dt>
                <dd>주소</dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="box">
            <div className="cell ico">
              <img src="/images/sub/ico_tel.png" alt="" />
            </div>
            <div className="cell txt">
              <dl>
                <dt>TEL</dt>
                <dd>02-000-0000</dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="box">
            <div className="cell ico">
              <img src="/images/sub/ico_fax.png" alt="" />
            </div>
            <div className="cell txt">
              <dl>
                <dt>FAX</dt>
                <dd>02-000-0000</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMap;
