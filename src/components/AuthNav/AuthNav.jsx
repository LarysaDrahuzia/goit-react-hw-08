import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './AuthNav.module.css';

const getLinkStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AuthNav = () => {
  return (
    <div>
      <NavLink className={getLinkStyles} to="/register">
        Register
      </NavLink>
      <NavLink className={getLinkStyles} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
