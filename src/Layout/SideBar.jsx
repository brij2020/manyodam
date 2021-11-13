import React, { useState } from "react";
import { leftSideBarMenu } from "./menuList";
import { useNavigate  } from "react-router-dom"
import  { rKey } from "../utill/"
const Sidebar = (props) => {
    const navigate = useNavigate();
    const [menuList, setMenuList] = useState(leftSideBarMenu);
    const handleClickMenu = (name) => {
    setMenuList(
      menuList.map((li) =>
        li.name === name
          ? { ...li, isActive: !li.isActive }
          : { ...li, isActive: false }
      )
    );
  };
  const handleMouseOverkMenu = (name) => {
    setMenuList(
      menuList.map((li) =>
        li.name === name ? { ...li, isHover: true } : { ...li, isHover: false }
      )
    );
  };
  const handleMouseOutkMenu = () => {
    setMenuList(menuList.map((li) => ({ ...li, isHover: false })));
  };
  const handleTopage = (link) =>{
    navigate(link ?? "/")
  }
  const toEcom = ({ subLink }) => {
    navigate(subLink ?? "/  ")
  }
  return (
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        {menuList.map((sMenu) => (
          <li
            className={`nav-item ${sMenu?.isActive ? "active" : ""} ${
              sMenu?.isHover ? "hover-open" : ""
            }`}
            key={rKey}
            onClick={(e) => handleClickMenu(sMenu?.name)}
            onMouseEnter={(e) => handleMouseOverkMenu(sMenu?.name)}
            onMouseLeave={(e) => handleMouseOutkMenu(sMenu?.name)}
          >
            <a
              className={`nav-link ${
                sMenu.submenu.length > 0 ? "collapsed" : ""
              }`}
              href="javascript:void(0)"
              onClick={ () =>  handleTopage(sMenu?.link) }
              data-toggle="collapse"
              aria-expanded={sMenu?.isActive ? true : false}
            >
              <i className={`${sMenu?.iconClass} menu-icon`}></i>
              <span className="menu-title">{sMenu?.name}</span>
              {sMenu.submenu && sMenu.submenu.length > 0 ? (
                <i class="menu-arrow"></i>
              ) : null}
            </a>
            {sMenu.submenu && sMenu.submenu.length > 0 ? (
              <div
                className={`collapse ${sMenu?.isActive ? " show" : ""}`}
                id="ui-basic"
              >
                <ul className="nav flex-column sub-menu">
                  {sMenu.submenu.map((sub) => (
                    <li class="nav-item" key={rKey}>
                      {" "}
                      <a class="nav-link" href="javascript:void(0)" 
                        onClick={ () => toEcom(sub) }
                      >
                        {sub.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Sidebar;