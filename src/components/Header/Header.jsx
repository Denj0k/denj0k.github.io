import "./Header.css";
import Button from "../Button/Button";

export default function Header({ navBtnOnClick, page }) {
  return (
    <header>
      <div>
        <h3>Denj0k</h3>
      </div>
      <div className="nav-btns-box">
        <Button isActive={page == "main"} onClick={() => navBtnOnClick("main")}>
          Главная
        </Button>
        <Button
          isActive={page == "useful"}
          onClick={() => navBtnOnClick("useful")}
        >
          Полезное для уника
        </Button>
        <Button
          isActive={page == "viteInitialPage"}
          onClick={() => navBtnOnClick("viteInitialPage")}
        >
          Базовое окно
        </Button>
      </div>
    </header>
  );
}
