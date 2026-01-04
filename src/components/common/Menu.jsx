import React from 'react'

import { Link } from "react-router-dom";

const Menu = ({ link, menuName, className }) => {
  return (
    <li className={`text-lg font-pop font-semibold ${className}`}>
      <Link
        to={link}
        className="hover:text-primary transition-all duration-300"
      >
        {menuName}
      </Link>
    </li>
  );
};

export default Menu;
