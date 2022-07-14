import React, { useContext, useState } from "react";
import { CommonDispatchContext } from "../App";
import { sub_menu_list } from "../utils/HeaderData";

const MainSideBar = () => {
  const { setSubMenuCheck } = useContext(CommonDispatchContext);

  const [subMenuId, setSubMenuId] = useState("");

  const subMenuClickHandle = (id) => {
    if (id !== subMenuId) {
      setSubMenuId(id);
    } else {
      setSubMenuId("");
    }
  };

  return (
    <>
      <div id="menu" className="mobile-navigation">
        <nav className="nav-menu">
          <ul>
            {sub_menu_list.map((data) => {
              return (
                <li
                  key={data.id}
                  className={`${data.id} arrow ${
                    subMenuId === data.id ? "active" : ""
                  }`}
                  onClick={() => subMenuClickHandle(data.id)}
                >
                  <a href onClick={(e) => e.preventDefault}>
                    {data.textName}
                  </a>
                  <div
                    className={`submenu ${
                      subMenuId === data.id ? "submenu_active" : ""
                    }`}
                  >
                    <ul>
                      {data.sub.map((sData, idx) => {
                        return (
                          <li key={idx}>
                            <a href onClick={(e) => e.preventDefault}>
                              {sData.subTextName}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
        <a
          href
          className="menu-close"
          onClick={() => {
            document.body.style.overflow = "";
            setSubMenuCheck(true);
          }}
        >
          Close
        </a>
      </div>
      <div className="mobile-overlay"></div>
    </>
  );
};

export default MainSideBar;
