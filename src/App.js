import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./asset/css/style.css";
import "./asset/css/notosanskr.css";
import "./asset/css/responsive.css";
import "./asset/css/slick.css";
import "./asset/css/swiper.min.css";
import "./asset/css/TitilliumWeb.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
