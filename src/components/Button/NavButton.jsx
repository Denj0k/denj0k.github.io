import classes from "./Button.module.css";
import { NavLink, useLocation } from "react-router-dom";

export default function NavButton({ children, to, ...props }) {
  const location = useLocation();
  const isActive = (path) => location.pathname == path;
  return (
    <button
      {...props}
      className={
        isActive(to) ? `${classes.button} ${classes.active}` : classes.button
      }
    >
      <NavLink to={to}>{children}</NavLink>
    </button>
  );
}
