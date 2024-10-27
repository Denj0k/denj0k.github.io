import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import DefaultVitePage from "./components/DefaultVitePage/DefaultVitePage";

function App() {
  const [page, setPage] = useState("viteInitialPage");

  function navBtnOnClick(type) {
    setPage(type);
  }

  return (
    <>
      <Header page={page} navBtnOnClick={navBtnOnClick} />
      <main>{page == "viteInitialPage" && <DefaultVitePage />}</main>
    </>
  );
}

export default App;
