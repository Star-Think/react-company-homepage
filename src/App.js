import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./asset/css/style.css";
import "./asset/css/notosanskr.css";

import "./asset/css/slick.css";
import "./asset/css/swiper.min.css";
import "./asset/css/TitilliumWeb.css";
import "./asset/css/responsive.css";
import React, { useState } from "react";
import CompanyRoute from "./routes/CompanyRoute";
import BusinessRoute from "./routes/BusinessRoute";

export const CommonDispatchContext = React.createContext();

function App() {
  const [subMenuCheck, setSubMenuCheck] = useState(true);
  return (
    <BrowserRouter>
      <CommonDispatchContext.Provider value={{ setSubMenuCheck }}>
        <div className="App">
          <div id="wrapper" className={subMenuCheck ? "" : "menu-opened"}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/company/*" element={<CompanyRoute />} />
              <Route path="/business/*" element={<BusinessRoute />} />
            </Routes>
          </div>
        </div>
      </CommonDispatchContext.Provider>
    </BrowserRouter>
  );
}

export default App;
