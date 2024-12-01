import { useState, Fragment } from "react";
import reactLogo from "../../assets/react.svg";
// import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import classes from "./MainPage.module.css";

export default function MainPage() {
  const [count, setCount] = useState(0);
  return <div className={classes.main}>Пустовато</div>;
}
