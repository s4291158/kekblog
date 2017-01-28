import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Content from "./content/content";
import Nav from "./nav/nav";
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

ReactDOM.render(
  (
    <div>
      <div id="nav"/>
      <div id="content"/>
    </div>
  ),
  document.getElementById('root')
);

ReactDOM.render(
  <Nav/>,
  document.getElementById('nav')
);

ReactDOM.render(
  <Content/>,
  document.getElementById('content')
);
