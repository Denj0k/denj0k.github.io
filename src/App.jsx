import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import VitePage from "./pages/VitePage/VitePage";
import HelpfulPage from "./pages/HelpfulPage/HelpfulPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  const [page, setPage] = useState("main");

  function navBtnOnClick(type) {
    setPage(type);
  }

  return (
    <BrowserRouter>
      <Header page={page} navBtnOnClick={navBtnOnClick} />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/helpful" element={<HelpfulPage />} />
          <Route path="/vite-page" element={<VitePage />} />
        </Routes>
        {/* {page == "vitePage" && <VitePage />}
        {page == "helpful" && <HelpfulPage />} */}
      </main>
    </BrowserRouter>
  );
}

export default App;
