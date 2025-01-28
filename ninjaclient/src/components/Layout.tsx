import React from "react";
import Nav from "./Nav.tsx";
import "../css/layout.css"

const Layout = (props: any) => {

  return (
    <div className="layout-container">
      <Nav />
      <main className="main-container">{props.children}</main>
    </div>
  );
};

export default Layout;
