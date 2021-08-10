import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as CgIcons from "react-icons/cg";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import { SubMenu } from "./SubMenu";
export const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className='sidebar-nav'>
      <nav>
        <Link to='#' className='nav-icon'>
          <CgIcons.CgMoveRight onClick={showSidebar} />
        </Link>
      </nav>
      <div className={`sidebarNav ${sidebar ? "open" : ""}`}>
        <div className='sidebarWrap'>
          <Link to='#' className='nav-icon'>
            <CgIcons.CgMoveLeft onClick={showSidebar} />
          </Link>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};