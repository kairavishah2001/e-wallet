import React, { useState } from 'react'
import * as CgIcons from "react-icons/cg";
import * as IoIcons from "react-icons/io";
import * as HiIcons from 'react-icons/hi'
import * as FaIcons from 'react-icons/fa'
import * as FiIcons from "react-icons/fi";
import { SidebarData } from "./SidebarData";
import { SubMenu } from "./SubMenu";
import './SidebarTwo.css'

export const SidebarTwo = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
           <nav className={`sidebarTwo ${sidebar ? "open" : ""}`}>
           <li className="sidebarItem sidebarAction">
             <span className="sidebarTwoLink sidebarActionButton">
             {sidebar ? (<CgIcons.CgMoveLeft size={30} onClick={showSidebar} />):
             (<CgIcons.CgMoveRight size={30} onClick={showSidebar} />)}
             <span className={!sidebar ? 'd-none' : ''}><span className="blue-text">Website</span><span className="white-text">Name</span></span>

             </span>
             </li>
             <li className="sidebarUser  sidebarItem">
             <span className="sidebarTwoLink sidebarActionButton">



             </span>
             </li>
            <ul className="sidebarNavTwo">
             {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} isOpen={sidebar}/>;
             })}
            </ul>

           </nav>
        </>
    )
}