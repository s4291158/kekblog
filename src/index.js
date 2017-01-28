import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Content from "./content/content";
import Nav from "./nav/nav";
import injectTapEventPlugin from "react-tap-event-plugin";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
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
