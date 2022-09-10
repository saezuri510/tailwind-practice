import React from "react";
import { NavLink } from "react-router-dom";

const activeClassNameStyle =
    "text-red-600 flex flex-col items-center cursor-pointer group w-12";
const classNameStyle = "flex flex-col items-center cursor-pointer group w-12";

function NavItem({ Icon, title }) {
    return (
        <NavLink
            to={title.toLowerCase()}
            className={({ isActive }) =>
                isActive ? activeClassNameStyle : classNameStyle
            }
        >
            <Icon size={30} className="mb-1" />
            <p className="font-semibold opacity-0 group-hover:opacity-100">
                {title}
            </p>
        </NavLink>
    );
}

export default NavItem;
