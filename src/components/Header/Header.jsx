import "./Header.css";
import NavButton from "../Button/NavButton";

export default function Header({ navBtnOnClick, page }) {
  return (
    <header>
      <div>
        <h3>Denj0k</h3>
      </div>
      <div className="nav-btns-box">
        <NavButton to="/">Main</NavButton>
        <NavButton to="/helpful">Helpful</NavButton>
        <NavButton to="/vite-page">Vite page</NavButton>
      </div>
    </header>
  );
}
