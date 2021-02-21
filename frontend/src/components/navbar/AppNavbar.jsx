import React from "react";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import "./navbar.css";

const AppNavbar = ({ toggleTheme }) => {
  return (
    <React.Fragment>
      <div className="desktop">
        <DesktopNavbar toggleTheme={toggleTheme}/>
      </div>
      <div className="mobile">
        <MobileNavbar toggleTheme={toggleTheme}/>
      </div>
    </React.Fragment>
  );
};

export default AppNavbar;
